import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { 
  CheckCircle2, 
  Mail, 
  MessageCircle, 
  Clock, 
  Zap, 
  ShieldCheck, 
  LifeBuoy, 
  ArrowLeft, 
  BookOpen, 
  Tv, 
  AlertCircle 
} from 'lucide-react';
import { CONTACT, buildWhatsappUrl } from '@/lib/contact';

const PAGE_CANONICAL = 'https://smarterspro12.net/thank-you';

export function generateMetadata(): Metadata {
  return {
    title: 'Merci pour votre commande | IPTV Smarters Pro France',
    description: 'Votre commande a bien été enregistrée. Retrouvez ici la suite des étapes pour activer vos accès.',
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
      <main className="flex-grow max-w-3xl mx-auto w-full px-4 sm:px-6 py-12 lg:py-16">
        
        {/* Main Success Hero Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Top Status */}
          <div className="text-center space-y-3">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Merci pour votre commande !
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Votre demande est enregistrée avec succès. Un e-mail de confirmation vient d&apos;être envoyé à votre adresse.
            </p>
            {ref && (
              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300 font-mono">
                  Référence de commande : <strong className="text-blue-400 font-black">{ref}</strong>
                </span>
              </div>
            )}
          </div>

          {/* Stepper: La suite, étape par étape */}
          <div className="border-t border-slate-800/80 pt-8 space-y-6">
            <div className="text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center justify-center sm:justify-start gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>La suite, étape par étape</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Voici comment va se dérouler l&apos;activation de votre abonnement IPTV.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* Étape 1 : Maintenant */}
              <div className="relative flex items-start gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-black text-sm shrink-0 mt-0.5">
                  1
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                      Maintenant
                    </span>
                    <h3 className="text-sm font-bold text-white">Commande reçue ✓</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Votre demande est dans notre système. Un email de confirmation récapitulatif vient d&apos;être envoyé à votre adresse de réception.
                  </p>
                </div>
              </div>

              {/* Étape 2 : Sous 1 heure */}
              <div className="relative flex items-start gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 font-black text-sm shrink-0 mt-0.5">
                  2
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-black uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">
                      Sous 1 heure
                    </span>
                    <h3 className="text-sm font-bold text-white">Notre équipe vous contacte</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Vous recevez un message personnalisé (par email ou directement sur WhatsApp) avec un lien de paiement sécurisé (Stripe ou PayPal) et toutes les informations de votre formule.
                  </p>
                  
                  {/* Astuce Spam */}
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-200 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>💡 Astuce :</strong> Vérifiez vos spams / courriers indésirables. Notre e-mail peut s&apos;y retrouver lors du tout premier contact.
                    </span>
                  </div>
                </div>
              </div>

              {/* Étape 3 : Après paiement */}
              <div className="relative flex items-start gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-black text-sm shrink-0 mt-0.5">
                  3
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-black uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md">
                      Après paiement
                    </span>
                    <h3 className="text-sm font-bold text-white">Réception de vos accès IPTV</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Dès paiement confirmé, votre abonnement IPTV Smarters Pro 4K personnel et vos identifiants Xtream Codes arrivent par email en moins de 5 minutes, accompagnés d&apos;un guide d&apos;installation détaillé.
                  </p>
                </div>
              </div>

              {/* Étape 4 : Support technique permanent */}
              <div className="relative flex items-start gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-black text-sm shrink-0 mt-0.5">
                  4
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                      En continu
                    </span>
                    <h3 className="text-sm font-bold text-white">Support technique permanent</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Notre équipe reste disponible 24h/24 et 7j/7 pour vous accompagner : configuration, dépannage, conseils. Tant que vous êtes notre client, on est à vos côtés.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Support WhatsApp Callout */}
          <div className="border-t border-slate-800/80 pt-6 space-y-4">
            <div className="text-center space-y-1">
              <h3 className="text-sm sm:text-base font-extrabold text-white">
                Besoin d&apos;une réponse plus rapide ?
              </h3>
              <p className="text-xs text-slate-400">
                Notre équipe est joignable immédiatement sur WhatsApp pour toute question urgente ou activation prioritaire.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 transition-all uppercase tracking-wider cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp : {CONTACT.whatsappDisplay}</span>
              </a>
              <a
                href={CONTACT.emailUrl}
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl border border-slate-700 transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Email : {CONTACT.email}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Footer */}
          <div className="border-t border-slate-800/80 pt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <Link href="/" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Retour à l&apos;accueil</span>
            </Link>
            <span className="text-slate-700">&bull;</span>
            <Link href="/blog" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Lire nos guides</span>
            </Link>
            <span className="text-slate-700">&bull;</span>
            <Link href="/guide-installation" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Tv className="w-3.5 h-3.5" />
              <span>Tutoriel d&apos;installation</span>
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
