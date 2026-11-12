import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  HelpCircle, 
  ArrowRight, 
  Flame, 
  Star,
  ChevronRight,
  Clock,
  Tv,
  Award,
  MessageCircle
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { buildWhatsappUrl } from '@/lib/contact';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PAGE_CANONICAL = 'https://smarterspro12.net/tarifs';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Tarifs Abonnement IPTV 2026 : Comparatif des Formules & Prix France",
    description: "Découvrez les tarifs abonnement IPTV en France (2026) : formules 3, 6 et 12 mois 4K Ultra HD sans coupure dès 4,16€/mois avec activation WhatsApp en 15 min.",
    canonicalUrl: PAGE_CANONICAL,
    keywords: [
      'tarif abonnement iptv',
      'iptv prix',
      'prix abonnement iptv',
      'comparatif iptv france',
      'iptv pas cher',
      'abonnement iptv 12 mois prix',
      'meilleur tarif iptv 4k'
    ],
  });
}

export default function TarifsAbonnementPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${PAGE_CANONICAL}#product`,
        name: 'Abonnements IPTV Smarters Pro 4K France',
        description: 'Gamme complète d\'abonnements IPTV haute performance 4K avec technologie anti-freeze, +25 000 chaînes et +90 000 VOD.',
        brand: {
          '@type': 'Brand',
          name: 'IPTV Smarters Pro',
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'EUR',
          lowPrice: '19.99',
          highPrice: '120.00',
          offerCount: '6',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1420',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Quel est le prix moyen d\'un abonnement IPTV de qualité en France ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'En France, un abonnement IPTV fiable avec serveurs CDN dédiés et garantie anti-coupure coûte généralement entre 35€ et 60€ par an. Les offres à moins de 20€ par an cachent souvent des serveurs saturés qui coupent lors des grands matchs.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment sont livrés mes identifiants après le paiement ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vos identifiants Xtream Codes (nom d\'utilisateur, mot de passe, URL de serveur) et votre lien M3U Plus vous sont envoyés par e-mail et WhatsApp en moins de 15 minutes après validation de la commande.',
            },
          },
          {
            '@type': 'Question',
            name: 'Y a-t-il un engagement ou un renouvellement automatique ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non. Tous nos abonnements sont sans aucun engagement et sans prélèvement automatique. Vous recevez un simple rappel à la fin de votre période et décidez librement de renouveler.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_CANONICAL}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: SITE_CONFIG.domain,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Tarifs & Abonnements',
            item: PAGE_CANONICAL,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased w-full overflow-x-hidden">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <Header />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Fil d'Ariane" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <ol className="flex items-center flex-wrap gap-2 text-xs text-slate-400">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li>
            <span className="text-slate-200 font-medium" aria-current="page">Tarifs & Abonnements</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-xl sm:rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] sm:text-xs font-semibold max-w-full text-center">
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span>Tarifs Transparents &middot; Sans Engagement &middot; Zéro Frais Cachés</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Tarifs Abonnement IPTV : Comparatif des Formules & Prix France
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Consultez notre comparatif officiel des <strong>tarifs d'abonnement IPTV</strong> en France pour l'année 2026. Profitez d'une diffusion 4K Ultra HD sans coupure, d'un zapping instantané et d'une activation express en moins de 15 minutes.
          </p>
        </div>
      </header>

      {/* Main Pricing Grid */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: 3 Mois */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Formule Découverte
              </span>
              <h2 className="text-2xl font-bold text-white">Abonnement IPTV 3 Mois</h2>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">19.99 €</span>
                <span className="text-xs text-slate-400">/ 3 mois (6,66 €/m)</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Idéal pour tester la stabilité de nos serveurs 4K lors des grands événements sportifs sans engagement longue durée.
              </p>
              
              <ul className="space-y-3 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>1 Connexion active simultanée</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Qualité 4K, Full HD & HD</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>+25 000 Chaînes TV en Direct</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>+90 000 Films & Séries (VOD)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Replay 48h & EPG complet</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <Link
                href="/checkout?plan=Starter"
                className="w-full flex items-center justify-center gap-1.5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-slate-700 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Commander 3 Mois</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={buildWhatsappUrl("Bonjour, je souhaite commander la Formule Découverte 3 Mois à 19,99 €. Pouvez-vous m'envoyer le lien de paiement et mes accès 4K ?")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-600/20 dark:hover:bg-emerald-600/30 dark:text-emerald-300 dark:border-emerald-500/30 font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Commander via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 2: 12 Mois VIP (Highlight) */}
          <div className="rounded-2xl bg-slate-900 border-2 border-blue-500 p-5 sm:p-8 flex flex-col justify-between space-y-6 relative shadow-2xl shadow-blue-950/50">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider shadow-md whitespace-nowrap max-w-[92%] text-center">
              Meilleur Rapport Qualité / Prix
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                  Formule Recommandée
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold">
                  1 Mois Offert
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white">Abonnement IPTV 12 Mois VIP</h2>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">49.99 €</span>
                <span className="text-xs text-slate-400">/ an (soit 4,16 €/m)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Notre offre la plus plébiscitée. Bande passante maximale prioritaire, 1 connexion dédiée et zéro freeze garanti. Besoin de plusieurs écrans ? Consultez nos <Link href="/tarifs/iptv-multi-ecran" className="text-blue-400 underline">packs IPTV multi-écrans</Link>.
              </p>
              
              <ul className="space-y-3 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2 font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>1 Connexion simultanée (1 écran)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Ultra Haute Définition 4K HDR & 60 FPS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>+25 000 Chaînes Monde & Chaînes Sport</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>+90 000 VOD actualisées quotidiennement</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Assistance prioritaire VIP WhatsApp 7j/7</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <Link
                href="/checkout?plan=Premium"
                className="w-full flex items-center justify-center gap-1.5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Commander 12 Mois VIP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={buildWhatsappUrl("Bonjour, je souhaite commander l'Abonnement 12 Mois VIP (1 Écran + 1 Mois Offert) à 49,99 €. Pouvez-vous m'envoyer le lien de paiement et mes accès 4K ?")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-600/20 dark:hover:bg-emerald-600/30 dark:text-emerald-300 dark:border-emerald-500/30 font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Commander via WhatsApp</span>
              </a>
              <Link
                href="/abonnement-iptv-12-mois"
                className="w-full block text-center text-xs text-blue-600 dark:text-blue-400 hover:underline pt-1 font-semibold"
              >
                Découvrir tous les détails de l'offre 12 mois &rarr;
              </Link>
            </div>
          </div>

          {/* Card 3: 6 Mois */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Formule Confort
              </span>
              <h2 className="text-2xl font-bold text-white">Abonnement IPTV 6 Mois</h2>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">29.99 €</span>
                <span className="text-xs text-slate-400">/ 6 mois (5,00 €/m)</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Le juste équilibre pour suivre la saison sportive complète en bénéficiant de tous les flux premium.
              </p>
              
              <ul className="space-y-3 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>1 Connexion active simultanée</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Qualité 4K & Full HD</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>+25 000 Chaînes TV en Direct</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>+90 000 Films & Séries (VOD)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Support client francophone 7j/7</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <Link
                href="/checkout?plan=Confort"
                className="w-full flex items-center justify-center gap-1.5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-slate-700 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Commander 6 Mois</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={buildWhatsappUrl("Bonjour, je souhaite commander la Formule Confort 6 Mois à 29,99 €. Pouvez-vous m'envoyer le lien de paiement et mes accès 4K ?")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-600/20 dark:hover:bg-emerald-600/30 dark:text-emerald-300 dark:border-emerald-500/30 font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Commander via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section Packs Multi-Écrans */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Packs IPTV Multi-Écrans : 2 à 5 Connexions Simultanées pour Toute la Famille
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Les formules ci-dessus incluent <strong>1 écran</strong>. Pour regarder un match au salon pendant qu&apos;un film tourne dans une chambre, passez à un <Link href="/tarifs/iptv-multi-ecran" className="text-blue-400 hover:underline">abonnement IPTV multi-écrans</Link> : chaque appareil diffuse son propre programme, sans coupure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-6 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">2 Écrans</span>
                <h3 className="text-lg font-bold text-white">Pack Duo</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">69,99 €</span>
                  <span className="text-xs text-slate-400">/ 12 mois</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">Idéal pour un couple : 2 flux 4K indépendants, soit environ 35 € par écran.</p>
                <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>2 Connexions 4K actives indépendantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>+25 000 Chaînes &amp; +90 000 VOD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Serveurs CDN 10 Gbps Anti-Coupure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Guide EPG 7 jours &amp; Replay inclus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Assistance prioritaire WhatsApp 7j/7</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <Link
                  href="/checkout?plan=Pack2"
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Commander en ligne</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={buildWhatsappUrl("Bonjour, je souhaite commander le Pack Duo (2 Écrans en simultané) à 69,99 € / 12 mois. Pouvez-vous m'envoyer le lien de paiement et mes accès 4K ?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Commander via WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900 border-2 border-blue-500/60 p-5 sm:p-6 flex flex-col justify-between space-y-5 shadow-xl shadow-blue-500/10">
              <div className="space-y-3">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">3 Écrans &middot; Populaire</span>
                <h3 className="text-lg font-bold text-white">Pack Trio Famille</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">100 €</span>
                  <span className="text-xs text-slate-400">/ 12 mois</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">Salon, chambre et mobile en parallèle, soit environ 33,33 € par écran.</p>
                <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>3 Connexions 4K actives simultanées</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Salon, chambre et mobile en parallèle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>+25 000 Chaînes &amp; +90 000 VOD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Serveurs Ultra-Haute Performance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Support VIP Dédié 24h/24 &amp; 7j/7</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <Link
                  href="/checkout?plan=Pack3"
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Commander en ligne</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={buildWhatsappUrl("Bonjour, je souhaite commander le Pack Trio (3 Écrans en simultané) à 100 € / 12 mois. Pouvez-vous m'envoyer le lien de paiement et mes accès 4K ?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Commander via WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-6 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">4 Écrans</span>
                <h3 className="text-lg font-bold text-white">Pack Maxi Multi-Room</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">120 €</span>
                  <span className="text-xs text-slate-400">/ 12 mois</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">Pour grandes familles et colocations : 30 € par écran sur l&apos;année.</p>
                <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>4 Connexions 4K indépendantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Seulement 30 € par écran pour 1 an</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Tout le bouquet Sport 4K, Cinéma &amp; TNT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Bande passante dédiée prioritaire</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Support VIP Prioritaire 24/7</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <Link
                  href="/checkout?plan=Pack4"
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Commander en ligne</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={buildWhatsappUrl("Bonjour, je souhaite commander le Pack Maxi (4 Écrans en simultané) à 120 € / an. Pouvez-vous m'envoyer le lien de paiement et mes accès 4K ?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Commander via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <Link
            href="/tarifs/iptv-multi-ecran"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300"
          >
            <span>Comparer tous les packs IPTV multi-écrans</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>

        {/* Section Comparatif Marché & Rassurance */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 sm:p-8 space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Analyse des Prix IPTV en France : Pourquoi les Offres Pas Chères Coupent ?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Sur le marché français, de nombreux fournisseurs affichent des tarifs dérisoires (15€ ou 20€ par an) en surchargeant leurs serveurs. Dès qu'un grand match de football débute (Ligue des Champions, Classico, Coupe du Monde), ces serveurs à bas coût saturent instantanément et provoquent l'écran noir.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Chez <strong>IPTV Smarters Pro France</strong>, notre infrastructure repose sur des grappes de serveurs CDN européens à haute bande passante (jusqu'à 10 Gb/s par nœud) avec redondance automatique. Ce protocole anti-freeze garantit un taux de disponibilité supérieur à 99.9%, même lors des pics d'audience les plus extrêmes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm font-bold text-white">Activation en 15 Minutes</h3>
              <p className="text-xs text-slate-400">
                Traitement manuel prioritaire de votre commande pour vous garantir des identifiants vérifiés et opérationnels.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">Zéro Renouvellement Caché</h3>
              <p className="text-xs text-slate-400">
                Paiement unique sans prélèvement automatique. Vous êtes totalement libre de renouveler ou non à la fin du terme.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <Tv className="w-5 h-5 text-purple-400" />
              <h3 className="text-sm font-bold text-white">Multi-Appareils 100% Compatible</h3>
              <p className="text-xs text-slate-400">
                Fonctionne sur <strong>Smart TV Samsung &amp; LG</strong>, <strong>Firestick</strong>, <strong>Box Android</strong>, <strong>Windows</strong>, Mac, <strong>iOS, iPhone</strong>, iPad et <strong>Android</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Tableau Récapitulatif des Formules & Compatibilité */}
        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Tableau Récapitulatif des Tarifs Abonnement IPTV &amp; Prestations Incluses
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Quel que soit le forfait choisi dans notre grille de <strong>tarifs abonnement IPTV</strong>, vous accédez à la même qualité de flux <strong>HEVC H.265 en 4K 60 FPS</strong>, au guide EPG 7 jours et au <Link href="/catalogue/vod" className="text-blue-400 hover:underline">catalogue VOD de +90 000 titres</Link>. Seule la durée et le nombre d&apos;écrans simultanés varient :
            </p>
          </div>

          <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[560px] text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase">
                  <th className="py-3 pr-4">Formule</th>
                  <th className="py-3 px-4">Prix Total</th>
                  <th className="py-3 px-4">Coût Mensuel</th>
                  <th className="py-3 px-4">Connexions</th>
                  <th className="py-3 pl-4">Compatibilité &amp; Protocoles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 text-slate-300">
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Découverte 3 Mois</td>
                  <td className="py-3 px-4">19,99 €</td>
                  <td className="py-3 px-4">6,66 € / mois</td>
                  <td className="py-3 px-4">1 Écran</td>
                  <td className="py-3 pl-4">API Xtream Codes &amp; M3U (Tous appareils)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Confort 6 Mois</td>
                  <td className="py-3 px-4">29,99 €</td>
                  <td className="py-3 px-4">5,00 € / mois</td>
                  <td className="py-3 px-4">1 Écran</td>
                  <td className="py-3 pl-4">API Xtream Codes &amp; M3U + Replay 7j</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-emerald-400">VIP 12 Mois (+1 Mois Offert)</td>
                  <td className="py-3 px-4 font-bold text-emerald-400">49,99 €</td>
                  <td className="py-3 px-4 font-bold text-emerald-400">4,16 € / mois</td>
                  <td className="py-3 px-4 font-bold text-emerald-400">1 Écran</td>
                  <td className="py-3 pl-4 font-semibold text-emerald-400">Priorité CDN 10 Gbps + Support VIP 7j/7</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-white"><Link href="/tarifs/iptv-multi-ecran" className="text-blue-400 hover:underline">Packs Famille Multi-Écrans</Link></td>
                  <td className="py-3 px-4">69,99 € à 120 €</td>
                  <td className="py-3 px-4">Dès 5,83 € / mois</td>
                  <td className="py-3 px-4">2 à 4 Écrans</td>
                  <td className="py-3 pl-4">Flux parallèles multi-room &amp; mobilité 4G/5G</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section Applications, Matériels & Anti-Coupure */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Quels Lecteurs et Appareils Utiliser avec Votre Abonnement IPTV ?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Dès validation de votre commande, vous recevez vos <strong>identifiants Xtream Codes</strong> (Server URL, Username, Password) et votre <strong>playlist M3U Plus</strong> sur WhatsApp et par e-mail. Vous pouvez les configurer immédiatement sur votre matériel : <Link href="/guide-installation/smart-tv-samsung-lg" className="text-blue-400 hover:underline">Smart TV Samsung &amp; LG</Link>, <Link href="/guide-installation/fire-tv-stick" className="text-blue-400 hover:underline">Fire TV Stick 4K</Link>, <Link href="/guide-installation/android-tv-box" className="text-blue-400 hover:underline">Box Android TV</Link> (Nvidia Shield, Xiaomi Mi Box), <Link href="/guide-installation/apple-tv-ios" className="text-blue-400 hover:underline">Apple TV &amp; iOS</Link>, et <Link href="/guide-installation/pc-mac-windows" className="text-blue-400 hover:underline">PC / Mac</Link>.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider">
                Les 7 Applications IPTV Certifiées &amp; Compatibles avec nos Formules :
              </h3>
              <Link href="/applications" className="text-xs font-semibold text-blue-400 hover:underline hidden sm:inline-flex items-center gap-1">
                <span>Hub Applications</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <Link
                href="/applications/iptv-smarters-pro"
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-colors flex items-start gap-3 group"
              >
                <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <Tv className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white group-hover:text-blue-400 transition-colors">IPTV Smarters Pro</span>
                  <span className="block text-[11px] text-slate-400">Smart TV, Android, iOS, Windows, Mac</span>
                </div>
              </Link>

              <Link
                href="/applications/tivimate"
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-colors flex items-start gap-3 group"
              >
                <div className="p-2 rounded-lg bg-emerald-600/10 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                  <Tv className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">TiviMate IPTV Player</span>
                  <span className="block text-[11px] text-slate-400">Android TV, Google TV, Fire Stick</span>
                </div>
              </Link>

              <Link
                href="/applications/ibo-player"
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-500/40 transition-colors flex items-start gap-3 group"
              >
                <div className="p-2 rounded-lg bg-purple-600/10 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0">
                  <Tv className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white group-hover:text-purple-400 transition-colors">IBO Player Pro</span>
                  <span className="block text-[11px] text-slate-400">Smart TV Samsung (Tizen) &amp; LG (webOS)</span>
                </div>
              </Link>

              <Link
                href="/applications/flix-iptv"
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-rose-500/40 transition-colors flex items-start gap-3 group"
              >
                <div className="p-2 rounded-lg bg-rose-600/10 text-rose-400 group-hover:bg-rose-600 group-hover:text-white transition-colors shrink-0">
                  <Tv className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white group-hover:text-rose-400 transition-colors">Flix IPTV</span>
                  <span className="block text-[11px] text-slate-400">Activation MAC Samsung &amp; LG Content Store</span>
                </div>
              </Link>

              <Link
                href="/applications/gse-smart-iptv"
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/40 transition-colors flex items-start gap-3 group"
              >
                <div className="p-2 rounded-lg bg-indigo-600/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                  <Tv className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white group-hover:text-indigo-400 transition-colors">GSE Smart IPTV</span>
                  <span className="block text-[11px] text-slate-400">iPhone, iPad, tvOS Apple TV, Mac</span>
                </div>
              </Link>

              <Link
                href="/applications/smart-iptv"
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-colors flex items-start gap-3 group"
              >
                <div className="p-2 rounded-lg bg-amber-600/10 text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-colors shrink-0">
                  <Tv className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white group-hover:text-amber-400 transition-colors">Smart IPTV (SIPTV)</span>
                  <span className="block text-[11px] text-slate-400">Portail MAC officiel Samsung &amp; LG</span>
                </div>
              </Link>

              <Link
                href="/applications/xciptv"
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-start gap-3 group"
              >
                <div className="p-2 rounded-lg bg-cyan-600/10 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors shrink-0">
                  <Tv className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">XCIPTV Player</span>
                  <span className="block text-[11px] text-slate-400">Double moteur ExoPlayer / VLC Android</span>
                </div>
              </Link>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed pt-2">
            En cas de bridage par votre opérateur (Orange, Free, SFR, Bouygues), consultez notre guide <Link href="/guide-installation/contourner-blocage-fai-iptv-dns-vpn" className="text-blue-400 hover:underline">DNS Cloudflare 1.1.1.1 &amp; VPN</Link> ainsi que notre <Link href="/guide-depannage" className="text-blue-400 hover:underline">guide de dépannage IPTV</Link> pour éliminer tout risque de coupure ou d&apos;écran noir.
          </p>
        </section>

        {/* Section FAQ Tarifs */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Questions Fréquentes sur nos Tarifs & Abonnements
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Retrouvez toutes les précisions sur les moyens de paiement et la gestion de votre abonnement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 sm:p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Quels moyens de paiement sont acceptés ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Nous acceptons les règlements sécurisés par Carte Bancaire (Visa, Mastercard) et PayPal pour vous garantir une protection maximale lors de votre souscription.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Puis-je changer d'appareil en cours d'abonnement ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Oui. Vos codes d'accès Xtream ne sont pas verrouillés sur un seul appareil. Vous pouvez configurer votre abonnement sur votre Smart TV dans le salon et l'utiliser sur votre smartphone ou tablette lors de vos déplacements.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Comment regarder sur 2 écrans ou plus (Multi-connexions) ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Chaque formule 3, 6 et 12 mois inclut 1 connexion simultanée. Pour regarder sur 2 à 4 écrans en même temps, choisissez un pack <Link href="/tarifs/iptv-multi-ecran" className="text-blue-400 underline">IPTV multi-écrans</Link> : Duo 2 écrans à 69,99 €, Trio 3 écrans à 100 € ou Maxi 4 écrans à 120 € pour 12 mois.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Existe-t-il une période d'essai ou un test IPTV gratuit ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Nous proposons la formule Découverte 3 Mois à 19.99€ ainsi qu'un diagnostic de compatibilité direct sur WhatsApp. Consultez notre page dédiée au <Link href="/test-iptv-gratuit" className="text-blue-400 underline">test IPTV gratuit 24h et essai 4K</Link> pour plus de détails.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Y a-t-il des frais cachés ou un engagement de reconduction ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Absolument aucun. Tous nos tarifs correspondent à un paiement unique forfaitaire sans prélèvement automatique récurrent. Vous êtes libre de renouveler ou non votre accès à échéance.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
