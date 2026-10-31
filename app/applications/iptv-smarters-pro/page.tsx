import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Tv, 
  Smartphone, 
  Monitor, 
  Download, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Zap, 
  HelpCircle, 
  ArrowRight,
  Flame,
  Radio,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/applications/iptv-smarters-pro';

export function generateMetadata(): Metadata {
  const title = "IPTV Smarters Pro : Application Officielle, Configuration & Abonnement France";
  const description = "Guide complet IPTV Smarters Pro en France : Téléchargement officiel, configuration Xtream Codes et M3U pas-à-pas, compatibilité Smart TV, Fire Stick et abonnement 4K stable.";

  return {
    title,
    description,
    keywords: [
      'iptv smarters pro',
      'application iptv smarters pro',
      'telecharger iptv smarters pro',
      'abonnement iptv smarters pro',
      'configuration iptv smarters pro',
      'xtream codes iptv smarters pro',
      'iptv smarters pro fire tv stick',
      'iptv smarters pro smart tv samsung'
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

export default function IptvSmartersProPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${PAGE_CANONICAL}/#software`,
        name: 'IPTV Smarters Pro',
        operatingSystem: 'Android, iOS, Windows, macOS, Fire OS, Tizen, webOS',
        applicationCategory: 'MultimediaApplication',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '1420',
          bestRating: '5',
          worstRating: '1',
        },
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: 'Comment Configurer IPTV Smarters Pro avec Xtream Codes',
        description: 'Tutoriel officiel pour connecter votre abonnement IPTV 4K sur le lecteur IPTV Smarters Pro en moins de 2 minutes.',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Ouvrir IPTV Smarters Pro',
            text: "Lancez l'application sur votre appareil et sélectionnez 'Connexion via API Xtream Codes'.",
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Saisir vos identifiants',
            text: "Renseignez un nom arbitraire, votre identifiant (Username), mot de passe (Password) et l'URL du serveur reçus après commande.",
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Charger les chaînes et le catalogue',
            text: "Cliquez sur 'Ajouter un utilisateur' puis patientez quelques secondes pendant la synchronisation du flux direct et de l'EPG.",
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: "L'application IPTV Smarters Pro est-elle gratuite ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, IPTV Smarters Pro est une application multimédia gratuite au téléchargement. Elle nécessite cependant une liste de lecture ou un abonnement actif (fourni avec codes Xtream ou lien M3U) pour diffuser vos chaînes en direct et VOD.",
            },
          },
          {
            '@type': 'Question',
            name: "Quelle est la différence entre Xtream Codes et une URL M3U ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "L'API Xtream Codes est plus moderne, plus rapide et permet le chargement dynamique du guide des programmes (EPG), des affiches de films VOD et des fonctionnalités de replay. L'URL M3U est un simple fichier texte souvent plus lourd à actualiser.",
            },
          },
          {
            '@type': 'Question',
            name: "IPTV Smarters Pro est-il compatible avec mon téléviseur Smart TV ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, l'application est disponible directement sur le Samsung Smart Hub (Tizen), le LG Content Store (webOS), ainsi que sur toutes les télévisions équipées d'Android TV ou Google TV (Sony, Philips, TCL).",
            },
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
            name: 'IPTV Smarters Pro',
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
            <span className="text-slate-400">Applications</span>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li>
            <span className="text-slate-200 font-medium" aria-current="page">IPTV Smarters Pro</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold">
              <Flame className="w-4 h-4 text-orange-400" />
              <span>Lecteur N°1 Recommandé en France & Francophonie</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              IPTV Smarters Pro : Téléchargement, Configuration & Abonnement France
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Découvrez le guide de référence pour installer et configurer <strong>IPTV Smarters Pro</strong> en 2026. Compatible avec tous les appareils (Fire TV Stick, Smart TV Samsung, LG, Android et iOS), profitez d'une diffusion 4K fluide sans coupure grâce à l'architecture Xtream Codes API.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Découvrir nos Abonnements 4K</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="#configuration"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                <span>Guide de Configuration Pas-à-Pas</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">4K & FHD</span>
                <span className="block text-xs text-slate-400">Stabilité 60 FPS</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">&lt; 2 min</span>
                <span className="block text-xs text-slate-400">Configuration Xtream</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">100% Multi-OS</span>
                <span className="block text-xs text-slate-400">Fire TV, Smart TV, Box</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg">
                    S
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-none">Fiche Technique Logicielle</h2>
                    <span className="text-xs text-slate-400">Application Officielle V4.0</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  Gratuit
                </span>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Protocole Principal</dt>
                  <dd className="font-semibold text-slate-200">Xtream Codes API & M3U Plus</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Compatibilité Matérielle</dt>
                  <dd className="font-semibold text-slate-200">Fire TV, Samsung, LG, Android, iOS, PC</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Guide TV (EPG)</dt>
                  <dd className="font-semibold text-emerald-400">Intégré & Synchronisation auto</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Fonction Replay / Catch-up</dt>
                  <dd className="font-semibold text-slate-200">Disponible selon abonnement</dd>
                </div>
                <div className="flex justify-between py-1.5">
                  <dt className="text-slate-400">Contrôle Parental</dt>
                  <dd className="font-semibold text-slate-200">Verrouillage par Code PIN</dd>
                </div>
              </dl>

              <div className="pt-2">
                <Link
                  href="/checkout?plan=Premium"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
                >
                  <span>Activer mon Accès Serveur 4K</span>
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Article Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Section 1: Qu'est-ce que IPTV Smarters Pro */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Qu'est-ce que l'application IPTV Smarters Pro ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong>IPTV Smarters Pro</strong> est aujourd'hui le lecteur multimédia vidéo le plus utilisé par les abonnés IPTV en France et en Europe. Conçu pour décoder les flux vidéo en direct (Direct TV), les films et séries à la demande (VOD) et le guide électronique des programmes (EPG), il offre une interface moderne digne des plus grands services de streaming.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Contrairement aux applications vidéo classiques, IPTV Smarters Pro ne fournit aucun contenu intégré : il s'agit d'un récepteur logiciel haut de gamme. Pour débloquer l'ensemble des chaînes sportives, d'information et de divertissement en 4K, vous devez lui associer un <strong>abonnement IPTV Smarters Pro</strong> compatible doté de serveurs anti-coupures à haute bande passante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <Zap className="w-6 h-6 text-blue-400" />
              <h3 className="text-base font-bold text-white">Zapping Instantané</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Changement de chaîne en moins d'une demi-seconde sans mise en mémoire tampon grâce à l'accélération matérielle.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <Radio className="w-6 h-6 text-purple-400" />
              <h3 className="text-base font-bold text-white">Multi-Écrans & Multi-Profils</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Regardez jusqu'à 4 chaînes en simultané sur un même écran pour ne manquer aucun événement sportif en direct.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Protection & Stabilité</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Compatibilité native avec les VPN et protocoles sécurisés pour contourner tout bridage d'opérateur internet en France.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Téléchargement selon Appareils */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Comment Télécharger et Installer IPTV Smarters Pro en France ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              La procédure d'installation dépend du type d'appareil que vous utilisez. Suivez notre guide spécifique pour chaque système :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Fire TV */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Tv className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Amazon Fire TV Stick</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  L'application s'installe en 2 minutes via l'outil officiel <strong>Downloader</strong> avec le code direct.
                </p>
              </div>
              <Link
                href="/guide-installation/fire-tv-stick"
                className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300 pt-2"
              >
                <span>Voir le tutoriel Fire Stick complet</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Smart TV Samsung & LG */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Monitor className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Smart TV Samsung & LG</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Disponible sous le nom <em>Smarters Pro</em> directement dans le Samsung Smart Hub ou le LG Content Store officiel.
                </p>
              </div>
              <Link
                href="/guide-installation/smart-tv-samsung-lg"
                className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300 pt-2"
              >
                <span>Voir le tutoriel Smart TV Samsung / LG</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Android Devices */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Android Box, TV & Mobile</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Accessible sur Google Play Store ou directement via fichier APK universel pour toutes les Box Android TV (Nvidia Shield, Xiaomi Mi Box).
                </p>
              </div>
              <Link
                href="/guide-installation"
                className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300 pt-2"
              >
                <span>Guide d'installation Android TV</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: Configuration Xtream Codes vs M3U */}
        <section id="configuration" className="scroll-mt-24 space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Tutoriel de Configuration : Xtream Codes API vs Lien M3U
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Pour connecter vos flux vidéo à IPTV Smarters Pro, deux méthodes d'authentification existent. Nous recommandons vivement l'API Xtream Codes pour des performances optimales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Methode 1: Xtream Codes */}
            <div className="p-8 rounded-2xl bg-slate-900 border-2 border-blue-500/40 space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-bold text-xs">
                  Méthode 1 (Recommandée)
                </span>
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>

              <h3 className="text-xl font-bold text-white">Connexion via API Xtream Codes</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Cette méthode garantit la synchronisation automatique des catégories, des logos de chaînes en haute définition et du guide TV officiel sans ralentissement.
              </p>

              <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                <li className="leading-relaxed">
                  Lancez l'application et cliquez sur <strong>Connexion avec l'API Xtream Codes</strong>.
                </li>
                <li className="leading-relaxed">
                  Remplissez le champ <strong>Nom arbitraire</strong> (ex : <em>Smarters Pro VIP</em>).
                </li>
                <li className="leading-relaxed">
                  Saisissez votre <strong>Nom d'utilisateur (Username)</strong> et <strong>Mot de passe (Password)</strong> reçus par e-mail ou WhatsApp.
                </li>
                <li className="leading-relaxed">
                  Indiquez l'<strong>URL du Serveur</strong> (ex : <code>http://serveur-dns.pro:8080</code>).
                </li>
                <li className="leading-relaxed">
                  Cliquez sur <strong>Ajouter un utilisateur</strong> pour finaliser la synchronisation.
                </li>
              </ol>
            </div>

            {/* Methode 2: Playlist M3U */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-bold text-xs">
                  Méthode 2
                </span>
                <SlidersHorizontal className="w-5 h-5 text-slate-400" />
              </div>

              <h3 className="text-xl font-bold text-white">Chargement via URL de Playlist M3U</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Pratique pour les utilisateurs disposant d'un lien M3U direct. Moins optimisée pour la gestion dynamique des catalogues volumineux de séries.
              </p>

              <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                <li className="leading-relaxed">
                  Sur l'écran d'accueil, sélectionnez <strong>Charger votre liste de lecture ou fichier/URL</strong>.
                </li>
                <li className="leading-relaxed">
                  Sélectionnez le type <strong>URL M3U</strong>.
                </li>
                <li className="leading-relaxed">
                  Entrez le nom de votre liste de lecture et collez l'URL complète fournie dans votre espace client.
                </li>
                <li className="leading-relaxed">
                  Validez en cliquant sur <strong>Ajouter un utilisateur</strong>.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 4: Pourquoi choisir notre Abonnement IPTV Smarters Pro */}
        <section className="rounded-2xl bg-gradient-to-b from-blue-950/40 to-slate-900 border border-blue-900/40 p-8 sm:p-10 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Optimisez IPTV Smarters Pro avec un Abonnement Serveur Haut Débit
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Une application réactive ne suffit pas sans une infrastructure de serveurs dédiée. Notre solution garantit une bande passante calibrée pour la France afin d'éviter tout écran noir lors des soirs de grands matchs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-xl space-y-3">
              <span className="text-2xl font-black text-blue-400">01</span>
              <h3 className="text-base font-bold text-white">Serveurs Anti-Freeze 99.9%</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Équilibrage de charge dynamique basé sur des serveurs CDN situés en France et en Europe de l'Ouest.
              </p>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-xl space-y-3">
              <span className="text-2xl font-black text-blue-400">02</span>
              <h3 className="text-base font-bold text-white">Guide EPG 7 Jours Complet</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Toutes les grilles horaires des chaînes françaises et internationales actualisées en continu dans l'application.
              </p>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-xl space-y-3">
              <span className="text-2xl font-black text-blue-400">03</span>
              <h3 className="text-base font-bold text-white">Support Francophone Réactif</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Assistance technique par WhatsApp et e-mail 7j/7 pour vous assister lors de la première installation.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
            >
              <span>Voir les Formules d'Abonnement IPTV 4K</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section 5: FAQ Spécifique IPTV Smarters Pro */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Foire Aux Questions sur IPTV Smarters Pro
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Toutes les réponses à vos questions techniques et pratiques sur l'application et les abonnements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Pourquoi mon application affiche-t-elle "Invalid Details" ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Ce message indique généralement une faute de frappe dans votre nom d'utilisateur, mot de passe ou l'URL du serveur (attention aux majuscules et aux espaces superflus). Vérifiez vos identifiants dans votre boîte mail ou contactez notre support client.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Peut-on utiliser l'application sur plusieurs appareils à la fois ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Vous pouvez installer l'application sur autant d'appareils que vous le souhaitez. Cependant, le nombre de connexions simultanées dépend de votre formule : notre formule Premium autorise le multi-écrans pour toute la famille.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Quelle connexion internet est requise pour la 4K ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Un débit stable d'au moins 15 à 25 Mb/s est recommandé pour profiter de la 4K Ultra HD à 60 FPS sans latence. La fibre optique, la 5G ou un bon réseau VDSL conviennent parfaitement.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Faut-il utiliser un VPN avec IPTV Smarters Pro ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Ce n'est pas obligatoire car nos flux sont sécurisés et chiffrés. Toutefois, si votre fournisseur d'accès à internet bride les protocoles de streaming le soir lors de fortes affluences, l'utilisation d'un VPN peut rétablir une fluidité maximale.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
