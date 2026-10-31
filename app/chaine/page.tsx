import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Tv, 
  Radio, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Flame, 
  ShieldCheck, 
  Globe, 
  Trophy, 
  Film,
  Clock
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/chaine';

export function generateMetadata(): Metadata {
  const title = "Liste des Chaînes TV IPTV 2026 : +25 000 Chaînes en Direct 4K & HD";
  const description = "Consultez le bouquet complet de chaînes IPTV en France : TNT française HD, chaînes sportives (beIN, Canal+, RMC), cinéma et chaînes internationales en 4K fluide.";

  return {
    title,
    description,
    keywords: [
      'liste chaines iptv',
      'chaines tnt iptv',
      'iptv canal plus',
      'chaines sport iptv',
      'bouquet chaines iptv france',
      'toutes les chaines iptv',
      'iptv direct tv 4k'
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

export default function ChainePage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BroadcastService',
        '@id': `${PAGE_CANONICAL}/#broadcast`,
        name: 'Service Bouquet Chaînes IPTV Smarters Pro 4K',
        broadcastDisplayName: 'IPTV Smarters Pro Direct TV',
        inLanguage: 'fr-FR',
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
            name: 'Chaînes TV',
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
            <span className="text-slate-200 font-medium" aria-current="page">Chaînes TV</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Radio className="w-3.5 h-3.5" />
            <span>Bouquet Télévisuel N°1 &middot; +25 000 Canaux &middot; 4K 60 FPS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Liste des Chaînes TV IPTV : +25 000 Chaînes en Direct Haute Définition
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Accédez à toutes vos chaînes françaises et mondiales préférées en qualité 4K et Full HD. Retrouvez l'intégralité de la TNT française, les plus grands canaux de sport, cinéma, jeunesse et documentaires sans coupure.
          </p>
        </div>
      </header>

      {/* Channel Categories Breakdown */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* TNT France */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Tv className="w-6 h-6 text-blue-400" />
            <h2 className="text-base font-bold text-white">TNT Française HD & 4K</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              TF1, France 2, France 3, Canal+, France 5, M6, Arte, C8, W9, TMC, TFX, BFM TV, CNews, L'Équipe 21, RMC Découverte et l'ensemble des 27 chaînes gratuites nationales.
            </p>
          </div>

          {/* Sport Premium */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Trophy className="w-6 h-6 text-amber-400" />
            <h2 className="text-base font-bold text-white">Bouquets Sportifs en Direct</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              beIN Sports 1 à 10, Canal+ Sport, Canal+ Foot, RMC Sport 1 et 2, Eurosport 1 & 2, DAZN, Sky Sports, TNT Sports et chaînes de clubs.
            </p>
          </div>

          {/* Cinéma & Séries */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Film className="w-6 h-6 text-purple-400" />
            <h2 className="text-base font-bold text-white">Cinéma & Divertissement</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Canal+ Cinéma, Canal+ Séries, Canal+ Grand Écran, OCS, Ciné+ Premier, Ciné+ Frisson, TCM Cinéma, Paramount Channel, Comédie+ et chaînes jeunesse.
            </p>
          </div>

          {/* Monde & Francophonie */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Globe className="w-6 h-6 text-emerald-400" />
            <h2 className="text-base font-bold text-white">International & Francophonie</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Chaînes belges (RTBF, RTL TVI), chaînes suisses (RTS 1 & 2), chaînes canadiennes, chaînes arabes, espagnoles, italiennes, portugaises, turques et anglaises.
            </p>
          </div>

        </div>

        {/* EPG & Replay Features */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-bold text-white">
              Guide Électronique des Programmes (EPG) & Replay Intégrés
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Ne ratez aucun de vos programmes favoris. Tous nos flux TV directs sont synchronisés en temps réel avec le guide TV officiel sur 7 jours. Vous visualisez la grille horaire, le résumé des émissions et pouvez remonter jusqu'à 48 heures en arrière (Catch-up / Replay) sur les chaînes principales pour revoir un match ou un film manqué.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm font-bold text-white">Replay 48h Disponible</h3>
              <p className="text-xs text-slate-400">Revenez en arrière à tout moment sur vos chaînes favorites.</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <Tv className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">EPG Synchronisé en Direct</h3>
              <p className="text-xs text-slate-400">Grille horaire complète avec résumés et fiches des émissions.</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <ShieldCheck className="w-5 h-5 text-purple-400" />
              <h3 className="text-sm font-bold text-white">Qualité 60 Images / Seconde</h3>
              <p className="text-xs text-slate-400">Idéal pour le sport en direct sans effet de saccade.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-900/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Prêt à débloquer toutes les chaînes TV en 4K ?</h3>
            <p className="text-xs text-slate-300">Formule annuelle avec 1 mois offert et 2 connexions simultanées.</p>
          </div>
          <Link
            href="/tarifs-abonnement"
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-lg"
          >
            Consulter les Formules d'Abonnement &rarr;
          </Link>
        </div>

      </main>
    </div>
  );
}
