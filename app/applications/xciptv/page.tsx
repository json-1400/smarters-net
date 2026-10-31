import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Smartphone, 
  Tv, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  ChevronRight, 
  Star, 
  PlayCircle, 
  ShieldCheck 
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/applications/xciptv';

export function generateMetadata(): Metadata {
  const title = "XCIPTV Player : Téléchargement, Configuration & Abonnement France";
  const description = "Guide complet XCIPTV Player en France : Téléchargement APK officiel, configuration Xtream Codes et lecteur vidéo 4K double moteur ExoPlayer et VLC.";

  return {
    title,
    description,
    keywords: [
      'xciptv',
      'xciptv player',
      'application xciptv',
      'xciptv apk',
      'configuration xciptv',
      'xciptv vs smarters pro',
      'xciptv iptv france'
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

export default function XciptvPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${PAGE_CANONICAL}/#software`,
        name: 'XCIPTV Player',
        operatingSystem: 'Android TV, Google TV, Android Mobile, Fire OS',
        applicationCategory: 'MultimediaApplication',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.6',
          ratingCount: '980',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: 'Comment Configurer XCIPTV Player avec Xtream Codes',
        description: 'Tutoriel officiel pour connecter votre abonnement 4K à l\'application XCIPTV.',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Télécharger XCIPTV',
            text: 'Téléchargez XCIPTV Player depuis le Google Play Store ou installez le fichier APK certifié.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Saisir les identifiants Xtream Codes',
            text: 'Sur l\'écran de bienvenue, entrez l\'URL de serveur (Portal URL), votre Nom d\'utilisateur et Mot de passe.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Connexion et chargement',
            text: 'Appuyez sur "Sign In" pour démarrer la synchronisation des chaînes directes, du guide EPG et du catalogue VOD.',
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
            name: 'Applications',
            item: `${SITE_CONFIG.domain}/applications`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'XCIPTV Player',
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
            <Link href="/applications" className="hover:text-blue-400 transition-colors">Applications</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li>
            <span className="text-slate-200 font-medium" aria-current="page">XCIPTV</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Double Lecteur Intégré (ExoPlayer & VLC) &middot; Note : 4.6 / 5</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            XCIPTV Player : Téléchargement, Configuration & Abonnement France
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Très apprécié pour son interface sombre moderne et sa grande stabilité, <strong>XCIPTV Player</strong> est une excellente alternative à IPTV Smarters Pro. Doté d'un double lecteur interne, il lit tous les codecs vidéo et audio sans configuration complexe.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-10">
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
              <h2 className="text-xl font-bold text-white">Comment Configurer XCIPTV Player ?</h2>
              <ol className="space-y-4 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                <li>Installez <strong>XCIPTV Player</strong> depuis le Google Play Store ou via Downloader.</li>
                <li>À l'ouverture, choisissez <strong>Xtream Codes API</strong>.</li>
                <li>Renseignez le champ <strong>Server URL</strong> avec l'adresse transmise après votre commande.</li>
                <li>Indiquez votre <strong>Nom d'utilisateur</strong> et <strong>Mot de passe</strong>.</li>
                <li>Cliquez sur <strong>Sign In</strong> pour synchroniser vos chaînes et le catalogue de films en 4K.</li>
              </ol>
            </section>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border-2 border-indigo-500/50 space-y-5">
              <span className="inline-block px-2.5 py-1 rounded-md bg-indigo-600 text-white text-[11px] font-bold uppercase">
                100% Compatible XCIPTV
              </span>
              <h3 className="text-lg font-bold text-white">Abonnement 4K optimisé pour XCIPTV</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Profitez d'un zapping ultra-rapide sur XCIPTV grâce à nos serveurs CDN européens sans freeze.
              </p>
              <Link
                href="/tarifs-abonnement"
                className="w-full flex items-center justify-center py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Découvrir les Tarifs &rarr;
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
