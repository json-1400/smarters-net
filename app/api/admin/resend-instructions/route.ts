import { NextResponse } from 'next/server';
import { createServerSideClient, createAdminClient } from '@/lib/supabase';
import { sendPaymentInstructionsEmail } from '@/lib/resend';

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

    const { paymentId } = await request.json();

    if (!paymentId) return NextResponse.json({ error: 'Identifiant de paiement requis.' }, { status: 400 });

    const { data: payment, error: paymentError } = await supabase
      .from('payments')
      .select('*, subscription:subscriptions(*), user:profiles(*)')
      .eq('id', paymentId)
      .single();

    if (paymentError || !payment) return NextResponse.json({ error: 'Paiement introuvable.' }, { status: 404 });
    if (payment.status === 'confirmed') return NextResponse.json({ error: 'Ce paiement a déjà été validé.' }, { status: 400 });

    // Fetch manual payment instructions for specified plan
    const planType = (payment as any).subscription?.plan_type || 'Starter';
    const { data: instructions } = await supabase
      .from('payment_instructions')
      .select('*')
      .eq('plan_type', planType)
      .single();

    const bankDetails = instructions?.bank_details || 'Bank: EuroBank | IBAN: FR76 3000 1234 5678 9012 345';
    const whatsappNum = instructions?.whatsapp_number || '+33612345678';

    // Email resend
    const adminClient = createAdminClient();
    const { data: userData } = await adminClient.auth.admin.getUserById(payment.user_id);
    const targetEmail = userData?.user?.email;

    if (targetEmail) {
      const clientName = (payment as any).user?.full_name || 'Client';
      
      const emailResult = await sendPaymentInstructionsEmail(
        targetEmail,
        clientName,
        planType,
        payment.amount,
        bankDetails,
        whatsappNum
      );

      if (emailResult.success) {
        await supabase
          .from('payments')
          .update({ status: 'pending_confirmation' })
          .eq('id', paymentId);
      } else {
         return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'email.' }, { status: 500 });
      }
    } else {
        return NextResponse.json({ error: 'Email de l\'utilisateur introuvable.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Instructions renvoyées avec succès.' });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur interne.' }, { status: 500 });
  }
}
