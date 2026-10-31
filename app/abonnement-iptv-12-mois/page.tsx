import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Flame, 
  Star,
  ChevronRight,
  Clock,
  Tv,
  Award,
  Radio,
  Lock,
  Headphones
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/abonnement-iptv-12-mois';

export function generateMetadata(): Metadata {
  const title = "Abonnement IPTV 12 Mois : Formule VIP 4K Sans Coupure (1 Mois Offert)";
  const description = "Offre officielle Abonnement IPTV 12 mois en France : Qualité 4K HDR, +25 000 chaînes, +90 000 VOD, 2 écrans inclus et garantie anti-freeze 99.9%. Dès 3,33€/mois.";

  return {
    title,
    description,
    keywords: [
      'abonnement iptv 12 mois',
      'iptv abonnement 12 mois',
      'iptv 12 mois france',
      'abonnement iptv 1 an',
      'iptv 12 mois 4k',
      'meilleur abonnement iptv 12 mois',
      'iptv smarters pro 12 mois'
    ],
    alternates: {
      canonical: PAGE_CANONICAL,
      languages: {
        'fr-FR': `${PAGE_CANONICAL}?lang=fr-fr`,
        'fr-BE': `${PAGE_CANONICAL}?lang=fr-be`,
        'fr-CH': `${PAGE_CANONICAL}?lang=fr-ch`,
        'fr-CA': `${PAGE_CANONICAL}?lang=fr-ca`,
        'x-default': PAGE_CANONICAL,
      },
    },
    openGraph: {
      title,
      description,
      url: PAGE_CANONICAL,
      siteName: SITE_CONFIG.name,
      locale: 'fr_FR',
      type: 'website',
    },
  };
}

export default function AbonnementIptv12MoisPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${PAGE_CANONICAL}/#product`,
        name: 'Abonnement IPTV 12 Mois VIP 4K France',
        description: 'Formule VIP annuelle IPTV Smarters Pro 4K sans coupure avec 2 connexions simultanées, +25 000 chaînes directes et assistance prioritaire.',
        brand: {
          '@type': 'Brand',
          name: 'IPTV Smarters Pro',
        },
        offers: {
          '@type': 'Offer',
          price: '39.99',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
          url: `${SITE_CONFIG.domain}/checkout?plan=Premium`,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '984',
          bestRating: '5',
          worstRating: '1',
        },
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
            item: `${SITE_CONFIG.domain}/tarifs-abonnement`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Abonnement IPTV 12 Mois',
            item: PAGE_CANONICAL,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Fil d'Ariane" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <ol className="flex items-center space-x-2 text-xs text-slate-400">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li>
            <Link href="/tarifs-abonnement" className="hover:text-blue-400 transition-colors">Tarifs</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li>
            <span className="text-slate-200 font-medium" aria-current="page">Abonnement 12 Mois VIP</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
              <Flame className="w-4 h-4 text-orange-400" />
              <span>N°1 des Ventes en France &middot; Formule Annuelle VIP</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Abonnement IPTV 12 Mois : La Formule VIP 4K Sans Coupure
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Optez pour la tranquillité totale avec l'<strong>abonnement IPTV 12 mois</strong>. Profitez de plus de 25 000 chaînes mondiales et 90 000 films et séries en 4K Ultra HD à seulement <strong>3,33 € par mois</strong> (1 mois offert inclus). Inclus d'office : 2 connexions simultanées et assistance VIP 7j/7.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/checkout?plan=Premium"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
              >
                <span>Commander 12 Mois (39.99 €)</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/tarifs-abonnement"
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold text-sm transition-all"
              >
                <span>Comparer les autres durées</span>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="space-y-1">
                <span className="text-xl font-black text-white">3,33 €</span>
                <span className="block text-xs text-slate-400">Coût mensuel réel</span>
              </div>
              <div className="space-y-1">
                <span className="text-xl font-black text-emerald-400">2 Écrans</span>
                <span className="block text-xs text-slate-400">Connexions incluses</span>
              </div>
              <div className="space-y-1">
                <span className="text-xl font-black text-blue-400">99.9%</span>
                <span className="block text-xs text-slate-400">Stabilité anti-freeze</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-blue-500/50 p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Abonnement Annuel</span>
                  <h2 className="text-xl font-bold text-white">Pack VIP 12 Mois</h2>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-white">39.99 €</span>
                  <span className="block text-[11px] text-emerald-400 font-bold">1 Mois Offert</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="font-semibold text-white">2 Connexions simultanées indépendantes</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Tous les flux en 4K Ultra HD & 60 FPS</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>+25 000 Chaînes Monde & Chaînes Sportives</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>+90 000 VOD (Films & Séries récentes en FR)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Guide TV EPG 7 jours synchronisé</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Assistance VIP prioritaire par WhatsApp 7j/7</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Garantie de remplacement immédiat en cas de panne</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/checkout?plan=Premium"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-blue-600/40 transition-all hover:scale-[1.02]"
                >
                  <span>Activer mon Abonnement 12 Mois</span>
                  <Zap className="w-4 h-4 text-amber-300" />
                </Link>
                <span className="block text-center text-[11px] text-slate-500 mt-2">
                  Activation manuelle vérifiée en moins de 15 minutes
                </span>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Content Deep Dive */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Section 1: Pourquoi 12 Mois est l'offre N°1 */}
        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Pourquoi l'Abonnement IPTV 12 Mois est le Choix Préféré des Français ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Souscrire à un <strong>abonnement IPTV 12 mois</strong> vous offre le coût au mois le plus économique du marché (seulement 3,33€/mois contre 6,66€/mois pour la formule trimestrielle). Vous ne subissez aucune hausse de tarif pendant toute une année et êtes garanti de suivre l'intégralité de la saison sportive (Ligue 1, Champions League, Formule 1, UFC, tournois du Grand Chelem).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <Radio className="w-6 h-6 text-blue-400" />
              <h3 className="text-base font-bold text-white">Serveurs VIP Prioritaires</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Les flux des abonnés 12 mois sont routés en priorité absolue sur nos serveurs CDN européens les plus rapides afin d'éviter tout lag le soir des grands matchs.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <Tv className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Multi-Écrans pour le Foyer</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Deux téléviseurs ou appareils peuvent diffuser des chaînes ou des films distincts en simultané sans aucune interférence.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <Headphones className="w-6 h-6 text-purple-400" />
              <h3 className="text-base font-bold text-white">Assistance WhatsApp VIP</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Un canal d'assistance direct avec nos techniciens francophones 7j/7 pour vous aider lors de l'installation ou en cas de question.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Matériel Compatible */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Installation Universelle en Moins de 2 Minutes
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Votre abonnement 12 mois fonctionne immédiatement avec vos applications et appareils habituels :
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <span className="font-bold text-sm text-white block">Amazon Fire TV</span>
              <span className="text-xs text-slate-400">Stick Lite, 4K, Max & Cube</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <span className="font-bold text-sm text-white block">Smart TV</span>
              <span className="text-xs text-slate-400">Samsung Tizen & LG webOS</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <span className="font-bold text-sm text-white block">Box Android TV</span>
              <span className="text-xs text-slate-400">Nvidia Shield, Xiaomi Mi Box</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <span className="font-bold text-sm text-white block">Apple & Ordinateur</span>
              <span className="text-xs text-slate-400">Apple TV 4K, iPhone, Mac, Windows</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-900/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white">Prêt à activer votre formule 12 mois VIP ?</h3>
              <p className="text-xs text-slate-300">Paiement sécurisé, sans prélèvement automatique, activation en 15 minutes.</p>
            </div>
            <Link
              href="/checkout?plan=Premium"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-lg"
            >
              Passer Commande &rarr;
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
