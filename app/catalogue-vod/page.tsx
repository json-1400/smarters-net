import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Film, 
  Tv, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Flame, 
  ShieldCheck,
  Star,
  Layers,
  Zap,
  Users
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/catalogue-vod';

export function generateMetadata(): Metadata {
  const title = "Catalogue VOD IPTV : +90 000 Films, Séries & 4K Ultra HD (2026)";
  const description = "Explorez notre catalogue VOD IPTV complet en France : Plus de 90 000 films récents et séries complètes en 4K UHD, VF et VOSTFR avec mises à jour quotidiennes.";

  return {
    title,
    description,
    keywords: [
      'catalogue vod iptv',
      'films iptv',
      'series iptv france',
      'iptv 4k uhd',
      'iptv vod francais',
      'iptv vs netflix streaming',
      'iptv multi ecrans vod'
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

export default function CatalogueVodPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${PAGE_CANONICAL}/#product-vod`,
        name: 'Catalogue VOD IPTV Smarters Pro 4K',
        description: 'Vidéothèque de plus de 90 000 films et séries en ultra haute définition 4K avec son Dolby multilingue.',
        brand: {
          '@type': 'Brand',
          name: 'IPTV Smarters Pro',
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
            name: 'Catalogue VOD',
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
            <span className="text-slate-200 font-medium" aria-current="page">Catalogue VOD</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Médiathèque 4K &middot; +90 000 Titres &middot; Mises à Jour Quotidiennes</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Catalogue VOD IPTV : +90 000 Films, Séries & Qualité 4K Ultra HD
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Accédez à une cinémathèque sans équivalent directement sur votre téléviseur. Toutes les dernières sorties cinéma, les saisons complètes de vos séries favorites en version française (VF) et originale sous-titrée (VOSTFR).
          </p>
        </div>
      </header>

      {/* Content Breakdown */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-16">
        
        {/* Categories Showcase */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Film className="w-7 h-7 text-blue-400" />
            <h2 className="text-lg font-bold text-white">Films Box-Office & Cinéma</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Des milliers de longs-métrages classés par genre (Action, Comédie, Thriller, Science-Fiction, Animation) disponibles en 4K Ultra HD avec audio Dolby 5.1.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Tv className="w-7 h-7 text-purple-400" />
            <h2 className="text-lg font-bold text-white">Séries Complètes & Nouveautés</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Intégrales des séries культes et nouveaux épisodes ajoutés quelques heures seulement après leur première diffusion internationale.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Users className="w-7 h-7 text-emerald-400" />
            <h2 className="text-lg font-bold text-white">Multi-Écrans Famille</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Vos enfants peuvent regarder un dessin animé dans leur chambre pendant que vous profitez d'un film 4K dans le salon sans ralentissement.
            </p>
          </div>
        </section>

        {/* Comparatif IPTV vs Plateformes SVOD Multiples */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-bold text-white">
              IPTV Tout-en-Un vs Cumul des Abonnements SVOD Classiques
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Aujourd'hui, cumuler Netflix, Prime Video, Disney+, Max et les chaînes payantes coûte plus de 80€ par mois. Notre formule IPTV 12 mois VIP regroupe tous ces contenus en une interface unique pour seulement <strong>3,33€ par mois</strong>.
            </p>
          </div>

          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300 border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase text-[11px]">
                  <th className="py-3 px-4">Critère</th>
                  <th className="py-3 px-4">Abonnements SVOD Séparés</th>
                  <th className="py-3 px-4 text-blue-400">Abonnement IPTV Smarters Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Coût mensuel moyen</td>
                  <td className="py-3 px-4 text-red-400">75 € à 95 € / mois</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">Dès 3,33 € / mois (39.99 €/an)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Volume de films & séries</td>
                  <td className="py-3 px-4">Fragmenté sur 5 applications</td>
                  <td className="py-3 px-4 font-semibold text-white">+90 000 titres en 1 seule app</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Chaînes TV en Direct & Sport</td>
                  <td className="py-3 px-4 text-slate-500">Non inclus (surcoût nécessaire)</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">+25 000 chaînes incluses</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Résolution maximale</td>
                  <td className="py-3 px-4">Surcoût pour l'option 4K</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">4K Ultra HD & 60 FPS inclus</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Section */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-900/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Accédez immédiatement à toute la VOD 4K</h3>
            <p className="text-xs text-slate-300">Activez votre abonnement en 15 minutes et profitez du cinéma illimité.</p>
          </div>
          <Link
            href="/checkout?plan=Premium"
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-lg"
          >
            Découvrir la Formule 12 Mois VIP &rarr;
          </Link>
        </div>

      </main>
    </div>
  );
}
