import { redirect } from 'next/navigation';

const SLUG_TO_PLAN_MAP: Record<string, string> = {
  '1-mois': 'Starter',
  '3-mois': 'Starter',
  '6-mois': 'Confort',
  '12-mois': 'Premium',
  '12-mois-vip': 'Premium',
  'pack-2': 'Pack2',
};

export default function CommanderPage({ params }: { params: { slug: string } }) {
  const plan = SLUG_TO_PLAN_MAP[params.slug.toLowerCase()] || 'Premium';
  redirect(`/checkout?plan=${plan}`);
}
