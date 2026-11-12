export const CONTACT = {
  whatsappDisplay: '+212 715 214 002',
  whatsappDigits: '212715214002',
  whatsappUrl: 'https://wa.me/212715214002',
  email: 'contact@smarterspro12.com',
  emailUrl: 'mailto:contact@smarterspro12.com',
} as const;

export function buildWhatsappUrl(message: string): string {
  return `${CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
