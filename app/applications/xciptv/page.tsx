import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Smartphone, 
  Tv, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  ChevronRight, 
  Star, 
  PlayCircle, 
  ShieldCheck, 
  Download, 
  Settings, 
  Sliders, 
  HelpCircle, 
  Layers, 
  Lock,
  KeyRound,
  AlertCircle,
  Server,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';

const PAGE_CANONICAL = `${SITE_CONFIG.domain}/applications/xciptv`;

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "XCIPTV Player : Téléchargement APK, Code Activation & Installation 2026",
    description: "Guide expert XCIPTV Player : Téléchargement APK officiel, code Downloader Fire TV Stick, codes d'activation & identifiants Xtream, configuration pas-à-pas et abonnement 4K.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'xciptv',
      'xciptv player',
      'telecharger xciptv',
      'code activation xciptv',
      'xciptv code activation gratuit',
      'xciptv apk',
      'configuration xciptv',
      'installation xciptv',
      'abonnement xciptv'
    ],
  });
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
        softwareVersion: '7.0.1',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.7',
          ratingCount: '1080',
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
        name: 'Comment Configurer XCIPTV Player avec Xtream Codes',
        description: 'Tutoriel officiel pour connecter votre abonnement IPTV 4K à l\'application XCIPTV en moins de 2 minutes.',
        totalTime: 'PT3M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Télécharger XCIPTV Player',
            text: 'Téléchargez XCIPTV Player depuis le Google Play Store ou installez l\'APK certifié via Downloader sur votre Fire TV Stick.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Saisir vos identifiants d\'activation Xtream',
            text: 'Sur l\'écran de bienvenue, entrez l\'URL du serveur, votre nom d\'utilisateur (Username) et votre mot de passe (Password).',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Connexion et chargement du catalogue',
            text: 'Appuyez sur \'Sign In\' pour synchroniser les chaînes directes, le guide EPG 7 jours et le catalogue VOD.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Où trouver le code d\'activation pour XCIPTV Player ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'L\'application XCIPTV Player est 100% gratuite au téléchargement et ne facture aucun frais d\'activation. Le code réclamé sur l\'écran d\'accueil correspond aux identifiants privés délivrés avec votre abonnement IPTV 4K (URL du serveur, Nom d\'utilisateur et Mot de passe).',
            },
          },
          {
            '@type': 'Question',
            name: 'Pourquoi les codes XCIPTV gratuits trouvés sur Internet ne fonctionnent-ils pas ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Les codes partagés publiquement sur Telegram ou les forums sont des accès saturés ou bannis. Ils génèrent des erreurs d\'authentification et coupent au bout de quelques secondes. Un abonnement serveur privé garantit une bande passante stable sans coupure.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quel lecteur choisir dans XCIPTV : ExoPlayer ou VLC ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Conservez ExoPlayer pour le zapping instantané des chaînes directes Sport en 4K 60 FPS, et activez VLC dans les paramètres lecteur pour les films VOD nécessitant des pistes audio multilingues AC3 ou DTS.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quel est le code Downloader pour installer XCIPTV sur Fire TV Stick ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sur votre Amazon Fire TV Stick, ouvrez Downloader et tapez le code officiel 283649 ou renseignez directement l\'URL ottrun.com/xciptv.apk pour lancer le téléchargement immédiat de l\'APK officiel de XCIPTV Player.',
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
            <span className="text-slate-200 font-medium" aria-current="page">XCIPTV Player</span>
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
                  src="/images/XCIPTV-Player.webp"
                  alt="Logo officiel XCIPTV Player"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-indigo-400" />
                <span>Lecteur Android &amp; Fire TV Double Moteur &middot; Note : 4.7 / 5</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              XCIPTV Player : Téléchargement APK, Code Activation &amp; Installation
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Plébiscité pour son design épuré en tuiles et son double lecteur ExoPlayer / VLC, <strong>XCIPTV Player</strong> est une solution de choix sur <strong>Android TV</strong> et <strong>Firestick</strong>. Découvrez comment <strong>télécharger l'APK officiel</strong>, configurer vos <strong>codes d'activation serveur</strong> et visionner notre <strong>abonnement 4K sans saccade</strong>.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/abonnement-iptv-12-mois"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Activer mon Abonnement 4K XCIPTV</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="#telechargement"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                <Download className="w-4 h-4 mr-2 text-indigo-400" />
                <span>Télécharger l'APK</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">Double Moteur</span>
                <span className="block text-xs text-slate-400">ExoPlayer &amp; VLC</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">100% Gratuit</span>
                <span className="block text-xs text-slate-400">Aucun frais de licence</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">Multi-Screen</span>
                <span className="block text-xs text-slate-400">2 à 4 écrans en direct</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg">
                    X
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-none">Fiche XCIPTV Player</h2>
                    <span className="text-xs text-slate-400">Version Officielle 7.0.1</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  Gratuit au Téléchargement
                </span>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Systèmes Compatibles</dt>
                  <dd className="font-semibold text-slate-200">Android TV, Google TV, Fire OS, Mobile</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Code Court Downloader</dt>
                  <dd className="font-mono font-bold text-indigo-400">283649</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Téléchargement APK Direct</dt>
                  <dd className="font-mono text-xs text-amber-400">
                    <a href="https://ottrun.com/xciptv.apk" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      ottrun.com/xciptv.apk
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Protocoles de Flux</dt>
                  <dd className="font-semibold text-slate-200">Xtream Codes API &amp; M3U</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Moteurs de Lecture</dt>
                  <dd className="font-semibold text-emerald-400">ExoPlayer Matériel + VLC Player</dd>
                </div>
                <div className="flex justify-between py-1.5">
                  <dt className="text-slate-400">Outils Intégrés</dt>
                  <dd className="font-semibold text-slate-200">Speed Test, Buffer Réglable, PIN</dd>
                </div>
              </dl>

              <div className="pt-2">
                <Link
                  href="/tarifs"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
                >
                  <span>Obtenir mon Accès Serveur 4K</span>
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Section 0: Présentation Technique XCIPTV */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Qu'est-ce que XCIPTV Player et Quels Sont ses Points Forts ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong>XCIPTV Player</strong> est un lecteur multimédia vidéo fonctionnant via la technologie <a href="https://fr.wikipedia.org/wiki/Over-the-top_service" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline underline-offset-4 hover:text-indigo-300">OTT (Over-The-Top)</a>. Conçu spécialement pour les télécommandes des box Android TV et clés Amazon Fire TV Stick, il arbore une interface en bandeaux horizontaux très intuitive pour naviguer entre chaînes en direct et films à la demande.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Sa force réside dans son architecture à double moteur vidéo : <strong>ExoPlayer</strong> pour le zapping ultra-rapide des flux sportifs en direct, et <strong>VLC Player</strong> pour les films et séries VOD en <a href="https://fr.wikipedia.org/wiki/H.265/HEVC" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline underline-offset-4 hover:text-indigo-300">H.265 / HEVC</a> avec pistes audio multilingues (AC3, DTS).
            </p>

            <figure className="my-6 space-y-2">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-2xl">
                <Image
                  src="/images/placeholders/app-xciptv.svg"
                  alt="Interface XCIPTV Player avec double moteur vidéo ExoPlayer et VLC sur Box Android et Fire TV"
                  width={1200}
                  height={675}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="text-center text-xs text-slate-400">
                Interface d'accueil XCIPTV Player : accès immédiat au Live TV, aux films VOD, aux séries et au guide EPG.
              </figcaption>
            </figure>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <PlayCircle className="w-5 h-5 text-indigo-400" />
              <h3 className="text-sm font-bold text-white">Double Moteur Vidéo</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Basculez entre ExoPlayer pour le direct et VLC pour la VOD en fonction des pistes audio.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <Layers className="w-5 h-5 text-purple-400" />
              <h3 className="text-sm font-bold text-white">Mode Multi-Screen</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Suivez 2 à 4 événements sportifs simultanément sur un seul écran sans lag.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <Lock className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">Contrôle Parental PIN</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Verrouillez les bouquets pour adultes ou sensibles d'un code secret à 4 chiffres.
              </p>
            </div>
          </div>
        </section>

        {/* PILIER 1: TÉLÉCHARGEMENT */}
        <section id="telechargement" className="scroll-mt-24 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
              <Download className="w-3.5 h-3.5" />
              <span>Pilier 1 : Téléchargement</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Télécharger XCIPTV Player : APK Officiel &amp; Code Downloader Fire Stick
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Pour sécuriser votre équipement de salon, utilisez les sources de téléchargement officielles ci-dessous :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Fire TV Stick */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Tv className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Amazon Fire TV Stick</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sur Firestick, ouvrez <strong>Downloader</strong> et saisissez le code court ou directement l'URL officielle du fichier APK :
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center space-y-2.5">
                  <div>
                    <span className="text-xs text-slate-400 block mb-0.5">Code Downloader XCIPTV</span>
                    <span className="font-mono text-xl font-extrabold text-amber-400">283649</span>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80 text-left">
                    <span className="text-[11px] text-slate-400 block mb-1">Lien direct APK (si code Downloader inactif) :</span>
                    <a
                      href="https://ottrun.com/xciptv.apk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-indigo-400 hover:underline break-all block"
                    >
                      https://ottrun.com/xciptv.apk
                    </a>
                  </div>
                  <div className="text-left text-[11px] text-slate-400">
                    Portail éditeur : <a href="https://ottrun.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">ottrun.com</a>
                  </div>
                </div>
              </div>
              <Link
                href="/guide-installation/fire-tv-stick"
                className="inline-flex items-center text-xs font-semibold text-indigo-400 hover:text-indigo-300"
              >
                <span>Guide pas-à-pas Fire Stick</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Android TV & Box */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Google TV, Android TV &amp; Box</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sur Nvidia Shield, Xiaomi TV Box, téléviseurs Sony, Philips ou TCL, téléchargez XCIPTV directement depuis le <strong>Google Play Store TV</strong>.
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1.5">
                  <div>Source : <a href="https://play.google.com/store/apps/details?id=com.nathnetwork.xciptv" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline">Google Play Store &rarr;</a></div>
                  <div>Prix : <span className="text-white font-semibold">100% Gratuit</span></div>
                </div>
              </div>
              <Link
                href="/guide-installation/android-tv-box"
                className="inline-flex items-center text-xs font-semibold text-indigo-400 hover:text-indigo-300"
              >
                <span>Guide Android TV Box</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Smart TV Samsung & LG */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Tv className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Smart TV Samsung &amp; LG</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  XCIPTV n'étant pas disponible sur Samsung Tizen ni sur LG webOS sans boîtier externe, découvrez les alternatives natives recommandées :
                </p>
                <div className="space-y-1.5 text-xs">
                  <Link href="/applications/iptv-smarters-pro" className="block text-blue-400 hover:underline">
                    &rarr; Guide IPTV Smarters Pro (Smart TV)
                  </Link>
                  <Link href="/applications/ibo-player" className="block text-cyan-400 hover:underline">
                    &rarr; Guide IBO Player Pro (Samsung &amp; LG)
                  </Link>
                </div>
              </div>
              <span className="text-[11px] text-slate-500">Pour téléviseurs sans box Android</span>
            </div>

          </div>
        </section>

        {/* PILIER 2: INSTALLATION ET CONFIGURATION */}
        <section id="configuration" className="scroll-mt-24 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
              <Settings className="w-3.5 h-3.5" />
              <span>Pilier 2 : Installation &amp; Configuration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Installation et Configuration de XCIPTV via l'API Xtream Codes
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              La connexion de vos bouquets 4K et du guide <a href="https://fr.wikipedia.org/wiki/Guide_des_programmes" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline hover:text-indigo-300">EPG</a> s'effectue en 4 étapes simples :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Guide Xtream */}
            <div className="p-8 rounded-2xl bg-slate-900 border-2 border-indigo-500/40 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-indigo-600 text-white font-bold text-xs">
                  Procédure Xtream Codes API
                </span>
                <CheckCircle2 className="w-5 h-5 text-indigo-400" />
              </div>

              <h3 className="text-lg font-bold text-white">Connexion de Votre Abonnement Serveur</h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                <li className="leading-relaxed">
                  Lancez XCIPTV Player sur votre téléviseur ou Firestick.
                </li>
                <li className="leading-relaxed">
                  Dans le champ <strong>Server URL</strong>, saisissez l'adresse de notre serveur <a href="https://fr.wikipedia.org/wiki/Domain_Name_System" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">DNS</a> (ex : <code>http://serveur-dns.pro:8080</code>).
                </li>
                <li className="leading-relaxed">
                  Renseignez votre <strong>Nom d'utilisateur</strong> et votre <strong>Mot de passe</strong> privés.
                </li>
                <li className="leading-relaxed">
                  Cliquez sur <strong>Sign In</strong>. Le lecteur télécharge en quelques secondes l'ensemble de vos flux direct et VOD.
                </li>
              </ol>
            </div>

            {/* Réglages Avancés */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-bold text-xs">
                  Optimisations &amp; Paramètres
                </span>
                <Sliders className="w-5 h-5 text-indigo-400" />
              </div>

              <h3 className="text-lg font-bold text-white">Réglages du Buffer &amp; Moteur Vidéo</h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-white block">Taille du Buffer Tampon :</span>
                  <p className="text-xs text-slate-400">
                    Dans <em>Settings &gt; Player Settings</em>, réglez la mémoire tampon sur <strong>Large (10 secondes)</strong> si vous êtes connecté en Wi-Fi pour éliminer les micro-coupures.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-white block">Testeur de Débit Intégré :</span>
                  <p className="text-xs text-slate-400">
                    Utilisez le module <em>Speed Test</em> interne pour mesurer la latence et le débit réel vers nos serveurs 10 Gbps.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* PILIER 3: CODE D'ACTIVATION XCIPTV */}
        <section id="code-activation" className="scroll-mt-24 space-y-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
              <KeyRound className="w-3.5 h-3.5" />
              <span>Pilier 3 : Code d'Activation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Code d'Activation XCIPTV Player : Comprendre les Accès Valides
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              La recherche d'un « <strong>code activation XCIPTV gratuit</strong> » est très fréquente sur Google. Il est essentiel de dissiper la confusion sur ce que réclame l'application :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            
            {/* Explication technique */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-indigo-400" />
                <span>XCIPTV est un Lecteur 100% Gratuit</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Contrairement à des applications payantes comme TiviMate Premium ou IBO Player, <strong>XCIPTV ne facture aucun frais d'activation logicielle</strong>. L'application est entièrement utilisable sans abonnement logiciel.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Le fameux « code » que l'écran d'accueil réclame pour se connecter correspond <strong>aux identifiants de diffusion de votre abonnement IPTV serveur</strong> :
              </p>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-2 pl-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Nom d'utilisateur unique :</strong> Associé à votre ligne privée.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Mot de passe sécurisé :</strong> Empêchant l'utilisation pirate de votre compte.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>URL de serveur DNS :</strong> Pointant vers nos infrastructures CDN 10 Gbps.</span>
                </li>
              </ul>
            </div>

            {/* Dangers des codes gratuits */}
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-amber-400 shrink-0" />
                <h3 className="text-base font-bold text-white">Pourquoi Bannir les Codes Gratuits Partagés</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Les identifiants gratuits partagés sur TikTok, YouTube ou Telegram provoquent de multiples désagréments :
              </p>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Erreur « Invalid Details » :</strong> Ces comptes sont désactivés par les administrateurs serveur dès leur partage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Gels d'image intempestifs :</strong> Partagés par des centaines de personnes, ils coupent lors des matchs à fort audimat.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Risque de piratage :</strong> Les APK modifiés contiennent souvent des chevaux de Troie.</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/tarifs"
                  className="inline-flex items-center text-xs font-bold text-indigo-400 hover:text-indigo-300"
                >
                  <span>Obtenir des identifiants privés et sécurisés &rarr;</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* PILIER 4: ABONNEMENT XCIPTV */}
        <section id="abonnement" className="scroll-mt-24 rounded-3xl bg-white dark:bg-gradient-to-b dark:from-indigo-950/40 dark:to-slate-900 border border-indigo-200 dark:border-indigo-900/40 p-8 sm:p-12 space-y-8 shadow-sm dark:shadow-none">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
              <Server className="w-3.5 h-3.5" />
              <span>Pilier 4 : Abonnement IPTV 4K Spécial XCIPTV</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Exploitez la Fluidité de XCIPTV avec notre Infrastructure Serveur 10 Gbps
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Pour profiter pleinement de la double compatibilité ExoPlayer / VLC de XCIPTV, nos serveurs CDN européens garantissent un débit continu sans coupure en 4K Ultra HD à 60 FPS lors des soirées de choc sportif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">01</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Compatible Multi-Vues</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Visionnez 2 à 4 matchs simultanés sur XCIPTV grâce à nos offres autorisant plusieurs flux sans blocage IP.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">02</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">EPG 7 Jours Complet</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Grille des programmes de l'ensemble des chaînes françaises et européennes synchronisée en direct.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">03</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Assistance WhatsApp 7j/7</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Notre support technique vous accompagne lors de la première saisie de vos identifiants Xtream sur XCIPTV.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/abonnement-iptv-12-mois"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-indigo-600/30 transition-all hover:scale-105"
            >
              <span>Découvrir l'Abonnement VIP 12 Mois (Compatible XCIPTV)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section FAQ XCIPTV */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Questions Fréquentes sur XCIPTV Player
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Réponses précises à vos interrogations sur l'installation, les codes et le paramétrage de XCIPTV Player.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Pourquoi l'application affiche-t-elle « Please check details » ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Ce message indique une erreur de frappe dans l'URL du serveur, le nom d'utilisateur ou le mot de passe. Veillez à respecter la casse (majuscules/minuscules) et à ne pas insérer d'espace au début ou à la fin.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Comment changer de lecteur audio/vidéo pour la VOD ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Rendez-vous dans <strong>Settings &gt; Player Settings</strong> et définissez VLC comme lecteur par défaut pour la section VOD afin de lire toutes les pistes sonores (AC3, EAC3).
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Puis-je utiliser un VPN avec XCIPTV Player ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Oui, l'application est 100% compatible avec les VPN installés sur Android TV ou Fire TV pour contourner le bridage de votre fournisseur d'accès Internet en soirée de match.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Quelle est la différence entre XCIPTV et IPTV Smarters Pro ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Les deux lecteurs exploitent l'API Xtream Codes. XCIPTV se distingue par son interface par cartes horizontales très épurée, tandis qu'<Link href="/applications/iptv-smarters-pro" className="text-indigo-400 hover:underline">IPTV Smarters Pro</Link> est disponible sur un plus grand nombre d'écrans (Smart TV Samsung/LG et iOS).
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
