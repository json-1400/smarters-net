import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
  Clock,
  Download,
  Settings,
  Sliders,
  Layers,
  KeyRound,
  AlertCircle,
  Lock,
  Server,
  Sparkles,
  Smartphone
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';

const PAGE_CANONICAL = `${SITE_CONFIG.domain}/applications/tivimate`;

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "TiviMate IPTV Player : Téléchargement APK, Code Activation & Installation 2026",
    description: "Guide expert TiviMate IPTV Player : Téléchargement APK officiel, code Downloader Fire TV Stick, activation TiviMate Premium vs identifiants serveur, configuration et abonnement 4K sans freeze.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'tivimate',
      'tivimate apk',
      'telecharger tivimate',
      'code activation tivimate',
      'tivimate code activation gratuit',
      'tivimate premium code',
      'tivimate firestick',
      'configuration tivimate',
      'installation tivimate',
      'abonnement tivimate iptv'
    ],
  });
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
        softwareVersion: '5.0.4',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '1940',
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
        name: 'Comment Installer et Configurer TiviMate IPTV Player avec Xtream Codes',
        description: 'Tutoriel officiel pour installer TiviMate sur Fire TV Stick ou Android TV et synchroniser votre abonnement IPTV 4K.',
        totalTime: 'PT3M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Télécharger TiviMate via Downloader',
            text: 'Sur Amazon Fire TV Stick, ouvrez Downloader et tapez le code officiel 272483 pour installer l\'APK certifié. Sur Android TV, téléchargez-le depuis le Google Play Store.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Ajouter une playlist Xtream Codes',
            text: 'Lancez TiviMate, sélectionnez \'Ajouter une liste de lecture\' (Add Playlist) et choisissez \'Identifiants Xtream Codes\'.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Renseigner les identifiants d\'activation',
            text: 'Indiquez l\'URL du serveur, votre nom d\'utilisateur et votre mot de passe reçus après commande de votre abonnement.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Finaliser et charger le guide EPG',
            text: 'Validez sur Terminé. TiviMate télécharge la grille complète des programmes et vos chaînes en direct.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Quelle est la différence entre le code d\'activation TiviMate Premium et les identifiants serveur ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le code TiviMate Premium débloque les fonctionnalités avancées du logiciel (multi-écrans, VOD, enregistrement PVR) via l\'application TiviMate Companion. Les identifiants serveur (Xtream Codes : Nom d\'utilisateur, Mot de passe et URL DNS) sont fournis par votre abonnement IPTV pour diffuser les chaînes en streaming.',
            },
          },
          {
            '@type': 'Question',
            name: 'Existe-t-il un code d\'activation TiviMate Premium gratuit ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non. Les prétendus codes gratuits ou versions APK fissurées trouvées en ligne sont des vecteurs de virus et bloquent l\'accès aux mises à jour du développeur officiel. La licence Premium officielle coûte environ 9 €/an ou 35 € à vie pour 5 appareils.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quel est le lien ou code Downloader pour installer TiviMate sur Fire TV Stick ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sur Amazon Fire TV Stick, ouvrez Downloader et tapez soit l\'URL officielle directe https://tivimate.com/tivimate.apk soit le code court 272483. L\'URL directe est recommandée pour contourner toute défaillance de redirection.',
            },
          },
          {
            '@type': 'Question',
            name: 'TiviMate fonctionne-t-il sur les Smart TV Samsung ou LG ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non, TiviMate a été développé exclusivement pour Android TV, Google TV et Fire OS. Si vous disposez d\'un téléviseur Samsung (Tizen) ou LG (webOS) sans décodeur Android, nous recommandons IPTV Smarters Pro ou IBO Player.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment activer le mode multi-écrans sur TiviMate ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pendant la lecture d\'une chaîne, appuyez sur le bouton bas ou menu de votre télécommande et sélectionnez \'Multi-vue\' (Split Screen). Vous pouvez ajouter de 2 à 9 écrans simultanés à condition que votre abonnement autorise plusieurs connexions.',
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
            <span className="text-slate-200 font-medium" aria-current="page">TiviMate IPTV</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 p-2 shrink-0 overflow-hidden shadow-xl flex items-center justify-center">
                <Image
                  src="/images/TiviMate.webp"
                  alt="Logo officiel TiviMate IPTV Player"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-emerald-400" />
                <span>Lecteur Premium N°1 sur Android TV &amp; Fire Stick</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              TiviMate IPTV Player : Téléchargement APK, Code Activation &amp; Installation
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Considéré comme le nec plus ultra des lecteurs IPTV sur téléviseur de salon, <strong>TiviMate IPTV Player</strong> offre une interface digne des meilleurs décodeurs satellite. Découvrez comment le <strong>télécharger sur Firestick</strong>, configurer vos <strong>codes d'activation serveur</strong> et profiter de notre <strong>abonnement 4K sans freeze</strong>.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/abonnement-iptv-12-mois"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Activer mon Abonnement 4K TiviMate</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="#telechargement"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                <Download className="w-4 h-4 mr-2 text-emerald-400" />
                <span>Guide de Téléchargement</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">&lt; 0.3s</span>
                <span className="block text-xs text-slate-400">Zapping instantané</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">Multi-Vues</span>
                <span className="block text-xs text-slate-400">2 à 9 écrans directs</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">EPG 7 Jours</span>
                <span className="block text-xs text-slate-400">Grille dynamique</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-black text-lg">
                    T
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-none">Fiche Logicielle TiviMate</h2>
                    <span className="text-xs text-slate-400">Version 5.0.4 Optimisée</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  Note : 4.9 / 5
                </span>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Systèmes Compatibles</dt>
                  <dd className="font-semibold text-slate-200">Fire TV Stick, Android TV, Google TV</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">URL Directe APK</dt>
                  <dd className="font-mono font-semibold text-emerald-400 text-xs">tivimate.com/tivimate.apk</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Code Court Downloader</dt>
                  <dd className="font-mono font-bold text-slate-200">272483</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Protocoles de Flux</dt>
                  <dd className="font-semibold text-slate-200">Xtream Codes API, M3U Plus</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Enregistrement PVR</dt>
                  <dd className="font-semibold text-emerald-400">Support Clé USB &amp; Disque NAS</dd>
                </div>
                <div className="flex justify-between py-1.5">
                  <dt className="text-slate-400">Moteur Vidéo</dt>
                  <dd className="font-semibold text-slate-200">ExoPlayer Matériel 4K</dd>
                </div>
              </dl>

              <div className="pt-2">
                <Link
                  href="/tarifs"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
                >
                  <span>Obtenir mon Accès Serveur 4K</span>
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Section 0: Présentation de TiviMate */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Pourquoi TiviMate est le Meilleur Lecteur IPTV sur Télévision de Salon ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Conçu exclusivement pour les interfaces pilotées à la télécommande, <strong>TiviMate IPTV Player</strong> exploite la technologie <a href="https://fr.wikipedia.org/wiki/Over-the-top_service" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300">OTT (Over-The-Top)</a> pour offrir une ergonomie comparable aux box des opérateurs télécoms (Canal+, Free, Orange).
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Contrairement aux applications mobiles adaptées à la hâte, TiviMate intègre un décodage matériel haute performance compatible avec le format <a href="https://fr.wikipedia.org/wiki/H.265/HEVC" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300">H.265 / HEVC</a>. Résultat : un zapping quasi instantané (moins de 0,3 seconde) et aucune saccade lors des diffusions de football ou de Formule 1 en 4K 60 FPS.
            </p>

            <figure className="my-6 space-y-2">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-2xl">
                <Image
                  src="/images/placeholders/app-tivimate.svg"
                  alt="Interface TiviMate IPTV Player avec guide EPG dynamique et mode multi-écrans sur Android TV"
                  width={1200}
                  height={675}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="text-center text-xs text-slate-400">
                Interface de navigation TiviMate IPTV : guide EPG fluide et zapping haute réactivité.
              </figcaption>
            </figure>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <Zap className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">Moteur ExoPlayer</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prise en charge matérielle directe des flux 4K UHD 60 FPS sans surchauffe de votre boîtier TV.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <Layers className="w-5 h-5 text-teal-400" />
              <h3 className="text-sm font-bold text-white">Multi-Playlists Réunies</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fusionnez plusieurs abonnements au sein d'une grille de favoris personnalisée et unifiée.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <Clock className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm font-bold text-white">Replay &amp; Catch-Up 72h</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Remontez le temps dans la grille TV pour voir un match ou un film manqué dans la semaine.
              </p>
            </div>
          </div>
        </section>

        {/* PILIER 1: TÉLÉCHARGEMENT */}
        <section id="telechargement" className="scroll-mt-24 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <Download className="w-3.5 h-3.5" />
              <span>Pilier 1 : Téléchargement</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Télécharger TiviMate : APK Officiel &amp; Code Downloader Firestick
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              TiviMate n'étant pas disponible sur le store Amazon officiel, son installation requiert l'application <strong>Downloader</strong> ou le Play Store Android TV. Utilisez uniquement les canaux officiels ci-dessous :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Fire TV Stick */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Tv className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Amazon Fire TV Stick (Toutes versions)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sur Firestick, ouvrez <strong>Downloader</strong>. Saisissez le code court certifié ou directement l'URL officielle de l'APK si le code de redirection ne se lance pas :
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2 text-center">
                  <div>
                    <span className="text-[11px] text-slate-400 block mb-0.5">Code Downloader</span>
                    <span className="font-mono text-lg font-extrabold text-amber-400">272483</span>
                  </div>
                  <div className="border-t border-slate-800 pt-1.5">
                    <span className="text-[11px] text-slate-400 block mb-0.5">URL directe officielle APK</span>
                    <span className="font-mono text-[11px] text-emerald-400 select-all break-all">https://tivimate.com/tivimate.apk</span>
                  </div>
                </div>
              </div>
              <Link
                href="/guide-installation/fire-tv-stick"
                className="inline-flex items-center text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <span>Tutoriel complet Fire TV Stick</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Android TV & Google TV */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Google TV, Nvidia Shield &amp; Box Android</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sur Sony Bravia, Philips, Xiaomi Mi Box ou Nvidia Shield, téléchargez TiviMate sur le <strong>Google Play Store officiel</strong> :
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Lien APK Direct :</span>
                    <a href="https://tivimate.com/tivimate.apk" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline">
                      Télécharger tivimate.apk
                    </a>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Google Play TV :</span>
                    <a href="https://play.google.com/store/apps/details?id=ar.tvplayer.tv" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      Voir sur Play Store
                    </a>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Compte Premium :</span>
                    <a href="https://play.google.com/store/apps/details?id=ar.tvplayer.companion" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                      TiviMate Companion
                    </a>
                  </div>
                </div>
              </div>
              <Link
                href="/guide-installation"
                className="inline-flex items-center text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <span>Guide d'installation Android TV</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Incompatibilité Samsung & LG */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Tv className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Smart TV Samsung &amp; LG (Attention)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  TiviMate n'est pas disponible sur Samsung Tizen ni sur LG webOS. Si vous n'avez pas de boîtier Android externe, orientez-vous vers :
                </p>
                <div className="space-y-1.5 text-xs">
                  <Link href="/applications/iptv-smarters-pro" className="block text-blue-400 hover:underline">
                    &rarr; Guide IPTV Smarters Pro (Smart TV)
                  </Link>
                  <Link href="/applications/ibo-player" className="block text-blue-400 hover:underline">
                    &rarr; Guide IBO Player Pro (Samsung &amp; LG)
                  </Link>
                </div>
              </div>
              <span className="text-[11px] text-slate-500">
                Alternative recommandée sans achat de box.
              </span>
            </div>

          </div>
        </section>

        {/* PILIER 2: INSTALLATION ET CONFIGURATION */}
        <section id="configuration" className="scroll-mt-24 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <Settings className="w-3.5 h-3.5" />
              <span>Pilier 2 : Installation &amp; Configuration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Guide de Configuration TiviMate : Xtream Codes &amp; Réglages Anti-Freeze
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Pour éliminer toute micro-coupure et afficher le guide électronique des programmes (EPG), voici la configuration optimale pas-à-pas :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Tutoriel Xtream */}
            <div className="p-8 rounded-2xl bg-slate-900 border-2 border-emerald-500/40 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-bold text-xs">
                  Configuration Xtream Codes API
                </span>
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>

              <h3 className="text-lg font-bold text-white">Connexion de Votre Abonnement IPTV 4K</h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                <li className="leading-relaxed">
                  Ouvrez TiviMate et cliquez sur <strong>Ajouter une liste de lecture</strong> (Add Playlist).
                </li>
                <li className="leading-relaxed">
                  Sélectionnez <strong>Identifiants Xtream Codes</strong>.
                </li>
                <li className="leading-relaxed">
                  Renseignez l'<strong>Adresse du serveur</strong> (Server URL) fournie lors de votre commande (ex : <code>http://serveur-dns.pro:8080</code>).
                </li>
                <li className="leading-relaxed">
                  Saisissez votre <strong>Nom d'utilisateur</strong> et votre <strong>Mot de passe</strong>.
                </li>
                <li className="leading-relaxed">
                  Cochez l'option <strong>Inclure les chaînes TV et la VOD</strong> puis appuyez sur <strong>Terminé</strong>.
                </li>
              </ol>
            </div>

            {/* Réglages Buffer et Optimisations */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-bold text-xs">
                  Réglages Anti-Freeze Avancés
                </span>
                <Sliders className="w-5 h-5 text-teal-400" />
              </div>

              <h3 className="text-lg font-bold text-white">Optimisation du Buffer Cache &amp; Audio</h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-white block">Taille du Buffer Tampon :</span>
                  <p className="text-xs text-slate-400">
                    Dans <em>Paramètres &gt; Lecture &gt; Taille du tampon</em>, choisissez <strong>Grand (Large)</strong>. Cela permet à TiviMate de précharger 2 à 3 secondes de vidéo pour absorber les variations de votre réseau Wi-Fi.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-white block">Format de Sortie Audio :</span>
                  <p className="text-xs text-slate-400">
                    Activez le <strong>Passthrough audio</strong> dans <em>Paramètres &gt; Audio</em> pour envoyer le flux Dolby Digital 5.1 natif à votre barre de son.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* PILIER 3: CODE D'ACTIVATION TIVIMATE */}
        <section id="code-activation" className="scroll-mt-24 space-y-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
              <KeyRound className="w-3.5 h-3.5" />
              <span>Pilier 3 : Code d'Activation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Code d'Activation TiviMate : Distinguer la Licence Premium du Serveur IPTV
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Des milliers d'internautes recherchent chaque jour un « <strong>code activation TiviMate Premium gratuit</strong> ». Une confusion fondamentale doit être clarifiée pour éviter les arnaques et les pannes :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            
            {/* Distinguer les deux codes */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-emerald-400" />
                <span>Deux Codes Complètement Différents</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Pour faire fonctionner TiviMate au maximum de son potentiel, deux clés distinctes entrent en jeu :
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-emerald-400 font-semibold block mb-1">1. La Licence TiviMate Premium (Application) :</strong>
                  Elle s'achète sur le Google Play Store via l'application <strong>TiviMate Companion</strong> (compte Google). Elle autorise le mode multi-vues, l'enregistrement PVR et débloque jusqu'à 5 écrans.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-blue-400 font-semibold block mb-1">2. Les Identifiants d'Abonnement IPTV (Contenu) :</strong>
                  Ce sont les codes serveur (Nom d'utilisateur, Mot de passe et URL <a href="https://fr.wikipedia.org/wiki/Domain_Name_System" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">DNS</a>) fournis par notre service pour recevoir les 25 000 chaînes directes et les 90 000 VOD.
                </div>
              </div>
            </div>

            {/* Dangers des codes gratuits et cracks */}
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-amber-400 shrink-0" />
                <h3 className="text-base font-bold text-white">Pourquoi Fuir les Prétendus Codes Gratuits &amp; Cracks APK</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Les fichiers intitulés « TiviMate Premium Crack » ou « Code TiviMate Gratuit » sur les forums présentent de sérieux dangers :
              </p>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Blocage instantané :</strong> Le développeur officiel (Armobsoft FZE) détecte et révoque automatiquement les clés piratées.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Guide EPG en panne :</strong> Les versions piratées désactivent les serveurs de synchronisation du guide TV.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Risque de piratage réseau :</strong> Les APK modifiés injectent des logiciels espions sur votre réseau local domestique.</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/abonnement-iptv-12-mois"
                  className="inline-flex items-center text-xs font-bold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Souscrire un accès serveur authentique 4K &rarr;</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Comparatif Gratuit vs Premium */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Tableau Comparatif : TiviMate Gratuit vs TiviMate Premium
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Pour exploiter toutes les capacités de votre équipement de salon, voici les différences majeures entre la version gratuite et la version Premium :
          </p>
          
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300 border-collapse">
              <thead className="bg-slate-950 text-slate-200 text-[11px] sm:text-xs uppercase font-bold">
                <tr>
                  <th className="p-3 sm:p-3.5">Fonctionnalité</th>
                  <th className="p-3 sm:p-3.5">Version Gratuite</th>
                  <th className="p-3 sm:p-3.5 text-emerald-400">Version Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3 sm:p-3.5 font-medium text-white">Nombre de listes IPTV</td>
                  <td className="p-3 sm:p-3.5">1 seule playlist</td>
                  <td className="p-3 sm:p-3.5 text-emerald-400 font-semibold">Multi-playlists illimitées</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3 sm:p-3.5 font-medium text-white">Catalogue VOD (Films &amp; Séries)</td>
                  <td className="p-3 sm:p-3.5 text-slate-400">Non (Direct TV seul)</td>
                  <td className="p-3 sm:p-3.5 text-emerald-400 font-semibold">Oui (Fiches &amp; affiches HD)</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3 sm:p-3.5 font-medium text-white">Mode Multi-Vues (Split Screen)</td>
                  <td className="p-3 sm:p-3.5 text-slate-400">Non</td>
                  <td className="p-3 sm:p-3.5 text-emerald-400 font-semibold">Oui (2 à 9 écrans simultanés)</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3 sm:p-3.5 font-medium text-white">Enregistrement PVR programmable</td>
                  <td className="p-3 sm:p-3.5 text-slate-400">Non</td>
                  <td className="p-3 sm:p-3.5 text-emerald-400 font-semibold">Oui (USB ou NAS réseau)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PILIER 4: ABONNEMENT TIVIMATE */}
        <section id="abonnement" className="scroll-mt-24 rounded-3xl bg-white dark:bg-gradient-to-b dark:from-emerald-950/40 dark:to-slate-900 border border-emerald-200 dark:border-emerald-900/40 p-8 sm:p-12 space-y-8 shadow-sm dark:shadow-none">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <Server className="w-3.5 h-3.5" />
              <span>Pilier 4 : Abonnement IPTV 4K TiviMate</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              L'Abonnement 4K Idéal pour Exploiter la Puissance de TiviMate
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              TiviMate exige un flux serveur irréprochable pour délivrer toute sa fluidité. Notre infrastructure réseau 10 Gbps est spécialement calibrée pour le protocole Xtream Codes de TiviMate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">01</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Compatible Multi-Connexions</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Exploitez pleinement le mode multi-vues de TiviMate avec nos formules multi-écrans sans blocage IP.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">02</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">EPG XMLTV 100% Synchronisé</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Toutes les chaînes françaises, belges, suisses et internationales disposent d'un guide TV complet sur 7 jours.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">03</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Zéro Freeze aux Heures de Pointe</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Bande passante garantie même lors des soirées de choc en Ligue des Champions grâce à nos serveurs CDN redondants.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/abonnement-iptv-12-mois"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-emerald-600/30 transition-all hover:scale-105"
            >
              <span>Découvrir l'Abonnement VIP 12 Mois (Compatible TiviMate)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section FAQ TiviMate */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Questions Fréquentes sur TiviMate IPTV Player
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Réponses précises aux interrogations les plus fréquentes sur l'installation, les licences et les réglages de TiviMate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Comment installer TiviMate sur Amazon Fire TV Stick ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Ouvrez l'application <strong>Downloader</strong> sur votre Fire TV Stick, saisissez le code officiel <code>272483</code>, installez l'APK puis connectez votre abonnement via vos identifiants Xtream Codes.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Pourquoi le guide des programmes (EPG) ne s'affiche-t-il pas ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Dans <em>Paramètres &gt; EPG</em>, cliquez sur <em>Mettre à jour les sources EPG</em>. Si l'heure est décalée, ajustez le fuseau horaire dans les paramètres de la playlist pour synchroniser la grille TV.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Comment enregistrer un programme en direct sur clé USB ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Branchez une clé USB formatée en FAT32 ou NTFS sur votre boîtier, définissez le dossier de destination dans <em>Paramètres &gt; Enregistrement</em>, puis sélectionnez le programme dans l'EPG pour planifier l'enregistrement.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>TiviMate est-il compatible avec les VPN ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Oui. TiviMate fonctionne parfaitement en arrière-plan d'une application VPN installée sur Fire TV ou Android TV pour sécuriser votre trafic ou contourner le bridage de votre FAI.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
