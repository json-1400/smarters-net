import { NextResponse } from 'next/server';
import { createServerSideClient, createAdminClient } from '@/lib/supabase';
import { sendOrderConfirmationEmail } from '@/lib/resend';
import { adminResendInstructionsSchema } from '@/lib/validations';
import type { Payment, PlanType, Profile } from '@/types/database';

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
    const parsed = adminResendInstructionsSchema.safeParse(rawPayload);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0]?.message || 'Identifiant de paiement requis.';
      return NextResponse.json({ error: firstIssue }, { status: 400 });
    }

    const targetId = parsed.data.orderId || parsed.data.paymentId;
    if (!targetId) return NextResponse.json({ error: 'Identifiant requis.' }, { status: 400 });

    const adminSupabase = createAdminClient();

    // 1. Check orders table
    const { data: order } = await adminSupabase
      .from('orders')
      .select('*')
      .eq('id', targetId)
      .maybeSingle();

    if (order) {
      const emailResult = await sendOrderConfirmationEmail({
        customerName: order.customer_name,
        customerEmail: order.customer_email,
        customerPhone: order.customer_phone,
        deviceType: order.device_type,
        deviceApp: order.device_app,
        planName: order.plan_type,
        planType: order.plan_type as PlanType,
        amountCents: order.amount,
        orderRef: order.order_ref,
        orderDate: new Date(order.created_at).toLocaleDateString('fr-FR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
        siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://smarterspro12.net',
      });

      if (!emailResult.success) {
        return NextResponse.json({ error: "Erreur lors de l'envoi de l'email." }, { status: 500 });
      }

      return NextResponse.json({ success: true, message: 'Email de confirmation renvoyé avec succès.' });
    }

    // 2. Fallback to payments
    const { data: rawPayment, error: paymentError } = await adminSupabase
      .from('payments')
      .select('*, subscription:subscriptions(*), user:profiles(*)')
      .eq('id', targetId)
      .single();

    if (paymentError || !rawPayment) return NextResponse.json({ error: 'Paiement introuvable.' }, { status: 404 });
    const payment = rawPayment as PaymentWithRelations;

    if (payment.status === 'confirmed') return NextResponse.json({ error: 'Ce paiement a déjà été validé.' }, { status: 400 });

    const planType: PlanType = payment.subscription?.plan_type || 'Starter';

    // Email resend
    const { data: userData } = await adminSupabase.auth.admin.getUserById(payment.user_id);
    const targetEmail = userData?.user?.email;

    if (targetEmail) {
      const clientName = payment.user?.full_name || 'Client';
      const emailResult = await sendOrderConfirmationEmail({
        customerName: clientName,
        customerEmail: targetEmail,
        customerPhone: payment.user?.phone || null,
        planName: planType,
        planType,
        amountCents: payment.amount,
        orderRef: `SP-${String(payment.id).slice(0, 8).toUpperCase()}`,
        orderDate: new Date(payment.created_at || Date.now()).toLocaleDateString('fr-FR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
        siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://smarterspro12.net',
      });

      if (!emailResult.success) {
        return NextResponse.json({ error: "Erreur lors de l'envoi de l'email." }, { status: 500 });
      }
    } else {
      return NextResponse.json({ error: "Email de l'utilisateur introuvable." }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Email de confirmation renvoyé avec succès.' });
  } catch (error: unknown) {
    console.error('Resend instructions error:', error instanceof Error ? error.message : error);
    return NextResponse.json({ error: 'Erreur interne.' }, { status: 500 });
  }
}
