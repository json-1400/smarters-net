import { NextResponse } from 'next/server';
import { createServerSideClient, createAdminClient } from '@/lib/supabase';
import { sendEmail } from '@/lib/resend';
import { adminPaymentActionSchema } from '@/lib/validations';
import type { Payment, Profile } from '@/types/database';

interface PaymentWithRelations extends Payment {
  user?: Profile | null;
}

export async function POST(request: Request) {
  const supabase = createServerSideClient();

  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });

    const { data: adminProfile } = await supabase
      .from('profiles')
      .select('is_admin')
      .eq('id', session.user.id)
      .single();

    if (!adminProfile?.is_admin) return NextResponse.json({ error: 'Accès refusé.' }, { status: 403 });

    const rawPayload: unknown = await request.json();
    const parsed = adminPaymentActionSchema.safeParse(rawPayload);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0]?.message || 'Identifiant de paiement requis.';
      return NextResponse.json({ error: firstIssue }, { status: 400 });
    }

    const { paymentId, notes } = parsed.data;

    const { data: rawPayment, error: paymentError } = await supabase
      .from('payments')
      .select('*, subscription:subscriptions(*), user:profiles(*)')
      .eq('id', paymentId)
      .single();

    if (paymentError || !rawPayment) return NextResponse.json({ error: 'Paiement introuvable.' }, { status: 404 });
    const payment = rawPayment as PaymentWithRelations;

    if (payment.status === 'confirmed') return NextResponse.json({ error: 'Ce paiement a déjà été validé.' }, { status: 400 });

    const { error: payUpdateError } = await supabase
      .from('payments')
      .update({
        status: 'failed',
        notes: notes || payment.notes,
      })
      .eq('id', paymentId);

    if (payUpdateError) return NextResponse.json({ error: 'Échec de la mise à jour du paiement.' }, { status: 500 });

    await supabase
      .from('subscriptions')
      .update({ status: 'canceled' })
      .eq('id', payment.subscription_id);

    await supabase.from('admin_audit_log').insert({
      admin_id: session.user.id,
      action: 'reject_payment',
      target_type: 'payment',
      target_id: paymentId,
      ip_address: request.headers.get('x-forwarded-for') || '0.0.0.0',
    });

    // Email rejection
    const adminClient = createAdminClient();
    const { data: userData } = await adminClient.auth.admin.getUserById(payment.user_id);
    const targetEmail = userData?.user?.email;

    if (targetEmail) {
      const clientName = payment.user?.full_name || 'Client';
      await sendEmail({
        to: targetEmail,
        subject: `Paiement rejeté pour votre commande ${payment.subscription?.plan_type || 'IPTV'}`,
        html: `<div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #ef4444;">Paiement non validé</h2>
          <p>Bonjour ${clientName},</p>
          <p>Nous n'avons pas pu valider votre paiement manuel. Votre commande a été annulée.</p>
          <p>Notes: ${notes || 'Aucune raison spécifique fournie.'}</p>
          <p>Veuillez contacter le support si vous pensez qu'il s'agit d'une erreur.</p>
        </div>`
      });
    }

    return NextResponse.json({ success: true, message: 'Paiement rejeté.' });
  } catch (error: unknown) {
    console.error('Reject payment error:', error instanceof Error ? error.message : error);
    return NextResponse.json({ error: 'Erreur interne.' }, { status: 500 });
  }
}
