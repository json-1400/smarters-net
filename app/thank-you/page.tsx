import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CheckCircle2, Mail, MessageCircle } from 'lucide-react';
import { CONTACT, buildWhatsappUrl } from '@/lib/contact';

const PAGE_CANONICAL = 'https://smarterspro12.net/thank-you';

export function generateMetadata(): Metadata {
  return {
    title: 'Merci pour votre commande | IPTV Smarters Pro',
    description: 'Votre commande a bien été enregistrée. Un email de confirmation vous a été envoyé.',
    robots: { index: false, follow: false },
    alternates: { canonical: PAGE_CANONICAL },
  };
}

interface ThankYouProps {
  searchParams: { ref?: string };
}

export default function ThankYouPage({ searchParams }: ThankYouProps) {
  const ref = searchParams.ref ? searchParams.ref.replace(/[^A-Za-z0-9-]/g, '').slice(0, 20) : '';
  const waUrl = buildWhatsappUrl(
    ref ? `Bonjour, je viens de passer la commande ${ref}.` : 'Bonjour, je viens de passer une commande.'
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased font-sans">
      <Header />
      <main className="flex-grow max-w-2xl mx-auto w-full px-4 sm:px-6 py-16">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-5">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <CheckCircle2 className="h-8 w-8 text-emerald-400" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Merci pour votre commande !</h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Votre commande a bien été enregistrée. Un email de confirmation avec le récapitulatif complet vient de vous être envoyé.
          </p>
          {ref && (
            <p className="inline-block bg-slate-950 border border-slate-800 px-3.5 py-1.5 rounded-lg text-xs text-slate-400 font-mono">
              Référence : <span className="font-bold text-blue-400">{ref}</span>
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a
              href={waUrl}
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              WhatsApp {CONTACT.whatsappDisplay}
            </a>
            <a
              href={CONTACT.emailUrl}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              {CONTACT.email}
            </a>
          </div>
          <Link href="/" className="inline-block text-xs text-slate-400 hover:text-white underline pt-2">
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
