import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Tv, 
  Monitor, 
  Smartphone, 
  Laptop, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  HelpCircle,
  Download,
  KeyRound,
  PlayCircle,
  Flame,
  Layers,
  Settings
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/guide-installation';

export function generateMetadata(): Metadata {
  const title = "Guide d'Installation IPTV Complet : Tous Appareils & Applications (2026)";
  const description = "Tutoriel universel d'installation IPTV en France : Configuration pas à pas sur Fire Stick, Smart TV Samsung & LG, Box Android, Apple TV et PC en 3 minutes.";

  return {
    title,
    description,
    keywords: [
      'guide installation iptv',
      'installer iptv',
      'comment installer iptv',
      'tutoriel iptv',
      'configuration iptv smart tv',
      'installation iptv fire stick',
      'xtream codes m3u guide'
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

export default function GuideInstallationPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: 'Comment Installer et Configurer son Abonnement IPTV sur n\'importe quel appareil',
        description: 'Guide universel en 3 étapes simples pour installer votre lecteur multimédia et connecter vos flux IPTV.',
        totalTime: 'PT3M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Télécharger le lecteur multimédia',
            text: 'Installez IPTV Smarters Pro, Smarters Player Lite ou Downloader selon votre matériel (Fire TV, Smart TV, Android, Apple).',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Choisir la méthode de connexion',
            text: 'Sélectionnez "Connexion via API Xtream Codes" pour une synchronisation automatique de l\'EPG et des logos de chaînes.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Entrer vos identifiants d\'abonnement',
            text: 'Renseignez votre nom d\'utilisateur, mot de passe et l\'URL de serveur fournis par notre service après commande.',
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
            name: 'Guide d\'Installation',
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
            <span className="text-slate-200 font-medium" aria-current="page">Guide d'Installation</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Flame className="w-3.5 h-3.5" />
            <span>Centre d'Aide Technique Officiel &middot; Configuration Tous Matériels</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Guide d'Installation IPTV Complet : Tous Appareils & Applications
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Configurez facilement votre <strong>abonnement IPTV</strong> sur votre téléviseur, clé de streaming, smartphone ou ordinateur. Suivez nos tutoriels pas à pas adaptés à chaque système et commencez à regarder vos flux 4K en moins de 3 minutes.
          </p>
        </div>
      </header>

      {/* Main Guides Hub */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-16">
        
        {/* Device Matrix Grid */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white">Choisissez Votre Matériel :</h2>
            <p className="text-xs sm:text-sm text-slate-400">Cliquez sur votre appareil pour afficher la procédure pas-à-pas détaillée.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Fire Stick */}
            <Link
              href="/guide-installation/fire-tv-stick"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Tv className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  Amazon Fire TV Stick
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Guide d'installation via l'utilitaire officiel Downloader (Code direct, activation du mode développeur, zéro freeze).
                </p>
              </div>
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1 pt-2">
                <span>Voir le guide Fire TV complet</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            {/* Smart TV Samsung & LG */}
            <Link
              href="/guide-installation/smart-tv-samsung-lg"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Monitor className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  Smart TV Samsung & LG
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Installation directe depuis le Samsung Smart Hub (Tizen) ou le LG Content Store (webOS) avec Smarters Player Lite.
                </p>
              </div>
              <span className="text-xs font-bold text-blue-400 flex items-center gap-1 pt-2">
                <span>Voir le guide Smart TV complet</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            {/* Application IPTV Smarters Pro Brand Pillar */}
            <Link
              href="/applications/iptv-smarters-pro"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                  Application IPTV Smarters Pro
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Fiche technique officielle, téléchargement de la dernière version 2026 et paramétrage des fonctionnalités avancées.
                </p>
              </div>
              <span className="text-xs font-bold text-purple-400 flex items-center gap-1 pt-2">
                <span>Découvrir la page officielle</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            {/* Box Android */}
            <Link
              href="/guide-installation/android-tv-box"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                  Box Android TV & Box TV
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Configuration pas-à-pas pour Nvidia Shield, Xiaomi Mi Box, Google TV et smartphones Android via Google Play Store ou APK.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 pt-2">
                <span>Voir le guide Android TV complet</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            {/* Apple iOS & tvOS */}
            <Link
              href="/guide-installation/apple-tv-ios"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <Tv className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                  Apple TV, iPhone & iPad
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Guide d'installation de Smarters Player Lite sur tvOS et iOS depuis l'App Store Apple officiel avec prise en charge 4K HDR.
                </p>
              </div>
              <span className="text-xs font-bold text-sky-400 flex items-center gap-1 pt-2">
                <span>Voir le guide Apple complet</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            {/* PC Windows & Mac */}
            <Link
              href="/guide-installation/pc-mac-windows"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Laptop className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                  PC Windows & Apple Mac
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Installation du client desktop officiel IPTV Smarters Pro (.exe/.dmg) et lecture directe universelle avec VLC Media Player.
                </p>
              </div>
              <span className="text-xs font-bold text-indigo-400 flex items-center gap-1 pt-2">
                <span>Voir le guide PC / Mac complet</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>

          </div>
        </section>

        {/* Section Xtream Codes vs M3U */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="max-w-3xl space-y-2">
              <h2 className="text-2xl font-bold text-white">
                Comprendre vos Identifiants : API Xtream Codes vs Lien M3U
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Après confirmation de votre commande sur notre site, vous recevez deux formats de connexion. Voici la différence fondamentale pour bien choisir :
              </p>
            </div>
            <Link
              href="/guide-installation/xtream-codes-m3u"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs shrink-0 transition-colors"
            >
              <span>Guide Xtream vs M3U</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase">
                Format Recommandé
              </span>
              <h3 className="text-lg font-bold text-white">1. API Xtream Codes</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Composé de 3 éléments : <strong>Nom d'utilisateur</strong>, <strong>Mot de passe</strong> et <strong>URL du serveur</strong>. C'est le protocole le plus rapide : il organise les chaînes par pays, télécharge automatiquement les affiches des films VOD et actualise le guide des programmes (EPG) en temps réel.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-400 text-xs font-bold uppercase">
                Format Alternatif
              </span>
              <h3 className="text-lg font-bold text-white">2. Lien de Playlist M3U Plus</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Il s'agit d'une URL web complète contenant l'intégralité du catalogue. Idéal pour les logiciels génériques tels que VLC, Kodi ou Perfect Player, mais plus lourd à charger lors du premier démarrage sur téléviseur.
              </p>
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-900/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Besoin d'aide pour configurer votre appareil ?</h3>
            <p className="text-xs text-slate-300">Notre support technique francophone vous guide en direct 7j/7 sur WhatsApp.</p>
          </div>
          <Link
            href="/support"
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-lg"
          >
            Contacter le Support 7j/7 &rarr;
          </Link>
        </div>

      </main>
    </div>
  );
}
