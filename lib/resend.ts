import { Resend } from 'resend';
import {
  buildOrderConfirmationHtml,
  buildAdminOrderNotificationHtml,
  buildRenewalReminderHtml,
  type OrderEmailData,
  type RenewalReminderData,
} from '@/lib/order-email';
import { CONTACT } from '@/lib/contact';

const apiKey = process.env.RESEND_API_KEY || 're_12345678901234567890123456789012';
export const resend = new Resend(apiKey);

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || 'Smarterspro 12 <support@smarterspro12.com>';

function getAdminEmails(): string[] {
  const raw = process.env.ADMIN_EMAILS || '';
  return raw
    .split(',')
    .map((email) => email.trim())
    .filter((email) => email.includes('@'));
}

interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: EmailOptions) {
  try {
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject,
      html,
      ...(replyTo ? { replyTo } : {}),
    });
    return { success: true, data };
  } catch (error: unknown) {
    console.error('Failed to send email via Resend:', error instanceof Error ? error.message : error);
    return { success: false, error };
  }
}

// 1. Customer Order Confirmation Email (with WhatsApp link)
export async function sendOrderConfirmationEmail(data: OrderEmailData) {
  const subject = `Confirmation de votre commande ${data.orderRef} - IPTV Smarters Pro`;
  const html = buildOrderConfirmationHtml(data);
  return sendEmail({ to: data.customerEmail, subject, html });
}

// 2. Admin Order Notification / Alert Email (with Customer WhatsApp link)
export async function sendAdminOrderNotificationEmail(data: OrderEmailData) {
  const adminEmails = getAdminEmails();
  if (adminEmails.length === 0) {
    return { success: false, error: 'No ADMIN_EMAILS configured in environment' };
  }
  const amount = `${(data.amountCents / 100).toFixed(2)} €`;
  const subject = `[Nouvelle Commande ${data.orderRef}] ${data.customerName} — ${data.planName} (${amount})`;
  const html = buildAdminOrderNotificationHtml(data);
  return sendEmail({
    to: adminEmails,
    subject,
    html,
    replyTo: data.customerEmail,
  });
}

// 3. Subscription Activated Email Template (Sent when Admin confirms payment)
export async function sendSubscriptionActivatedEmail(
  email: string,
  fullName: string,
  planType: string,
  expiryDate: string
) {
  const subject = `Votre abonnement IPTV Smarters Pro (${planType}) est ACTIF !`;
  const html = `
    <div style="font-family: sans-serif; padding: 24px; color: #1f2937; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px;">
      <h2 style="color: #16a34a; margin-bottom: 16px;">Votre abonnement est maintenant actif ✓</h2>
      <p>Bonjour <strong>${fullName}</strong>,</p>
      <p>Nous avons bien validé votre paiement. Votre formule <strong>${planType}</strong> est désormais active.</p>
      
      <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 16px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0; color: #166534;"><strong>Formule :</strong> ${planType}</p>
        <p style="margin: 6px 0 0 0; color: #166534;"><strong>Date d'expiration :</strong> ${expiryDate}</p>
      </div>

      <p>Notre équipe est à votre disposition sur WhatsApp pour vous accompagner dans l'installation sur votre appareil :</p>
      
      <p style="margin: 24px 0;">
        <a href="${CONTACT.whatsappUrl}" style="background-color: #16a34a; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">Assistance WhatsApp : ${CONTACT.whatsappDisplay}</a>
      </p>

      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
      <p style="font-size: 12px; color: #6b7280;">Merci pour votre confiance — IPTV Smarters Pro France.</p>
    </div>
  `;
  return sendEmail({ to: email, subject, html });
}

// 4. Chat Reply Notification Email Template
export async function sendChatReplyEmail(
  email: string,
  fullName: string,
  messagePreview: string
) {
  const subject = `Nouveau message du support - IPTV Smarters Pro`;
  const html = `
    <div style="font-family: sans-serif; padding: 24px; color: #1f2937; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px;">
      <h2 style="color: #2563eb; margin-bottom: 16px;">Le support vous a répondu 💬</h2>
      <p>Bonjour <strong>${fullName || 'Cher Client'}</strong>,</p>
      <p>Un conseiller de l'équipe technique IPTV Smarters Pro vient de vous répondre :</p>
      
      <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 14px 16px; margin: 20px 0; border-radius: 4px; font-style: italic; color: #334155;">
        "${messagePreview}"
      </div>

      <p style="margin: 24px 0;">
        <a href="${CONTACT.whatsappUrl}" style="background-color: #16a34a; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">Répondre sur WhatsApp (${CONTACT.whatsappDisplay}) &rarr;</a>
      </p>

      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
      <p style="font-size: 12px; color: #64748b;">IPTV Smarters Pro Officiel France.</p>
    </div>
  `;
  return sendEmail({ to: email, subject, html });
}

// 5. Renewal Reminder Email Template
export async function sendRenewalReminderEmail(
  email: string,
  data: RenewalReminderData
) {
  const subject = `Rappel : Votre abonnement IPTV Smarters Pro expire dans ${data.daysRemaining > 1 ? `${data.daysRemaining} jours` : 'moins de 24h'}`;
  const html = buildRenewalReminderHtml(data);
  return sendEmail({ to: email, subject, html });
}
