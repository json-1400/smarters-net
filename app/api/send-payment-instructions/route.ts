import { NextResponse } from 'next/server';
import { createServerSideClient, createAdminClient } from '@/lib/supabase';
import { sendPaymentInstructionsEmail } from '@/lib/resend';

// Plan Price Map (in cents) aligned with Pricing cards
const PLAN_PRICES: Record<string, number> = {
  Starter: 1999, // 19.99 €
  Confort: 2999, // 29.99 €
  Premium: 3999, // 39.99 €
  Pack2: 5999,   // 59.99 €
};

interface RequestPayload {
  planType?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  paymentMethod?: string;
}

export async function POST(request: Request) {
  const supabase = createServerSideClient();
  const adminSupabase = createAdminClient();

  try {
    const payload: unknown = await request.json();

    if (!payload || typeof payload !== 'object') {
      return NextResponse.json({ error: 'Payload de requête invalide.' }, { status: 400 });
    }

    const {
      planType,
      fullName,
      email,
      phone,
      paymentMethod = 'paypal',
    } = payload as RequestPayload;

    if (!planType || !PLAN_PRICES[planType]) {
      return NextResponse.json({ error: 'Formule d\'abonnement invalide sélectionnée.' }, { status: 400 });
    }

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
          { error: 'Veuillez saisir une adresse email valide pour recevoir vos identifiants.' },
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

    // 3. Create pending subscription record using admin client (bypasses RLS)
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

    // 4. Create pending payment record
    const { data: newPayment, error: insertPayError } = await adminSupabase
      .from('payments')
      .insert({
        user_id: userId,
        subscription_id: newSub.id,
        amount: priceCents,
        currency: 'eur',
        status: 'pending_instruction',
        payment_method: paymentMethod || 'paypal',
      })
      .select()
      .single();

    if (insertPayError || !newPayment) {
      console.error('Payment insertion error:', insertPayError);
      await adminSupabase.from('subscriptions').delete().eq('id', newSub.id);
      return NextResponse.json({ error: 'Échec de la création du paiement.' }, { status: 500 });
    }

    // 5. Fetch manual payment instructions for specified plan
    const { data: instructions } = await adminSupabase
      .from('payment_instructions')
      .select('*')
      .eq('plan_type', planType)
      .maybeSingle();

    const bankDetails = instructions?.bank_details || 'Bank: EuroBank | IBAN: FR76 3000 1234 5678 9012 345';
    const whatsappNum = instructions?.whatsapp_number || '+33612345678';

    // 6. Fire off automated instruction email via Resend
    let emailSuccess = false;
    try {
      const emailResult = await sendPaymentInstructionsEmail(
        customerEmail,
        customerName,
        planType,
        priceCents,
        bankDetails,
        whatsappNum,
        instructions?.instruction_text
      );
      emailSuccess = emailResult?.success ?? false;
    } catch (err: unknown) {
      console.error('Resend email error:', err instanceof Error ? err.message : err);
    }

    // If successful email, transition payment status to 'pending_confirmation'
    if (emailSuccess) {
      await adminSupabase
        .from('payments')
        .update({ status: 'pending_confirmation' })
        .eq('id', newPayment.id);
    }

    return NextResponse.json({
      success: true,
      subscriptionId: newSub.id,
      paymentId: newPayment.id,
      instructions: {
        bankDetails,
        whatsappNumber: whatsappNum,
      },
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Une erreur interne est survenue.';
    console.error('Send payment instructions route error:', errorMsg);
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
