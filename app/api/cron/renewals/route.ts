import { NextResponse } from 'next/server';
import { createServerSideClient, createAdminClient } from '@/lib/supabase';
import { sendRenewalReminderEmail } from '@/lib/resend';
import type { Subscription, Profile, Order } from '@/types/database';

interface SubscriptionWithRelations extends Subscription {
  user?: Profile | null;
  order?: Order | null;
}

export async function GET(request: Request) {
  return handleRenewals(request);
}

export async function POST(request: Request) {
  return handleRenewals(request);
}

async function handleRenewals(request: Request) {
  const adminSupabase = createAdminClient();
  const serverSupabase = createServerSideClient();

  try {
    // 1. Authorization check: either valid CRON_SECRET header or authenticated admin user
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;
    const isSecretAuthorized = Boolean(
      cronSecret && authHeader === `Bearer ${cronSecret}`
    );

    if (!isSecretAuthorized) {
      // Check admin session
      const { data: { session } } = await serverSupabase.auth.getSession();
      if (!session?.user) {
        return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });
      }

      const { data: profile } = await adminSupabase
        .from('profiles')
        .select('is_admin')
        .eq('id', session.user.id)
        .maybeSingle();

      if (!profile?.is_admin) {
        return NextResponse.json({ error: 'Accès administrateur requis.' }, { status: 403 });
      }
    }

    // 2. Calculate thresholds (expires within next 7 days and not expired for more than 1 day)
    const now = new Date();
    const targetThreshold = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString();
    const expiredCutoff = new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://smarterspro12.net';

    // 3. Query active subscriptions expiring within 7 days
    const { data: subs, error: subsError } = await adminSupabase
      .from('subscriptions')
      .select(`
        *,
        user:profiles(*),
        order:orders(*)
      `)
      .eq('status', 'active')
      .lte('current_period_end', targetThreshold)
      .gte('current_period_end', expiredCutoff);

    if (subsError) {
      console.error('Error querying expiring subscriptions:', subsError);
      return NextResponse.json({ error: 'Erreur lors de la récupération des abonnements.' }, { status: 500 });
    }

    const expiringSubs = (subs || []) as SubscriptionWithRelations[];
    let sentCount = 0;
    const processedList: Array<{ id: string; email: string; daysRemaining: number }> = [];

    // 4. Send reminders
    for (const sub of expiringSubs) {
      if (!sub.current_period_end) continue;

      // Avoid spamming: do not send if reminder was already sent in the last 4 days
      if (sub.renewal_reminder_sent_at) {
        const lastSent = new Date(sub.renewal_reminder_sent_at).getTime();
        const daysSinceLastSent = (now.getTime() - lastSent) / (1000 * 60 * 60 * 24);
        if (daysSinceLastSent < 4) {
          continue;
        }
      }

      const expiryDateObj = new Date(sub.current_period_end);
      const diffMs = expiryDateObj.getTime() - now.getTime();
      const daysRemaining = Math.max(1, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));

      // Resolve customer email
      let targetEmail = sub.order?.customer_email || '';
      let customerName = sub.order?.customer_name || sub.user?.full_name || 'Client';

      if (!targetEmail && sub.user_id) {
        const { data: userData } = await adminSupabase.auth.admin.getUserById(sub.user_id);
        targetEmail = userData?.user?.email || '';
      }

      if (!targetEmail) continue;

      const formattedExpiry = expiryDateObj.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });

      const renewalUrl = `${siteUrl}/checkout?plan=${encodeURIComponent(sub.plan_type)}`;

      const emailRes = await sendRenewalReminderEmail(targetEmail, {
        customerName,
        planName: `Abonnement IPTV (${sub.plan_type})`,
        expiryDate: formattedExpiry,
        daysRemaining,
        renewalUrl,
      });

      if (emailRes.success) {
        sentCount++;
        processedList.push({ id: sub.id, email: targetEmail, daysRemaining });

        // Update renewal_reminder_sent_at
        await adminSupabase
          .from('subscriptions')
          .update({ renewal_reminder_sent_at: now.toISOString() })
          .eq('id', sub.id);
      }
    }

    return NextResponse.json({
      success: true,
      processed: expiringSubs.length,
      remindersSent: sentCount,
      details: processedList,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Erreur interne.';
    console.error('Renewals cron route error:', errorMsg);
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}

