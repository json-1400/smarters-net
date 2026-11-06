import { NextResponse } from 'next/server';
import { createServerSideClient, createAdminClient } from '@/lib/supabase';
import {
  sendOrderConfirmationEmail,
  sendAdminOrderNotificationEmail,
} from '@/lib/resend';
import { placeOrderSchema } from '@/lib/validations';
import type { PlanType } from '@/types/database';

// Plan Price Map (in cents) aligned with Pricing cards
const PLAN_PRICES: Record<PlanType, number> = {
  Starter: 1999, // 19.99 €
  Confort: 2999, // 29.99 €
  Premium: 4999, // 49.99 €
  Pack2: 6999,   // 69.99 €
  Pack3: 10000,  // 100.00 €
  Pack4: 12000,  // 120.00 €
};

const PLAN_NAMES: Record<PlanType, string> = {
  Starter: 'Abonnement IPTV 3 Mois',
  Confort: 'Abonnement IPTV 6 Mois',
  Premium: 'Abonnement IPTV 12 Mois VIP',
  Pack2: 'Abonnement Pack Duo (2 Écrans)',
  Pack3: 'Abonnement Pack Trio (3 Écrans)',
  Pack4: 'Abonnement Pack Maxi (4 Écrans)',
};

export async function POST(request: Request) {
  const supabase = createServerSideClient();
  const adminSupabase = createAdminClient();

  try {
    const rawPayload: unknown = await request.json();
    const parsed = placeOrderSchema.safeParse(rawPayload);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0]?.message || 'Payload de requête invalide.';
      return NextResponse.json({ error: firstIssue }, { status: 400 });
    }

    const { planType, fullName, email, phone } = parsed.data;
    const priceCents = PLAN_PRICES[planType];

    // Check if user is currently authenticated
    const { data: { session } } = await supabase.auth.getSession();

    let userId: string;
    let customerEmail: string;
    let customerName: string;

    if (session?.user) {
      // 1. Authenticated checkout
      userId = session.user.id;
      customerEmail = session.user.email || (email ? email.trim().toLowerCase() : '');
      
      const { data: profile } = await adminSupabase
        .from('profiles')
        .select('full_name, phone')
        .eq('id', userId)
        .maybeSingle();

      customerName = profile?.full_name || fullName?.trim() || 'Client IPTV';

      if (phone && !profile?.phone) {
        await adminSupabase
          .from('profiles')
          .update({ phone: phone.trim() })
          .eq('id', userId);
      }
    } else {
      // 2. Guest checkout (No authentication gate)
      if (!email || typeof email !== 'string' || !email.includes('@')) {
        return NextResponse.json(
          { error: 'Veuillez saisir une adresse email valide pour recevoir votre confirmation.' },
          { status: 400 }
        );
      }

      if (!fullName || typeof fullName !== 'string' || fullName.trim().length === 0) {
        return NextResponse.json(
          { error: 'Veuillez renseigner votre nom complet pour la facturation.' },
          { status: 400 }
        );
      }

      customerEmail = email.trim().toLowerCase();
      customerName = fullName.trim();

      // Check if user already exists in auth
      const { data: userList } = await adminSupabase.auth.admin.listUsers({ perPage: 1000 });
      const existingUser = userList?.users?.find(
        (u) => u.email?.toLowerCase() === customerEmail
      );

      if (existingUser) {
        userId = existingUser.id;
        // Ensure profile exists / update phone
        await adminSupabase.from('profiles').upsert({
          id: userId,
          full_name: customerName,
          phone: phone ? phone.trim() : null,
          country_code: 'FR',
        });
      } else {
        // Create user in Supabase auth system without requiring immediate password
        const { data: newUser, error: createError } = await adminSupabase.auth.admin.createUser({
          email: customerEmail,
          email_confirm: true,
          user_metadata: {
            full_name: customerName,
            phone: phone ? phone.trim() : null,
          },
        });

        if (createError || !newUser?.user) {
          console.error('Guest user creation failed:', createError);
          return NextResponse.json(
            { error: 'Erreur lors de la création du compte client pour votre commande.' },
            { status: 500 }
          );
        }

        userId = newUser.user.id;

        // Ensure profile record exists
        await adminSupabase.from('profiles').upsert({
          id: userId,
          full_name: customerName,
          phone: phone ? phone.trim() : null,
          country_code: 'FR',
        });
      }
    }

    // 3. Create subscription record using admin client (bypasses RLS)
    const { data: newSub, error: insertSubError } = await adminSupabase
      .from('subscriptions')
      .insert({
        user_id: userId,
        plan_type: planType,
        status: 'pending_payment',
      })
      .select()
      .single();

    if (insertSubError || !newSub) {
      console.error('Subscription insertion error:', insertSubError);
      return NextResponse.json({ error: 'Échec de la création de la souscription.' }, { status: 500 });
    }

    // 4. Create order record (no payment collected at checkout)
    const { data: newPayment, error: insertPayError } = await adminSupabase
      .from('payments')
      .insert({
        user_id: userId,
        subscription_id: newSub.id,
        amount: priceCents,
        currency: 'eur',
        status: 'pending_instruction',
        payment_method: 'other',
      })
      .select()
      .single();

    if (insertPayError || !newPayment) {
      console.error('Order insertion error:', insertPayError);
      await adminSupabase.from('subscriptions').delete().eq('id', newSub.id);
      return NextResponse.json({ error: 'Échec de la création de la commande.' }, { status: 500 });
    }

    const orderRef = `SP-${String(newPayment.id).slice(0, 8).toUpperCase()}`;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://smarterspro12.net';
    const orderDate = new Date().toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    const emailPayload = {
      customerName,
      customerEmail,
      customerPhone: phone ? phone.trim() : null,
      planName: PLAN_NAMES[planType] || planType,
      planType,
      amountCents: priceCents,
      orderRef,
      orderDate,
      siteUrl,
    };

    // 5. Send customer confirmation email & admin notification email in parallel via Resend
    await Promise.allSettled([
      sendOrderConfirmationEmail(emailPayload),
      sendAdminOrderNotificationEmail(emailPayload),
    ]);

    return NextResponse.json({
      success: true,
      subscriptionId: newSub.id,
      orderRef,
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Une erreur interne est survenue.';
    console.error('Place order route error:', errorMsg);
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
