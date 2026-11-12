import { NextResponse } from 'next/server';
import { createServerSideClient, createAdminClient } from '@/lib/supabase';
import { sendSubscriptionActivatedEmail } from '@/lib/resend';
import { adminPaymentActionSchema } from '@/lib/validations';
import type { Payment, PlanType, Profile } from '@/types/database';

const PLAN_DURATION_MONTHS: Record<PlanType, number> = {
  Starter: 3,
  Confort: 6,
  Premium: 12,
  Pack2: 12,
  Pack3: 12,
  Pack4: 12,
};

interface PaymentWithRelations extends Payment {
  user?: Profile | null;
}

export async function POST(request: Request) {
  const supabase = createServerSideClient();

  try {
    // 1. Authenticate admin user
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) {
      return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });
    }

    // Verify admin role in profiles
    const { data: adminProfile } = await supabase
      .from('profiles')
      .select('is_admin')
      .eq('id', session.user.id)
      .single();

    if (!adminProfile?.is_admin) {
      return NextResponse.json({ error: 'Accès refusé. Droits administrateur requis.' }, { status: 403 });
    }

    // 2. Parse request payload with Zod
    const rawPayload: unknown = await request.json();
    const parsed = adminPaymentActionSchema.safeParse(rawPayload);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0]?.message || 'Identifiant de paiement requis.';
      return NextResponse.json({ error: firstIssue }, { status: 400 });
    }

    const targetId = parsed.data.orderId || parsed.data.paymentId;
    const notes = parsed.data.notes;
    if (!targetId) {
      return NextResponse.json({ error: 'Identifiant requis.' }, { status: 400 });
    }

    const adminSupabase = createAdminClient();
    const now = new Date().toISOString();
    const expiryDate = new Date();

    // 1. Try to find in `orders` table first
    const { data: order } = await adminSupabase
      .from('orders')
      .select('*, profile:profiles(*)')
      .eq('id', targetId)
      .maybeSingle();

    let targetEmail = '';
    let clientName = '';
    let planType: PlanType = 'Starter';
    let expiryIso = '';

    if (order) {
      if (order.status === 'paid') {
        return NextResponse.json({ error: 'Cette commande a déjà été validée.' }, { status: 400 });
      }

      planType = (order.plan_type as PlanType) || 'Starter';
      const monthsToAdd = PLAN_DURATION_MONTHS[planType] ?? 3;
      expiryDate.setMonth(expiryDate.getMonth() + monthsToAdd);
      expiryIso = expiryDate.toISOString();
      targetEmail = order.customer_email;
      clientName = order.customer_name;

      // Mark order as paid
      const { error: orderUpdateErr } = await adminSupabase
        .from('orders')
        .update({
          status: 'paid',
          confirmed_at: now,
          notes: typeof notes === 'string' && notes.trim() ? notes.trim() : order.notes,
        })
        .eq('id', order.id);

      if (orderUpdateErr) {
        return NextResponse.json({ error: 'Échec de la validation de la commande.' }, { status: 500 });
      }

      // CREATE subscription record NOW (Only upon payment confirmation!)
      const { error: subCreateErr } = await adminSupabase
        .from('subscriptions')
        .insert({
          order_id: order.id,
          user_id: order.user_id,
          plan_type: planType,
          status: 'active',
          current_period_start: now,
          current_period_end: expiryIso,
        });

      if (subCreateErr) {
        console.error('Subscription creation error on confirm:', subCreateErr);
      }
    } else {
      // 2. Fallback: check legacy `payments` table
      const { data: rawPayment, error: paymentError } = await adminSupabase
        .from('payments')
        .select(`
          *,
          subscription:subscriptions(*),
          user:profiles(*)
        `)
        .eq('id', targetId)
        .maybeSingle();

      if (paymentError || !rawPayment) {
        return NextResponse.json({ error: 'Commande ou paiement introuvable.' }, { status: 404 });
      }

      const payment = rawPayment as PaymentWithRelations;

      if (payment.status === 'confirmed') {
        return NextResponse.json({ error: 'Ce paiement a déjà été validé.' }, { status: 400 });
      }

      planType = payment.subscription?.plan_type || 'Starter';
      const monthsToAdd = PLAN_DURATION_MONTHS[planType] ?? 3;
      expiryDate.setMonth(expiryDate.getMonth() + monthsToAdd);
      expiryIso = expiryDate.toISOString();

      await adminSupabase
        .from('payments')
        .update({
          status: 'confirmed',
          confirmed_by_admin_id: session.user.id,
          confirmed_at: now,
          notes: typeof notes === 'string' && notes.trim().length > 0 ? notes.trim() : payment.notes,
        })
        .eq('id', targetId);

      if (payment.subscription_id) {
        await adminSupabase
          .from('subscriptions')
          .update({
            status: 'active',
            current_period_start: now,
            current_period_end: expiryIso,
          })
          .eq('id', payment.subscription_id);
      } else {
        await adminSupabase
          .from('subscriptions')
          .insert({
            user_id: payment.user_id,
            plan_type: planType,
            status: 'active',
            current_period_start: now,
            current_period_end: expiryIso,
          });
      }

      const { data: userData } = await adminSupabase.auth.admin.getUserById(payment.user_id);
      targetEmail = userData?.user?.email || '';
      clientName = payment.user?.full_name || 'Client';
    }

    // 3. Add record to Admin Audit Log
    const clientIp = request.headers.get('x-forwarded-for') || '0.0.0.0';
    await adminSupabase
      .from('admin_audit_log')
      .insert({
        admin_id: session.user.id,
        action: 'confirm_payment',
        target_type: order ? 'order' : 'payment',
        target_id: targetId,
        ip_address: clientIp,
      });

    // 4. Send subscription activation email using Resend
    if (targetEmail) {
      const formattedExpiry = new Date(expiryIso).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      await sendSubscriptionActivatedEmail(
        targetEmail,
        clientName,
        planType,
        formattedExpiry
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Commande validée et abonnement activé avec succès.'
    });

  } catch (error: unknown) {
    console.error('Confirm payment error:', error instanceof Error ? error.message : error);
    return NextResponse.json({ error: 'Une erreur interne est survenue.' }, { status: 500 });
  }
}
