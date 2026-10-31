import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Trophy, 
  Flame, 
  Tv, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  Clock, 
  Award,
  Radio
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/sport';

export function generateMetadata(): Metadata {
  const title = "Football & Sports en Direct IPTV : Matchs Streaming 4K Sans Coupure";
  const description = "Regardez tout le football et le sport en direct avec l'IPTV 4K en France : Ligue 1, Ligue des Champions, Premier League, F1, UFC et NBA en 60 FPS sans lag.";

  return {
    title,
    description,
    keywords: [
      'iptv sport',
      'football streaming iptv',
      'ligue 1 streaming iptv',
      'champions league iptv',
      'iptv formule 1 direct',
      'ufc rmc sport iptv',
      'sport streaming 4k sans coupure'
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

export default function SportPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SportsEvent',
        '@id': `${PAGE_CANONICAL}/#sports-hub`,
        name: 'Diffusion Directe Sports & Football 4K IPTV Smarters Pro',
        description: 'Retransmission en ultra haute définition 4K 60 FPS de l\'intégralité des compétitions sportives mondiales.',
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
            name: 'Sport & Football',
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
            <span className="text-slate-200 font-medium" aria-current="page">Sport & Football</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Trophy className="w-3.5 h-3.5" />
            <span>Tous les Grands Matchs en Direct &middot; 4K Ultra HD &middot; 60 FPS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Football & Sports en Direct IPTV : Matchs Streaming 4K Sans Coupure
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Vivez l'adrénaline du direct sans latence ni écran noir. Retrouvez la Ligue 1, l'UEFA Champions League, la Premier League, la Formule 1, l'UFC et la NBA en qualité 60 FPS calibrée pour les passionnés de sport.
          </p>
        </div>
      </header>

      {/* Sports Categories Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Trophy className="w-7 h-7 text-emerald-400" />
            <h2 className="text-lg font-bold text-white">Ligue 1 & Football Européen</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tous les matchs de Ligue 1, Ligue des Champions UEFA, Premier League anglaise, Liga espagnole, Serie A italienne et Bundesliga en direct intégral.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Zap className="w-7 h-7 text-amber-400" />
            <h2 className="text-lg font-bold text-white">Formule 1 & Moto GP</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Vivez chaque week-end de course : Essais libres, qualifications et Grand Prix en direct avec caméras embarquées et commentaires en français.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Flame className="w-7 h-7 text-red-400" />
            <h2 className="text-lg font-bold text-white">UFC & Sports de Combat</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Toutes les soirées UFC numérotées, Fight Nights, boxe anglaise internationale et événements MMA diffusés en haute définition.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Award className="w-7 h-7 text-purple-400" />
            <h2 className="text-lg font-bold text-white">Tennis & Grand Chelem</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Roland-Garros, Wimbledon, US Open, Open d'Australie et tournois ATP Masters 1000 sans aucune interruption publicitaire.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Tv className="w-7 h-7 text-blue-400" />
            <h2 className="text-lg font-bold text-white">NBA & Basketball International</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Saison régulière, Playoffs NBA, Finales, EuroLeague et championnats nationaux diffusés chaque nuit en direct.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Radio className="w-7 h-7 text-sky-400" />
            <h2 className="text-lg font-bold text-white">Rugby Top 14 & 6 Nations</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              L'intégralité du championnat Top 14, la Champions Cup et le Tournoi des Six Nations avec les analyses d'avant et après-match.
            </p>
          </div>

        </div>

        {/* Why our servers don't freeze */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-bold text-white">
              Pourquoi Nos Flux Sportifs Ne Coupent Pas le Soir de Match ?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Lors des chocs comme PSG - Real Madrid ou la finale de Ligue des Champions, des millions de spectateurs se connectent en même temps. Les serveurs IPTV standards saturent immédiatement sous la charge.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Notre réseau utilise une architecture d'équilibrage de charge dynamique répartie sur plus de 15 nœuds de serveurs européens dédiés. Chaque utilisateur est automatiquement redirigé vers le serveur ayant la plus grande bande passante disponible pour vous garantir un direct à 60 FPS sans buffering ni décalage par rapport à vos voisins.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-900/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Ne manquez plus aucun grand match</h3>
            <p className="text-xs text-slate-300">Formule 12 mois VIP avec 1 mois offert et 2 connexions simultanées.</p>
          </div>
          <Link
            href="/checkout?plan=Premium"
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-lg"
          >
            Activer mon Accès Sport 4K &rarr;
          </Link>
        </div>

      </main>
    </div>
  );
}
