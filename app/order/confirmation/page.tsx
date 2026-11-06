import { redirect } from 'next/navigation';

// Legacy route: manual-payment confirmation was replaced by /thank-you
export default function LegacyOrderConfirmationPage() {
  redirect('/thank-you');
}
