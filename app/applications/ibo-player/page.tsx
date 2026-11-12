import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
  ShieldCheck, 
  Download, 
  Settings, 
  Sliders, 
  HelpCircle,
  AlertCircle,
  Lock,
  Server,
  Sparkles,
  Smartphone
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';

const PAGE_CANONICAL = `${SITE_CONFIG.domain}/applications/ibo-player`;

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "IBO Player Pro : Téléchargement, Code Activation & Installation Smart TV 2026",
    description: "Guide expert IBO Player Pro : Téléchargement Samsung Tizen & LG webOS, code d'activation Device ID vs identifiants serveur, configuration Xtream et abonnement 4K sans coupure.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'ibo player',
      'ibo player pro',
      'telecharger ibo player',
      'code activation ibo player',
      'ibo player code activation gratuit',
      'ibo player samsung',
      'ibo player lg webos',
      'configuration ibo player',
      'installation ibo player',
      'abonnement ibo player'
    ],
  });
}

export default function IboPlayerPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${PAGE_CANONICAL}/#software`,
        name: 'IBO Player Pro',
        operatingSystem: 'Samsung Tizen, LG webOS, Android TV, Fire OS, Apple tvOS',
        applicationCategory: 'MultimediaApplication',
        softwareVersion: '3.8.2',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '1520',
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
        name: 'Comment Configurer son Abonnement sur IBO Player Pro',
        description: 'Tutoriel étape par étape pour associer vos identifiants Xtream Codes à votre téléviseur via le portail officiel iboplayer.com.',
        totalTime: 'PT3M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Récupérer le Device ID et la Device Key',
            text: 'Ouvrez IBO Player sur votre Smart TV Samsung ou LG. Relevez le Device ID (adresse MAC) et la Device Key affichés sur l\'écran d\'accueil.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Se connecter au portail iboplayer.com',
            text: 'Depuis votre smartphone ou PC, rendez-vous sur le site officiel iboplayer.com/manage-playlists et connectez-vous avec vos deux identifiants d\'appareil.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Ajouter votre abonnement via Add XC Playlist',
            text: 'Cliquez sur \'Add XC Playlist\', saisissez le nom de la liste ainsi que l\'URL du serveur, le Username et le Password fournis lors de votre commande.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Recharger sur la télévision',
            text: 'Sur votre téléviseur, appuyez sur le bouton \'Reload Playlist\'. Vos chaînes 4K et le guide EPG apparaissent immédiatement.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Comment fonctionne le code d\'activation d\'IBO Player Pro ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'L\'application IBO Player propose 7 jours d\'essai gratuit. Passé ce délai, l\'éditeur facture des frais de licence uniques d\'environ 8 € à vie liés à votre Device ID. Cette licence applicative est indépendante de vos identifiants d\'abonnement IPTV (serveur Xtream Codes) qui diffusent les chaînes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Existe-t-il un code d\'activation gratuit pour IBO Player ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non. L\'activation logicielle est gérée directement sur le serveur de l\'éditeur d\'IBO Player par vérification de l\'adresse MAC de la télévision. Aucun générateur de code gratuit ne peut contourner ce système, et les prétendues clés gratuites partagées en ligne sont inefficaces.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment installer IBO Player sur Smart TV Samsung, LG et Firestick ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sur Samsung Smart TV, cherchez \'IBO Player\' dans le Samsung Smart Hub. Sur LG, recherchez-le dans le LG Content Store officiel. Sur Amazon Firestick et Android TV, téléchargez l\'APK officiel via l\'application Downloader avec le code 834339 ou directement depuis l\'URL iboplayer.com/apk.',
            },
          },
          {
            '@type': 'Question',
            name: 'Faut-il choisir une playlist M3U ou Xtream Codes sur IBO Player ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nous recommandons impérativement l\'option \'Add XC Playlist\' (Xtream Codes API). Elle permet une mise à jour instantanée des chaînes, l\'affichage des affiches de films VOD et une synchronisation parfaite du guide EPG sur 7 jours.',
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

      {/* Hero Header Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 p-2 shrink-0 overflow-hidden shadow-xl flex items-center justify-center">
                <Image
                  src="/images/ibo-player.webp"
                  alt="Logo officiel IBO Player Pro"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-cyan-400" />
                <span>Lecteur N°1 sur Smart TV Samsung &amp; LG &middot; 4K HDR</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              IBO Player Pro : Téléchargement, Code Activation &amp; Installation Smart TV
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Considéré comme l'application la plus fluide sur téléviseurs connectés, <strong>IBO Player Pro</strong> sublime votre expérience IPTV. Apprenez à le <strong>télécharger sur Samsung Tizen et LG webOS</strong>, à activer votre <strong>Device ID / Key</strong> et à synchroniser notre <strong>abonnement 4K haute stabilité</strong>.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/abonnement-iptv-12-mois"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-lg shadow-cyan-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Activer mon Abonnement 4K IBO Player</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="#telechargement"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                <Download className="w-4 h-4 mr-2 text-cyan-400" />
                <span>Télécharger l'Application</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">Smart Hub</span>
                <span className="block text-xs text-slate-400">Samsung &amp; LG natif</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">Device Key</span>
                <span className="block text-xs text-slate-400">Configuration en ligne</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">4K 60 FPS</span>
                <span className="block text-xs text-slate-400">Fluidité absolue</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center text-white font-black text-lg">
                    I
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-none">Spécifications IBO Player</h2>
                    <span className="text-xs text-slate-400">Version Pro 3.8.2</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  7 Jours d'Essai Gratuit
                </span>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Systèmes d'Exploitation</dt>
                  <dd className="font-semibold text-slate-200">Samsung Tizen, LG webOS, Fire OS, tvOS</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Gestion des Listes</dt>
                  <dd className="font-semibold text-cyan-400">
                    <a href="https://iboplayer.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Portail iboplayer.com
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Téléchargement APK Direct</dt>
                  <dd className="font-mono text-xs text-amber-400">
                    <a href="https://iboplayer.com/apk" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      iboplayer.com/apk
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Protocoles Supportés</dt>
                  <dd className="font-semibold text-slate-200">Xtream Codes API &amp; M3U</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Moteurs de Décodage</dt>
                  <dd className="font-semibold text-slate-200">VLC Player &amp; ExoPlayer</dd>
                </div>
                <div className="flex justify-between py-1.5">
                  <dt className="text-slate-400">Résolution Maximale</dt>
                  <dd className="font-semibold text-emerald-400">4K Ultra HD &amp; HDR</dd>
                </div>
              </dl>

              <div className="pt-2">
                <Link
                  href="/tarifs"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
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
        
        {/* Section 0: Présentation Technique IBO Player */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Qu'est-ce qu'IBO Player Pro et Pourquoi est-il Idéal sur Smart TV ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong>IBO Player Pro</strong> est un lecteur multimédia de nouvelle génération spécialement calibré pour les téléviseurs connectés de salon. S'appuyant sur l'architecture <a href="https://fr.wikipedia.org/wiki/Over-the-top_service" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">OTT (Over-The-Top)</a>, il résout l'une des contraintes majeures des Smart TV : la lenteur de saisie à la télécommande.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Grâce à son portail web distant sécurisé, la saisie des identifiants et la gestion de vos listes de chaînes s'effectuent directement depuis votre téléphone ou ordinateur. Doté d'un moteur de décompression matériel <a href="https://fr.wikipedia.org/wiki/H.265/HEVC" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">H.265 / HEVC</a>, IBO Player garantit une navigation fluide dans vos 25 000 chaînes directes sans saturer la mémoire vive de votre télévision.
            </p>

            <figure className="my-6 space-y-2">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-2xl">
                <Image
                  src="/images/ibo-player-interface.webp"
                  alt="Interface IBO Player Pro sur Smart TV Samsung Tizen et LG webOS avec activation Device ID"
                  width={1200}
                  height={675}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="text-center text-xs text-slate-400">
                Interface d'accueil IBO Player Pro : accès instantané aux chaînes Live, aux films VOD et au guide EPG.
              </figcaption>
            </figure>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <Globe className="w-5 h-5 text-cyan-400" />
              <h3 className="text-sm font-bold text-white">Gestion à Distance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ajoutez et modifiez vos playlists en 30 secondes depuis le portail web sans toucher à la télécommande.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <Sliders className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm font-bold text-white">Double Lecteur Interne</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Basculez entre le moteur ExoPlayer et VLC Player en cas de flux vidéo ou audio récalcitrant.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">Protection par Code PIN</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Verrouillez les catégories adultes ou sensibles pour préserver les enfants de la maison.
              </p>
            </div>
          </div>
        </section>

        {/* PILIER 1: TÉLÉCHARGEMENT */}
        <section id="telechargement" className="scroll-mt-24 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
              <Download className="w-3.5 h-3.5" />
              <span>Pilier 1 : Téléchargement</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Télécharger IBO Player Pro : Samsung Smart Hub, LG Store &amp; Fire Stick
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              L'un des grands points forts d'IBO Player est sa présence officielle sur les magasins d'applications des principaux constructeurs. Aucune manipulation complexe ni clé USB n'est requise :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Samsung Tizen */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Monitor className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Samsung Smart TV (Tizen OS)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sur votre téléviseur Samsung (gammes 2017 à 2026), accédez au <strong>Smart Hub</strong>, ouvrez la boutique <strong>Apps</strong> et recherchez <strong>IBO Player</strong>.
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1">
                  <div>Magasin : <span className="text-white font-semibold">Samsung App Store</span></div>
                  <div>Compatibilité : <span className="text-emerald-400 font-semibold">100% Officiel</span></div>
                </div>
              </div>
              <Link
                href="/guide-installation/smart-tv-samsung-lg"
                className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300"
              >
                <span>Guide Samsung pas-à-pas</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* LG webOS */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <Tv className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">LG Smart TV (webOS)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sur les TV LG (webOS 3.0 à webOS 24), ouvrez le <strong>LG Content Store</strong> ou le portail <strong>LG Apps</strong>. Recherchez <strong>IBO Player</strong> et téléchargez-le directement.
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1">
                  <div>Magasin : <span className="text-white font-semibold">LG Content Store</span></div>
                  <div>Télécommande : <span className="text-rose-400 font-semibold">Magic Remote supportée</span></div>
                </div>
              </div>
              <Link
                href="/guide-installation/smart-tv-samsung-lg"
                className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300"
              >
                <span>Guide LG pas-à-pas</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Amazon Fire TV Stick */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Tv className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Amazon Fire TV Stick &amp; Android</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sur Firestick, ouvrez <strong>Downloader</strong> et saisissez le code court certifié ou directement l'URL officielle du fichier APK :
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center space-y-2.5">
                  <div>
                    <span className="text-xs text-slate-400 block mb-0.5">Code Downloader IBO Player</span>
                    <span className="font-mono text-xl font-extrabold text-amber-400">834339</span>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80 text-left">
                    <span className="text-[11px] text-slate-400 block mb-1">Lien direct APK (si le code Downloader expire) :</span>
                    <a
                      href="https://iboplayer.com/apk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-cyan-400 hover:underline break-all block"
                    >
                      https://iboplayer.com/apk
                    </a>
                  </div>
                  <div className="text-left text-[11px] text-slate-400">
                    Portail officiel : <a href="https://iboplayer.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">iboplayer.com</a>
                  </div>
                </div>
              </div>
              <Link
                href="/guide-installation/fire-tv-stick"
                className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300"
              >
                <span>Guide Firestick pas-à-pas</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

          </div>
        </section>

        {/* PILIER 2: INSTALLATION ET CONFIGURATION */}
        <section id="configuration" className="scroll-mt-24 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
              <Settings className="w-3.5 h-3.5" />
              <span>Pilier 2 : Installation &amp; Configuration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Installation et Configuration d'IBO Player via le Portail iboplayer.com
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              La force d'IBO Player réside dans son système de synchronisation en ligne. Suivez ces 4 étapes simples pour injecter vos flux 4K :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Guide Pas-à-Pas Portail */}
            <div className="p-8 rounded-2xl bg-slate-900 border-2 border-cyan-500/40 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-cyan-600 text-white font-bold text-xs">
                  Méthode Officielle iboplayer.com
                </span>
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              </div>

              <h3 className="text-lg font-bold text-white">Synchronisation de Vos Identifiants Xtream</h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                <li className="leading-relaxed">
                  Lancez IBO Player sur votre téléviseur et relevez le <strong>Device ID</strong> (adresse MAC) et la <strong>Device Key</strong> (code à 6 chiffres).
                </li>
                <li className="leading-relaxed">
                  Sur votre smartphone ou ordinateur, ouvrez le portail <code>iboplayer.com/manage-playlists</code>.
                </li>
                <li className="leading-relaxed">
                  Connectez-vous avec votre Device ID et Device Key.
                </li>
                <li className="leading-relaxed">
                  Cliquez sur <strong>Add XC Playlist</strong> (API Xtream Codes).
                </li>
                <li className="leading-relaxed">
                  Renseignez l'URL du serveur, votre identifiant et votre mot de passe reçus après commande.
                </li>
                <li className="leading-relaxed">
                  Retournez sur votre télévision et appuyez sur <strong>Reload Playlist</strong>.
                </li>
              </ol>
            </div>

            {/* Réglages Recommandés Anti-Freeze */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-bold text-xs">
                  Paramètres de Performance
                </span>
                <Sliders className="w-5 h-5 text-cyan-400" />
              </div>

              <h3 className="text-lg font-bold text-white">Réglages Anti-Coupure &amp; Débit Vidéo</h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-white block">Sélection du Lecteur Vidéo :</span>
                  <p className="text-xs text-slate-400">
                    Dans les paramètres de l'application sur la TV, basculez sur <strong>ExoPlayer</strong> pour une meilleure réactivité du direct. Si une piste audio multilingue est muette, sélectionnez <strong>VLC Player</strong>.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-white block">Optimisation du Serveur DNS :</span>
                  <p className="text-xs text-slate-400">
                    Pour parer au bridage de certains FAI français les soirs de grands matchs, configurez le <a href="https://fr.wikipedia.org/wiki/Domain_Name_System" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">DNS</a> de votre Smart TV sur Cloudflare (<code>1.1.1.1</code>) ou Google (<code>8.8.8.8</code>).
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* PILIER 3: CODE D'ACTIVATION IBO PLAYER */}
        <section id="code-activation" className="scroll-mt-24 space-y-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
              <KeyRound className="w-3.5 h-3.5" />
              <span>Pilier 3 : Code d'Activation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Code d'Activation IBO Player : Distinguer la Licence du Lecteur et l'Abonnement IPTV
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              La recherche d'un « <strong>code activation IBO Player gratuit</strong> » est très courante chez les utilisateurs novices. Il est essentiel de comprendre l'architecture tarifaire de cette application :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            
            {/* Les deux éléments distincts */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-cyan-400" />
                <span>Deux Activations Complètement Indépendantes</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Pour regarder la télévision sur IBO Player, deux éléments distincts interviennent :
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-cyan-400 font-semibold block mb-1">1. L'Activation du Lecteur IBO Player (Logiciel) :</strong>
                  L'application offre 7 jours d'essai gratuit. Passé ce délai, l'éditeur d'IBO Player demande environ 8 € de frais d'activation unique à vie par <a href="https://fr.wikipedia.org/wiki/Adresse_MAC" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">adresse MAC</a> sur son portail officiel.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-blue-400 font-semibold block mb-1">2. Vos Identifiants d'Abonnement IPTV (Chaînes &amp; VOD) :</strong>
                  Ce sont les codes d'accès serveur (Xtream Codes API) fournis par notre service pour débloquer l'accès aux flux vidéo 4K et au guide <a href="https://fr.wikipedia.org/wiki/Guide_des_programmes" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">EPG</a>.
                </div>
              </div>
            </div>

            {/* Dangers des codes gratuits */}
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-amber-400 shrink-0" />
                <h3 className="text-base font-bold text-white">Pourquoi les « Codes d'Activation Gratuits » sont des Arnaques</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                L'activation d'IBO Player étant liée à l'adresse matérielle (Device ID) de votre propre téléviseur, <strong>aucun code universel gratuit ne peut fonctionner</strong> sur votre écran.
              </p>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Sites de phishing :</strong> Les générateurs de clés gratuits tentent de subtiliser vos coordonnées bancaires.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Playlists publiques saturées :</strong> Les prétendus « codes » partagés sur YouTube ou TikTok sautent après quelques minutes.</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/tarifs"
                  className="inline-flex items-center text-xs font-bold text-cyan-400 hover:text-cyan-300"
                >
                  <span>Souscrire un abonnement serveur privé 4K garanti &rarr;</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* PILIER 4: ABONNEMENT IBO PLAYER */}
        <section id="abonnement" className="scroll-mt-24 rounded-3xl bg-white dark:bg-gradient-to-b dark:from-cyan-950/40 dark:to-slate-900 border border-cyan-200 dark:border-cyan-900/40 p-8 sm:p-12 space-y-8 shadow-sm dark:shadow-none">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold">
              <Server className="w-3.5 h-3.5" />
              <span>Pilier 4 : Abonnement IPTV 4K Spécial Smart TV</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Boostez IBO Player avec un Abonnement Serveur Haut Débit Dédié
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Les téléviseurs Smart TV disposent d'une mémoire tampon limitée. Pour empêcher tout freeze ou mise en mémoire tampon intempestive, nos serveurs CDN européens 10 Gbps adaptent dynamiquement le débit vidéo à votre écran.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-cyan-600 dark:text-cyan-400">01</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Optimisé Smart TV Samsung &amp; LG</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Flux allégés en mémoire pour éviter tout plantage de l'application sur les téléviseurs connectés.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-cyan-600 dark:text-cyan-400">02</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Zéro Freeze Soirs de Matchs</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Infrastructure CDN multi-pays garantissant une bande passante stable lors des grands événements sportifs.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-cyan-600 dark:text-cyan-400">03</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Assistance WhatsApp 7j/7</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Notre support technique configure votre IBO Player à distance si vous ne souhaitez pas faire la manipulation vous-même.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/abonnement-iptv-12-mois"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-cyan-600/30 transition-all hover:scale-105"
            >
              <span>Découvrir l'Abonnement VIP 12 Mois (Compatible IBO Player)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section FAQ IBO Player */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Questions Fréquentes sur IBO Player Pro
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Réponses précises à vos questions sur les codes d'activation, l'installation et l'usage d'IBO Player.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Que faire après les 7 jours d'essai gratuit d'IBO Player ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Pour continuer à utiliser IBO Player, réglez la licence unique (environ 8 € à vie) sur le site <code>iboplayer.com</code> via carte bancaire. Si vous préférez une alternative 100% gratuite, vous pouvez installer <Link href="/applications/iptv-smarters-pro" className="text-cyan-400 hover:underline">IPTV Smarters Pro</Link>.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Pourquoi mes chaînes ne s'affichent-elles pas après ajout sur le site ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Une fois vos codes validés sur le portail web, vous devez appuyer sur le bouton <strong>Reload Playlist</strong> sur votre Smart TV Samsung ou LG pour synchroniser la liste.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Comment changer la langue audio ou ajouter des sous-titres ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Pendant la lecture d'un film ou d'une chaîne, appuyez sur la touche verte ou sur l'icône de paramètres pour choisir la piste audio (Français VF, VOSTFR) et activer les sous-titres.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Peut-on utiliser IBO Player sur plusieurs téléviseurs avec la même licence ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Non. La licence applicative IBO Player est liée à l'adresse MAC physique d'une seule télévision. En revanche, votre abonnement IPTV serveur avec option multi-écrans peut alimenter plusieurs téléviseurs équipés d'IBO Player.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
