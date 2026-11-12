import { CONTACT, buildWhatsappUrl } from '@/lib/contact';

export interface OrderEmailData {
  customerName: string;
  customerEmail: string;
  customerPhone?: string | null;
  deviceType?: string | null;
  deviceApp?: string | null;
  planName: string;
  planType: string;
  amountCents: number;
  orderRef: string;
  orderDate: string;
  siteUrl: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td class="stack" style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#64748b;width:42%;">${label}</td>
      <td class="stack" style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px;color:#0f172a;font-weight:600;">${value}</td>
    </tr>`;
}

function button(href: string, label: string, bg: string): string {
  return `<a href="${href}" style="display:inline-block;background:${bg};color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:14px 26px;border-radius:10px;">${label}</a>`;
}

export function buildCustomerWhatsappUrl(phone: string | null | undefined, message: string): string | null {
  if (!phone) return null;
  let digits = phone.replace(/\D/g, '');
  if (!digits) return null;
  if (digits.startsWith('00')) {
    digits = digits.slice(2);
  } else if (digits.startsWith('0') && digits.length === 10) {
    // Default French national format (06/07...) -> 336/337...
    digits = `33${digits.slice(1)}`;
  }
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function buildOrderConfirmationHtml(data: OrderEmailData): string {
  const name = escapeHtml(data.customerName);
  const plan = escapeHtml(data.planName);
  const ref = escapeHtml(data.orderRef);
  const email = escapeHtml(data.customerEmail);
  const phone = data.customerPhone ? escapeHtml(data.customerPhone) : '';
  const amount = `${(data.amountCents / 100).toFixed(2)} €`;
  const waUrl = buildWhatsappUrl(
    `Bonjour, je viens de passer la commande ${data.orderRef} (${data.planName}).`
  );

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>Confirmation de commande ${ref}</title>
<style>
  body { margin:0; padding:0; background:#f1f5f9; }
  @media only screen and (max-width:620px) {
    .container { width:100% !important; }
    .px { padding-left:20px !important; padding-right:20px !important; }
    .stack { display:block !important; width:100% !important; }
    .btn-cell { display:block !important; width:100% !important; padding:0 0 10px 0 !important; }
    .btn-cell a { display:block !important; text-align:center !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">Commande ${ref} bien reçue — ${plan} (${amount}).</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;">
    <tr><td align="center" style="padding:24px 12px;">
      <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;">
        <tr><td class="px" style="background:#0f172a;padding:28px 36px;" align="center">
          <div style="font-size:13px;letter-spacing:2px;text-transform:uppercase;color:#60a5fa;font-weight:700;">IPTV Smarters Pro</div>
          <div style="font-size:26px;line-height:1.3;color:#ffffff;font-weight:800;margin-top:10px;">Commande bien reçue ✓</div>
        </td></tr>
        <tr><td class="px" style="padding:32px 36px 8px 36px;">
          <p style="margin:0 0 12px 0;font-size:16px;color:#0f172a;">Bonjour <strong>${name}</strong>,</p>
          <p style="margin:0;font-size:15px;line-height:1.6;color:#334155;">Merci pour votre confiance. Nous avons bien enregistré votre commande. Voici le récapitulatif :</p>
        </td></tr>
        <tr><td class="px" style="padding:20px 36px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;">
            <tr><td style="padding:8px 20px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${row('Référence', ref)}
                ${row('Date', escapeHtml(data.orderDate))}
                ${row('Formule', plan)}
                ${row('Nom', name)}
                ${row('Email', email)}
                ${phone ? row('Téléphone', phone) : ''}
                ${data.deviceType ? row('Appareil', escapeHtml(data.deviceType)) : ''}
                ${data.deviceApp ? row('Application', escapeHtml(data.deviceApp)) : ''}
                <tr>
                  <td class="stack" style="padding:14px 0 10px 0;font-size:14px;color:#0f172a;font-weight:700;">Total</td>
                  <td class="stack" style="padding:14px 0 10px 0;font-size:20px;color:#2563eb;font-weight:800;">${amount}</td>
                </tr>
              </table>
            </td></tr>
          </table>
        </td></tr>
        <tr><td class="px" style="padding:10px 36px 4px 36px;">
          <h3 style="margin:16px 0 12px 0;font-size:18px;color:#0f172a;font-weight:800;border-bottom:2px solid #e2e8f0;padding-bottom:8px;">
            La suite, étape par étape
          </h3>
        </td></tr>
        <tr><td class="px" style="padding:0 36px 16px 36px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
            <tr>
              <td style="padding:10px 14px;background:#f0fdf4;border-left:4px solid #16a34a;border-radius:8px;margin-bottom:8px;">
                <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:#16a34a;letter-spacing:1px;">1. Maintenant</div>
                <div style="font-size:14px;font-weight:700;color:#0f172a;margin:2px 0;">Commande reçue ✓</div>
                <div style="font-size:13px;color:#334155;line-height:1.5;">Votre demande est dans notre système. Un email de confirmation vient d'être envoyé à votre adresse.</div>
              </td>
            </tr>
          </table>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
            <tr>
              <td style="padding:10px 14px;background:#eff6ff;border-left:4px solid #2563eb;border-radius:8px;">
                <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:#2563eb;letter-spacing:1px;">2. Sous 1 heure</div>
                <div style="font-size:14px;font-weight:700;color:#0f172a;margin:2px 0;">Notre équipe vous contacte</div>
                <div style="font-size:13px;color:#334155;line-height:1.5;margin-bottom:6px;">Vous recevez un message (email ou WhatsApp) avec un lien de paiement sécurisé Stripe ou PayPal et toutes les infos sur votre formule.</div>
                <div style="background:#fef3c7;border:1px solid #fde68a;padding:8px 10px;border-radius:6px;font-size:12px;color:#92400e;line-height:1.4;">
                  <strong>💡 Astuce :</strong> Vérifiez vos spams / courriers indésirables. Notre email peut s'y retrouver lors du premier contact.
                </div>
              </td>
            </tr>
          </table>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
            <tr>
              <td style="padding:10px 14px;background:#f5f3ff;border-left:4px solid #7c3aed;border-radius:8px;">
                <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:#7c3aed;letter-spacing:1px;">3. Après paiement</div>
                <div style="font-size:14px;font-weight:700;color:#0f172a;margin:2px 0;">Réception de vos accès IPTV</div>
                <div style="font-size:13px;color:#334155;line-height:1.5;">Dès paiement confirmé, votre abonnement IPTV Smarters Pro 4K personnel et vos identifiants Xtream Codes arrivent par email en moins de 5 minutes, accompagnés d'un guide d'installation.</div>
              </td>
            </tr>
          </table>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
            <tr>
              <td style="padding:10px 14px;background:#f8fafc;border-left:4px solid #0f172a;border-radius:8px;">
                <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:#0f172a;letter-spacing:1px;">4. En continu</div>
                <div style="font-size:14px;font-weight:700;color:#0f172a;margin:2px 0;">Support technique permanent</div>
                <div style="font-size:13px;color:#334155;line-height:1.5;">Notre équipe reste disponible 24h/24, 7j/7 pour vous accompagner : configuration, dépannage, conseils. Tant que vous êtes notre client, on est à vos côtés.</div>
              </td>
            </tr>
          </table>
        </td></tr>
        <tr><td class="px" style="padding:4px 36px 8px 36px;">
          <p style="margin:0;font-size:14px;line-height:1.5;color:#0f172a;font-weight:700;">Besoin d'une réponse plus rapide ?</p>
          <p style="margin:4px 0 0 0;font-size:13px;line-height:1.5;color:#475569;">Notre équipe est joignable immédiatement sur WhatsApp pour toute question urgente :</p>
        </td></tr>
        <tr><td class="px" style="padding:16px 36px 8px 36px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
            <td class="btn-cell" style="padding-right:10px;" align="left">${button(waUrl, 'WhatsApp : ' + CONTACT.whatsappDisplay, '#16a34a')}</td>
            <td class="btn-cell" align="left">${button(CONTACT.emailUrl, CONTACT.email, '#2563eb')}</td>
          </tr></table>
        </td></tr>
        <tr><td class="px" style="padding:16px 36px 8px 36px;text-align:center;">
          <div style="font-size:12px;color:#64748b;line-height:1.8;">
            <a href="${data.siteUrl}" style="color:#2563eb;text-decoration:none;font-weight:600;">Retour à l'accueil</a> &bull;
            <a href="${data.siteUrl}/blog" style="color:#2563eb;text-decoration:none;font-weight:600;">Lire nos guides</a> &bull;
            <a href="${data.siteUrl}/guide-installation" style="color:#2563eb;text-decoration:none;font-weight:600;">Tutoriel d'installation</a>
          </div>
        </td></tr>
        <tr><td class="px" style="padding:28px 36px 32px 36px;">
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:0 0 20px 0;">
          <p style="margin:0;font-size:12px;line-height:1.6;color:#94a3b8;text-align:center;">
            Vous recevez cet email car une commande a été passée avec l'adresse ${email} sur
            <a href="${data.siteUrl}" style="color:#64748b;">${data.siteUrl.replace(/^https?:\/\//, '')}</a>.<br>
            © ${new Date().getFullYear()} IPTV Smarters Pro
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export function buildAdminOrderNotificationHtml(data: OrderEmailData): string {
  const name = escapeHtml(data.customerName);
  const plan = escapeHtml(data.planName);
  const ref = escapeHtml(data.orderRef);
  const email = escapeHtml(data.customerEmail);
  const phone = data.customerPhone ? escapeHtml(data.customerPhone) : 'Non renseigné';
  const amount = `${(data.amountCents / 100).toFixed(2)} €`;
  const cleanSiteUrl = data.siteUrl.replace(/\/$/, '');
  const deviceAppInfo = [data.deviceType, data.deviceApp].filter(Boolean).join(' / ');

  const customerWaUrl = buildCustomerWhatsappUrl(
    data.customerPhone,
    `Bonjour ${data.customerName}, nous avons bien reçu votre commande ${data.orderRef} (${data.planName} - ${amount}${deviceAppInfo ? ` - ${deviceAppInfo}` : ''}) sur IPTV Smarters Pro. Voici les instructions pour activer votre accès :`
  );

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>Nouvelle commande ${ref}</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;">
    <tr><td align="center" style="padding:24px 12px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;">
        <tr><td style="background:#0f172a;padding:24px 32px;" align="center">
          <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#34d399;font-weight:700;">Alerte Nouvelle Commande</div>
          <div style="font-size:24px;line-height:1.3;color:#ffffff;font-weight:800;margin-top:8px;">${ref} — ${plan} (${amount})</div>
        </td></tr>
        <tr><td style="padding:24px 32px;">
          <p style="margin:0 0 16px 0;font-size:15px;color:#0f172a;">Un client vient de valider une commande sur <strong>smarterspro12.net</strong> :</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;">
            <tr><td style="padding:8px 20px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${row('Référence', ref)}
                ${row('Date', escapeHtml(data.orderDate))}
                ${row('Formule', `${plan} (${escapeHtml(data.planType)})`)}
                ${row('Montant', amount)}
                ${row('Client', name)}
                ${row('Email client', `<a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email}</a>`)}
                ${row('WhatsApp / Téléphone', phone)}
                ${row('Appareil client', data.deviceType ? escapeHtml(data.deviceType) : 'Non spécifié')}
                ${row('Application IPTV', data.deviceApp ? escapeHtml(data.deviceApp) : 'Non spécifiée / Conseil requis')}
              </table>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:0 32px 28px 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
            ${
              customerWaUrl
                ? `<td style="padding-right:10px;" align="left">${button(customerWaUrl, 'Contacter le client sur WhatsApp (' + phone + ')', '#16a34a')}</td>`
                : `<td style="padding-right:10px;" align="left">${button(`mailto:${email}?subject=${encodeURIComponent(`Votre commande ${data.orderRef} - IPTV Smarters Pro`)}`, 'Contacter le client par Email', '#2563eb')}</td>`
            }
            <td align="left">${button(`${cleanSiteUrl}/admin/subscriptions`, 'Ouvrir Admin', '#0f172a')}</td>
          </tr></table>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export interface RenewalReminderData {
  customerName: string;
  planName: string;
  expiryDate: string;
  daysRemaining: number;
  renewalUrl: string;
}

export function buildRenewalReminderHtml(data: RenewalReminderData): string {
  const name = escapeHtml(data.customerName);
  const plan = escapeHtml(data.planName);
  const expiry = escapeHtml(data.expiryDate);
  const days = data.daysRemaining;

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Rappel de renouvellement IPTV Smarters Pro</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;">
    <tr><td align="center" style="padding:24px 12px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;">
        <tr><td style="background:#0f172a;padding:28px 36px;" align="center">
          <div style="font-size:13px;letter-spacing:2px;text-transform:uppercase;color:#60a5fa;font-weight:700;">IPTV Smarters Pro</div>
          <div style="font-size:24px;line-height:1.3;color:#ffffff;font-weight:800;margin-top:10px;">Votre abonnement arrive à échéance ⏳</div>
        </td></tr>
        <tr><td style="padding:32px 36px 8px 36px;">
          <p style="margin:0 0 12px 0;font-size:16px;color:#0f172a;">Bonjour <strong>${name}</strong>,</p>
          <p style="margin:0;font-size:15px;line-height:1.6;color:#334155;">
            Votre formule <strong>${plan}</strong> arrive à expiration dans <strong>${days > 1 ? `${days} jours` : 'moins de 24 heures'}</strong> (le ${expiry}).
          </p>
          <p style="margin:12px 0 0 0;font-size:15px;line-height:1.6;color:#334155;">
            Pour continuer à profiter de vos flux 4K, de vos chaînes en direct et de la VOD sans coupure, vous pouvez renouveler votre formule en un clic :
          </p>
        </td></tr>
        <tr><td style="padding:24px 36px 12px 36px;" align="center">
          ${button(data.renewalUrl, 'Renouveler mon abonnement maintenant →', '#2563eb')}
        </td></tr>
        <tr><td style="padding:12px 36px 24px 36px;" align="center">
          <p style="margin:0;font-size:13px;color:#64748b;">
            Besoin d'aide ou d'une autre formule ? Notre équipe reste à votre écoute sur WhatsApp :
            <br>
            <a href="${CONTACT.whatsappUrl}" style="color:#16a34a;font-weight:bold;text-decoration:none;">${CONTACT.whatsappDisplay}</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
