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
  Settings,
  Wifi,
  Sliders,
  ShieldCheck,
  Box
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/guide-installation';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Guide d'Installation IPTV Complet 2026 : Tous Appareils & Matériels",
    description: "Consultez notre guide d'installation IPTV complet 2026 : tutoriels pas à pas pour configurer votre abonnement sur Smart TV, Firestick, Box Android, Apple TV et PC.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      "guide d'installation iptv",
      'guide installation iptv',
      'installer iptv',
      'comment installer iptv',
      'tutoriel iptv',
      'configuration iptv smart tv',
      'installation iptv fire stick',
      'xtream codes m3u guide'
    ],
  });
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
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Combien de temps prend l’installation d’un abonnement IPTV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'La configuration complète prend moins de 3 minutes sur n’importe quel appareil (Fire TV Stick, Smart TV Samsung/LG, Box Android ou Apple TV) en saisissant vos identifiants Xtream Codes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Faut-il privilégier l’API Xtream Codes ou le lien M3U ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Privilégiez toujours l’API Xtream Codes (Nom d’utilisateur, Mot de passe, URL du serveur) : elle synchronise automatiquement les catégories TV, les affiches VOD 4K et le guide des programmes EPG sur 7 jours.',
            },
          },
          {
            '@type': 'Question',
            name: 'Que faire si mon fournisseur d’accès internet bloque le chargement des chaînes ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'En cas de bridage par votre opérateur (Orange, Free, SFR, Bouygues) lors des soirées sportives, modifiez le DNS de votre équipement vers Cloudflare (1.1.1.1) ou activez un VPN.',
            },
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
            Bienvenue sur notre <strong>guide d'installation IPTV</strong> officiel 2026. Configurez facilement votre <strong>abonnement IPTV 4K</strong> sur votre téléviseur, clé de streaming, smartphone ou ordinateur en moins de 3 minutes. Suivez nos tutoriels pas à pas adaptés à chaque système et commencez à regarder vos flux en <strong>4K UHD à 60 FPS</strong> sans aucune coupure.
          </p>
        </div>
      </header>

      {/* Main Guides Hub */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-16">
        
        {/* Device Matrix Grid */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Guide d'Installation IPTV Universel par Appareil & Système d'Exploitation
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">Cliquez sur votre équipement pour afficher la procédure pas-à-pas détaillée et certifiée.</p>
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

            {/* Boîtier MAG & Formuler */}
            <Link
              href="/guide-installation/mag-box"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Box className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                  Boîtiers MAG &amp; Formuler
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Configuration Stalker par adresse MAC sur décodeurs Infomir MAG (254, 322, 520, 540) et application MyTVOnline.
                </p>
              </div>
              <span className="text-xs font-bold text-purple-400 flex items-center gap-1 pt-2">
                <span>Voir le guide Boîtier MAG complet</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>

          </div>
        </section>

        {/* Section Tableau Récapitulatif Matériel */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Tableau Synthétique des Méthodes d'Installation par Appareil</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Consultez ce récapitulatif pour identifier en un coup d'œil l'application idéale et le mode de connexion recommandé selon votre matériel.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300 border-collapse">
              <thead className="bg-slate-950 text-slate-200 border-b border-slate-800 text-[11px] sm:text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5 sm:p-4">Appareil & Système</th>
                  <th className="p-3.5 sm:p-4">Application Recommandée</th>
                  <th className="p-3.5 sm:p-4">Méthode de Téléchargement</th>
                  <th className="p-3.5 sm:p-4">Protocole Conseillé</th>
                  <th className="p-3.5 sm:p-4">Temps Moyen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3.5 sm:p-4 font-bold text-white">Amazon Fire TV Stick</td>
                  <td className="p-3.5 sm:p-4 text-amber-400">IPTV Smarters Pro / TiviMate</td>
                  <td className="p-3.5 sm:p-4">Downloader (Code 250931)</td>
                  <td className="p-3.5 sm:p-4 text-emerald-400 font-mono">API Xtream Codes</td>
                  <td className="p-3.5 sm:p-4 text-slate-200 font-semibold">&lt; 3 min</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3.5 sm:p-4 font-bold text-white">Smart TV Samsung (Tizen)</td>
                  <td className="p-3.5 sm:p-4 text-blue-400">IBO Player / Smarters Lite</td>
                  <td className="p-3.5 sm:p-4">Samsung Smart Hub Store</td>
                  <td className="p-3.5 sm:p-4 text-emerald-400 font-mono">API Xtream Codes / MAC</td>
                  <td className="p-3.5 sm:p-4 text-slate-200 font-semibold">&lt; 2 min</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3.5 sm:p-4 font-bold text-white">Smart TV LG (webOS)</td>
                  <td className="p-3.5 sm:p-4 text-purple-400">IBO Player / Smarters Lite</td>
                  <td className="p-3.5 sm:p-4">LG Content Store officiel</td>
                  <td className="p-3.5 sm:p-4 text-emerald-400 font-mono">API Xtream Codes / MAC</td>
                  <td className="p-3.5 sm:p-4 text-slate-200 font-semibold">&lt; 2 min</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3.5 sm:p-4 font-bold text-white">Box Android TV & Shield</td>
                  <td className="p-3.5 sm:p-4 text-emerald-400">TiviMate / IPTV Smarters Pro</td>
                  <td className="p-3.5 sm:p-4">Google Play Store / APK direct</td>
                  <td className="p-3.5 sm:p-4 text-emerald-400 font-mono">API Xtream Codes</td>
                  <td className="p-3.5 sm:p-4 text-slate-200 font-semibold">&lt; 3 min</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3.5 sm:p-4 font-bold text-white">Apple TV, iPhone & iPad</td>
                  <td className="p-3.5 sm:p-4 text-sky-400">Smarters Player Lite / IPTVX</td>
                  <td className="p-3.5 sm:p-4">App Store Apple officiel</td>
                  <td className="p-3.5 sm:p-4 text-emerald-400 font-mono">API Xtream Codes</td>
                  <td className="p-3.5 sm:p-4 text-slate-200 font-semibold">&lt; 2 min</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3.5 sm:p-4 font-bold text-white">PC Windows & Apple Mac</td>
                  <td className="p-3.5 sm:p-4 text-indigo-400">IPTV Smarters Pro Desktop / VLC</td>
                  <td className="p-3.5 sm:p-4">Installateur EXE / DMG officiel</td>
                  <td className="p-3.5 sm:p-4 text-emerald-400 font-mono">Xtream Codes / M3U</td>
                  <td className="p-3.5 sm:p-4 text-slate-200 font-semibold">&lt; 3 min</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3.5 sm:p-4 font-bold text-white">Boîtiers MAG & Formuler</td>
                  <td className="p-3.5 sm:p-4 text-purple-400">Stalker Portal / MyTVOnline</td>
                  <td className="p-3.5 sm:p-4">Middleware intégré / Natif</td>
                  <td className="p-3.5 sm:p-4 text-emerald-400 font-mono">Adresse MAC / Stalker</td>
                  <td className="p-3.5 sm:p-4 text-slate-200 font-semibold">&lt; 3 min</td>
                </tr>
              </tbody>
            </table>
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
            <div className="flex flex-wrap gap-2 shrink-0">
              <Link
                href="/guide-installation/xtream-codes-m3u"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs transition-colors"
              >
                <span>Guide Xtream vs M3U</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/guide-installation/contourner-blocage-fai-iptv-dns-vpn"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold text-xs transition-colors"
              >
                <span>Débloquer FAI (DNS &amp; VPN)</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase">
                Format Recommandé
              </span>
              <h3 className="text-lg font-bold text-white">1. API Xtream Codes</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Composé de 3 éléments : <strong>Nom d'utilisateur</strong>, <strong>Mot de passe</strong> et <strong>URL du serveur</strong>. C'est le protocole le plus rapide : il organise les chaînes par pays, télécharge automatiquement les affiches des films VOD et actualise le <strong>guide TV EPG</strong> en temps réel.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-400 text-xs font-bold uppercase">
                Format Alternatif
              </span>
              <h3 className="text-lg font-bold text-white">2. Lien de Playlist M3U Plus</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Il s'agit d'une URL web complète contenant l'intégralité du catalogue. Idéal pour les logiciels génériques tels que <strong>VLC Media Player</strong>, Kodi ou Perfect Player, mais plus lourd à charger lors du premier démarrage sur téléviseur.
              </p>
            </div>
          </div>
        </section>

        {/* Section Optimisation Réseau & Anti-Coupure */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Conseils Réseau & Optimisation Anti-Coupure lors de l'Installation</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Pour profiter de vos retransmissions sportives en <strong>4K UHD à 60 FPS</strong> sans aucune interruption, appliquez ces règles techniques :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Wifi className="w-4 h-4 text-blue-400" />
                Connexion Câblée Ethernet ou Wi-Fi 5 GHz
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pour éviter les pertes de paquets et la latence, privilégiez un câble <strong>Ethernet RJ45</strong> ou connectez votre équipement sur la bande <strong>Wi-Fi 5 GHz</strong> de votre box internet. Évitez le Wi-Fi 2,4 GHz saturé.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Settings className="w-4 h-4 text-emerald-400" />
                Configuration du DNS Cloudflare 1.1.1.1
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Les opérateurs télécoms (Orange, Free, SFR, Bouygues) appliquent parfois des filtres DNS les soirs de grands matchs. Configurez le <strong>DNS Cloudflare 1.1.1.1</strong> sur votre téléviseur pour contourner ces blocages.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-amber-400" />
                Réglage de la Mémoire Tampon (Buffer Size)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dans les paramètres de votre application (TiviMate ou Smarters Pro), réglez la taille du tampon vidéo sur <strong>Grand (10 secondes)</strong> si votre débit réseau présente de petites variations passagères.
              </p>
            </div>
          </div>
        </section>

        {/* Section Diagnostic des Erreurs d'Installation */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Diagnostic Express des 3 Erreurs d'Installation Fréquentes</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Si vous rencontrez une anomalie lors de la première configuration de votre application, appliquez ces solutions vérifiées par nos techniciens :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">1. Erreur « Server URL Not Reachable »</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Vérifiez attentivement la syntaxe de l'URL du serveur. L'oubli du préfixe <strong>http://</strong> ou du numéro de port (ex: <strong>:8080</strong>) empêche la connexion. Assurez-vous également que votre box internet n'utilise pas un résolveur DNS bloquant en passant sur <strong>1.1.1.1</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">2. Écran Noir ou Son sans Image en 4K</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ce symptôme apparaît lorsque le lecteur utilise le décodage logiciel au lieu de l'accélération matérielle. Dans les paramètres de votre application (IPTV Smarters Pro ou XCIPTV), activez le moteur <strong>Hardware Decoder (ExoPlayer)</strong> pour exploiter la puce graphique de votre téléviseur.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">3. Liste M3U qui Fige au Démarrage</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sur les téléviseurs plus anciens disposant de 1 Go de RAM, charger une playlist brute de plus de 25 000 canaux sature la mémoire. Basculez impérativement sur l'<strong>API Xtream Codes</strong> pour charger les bouquets à la demande de manière compartimentée.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">4. Décalage Audio ou Désynchronisation Voix</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Si la piste audio est décalée par rapport à l'image sur les flux sportifs 60 FPS, ajustez la temporisation audio dans votre lecteur ou passez le moteur de lecture en <strong>AudioTrack natif</strong> pour rétablir une synchronisation parfaite à la milliseconde près.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Installation */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Questions Fréquentes sur l’Installation IPTV</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">Combien de temps prend l’installation d’un abonnement IPTV ?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Moins de 3 minutes : dès réception de vos codes par WhatsApp ou e-mail, entrez-les dans <Link href="/applications/iptv-smarters-pro" className="text-blue-400 hover:underline">IPTV Smarters Pro</Link> pour charger vos chaînes instantanément.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">Faut-il privilégier l’API Xtream Codes ou le lien M3U ?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Utilisez l’<Link href="/guide-installation/xtream-codes-m3u" className="text-blue-400 hover:underline">API Xtream Codes</Link> en priorité : elle synchronise automatiquement les jaquettes VOD 4K et le guide TV EPG 7 jours.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">Que faire si mon FAI bloque le chargement des chaînes ?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Suivez notre <Link href="/guide-installation/contourner-blocage-fai-iptv-dns-vpn" className="text-blue-400 hover:underline">tutoriel DNS 1.1.1.1 &amp; VPN</Link> pour contourner le bridage opérateur (Orange, Free, SFR, Bouygues) les soirs de match.
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
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-lg flex items-center gap-2"
          >
            <span>Contacter le Support 7j/7</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </main>
    </div>
  );
}
