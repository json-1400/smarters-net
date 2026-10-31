import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Tv, 
  Monitor, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  ChevronRight, 
  Star, 
  Globe, 
  KeyRound,
  ShieldCheck 
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/applications/ibo-player';

export function generateMetadata(): Metadata {
  const title = "IBO Player Pro : Activation, Configuration Smart TV & Abonnement France";
  const description = "Guide complet IBO Player en France : Téléchargement sur Smart TV Samsung et LG, activation Device ID/Key et configuration Xtream Codes sans coupure.";

  return {
    title,
    description,
    keywords: [
      'ibo player',
      'abonnement ibo player',
      'activation ibo player',
      'ibo player samsung',
      'ibo player lg webos',
      'configurer ibo player',
      'ibo player pro france'
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

export default function IboPlayerPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${PAGE_CANONICAL}/#software`,
        name: 'IBO Player Pro',
        operatingSystem: 'Samsung Tizen, LG webOS, Android TV, Fire OS',
        applicationCategory: 'MultimediaApplication',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.7',
          ratingCount: '1340',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: 'Comment Configurer son Abonnement sur IBO Player',
        description: 'Tutoriel officiel pour lier vos codes Xtream à l\'application IBO Player.',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Récupérer Device ID et Device Key',
            text: 'Ouvrez IBO Player sur votre téléviseur Samsung ou LG. Notez le Device ID (adresse MAC) et la Device Key affichés à l\'écran.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Accéder au portail en ligne',
            text: 'Sur votre téléphone ou ordinateur, rendez-vous sur le portail iboplayer.com et connectez-vous avec vos identifiants d\'appareil.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Ajouter votre abonnement Xtream',
            text: 'Cliquez sur "Add XC Playlist" et saisissez le nom de la liste, votre Username, Password et URL Serveur.',
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
            name: 'IBO Player',
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
            <span className="text-slate-200 font-medium" aria-current="page">IBO Player</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <Monitor className="w-3.5 h-3.5" />
            <span>Solution N°1 Smart TV Samsung & LG &middot; Note : 4.7 / 5</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            IBO Player Pro : Activation, Configuration Smart TV & Abonnement France
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            <strong>IBO Player</strong> est le lecteur IPTV de référence pour les téléviseurs connectés Samsung (Tizen) et LG (webOS). Très fluide, disponible directement sur les stores officiels, il permet de profiter de nos flux 4K sans nécessiter de boîtier externe.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-10">
            
            {/* Guide Step-by-Step */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
              <h2 className="text-xl font-bold text-white">Comment Installer et Configurer IBO Player ?</h2>
              <ol className="space-y-4 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                <li>Allumez votre Smart TV et ouvrez le <strong>Samsung Smart Hub</strong> ou le <strong>LG Content Store</strong>.</li>
                <li>Tapez <strong className="text-white">IBO Player</strong> dans la recherche et téléchargez l'application officielle.</li>
                <li>Lancez l'application : notez le <strong>Device ID</strong> (adresse MAC) et la <strong>Device Key</strong> affichés sur votre écran.</li>
                <li>Depuis votre smartphone ou ordinateur, connectez-vous sur le portail officiel de téléversement.</li>
                <li>Ajoutez vos codes Xtream (Username, Password, Server URL) fournis par notre service et rechargez l'application sur votre TV.</li>
              </ol>
            </section>

            {/* Avantages */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border-2 border-cyan-500/30 space-y-4">
              <h2 className="text-xl font-bold text-white">Les Avantages d'IBO Player Pro</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-sm text-white block">Compatible 4K & Dolby Audio</span>
                  <p className="text-xs text-slate-400">Décodage matériel natif sans saccade.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-sm text-white block">Gestion Multi-Langues</span>
                  <p className="text-xs text-slate-400">Choix instantané des pistes audio (VF/VOSTFR) et sous-titres.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border-2 border-cyan-500/50 space-y-5">
              <span className="inline-block px-2.5 py-1 rounded-md bg-cyan-600 text-white text-[11px] font-bold uppercase">
                Abonnement Compatible 4K
              </span>
              <h3 className="text-lg font-bold text-white">Prêt à activer IBO Player avec nos flux 4K ?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Recevez vos codes de connexion en 15 minutes et profitez de +25 000 chaînes sans freeze sur votre Smart TV.
              </p>
              <Link
                href="/tarifs-abonnement"
                className="w-full flex items-center justify-center py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Découvrir les Tarifs &rarr;
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Autres Lecteurs</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/applications/iptv-smarters-pro" className="text-slate-300 hover:text-blue-400 flex items-center justify-between">
                    <span>IPTV Smarters Pro</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/applications/tivimate" className="text-slate-300 hover:text-blue-400 flex items-center justify-between">
                    <span>TiviMate IPTV Player</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
