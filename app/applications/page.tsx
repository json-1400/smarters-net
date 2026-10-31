import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Tv, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Star, 
  Flame, 
  ShieldCheck, 
  Smartphone, 
  Monitor,
  Zap
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/applications';

export function generateMetadata(): Metadata {
  const title = "Meilleures Applications IPTV 2026 : Comparatif & Téléchargement France";
  const description = "Découvrez le comparatif des meilleures applications IPTV en France : IPTV Smarters Pro, TiviMate, IBO Player, Smart IPTV et XCIPTV. Liens et tutoriels officiels.";

  return {
    title,
    description,
    keywords: [
      'meilleure application iptv',
      'applications iptv france',
      'comparatif lecteur iptv',
      'tivimate vs smarters pro',
      'lecteur iptv smart tv',
      'application iptv firestick',
      'top application iptv'
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
      type: 'article',
    },
  };
}

export default function ApplicationsHubPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        '@id': `${PAGE_CANONICAL}/#itemlist`,
        name: 'Top 5 des Meilleures Applications IPTV en France',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'IPTV Smarters Pro',
            url: `${SITE_CONFIG.domain}/applications/iptv-smarters-pro`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'TiviMate IPTV Player',
            url: `${SITE_CONFIG.domain}/applications/tivimate`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'IBO Player Pro',
            url: `${SITE_CONFIG.domain}/applications/ibo-player`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Smart IPTV (SIPTV)',
            url: `${SITE_CONFIG.domain}/applications/smart-iptv`,
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'XCIPTV Player',
            url: `${SITE_CONFIG.domain}/applications/xciptv`,
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
            name: 'Applications IPTV',
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
            <span className="text-slate-200 font-medium" aria-current="page">Applications IPTV</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guide Comparatif 2026 &middot; Lecteurs Certifiés &middot; 100% Compatibles</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Meilleures Applications IPTV 2026 : Comparatif & Téléchargement France
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Pour profiter pleinement de votre <strong>abonnement IPTV</strong>, le choix du lecteur multimédia est primordial. Retrouvez notre comparatif détaillé des 5 applications les plus performantes, stables et intuitives sur Smart TV, Firestick, Android et Apple TV.
          </p>
        </div>
      </header>

      {/* Applications Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* App 1: IPTV Smarters Pro */}
          <div className="rounded-2xl bg-slate-900 border-2 border-blue-500 p-6 flex flex-col justify-between space-y-5 relative shadow-xl shadow-blue-950/40">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-blue-600 text-white text-[11px] font-extrabold uppercase">
                  N°1 Recommandé
                </span>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>4.8 / 5</span>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">IPTV Smarters Pro</h2>
                <span className="text-xs text-slate-400">Le lecteur référence universel</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                L'application la plus répandue en France. Prise en charge native de l'API Xtream Codes, interface moderne digne des services SVOD et compatibilité multi-OS totale.
              </p>

              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Compatible Fire TV, Samsung, LG, Android, iOS, PC</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Multi-écrans & contrôle parental</span>
                </li>
              </ul>
            </div>

            <Link
              href="/applications/iptv-smarters-pro"
              className="w-full flex items-center justify-center py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Voir la fiche complète &rarr;
            </Link>
          </div>

          {/* App 2: TiviMate */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-[11px] font-bold uppercase">
                  Top Android & Firestick
                </span>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>4.9 / 5</span>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">TiviMate IPTV Player</h2>
                <span className="text-xs text-slate-400">L'expérience décodeur satellite</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Le lecteur le plus puissant pour les utilisateurs de Fire TV Stick et boîtiers Android TV. Zapping ultra-fluide, gestion multi-playlists et grille EPG personnalisable.
              </p>

              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Optimisé télécommandes TV</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Enregistrement vidéo programmable</span>
                </li>
              </ul>
            </div>

            <Link
              href="/applications/tivimate"
              className="w-full flex items-center justify-center py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Guide TiviMate &rarr;
            </Link>
          </div>

          {/* App 3: IBO Player */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-[11px] font-bold uppercase">
                  Top Smart TV
                </span>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>4.7 / 5</span>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">IBO Player Pro</h2>
                <span className="text-xs text-slate-400">Solution clé en main Samsung & LG</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                L'alternative de référence sur les téléviseurs connectés. Installation rapide par code d'appareil MAC, compatible 4K HDR sans aucun paramétrage complexe.
              </p>

              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Disponible sur Samsung Smart Hub & LG Store</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Téléchargement sans clé USB</span>
                </li>
              </ul>
            </div>

            <Link
              href="/applications/ibo-player"
              className="w-full flex items-center justify-center py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Guide IBO Player &rarr;
            </Link>
          </div>

          {/* App 4: Smart IPTV (SIPTV) */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-[11px] font-bold uppercase">
                  Pionnier Smart TV
                </span>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>4.5 / 5</span>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">Smart IPTV (SIPTV)</h2>
                <span className="text-xs text-slate-400">Lecteur M3U classique</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                L'application historique pour téléviseurs connectés. Chargement de votre lien de playlist M3U directement via le portail officiel siptv.app.
              </p>

              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Activation unique par adresse MAC</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Légèreté maximale sur anciens téléviseurs</span>
                </li>
              </ul>
            </div>

            <Link
              href="/applications/smart-iptv"
              className="w-full flex items-center justify-center py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Guide Smart IPTV &rarr;
            </Link>
          </div>

          {/* App 5: XCIPTV */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-[11px] font-bold uppercase">
                  Polyvalent Android
                </span>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>4.6 / 5</span>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">XCIPTV Player</h2>
                <span className="text-xs text-slate-400">Double lecteur ExoPlayer & VLC</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Une alternative très fluide dotée d'une interface graphique moderne, compatible avec les codes Xtream et la diffusion Chromecast.
              </p>

              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Lecteurs intégrés sans codecs externes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Synchronisation EPG automatique</span>
                </li>
              </ul>
            </div>

            <Link
              href="/applications/xciptv"
              className="w-full flex items-center justify-center py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Guide XCIPTV &rarr;
            </Link>
          </div>

        </div>

        {/* CTA Section */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-900/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Nos serveurs 4K sont 100% compatibles avec tous ces lecteurs</h3>
            <p className="text-xs text-slate-300">Recevez vos identifiants Xtream Codes et URL M3U en moins de 15 minutes.</p>
          </div>
          <Link
            href="/tarifs-abonnement"
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-lg"
          >
            Découvrir nos Tarifs &rarr;
          </Link>
        </div>

      </main>
    </div>
  );
}
