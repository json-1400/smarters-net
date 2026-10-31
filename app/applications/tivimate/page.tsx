import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Tv, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  ChevronRight, 
  Star, 
  Flame, 
  ShieldCheck, 
  HelpCircle,
  SlidersHorizontal,
  Clock
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/applications/tivimate';

export function generateMetadata(): Metadata {
  const title = "TiviMate IPTV Player : Téléchargement, Configuration & Abonnement France";
  const description = "Guide complet TiviMate IPTV Player en France : Téléchargement sur Firestick et Android TV, configuration Xtream Codes et serveur 4K sans coupure.";

  return {
    title,
    description,
    keywords: [
      'tivimate',
      'iptv tivimate',
      'tivimate premium',
      'tivimate firestick',
      'configuration tivimate',
      'tivimate iptv france',
      'tivimate vs smarters pro'
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

export default function TiviMatePage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${PAGE_CANONICAL}/#software`,
        name: 'TiviMate IPTV Player',
        operatingSystem: 'Android TV, Google TV, Amazon Fire OS',
        applicationCategory: 'MultimediaApplication',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '1850',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: 'Comment Configurer TiviMate avec des identifiants Xtream Codes',
        description: 'Guide étape par étape pour connecter votre abonnement 4K à TiviMate en 2 minutes.',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Ajouter une playlist',
            text: 'Lancez TiviMate et cliquez sur "Ajouter une liste de lecture" (Add Playlist).',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Sélectionner Xtream Codes',
            text: 'Choisissez "Identifiants Xtream Codes" parmi les méthodes proposées.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Renseigner vos identifiants',
            text: 'Saisissez l\'adresse du serveur (Server URL), votre nom d\'utilisateur (Username) et mot de passe (Password).',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Finaliser l\'importation',
            text: 'Cliquez sur Terminé. Vos chaînes et le guide TV EPG s\'actualisent automatiquement.',
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
            name: 'TiviMate IPTV',
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
            <span className="text-slate-200 font-medium" aria-current="page">TiviMate</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-emerald-400" />
            <span>Lecteur N°1 Android TV & Fire Stick &middot; Note : 4.9 / 5</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            TiviMate IPTV Player : Téléchargement, Configuration & Abonnement France
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Considéré par les passionnés comme le lecteur IPTV le plus abouti du marché, <strong>TiviMate IPTV Player</strong> transforme votre téléviseur en véritable décodeur de salon ultra-rapide. Découvrez comment l'installer et le synchroniser avec nos serveurs 4K.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-10">
            
            {/* Features */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl font-bold text-white">Pourquoi Choisir TiviMate ?</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                TiviMate a été conçu exclusivement pour les écrans de télévision pilotés à la télécommande (Android TV, Nvidia Shield, Firestick, Chromecast Google TV). Ses atouts majeurs :
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Zapping instantané :</strong> Changement de canal en moins de 0.3 seconde sans écran noir.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Guide TV (EPG) avancé :</strong> Grille des programmes fluide avec recherche rapide et favoris personnalisables.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Multi-écrans :</strong> Regardez jusqu'à 9 chaînes simultanément sur un seul écran (formule TiviMate Premium).</span>
                </li>
              </ul>
            </section>

            {/* Setup Walkthrough */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border-2 border-emerald-500/30 space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-400" />
                <span>Configuration Xtream Codes sur TiviMate (2 Minutes)</span>
              </h2>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                <li>Ouvrez TiviMate et cliquez sur <strong>Ajouter une liste de lecture</strong>.</li>
                <li>Choisissez le protocole <strong>Identifiants Xtream Codes</strong>.</li>
                <li>Renseignez le nom de votre serveur (ex: <em>Serveur 4K France</em>).</li>
                <li>Entrez votre <strong>Nom d'utilisateur</strong>, <strong>Mot de passe</strong> et l'<strong>URL Serveur</strong> reçus après votre commande.</li>
                <li>Cochez <strong>Inclure les chaînes TV et la VOD</strong> puis appuyez sur <strong>Terminé</strong>.</li>
              </ol>
            </section>

          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border-2 border-emerald-500/50 space-y-5">
              <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-600 text-white text-[11px] font-bold uppercase">
                100% Compatible TiviMate
              </span>
              <h3 className="text-lg font-bold text-white">Besoin d'un abonnement 4K stable pour TiviMate ?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Activez votre accès VIP avec plus de 25 000 chaînes directes sans freeze et profitez de la pleine puissance de TiviMate.
              </p>
              <Link
                href="/tarifs-abonnement"
                className="w-full flex items-center justify-center py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Voir les Formules &rarr;
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Autres Applications</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/applications/iptv-smarters-pro" className="text-slate-300 hover:text-blue-400 flex items-center justify-between">
                    <span>IPTV Smarters Pro Officiel</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/applications/ibo-player" className="text-slate-300 hover:text-blue-400 flex items-center justify-between">
                    <span>IBO Player Pro (Smart TV)</span>
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
