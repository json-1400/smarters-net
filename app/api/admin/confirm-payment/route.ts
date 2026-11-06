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

    const { paymentId, notes } = parsed.data;

    // Fetch the payment log along with subscription and profile details
    const { data: rawPayment, error: paymentError } = await supabase
      .from('payments')
      .select(`
        *,
        subscription:subscriptions(*),
        user:profiles(*)
      `)
      .eq('id', paymentId)
      .single();

    if (paymentError || !rawPayment) {
      return NextResponse.json({ error: 'Paiement introuvable.' }, { status: 404 });
    }

    const payment = rawPayment as PaymentWithRelations;

    if (payment.status === 'confirmed') {
      return NextResponse.json({ error: 'Ce paiement a déjà été validé.' }, { status: 400 });
    }

    const now = new Date().toISOString();
    const expiryDate = new Date();
    const planType: PlanType = payment.subscription?.plan_type || 'Starter';
    const monthsToAdd = PLAN_DURATION_MONTHS[planType] ?? 3;
    expiryDate.setMonth(expiryDate.getMonth() + monthsToAdd);

    const expiryIso = expiryDate.toISOString();

    // 3. Update payment status to confirmed
    const { error: payUpdateError } = await supabase
      .from('payments')
      .update({
        status: 'confirmed',
        confirmed_by_admin_id: session.user.id,
        confirmed_at: now,
        notes: typeof notes === 'string' && notes.trim().length > 0 ? notes.trim() : payment.notes,
      })
      .eq('id', paymentId);

    if (payUpdateError) {
      return NextResponse.json({ error: 'Échec de la validation du paiement.' }, { status: 500 });
    }

    // 4. Activate the corresponding subscription
    const { error: subUpdateError } = await supabase
      .from('subscriptions')
      .update({
        status: 'active',
        current_period_start: now,
        current_period_end: expiryIso,
      })
      .eq('id', payment.subscription_id);

    if (subUpdateError) {
      return NextResponse.json({ error: "Échec de l'activation de l'abonnement." }, { status: 500 });
    }

    // 5. Add record to Admin Audit Log
    const clientIp = request.headers.get('x-forwarded-for') || '0.0.0.0';
    await supabase
      .from('admin_audit_log')
      .insert({
        admin_id: session.user.id,
        action: 'confirm_payment',
        target_type: 'payment',
        target_id: paymentId,
        ip_address: clientIp,
      });

    // 6. Send subscription activation email using Resend
    const adminClient = createAdminClient();
    const { data: userData } = await adminClient.auth.admin.getUserById(payment.user_id);
    const targetEmail = userData?.user?.email || '';

    if (targetEmail) {
      const clientName = payment.user?.full_name || 'Client';
      const formattedExpiry = new Date(expiryIso).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
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
      message: 'Paiement confirmé et abonnement activé avec succès.'
    });

  } catch (error: unknown) {
    console.error('Confirm payment error:', error instanceof Error ? error.message : error);
    return NextResponse.json({ error: 'Une erreur interne est survenue.' }, { status: 500 });
  }
}
