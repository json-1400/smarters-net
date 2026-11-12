import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Tv, 
  Smartphone, 
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
  Radio,
  Cast,
  Apple,
  AlertCircle,
  Lock,
  Server,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';

const PAGE_CANONICAL = `${SITE_CONFIG.domain}/applications/gse-smart-iptv`;

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "GSE Smart IPTV : Téléchargement, Code Activation & Configuration Apple 2026",
    description: "Guide expert GSE Smart IPTV : Téléchargement App Store iPhone, iPad, Apple TV tvOS et Mac. Code d'activation Xtream Codes API vs listes M3U, configuration pas-à-pas et abonnement 4K.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'gse smart iptv',
      'telecharger gse smart iptv',
      'code activation gse smart iptv',
      'gse smart iptv code activation gratuit',
      'gse smart iptv ios',
      'gse smart iptv apple tv',
      'configuration gse smart iptv',
      'installation gse smart iptv',
      'abonnement gse smart iptv'
    ],
  });
}

export default function GseSmartIptvPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${PAGE_CANONICAL}/#software`,
        name: 'GSE Smart IPTV',
        operatingSystem: 'iOS, iPadOS, tvOS (Apple TV), macOS, Android',
        applicationCategory: 'MultimediaApplication',
        softwareVersion: '7.4.0',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.6',
          ratingCount: '2980',
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
        name: 'Comment Configurer son Abonnement sur GSE Smart IPTV',
        description: 'Guide étape par étape pour connecter vos identifiants Xtream Codes API sur GSE Smart IPTV sur iPhone, iPad et Apple TV.',
        totalTime: 'PT3M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Télécharger GSE Smart IPTV sur l’App Store',
            text: 'Depuis votre iPhone, iPad, Mac ou Apple TV, recherchez \'GSE Smart IPTV\' dans l’App Store et téléchargez l’application officielle.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Accéder au menu Xtream Codes API',
            text: 'Ouvrez le menu latéral gauche, descendez jusqu’à \'Xtream-Codes API\' et appuyez sur l\'icône \'+\' pour créer un profil.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Renseigner vos identifiants de serveur',
            text: 'Saisissez un nom arbitraire, l\'URL du serveur, votre nom d\'utilisateur et votre mot de passe reçus après confirmation de commande.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Synchroniser et visionner en 4K',
            text: 'Cliquez sur Login. Les bouquets Live TV, VOD et Séries se synchronisent avec le guide EPG 7 jours et le support AirPlay.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Où trouver le code d\'activation pour GSE Smart IPTV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'L\'application GSE Smart IPTV est gratuite au téléchargement et ne requiert aucun code d\'activation logiciel payant pour fonctionner. L\'activation correspond aux identifiants d\'accès (Xtream Codes API : Nom d\'utilisateur, Mot de passe et URL de serveur) fournis lors de la souscription à votre abonnement IPTV 4K.',
            },
          },
          {
            '@type': 'Question',
            name: 'Existe-t-il des codes d\'activation gratuits pour regarder les chaînes sur GSE ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non. Les codes gratuits partagés sur les forums sont des listes pirates saturées qui coupent au bout de quelques minutes. Pour profiter d\'un streaming 4K fluide sans écran noir, un abonnement serveur privé avec bande passante dédiée est indispensable.',
            },
          },
          {
            '@type': 'Question',
            name: 'GSE Smart IPTV est-il compatible avec l’Apple TV (tvOS) ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, GSE Smart IPTV dispose d’une version dédiée sur l’App Store de l’Apple TV (HD et 4K), entièrement contrôlable avec la télécommande Siri Remote.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment activer la diffusion AirPlay sur GSE Smart IPTV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pendant le visionnage d’une chaîne sur iPhone ou iPad, touchez l’écran pour afficher la barre de contrôle et sélectionnez l’icône AirPlay pour projeter le flux 4K sur votre téléviseur.',
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
            name: 'GSE Smart IPTV',
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
            <span className="text-slate-200 font-medium" aria-current="page">GSE Smart IPTV</span>
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
                  src="/images/GSE-Smart-IPTV.webp"
                  alt="Logo officiel GSE Smart IPTV"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
                <Apple className="w-4 h-4 text-slate-200" />
                <span>Lecteur N°1 Apple iOS &amp; Apple TV &middot; 4K HDR</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              GSE Smart IPTV : Téléchargement, Code Activation &amp; Configuration Apple
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Considéré comme la référence incontournable sur l'écosystème <strong>Apple (iPhone, iPad, Apple TV et Mac)</strong>, <strong>GSE Smart IPTV</strong> décode tous vos flux 4K. Découvrez comment le <strong>télécharger sur l'App Store</strong>, configurer vos <strong>codes d'activation serveur</strong> et profiter de notre <strong>abonnement 4K haute fidélité</strong>.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/abonnement-iptv-12-mois"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Activer mon Abonnement 4K Apple</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="#telechargement"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                <Download className="w-4 h-4 mr-2 text-indigo-400" />
                <span>Télécharger GSE</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">tvOS &amp; iOS</span>
                <span className="block text-xs text-slate-400">Écosystème Apple complet</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">AirPlay</span>
                <span className="block text-xs text-slate-400">Diffusion TV sans fil</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">EPG XMLTV</span>
                <span className="block text-xs text-slate-400">Grille 7 jours dynamique</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg">
                    G
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-none">Spécifications GSE Smart IPTV</h2>
                    <span className="text-xs text-slate-400">Version Officielle 7.4.0</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  Gratuit sur l'App Store
                </span>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Compatibilité Matérielle</dt>
                  <dd className="font-semibold text-slate-200">iPhone, iPad, Apple TV, Mac, Android</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Téléchargement Officiel</dt>
                  <dd className="font-mono text-xs text-indigo-400">
                    <a href="https://apps.apple.com/app/gse-smart-iptv/id1028734023" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      App Store iOS / tvOS
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Site Éditeur</dt>
                  <dd className="font-mono text-xs text-indigo-400">
                    <a href="https://gsesmartiptv.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      gsesmartiptv.com
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Protocoles Pris en Charge</dt>
                  <dd className="font-semibold text-indigo-400">Xtream Codes API, M3U, JSON</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Fonctionnalités Clés</dt>
                  <dd className="font-semibold text-slate-200">AirPlay 2, Chromecast, PVR local</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Décodage Vidéo</dt>
                  <dd className="font-semibold text-emerald-400">Matériel H.264 &amp; H.265 / HEVC</dd>
                </div>
                <div className="flex justify-between py-1.5">
                  <dt className="text-slate-400">Contrôle du Direct</dt>
                  <dd className="font-semibold text-slate-200">Pause &amp; TimeShift intégré</dd>
                </div>
              </dl>

              <div className="pt-2">
                <Link
                  href="/tarifs"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
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
        
        {/* Section 0: Présentation Technique GSE */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Pourquoi GSE Smart IPTV est le Lecteur Privilégié sur iOS &amp; Apple TV ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Pensé pour l'écosystème Apple, <strong>GSE Smart IPTV</strong> exploite la technologie <a href="https://fr.wikipedia.org/wiki/Over-the-top_service" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline underline-offset-4 hover:text-indigo-300">OTT (Over-The-Top)</a> et les API graphiques d'iOS pour offrir un décodage fluide sans surchauffe de la batterie.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Grâce à la prise en charge native du codec <a href="https://fr.wikipedia.org/wiki/H.265/HEVC" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline underline-offset-4 hover:text-indigo-300">H.265 / HEVC</a> et de la technologie <a href="https://fr.wikipedia.org/wiki/AirPlay" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline underline-offset-4 hover:text-indigo-300">AirPlay</a>, vous pouvez basculer d'un simple geste votre match ou film 4K de votre iPhone vers votre écran de salon en conservant une fluidité à 60 images par seconde.
            </p>

            <figure className="my-6 space-y-2">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-2xl">
                <Image
                  src="/images/placeholders/app-gse-smart-iptv.svg"
                  alt="Interface GSE Smart IPTV sur iPhone, iPad et Apple TV tvOS avec prise en charge AirPlay"
                  width={1200}
                  height={675}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="text-center text-xs text-slate-400">
                Interface de GSE Smart IPTV : accès immédiat au menu Xtream Codes API, aux playlists distantes et au guide EPG.
              </figcaption>
            </figure>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <Cast className="w-5 h-5 text-indigo-400" />
              <h3 className="text-sm font-bold text-white">AirPlay 2 Natif</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Projetez vos flux vidéo en direct sur n'importe quel téléviseur compatible AirPlay sans décalage audio.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <Radio className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm font-bold text-white">Guide EPG Dynamique</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Grille des programmes XMLTV 7 jours avec descriptifs complets et barres de progression temporelle.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">Enregistrement PVR</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enregistrez vos programmes sportifs en direct directement sur la mémoire interne de votre appareil Apple.
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
              Télécharger GSE Smart IPTV sur iPhone, iPad, Apple TV &amp; Mac
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Pour des raisons de sécurité évidentes, téléchargez l'application uniquement depuis les canaux officiels :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* iOS */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">iPhone &amp; iPad (iOS / iPadOS)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ouvrez l'App Store officiel d'Apple, cherchez <strong>GSE Smart IPTV</strong> et téléchargez l'application gratuitement sans jailbreak.
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                  <a
                    href="https://apps.apple.com/app/gse-smart-iptv/id1028734023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline font-medium block"
                  >
                    &rarr; Ouvrir sur Apple App Store
                  </a>
                </div>
              </div>
              <Link
                href="/guide-installation/apple-tv-ios"
                className="inline-flex items-center text-xs font-semibold text-indigo-400 hover:text-indigo-300"
              >
                <span>Guide pas-à-pas iOS</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Apple TV */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Tv className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Apple TV 4K &amp; HD (tvOS)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sur votre boîtier Apple TV, lancez le tvOS App Store. Téléchargez GSE Smart IPTV pour piloter vos flux avec la Siri Remote.
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                  <span className="text-slate-400 block mb-1">Recherche directe tvOS :</span>
                  <span className="text-white font-mono font-semibold">GSE SMART IPTV PRO</span>
                </div>
              </div>
              <Link
                href="/guide-installation/apple-tv-ios"
                className="inline-flex items-center text-xs font-semibold text-indigo-400 hover:text-indigo-300"
              >
                <span>Guide Apple TV complet</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Mac & Android */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Mac (Silicon M1-M4) &amp; Android</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sur Mac Apple Silicon, installez-le depuis le Mac App Store. Pour smartphone et box Android, téléchargez l'application officielle :
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5 text-xs">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.gsetech.smartiptv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline block font-medium"
                  >
                    &rarr; GSE Smart IPTV sur Google Play
                  </a>
                  <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                    Portail : <a href="https://gsesmartiptv.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">gsesmartiptv.com</a>
                  </div>
                </div>
              </div>
              <Link
                href="/guide-installation"
                className="inline-flex items-center text-xs font-semibold text-indigo-400 hover:text-indigo-300"
              >
                <span>Consulter tous les guides</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
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
              Installation et Configuration de GSE Smart IPTV via Xtream Codes API
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Pour profiter de la mise à jour automatique du guide <a href="https://fr.wikipedia.org/wiki/Guide_des_programmes" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline hover:text-indigo-300">EPG</a> et des jaquettes VOD, l'API Xtream Codes est la méthode recommandée :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Guide Xtream */}
            <div className="p-8 rounded-2xl bg-slate-900 border-2 border-indigo-500/40 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-indigo-600 text-white font-bold text-xs">
                  Méthode Xtream Codes (Recommandée)
                </span>
                <CheckCircle2 className="w-5 h-5 text-indigo-400" />
              </div>

              <h3 className="text-lg font-bold text-white">Configuration Rapide en 4 Étapes</h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                <li className="leading-relaxed">
                  Ouvrez GSE Smart IPTV et déroulez le menu latéral gauche.
                </li>
                <li className="leading-relaxed">
                  Sélectionnez <strong>Xtream-Codes API</strong> puis appuyez sur l'icône <strong>+</strong> en haut à droite.
                </li>
                <li className="leading-relaxed">
                  Renseignez le nom du profil (ex : <em>IPTV 4K VIP</em>), l'<strong>URL du serveur</strong> <a href="https://fr.wikipedia.org/wiki/Domain_Name_System" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">DNS</a>, votre <strong>Nom d'utilisateur</strong> et votre <strong>Mot de passe</strong>.
                </li>
                <li className="leading-relaxed">
                  Appuyez sur <strong>Login</strong> : les catégories LIVE, VOD et Séries se synchronisent immédiatement.
                </li>
              </ol>
            </div>

            {/* Méthode Playlist Distante */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-bold text-xs">
                  Méthode Remote Playlist M3U
                </span>
                <Sliders className="w-5 h-5 text-indigo-400" />
              </div>

              <h3 className="text-lg font-bold text-white">Ajout par Lien M3U Distant</h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <p className="leading-relaxed">
                  Si vous préférez utiliser une liste M3U : ouvrez <strong>Remote Playlists</strong> dans le menu latéral, cliquez sur <strong>+</strong> &gt; <strong>Add M3U URL</strong>, collez le lien complet et validez.
                </p>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-white block">Ajustement du Décalage EPG :</span>
                  <p className="text-xs text-slate-400">
                    Si l'heure des programmes présente un décalage, rendez-vous dans <em>Paramètres EPG &gt; EPG Time Shift</em> et ajustez le fuseau (+1h / +2h) pour synchroniser parfaitement la grille.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* PILIER 3: CODE D'ACTIVATION GSE SMART IPTV */}
        <section id="code-activation" className="scroll-mt-24 space-y-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
              <KeyRound className="w-3.5 h-3.5" />
              <span>Pilier 3 : Code d'Activation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Code d'Activation GSE Smart IPTV : Pourquoi l'Application Ne Vend Pas de Flux
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Une grande ambiguïté entoure la recherche d'un « <strong>code activation GSE Smart IPTV gratuit</strong> ». Voici ce qu'il faut savoir :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            
            {/* Explication technique */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-indigo-400" />
                <span>GSE est un Lecteur Vierge de Tout Contenu</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tout comme le lecteur VLC, GSE Smart IPTV ne commercialise aucun flux vidéo et n'impose aucun code d'activation payant pour lire vos flux.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ce que l'application réclame dans son menu Xtream-Codes correspond <strong>aux identifiants privés délivrés par votre fournisseur de service IPTV</strong> :
              </p>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-2 pl-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Nom d'utilisateur et Mot de passe :</strong> Personnels à votre ligne.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>URL de serveur dédiée :</strong> Connectée à notre réseau CDN européen 10 Gbps.</span>
                </li>
              </ul>
            </div>

            {/* Dangers des codes gratuits */}
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-amber-400 shrink-0" />
                <h3 className="text-base font-bold text-white">Le Piège des Listes M3U Publiques Gratuites</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Les listes trouvées sur les forums ou Pastebin présentent de réels inconvénients :
              </p>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Coupures intempestives :</strong> Saturées par des centaines de requêtes simultanées, elles coupent après quelques secondes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Absence d'EPG :</strong> Aucune grille des programmes ni mise à jour des logos de chaînes.</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/tarifs"
                  className="inline-flex items-center text-xs font-bold text-indigo-400 hover:text-indigo-300"
                >
                  <span>Obtenir des identifiants d'accès 4K privés et stables &rarr;</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* PILIER 4: ABONNEMENT GSE SMART IPTV */}
        <section id="abonnement" className="scroll-mt-24 rounded-3xl bg-white dark:bg-gradient-to-b dark:from-indigo-950/40 dark:to-slate-900 border border-indigo-200 dark:border-indigo-900/40 p-8 sm:p-12 space-y-8 shadow-sm dark:shadow-none">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
              <Server className="w-3.5 h-3.5" />
              <span>Pilier 4 : Abonnement IPTV 4K Dédié Apple</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Sublimez vos Écrans Apple avec un Abonnement Serveur Haute Définition
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Les écrans Retina d'Apple révèlent chaque détail. Nos flux sont diffusés en 4K UHD 60 FPS réelle avec encodage H.265 pour tirer le meilleur parti de votre iPhone, iPad ou Apple TV 4K.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">01</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Qualité Retina 4K 60 FPS</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Image ultra-nette et couleurs éclatantes pour une immersion sportive totale sur écran OLED et téléviseur.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">02</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Multi-Écrans Famille</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Regardez vos chaînes sur votre Apple TV au salon pendant qu'un proche visionne un film sur iPad.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">03</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Assistance WhatsApp 7j/7</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Notre support vous assiste dans la saisie de vos paramètres Xtream sur GSE Smart IPTV en quelques minutes.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/abonnement-iptv-12-mois"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-indigo-600/30 transition-all hover:scale-105"
            >
              <span>Découvrir l'Abonnement VIP 12 Mois (Compatible GSE)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section FAQ GSE */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Questions Fréquentes sur GSE Smart IPTV
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Réponses précises à vos questions sur l'installation, les codes et l'usage de GSE Smart IPTV sur les appareils Apple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>GSE Smart IPTV est-il payant sur iPhone ou Apple TV ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Non, l'application est gratuite au téléchargement sur l'App Store. Une version Pro payante permet simplement de retirer les bannières publicitaires intégrées.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Comment activer les sous-titres ou changer de langue ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Pendant la lecture, touchez l'écran pour afficher le menu des paramètres audio et sélectionnez la piste désirée (Français VF, Version Originale, VOSTFR).
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Puis-je enregistrer une émission sur la mémoire de mon iPad ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Oui, l'application intègre une fonction PVR qui enregistre directement le flux sur l'espace de stockage local de votre iPhone ou iPad.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Quelle alternative choisir sur Apple TV ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Sur Apple TV, vous pouvez également utiliser <Link href="/applications/iptv-smarters-pro" className="text-indigo-400 hover:underline">IPTV Smarters Pro</Link> (Smarters Player Lite) ou l'application iPlayTV.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
