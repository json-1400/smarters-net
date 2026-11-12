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
  Layers,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';

const PAGE_CANONICAL = `${SITE_CONFIG.domain}/applications/flix-iptv`;

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Flix IPTV : Téléchargement, Code Activation & Configuration Smart TV 2026",
    description: "Guide expert Flix IPTV : Téléchargement sur Samsung Tizen & LG webOS, code d'activation par adresse MAC vs identifiants serveur, configuration Xtream et abonnement 4K sans freeze.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'flix iptv',
      'telecharger flix iptv',
      'code activation flix iptv',
      'flix iptv code activation gratuit',
      'flix iptv samsung',
      'flix iptv lg webos',
      'configuration flix iptv',
      'installation flix iptv',
      'abonnement flix iptv'
    ],
  });
}

export default function FlixIptvPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${PAGE_CANONICAL}/#software`,
        name: 'Flix IPTV Player',
        operatingSystem: 'Samsung Tizen, LG webOS, Android TV, Fire OS',
        applicationCategory: 'MultimediaApplication',
        softwareVersion: '2.5.0',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.7',
          ratingCount: '1240',
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
        name: 'Comment Activer et Configurer Flix IPTV sur Smart TV',
        description: 'Tutoriel officiel pour connecter votre abonnement IPTV 4K sur Flix IPTV via le portail flixiptv.cc.',
        totalTime: 'PT3M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Relever l’Adresse MAC et la Device Key',
            text: 'Lancez Flix IPTV sur votre Smart TV Samsung ou LG. Notez l’adresse MAC et la Device Key affichées sur l’écran d’accueil.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Accéder au portail flixiptv.cc',
            text: 'Sur votre téléphone ou ordinateur, rendez-vous sur flixiptv.cc/mylist et connectez-vous avec vos identifiants d’appareil.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Associer votre abonnement Xtream Codes',
            text: 'Entrez vos paramètres de serveur (URL, nom d’utilisateur et mot de passe) puis validez en cliquant sur Send.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Recharger sur votre téléviseur',
            text: 'Appuyez sur la touche Reload ou relancez l’application sur la Smart TV pour synchroniser l’ensemble de vos chaînes 4K.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Quel est le prix du code d’activation de Flix IPTV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Flix IPTV propose 7 jours d’essai gratuit. Passé ce délai, son éditeur facture une licence unique et définitive d’environ 7,99 € par adresse MAC. Cette licence concerne uniquement le logiciel et ne comprend pas les chaînes de télévision, qui requièrent un abonnement IPTV distinct.',
            },
          },
          {
            '@type': 'Question',
            name: 'Existe-t-il un code d’activation Flix IPTV gratuit ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non. L’activation de Flix IPTV se fait directement sur les serveurs de l’éditeur en validant l’adresse MAC matérielle de votre téléviseur. Tout prétendu code d’activation gratuit partagé sur Internet est inopérant.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment installer Flix IPTV sur TV Samsung, LG et Firestick ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Recherchez simplement \'Flix IPTV\' dans le Samsung Smart Hub ou le LG Content Store de votre téléviseur. Sur Amazon Firestick ou boîtier Android, téléchargez l\'APK officiel via l\'URL directe flixapp.tv/flix.apk dans l\'application Downloader.',
            },
          },
          {
            '@type': 'Question',
            name: 'Que faire en cas de buffering ou d’écran noir sur Flix IPTV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dans les paramètres de Flix IPTV (Player Settings), réglez la taille du Buffer sur 3 ou 5 secondes et assurez-vous d’utiliser un câble Ethernet plutôt qu’une connexion Wi-Fi instable.',
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
            name: 'Flix IPTV',
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
            <span className="text-slate-200 font-medium" aria-current="page">Flix IPTV</span>
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
                  src="/images/flixiptv.webp"
                  alt="Logo officiel Flix IPTV"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-rose-400" />
                <span>Lecteur Léger Smart TV Samsung &amp; LG &middot; 4K 60 FPS</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Flix IPTV : Téléchargement, Code Activation &amp; Configuration Smart TV
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Réputé pour son interface minimaliste et sa rapidité de zapping, <strong>Flix IPTV</strong> est un lecteur idéal sur <strong>Smart TV Samsung (Tizen)</strong> et <strong>LG (webOS)</strong>. Découvrez la procédure complète pour le <strong>télécharger</strong>, activer votre <strong>code de licence par adresse MAC</strong> et connecter notre <strong>abonnement 4K sans freeze</strong>.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/abonnement-iptv-12-mois"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-lg shadow-rose-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Activer mon Abonnement 4K Flix IPTV</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="#telechargement"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                <Download className="w-4 h-4 mr-2 text-rose-400" />
                <span>Guide de Téléchargement</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">&lt; 0.5s</span>
                <span className="block text-xs text-slate-400">Zapping rapide</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">7 Jours</span>
                <span className="block text-xs text-slate-400">Essai gratuit inclus</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">4K UHD</span>
                <span className="block text-xs text-slate-400">Codec H.265 optimisé</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-600 flex items-center justify-center text-white font-black text-lg">
                    F
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-none">Spécifications Flix IPTV</h2>
                    <span className="text-xs text-slate-400">Version Officielle 2.5.0</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
                  Licence à Vie 7,99 €
                </span>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Systèmes Compatibles</dt>
                  <dd className="font-semibold text-slate-200">Samsung Tizen, LG webOS, Fire OS, Android</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Gestion des Listes</dt>
                  <dd className="font-semibold text-rose-400">
                    <a href="https://flixiptv.cc" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Portail flixiptv.cc
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Téléchargement APK Direct</dt>
                  <dd className="font-mono text-xs text-amber-400">
                    <a href="https://flixapp.tv/flix.apk" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      flixapp.tv/flix.apk
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Authentification</dt>
                  <dd className="font-semibold text-slate-200">Adresse MAC &amp; Device Key</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Pistes Audio &amp; Sous-titres</dt>
                  <dd className="font-semibold text-emerald-400">VF, VOSTFR, Multi-langues</dd>
                </div>
                <div className="flex justify-between py-1.5">
                  <dt className="text-slate-400">Format de Flux</dt>
                  <dd className="font-semibold text-slate-200">Xtream Codes &amp; M3U Plus</dd>
                </div>
              </dl>

              <div className="pt-2">
                <Link
                  href="/tarifs"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
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
        
        {/* Section 0: Présentation Technique Flix IPTV */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Pourquoi Flix IPTV est Apprécié sur les Téléviseurs Connectés ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              S'appuyant sur les standards <a href="https://fr.wikipedia.org/wiki/Over-the-top_service" target="_blank" rel="noopener noreferrer" className="text-rose-400 underline underline-offset-4 hover:text-rose-300">OTT (Over-The-Top)</a>, <strong>Flix IPTV</strong> a été conçu avec un impératif technique fort : limiter au maximum la charge sur le processeur des téléviseurs de salon.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Son moteur vidéo gère la décompression matérielle des flux <a href="https://fr.wikipedia.org/wiki/H.265/HEVC" target="_blank" rel="noopener noreferrer" className="text-rose-400 underline underline-offset-4 hover:text-rose-300">H.265 / HEVC</a> et dispose d'un gestionnaire de mémoire tampon dynamique. Même sur des téléviseurs Samsung ou LG disposant de peu de mémoire vive, la navigation dans vos 25 000 chaînes s'exécute sans aucun ralentissement.
            </p>

            <figure className="my-6 space-y-2">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-2xl">
                <Image
                  src="/images/guide-flix-iptv.webp"
                  alt="Interface Flix IPTV sur Smart TV Samsung Tizen et LG webOS avec flux 4K 60 FPS"
                  width={1200}
                  height={675}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="text-center text-xs text-slate-400">
                Interface simplifiée de Flix IPTV : accès rapide aux chaînes en direct, VOD et aux réglages du lecteur.
              </figcaption>
            </figure>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <Zap className="w-5 h-5 text-rose-400" />
              <h3 className="text-sm font-bold text-white">Zapping Quasi Instantané</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Changement de canal en moins d'une demi-seconde pour un confort identique au câble ou à la TNT.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <Layers className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm font-bold text-white">Gestion Audio &amp; Sous-Titres</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sélection des pistes son VF ou VOSTFR d'une simple pression sur la touche verte de la télécommande.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">Licence à Vie Définitive</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Paiement unique de 7,99 € auprès de l'éditeur sans aucun abonnement logiciel récurrent.
              </p>
            </div>
          </div>
        </section>

        {/* PILIER 1: TÉLÉCHARGEMENT */}
        <section id="telechargement" className="scroll-mt-24 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
              <Download className="w-3.5 h-3.5" />
              <span>Pilier 1 : Téléchargement</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Télécharger Flix IPTV sur Samsung Smart TV, LG webOS &amp; Firestick
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Flix IPTV est certifié et disponible sur les plateformes officielles des principaux constructeurs :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Samsung */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Monitor className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Samsung Smart Hub (Tizen)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sur votre télévision Samsung, rendez-vous dans <strong>Apps</strong>, cherchez <strong>Flix IPTV</strong> et appuyez sur Installer.
                </p>
              </div>
              <Link
                href="/guide-installation/smart-tv-samsung-lg"
                className="inline-flex items-center text-xs font-semibold text-rose-400 hover:text-rose-300"
              >
                <span>Guide Smart TV Samsung</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* LG */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <Tv className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">LG Content Store (webOS)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sur les TV LG, lancez le <strong>LG Content Store</strong>, recherchez <strong>Flix IPTV</strong> et téléchargez l'application officielle en 30 secondes.
                </p>
              </div>
              <Link
                href="/guide-installation/smart-tv-samsung-lg"
                className="inline-flex items-center text-xs font-semibold text-rose-400 hover:text-rose-300"
              >
                <span>Guide Smart TV LG</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Fire TV Stick */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Tv className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Amazon Fire TV Stick &amp; Android</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sur Firestick, ouvrez <strong>Downloader</strong> et renseignez l'URL directe du fichier APK pour une installation instantanée sans dépendre des codes courts :
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                  <div className="text-xs text-slate-400">
                    <span className="block text-[11px] text-slate-400 mb-1">Lien direct APK (à copier dans Downloader) :</span>
                    <a
                      href="https://flixapp.tv/flix.apk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-amber-400 hover:underline break-all block"
                    >
                      https://flixapp.tv/flix.apk
                    </a>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                    Portails officiels : <a href="https://flixiptv.cc" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:underline">flixiptv.cc</a> &middot; <a href="https://flixapp.tv" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:underline">flixapp.tv</a>
                  </div>
                </div>
              </div>
              <Link
                href="/guide-installation/fire-tv-stick"
                className="inline-flex items-center text-xs font-semibold text-rose-400 hover:text-rose-300"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
              <Settings className="w-3.5 h-3.5" />
              <span>Pilier 2 : Installation &amp; Configuration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Installation et Configuration de Flix IPTV sur flixiptv.cc
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              L'activation de votre playlist ne demande que 4 étapes via le portail distant sécurisé :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Guide flixiptv.cc */}
            <div className="p-8 rounded-2xl bg-slate-900 border-2 border-rose-500/40 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-rose-600 text-white font-bold text-xs">
                  Procédure Officielle flixiptv.cc
                </span>
                <CheckCircle2 className="w-5 h-5 text-rose-400" />
              </div>

              <h3 className="text-lg font-bold text-white">Injection des Chaînes &amp; EPG</h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                <li className="leading-relaxed">
                  Lancez Flix IPTV et notez votre <strong>Adresse MAC</strong> (format <code>00:1a:79:...</code>) et votre <strong>Device Key</strong>.
                </li>
                <li className="leading-relaxed">
                  Depuis votre smartphone ou PC, rendez-vous sur la page officielle <code>flixiptv.cc/mylist</code>.
                </li>
                <li className="leading-relaxed">
                  Connectez-vous en saisissant vos deux identifiants d'appareil.
                </li>
                <li className="leading-relaxed">
                  Collez le lien M3U fourni ou vos identifiants Xtream Codes, puis cliquez sur <strong>Send</strong>.
                </li>
                <li className="leading-relaxed">
                  Sur votre téléviseur, appuyez sur <strong>Reload</strong> pour lancer le chargement des chaînes.
                </li>
              </ol>
            </div>

            {/* Réglages Buffer et Optimisations */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-bold text-xs">
                  Réglages Anti-Buffering
                </span>
                <Sliders className="w-5 h-5 text-rose-400" />
              </div>

              <h3 className="text-lg font-bold text-white">Optimisation de la Lecture 4K</h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-white block">Taille de la Mémoire Tampon :</span>
                  <p className="text-xs text-slate-400">
                    Dans <em>Paramètres &gt; Player Settings</em>, réglez le Buffer sur <strong>3 à 5 secondes</strong>. Cela empêche les micro-saccades en cas de légères fluctuations Wi-Fi.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-white block">Configuration DNS :</span>
                  <p className="text-xs text-slate-400">
                    Pour parer au bridage de flux par les FAI lors des grandes affiches de football, configurez le <a href="https://fr.wikipedia.org/wiki/Domain_Name_System" target="_blank" rel="noopener noreferrer" className="text-rose-400 underline hover:text-rose-300">DNS</a> de votre TV sur Cloudflare (<code>1.1.1.1</code>).
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* PILIER 3: CODE D'ACTIVATION FLIX IPTV */}
        <section id="code-activation" className="scroll-mt-24 space-y-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
              <KeyRound className="w-3.5 h-3.5" />
              <span>Pilier 3 : Code d'Activation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Code d'Activation Flix IPTV : Tout Comprendre pour Éviter les Pièges
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              La recherche d'un « <strong>code activation Flix IPTV gratuit</strong> » induit de nombreux utilisateurs en erreur. Voici la réalité technique sur le fonctionnement des licences :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            
            {/* Distinguer les deux codes */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-rose-400" />
                <span>Deux Éléments Totalement Indépendants</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Pour faire fonctionner votre téléviseur avec Flix IPTV, deux composants distincts sont requis :
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-rose-400 font-semibold block mb-1">1. L'Activation de l'Application Flix IPTV :</strong>
                  Flix IPTV vous accorde 7 jours d'essai gratuit. Passé ce délai, une activation unique de 7,99 € à vie doit être réglée sur <code>flixiptv.cc/activation</code> pour associer votre <a href="https://fr.wikipedia.org/wiki/Adresse_MAC" target="_blank" rel="noopener noreferrer" className="text-rose-400 underline hover:text-rose-300">adresse MAC</a>.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-blue-400 font-semibold block mb-1">2. Vos Identifiants d'Abonnement IPTV :</strong>
                  Ce sont les codes serveur (Nom d'utilisateur, Mot de passe et URL de portail) fournis par notre service pour regarder les chaînes directes et le guide <a href="https://fr.wikipedia.org/wiki/Guide_des_programmes" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">EPG</a>.
                </div>
              </div>
            </div>

            {/* Dangers des codes gratuits */}
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-amber-400 shrink-0" />
                <h3 className="text-base font-bold text-white">Pourquoi les Faux Codes Gratuits Sont Inutilisables</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                L'activation de Flix IPTV est directement liée à l'adresse MAC de la puce réseau de votre téléviseur. <strong>Aucun code universel gratuit n'existe</strong> sur le marché.
              </p>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Arnaques par SMS ou cartes prépayées :</strong> Des sites pirates réclament de faux frais d'activation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Playlists gratuites saturées :</strong> Les listes partagées sur les réseaux sociaux sautent après quelques minutes d'écoute.</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/tarifs"
                  className="inline-flex items-center text-xs font-bold text-rose-400 hover:text-rose-300"
                >
                  <span>Souscrire un abonnement serveur privé 4K garanti &rarr;</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* PILIER 4: ABONNEMENT FLIX IPTV */}
        <section id="abonnement" className="scroll-mt-24 rounded-3xl bg-white dark:bg-gradient-to-b dark:from-rose-950/40 dark:to-slate-900 border border-rose-200 dark:border-rose-900/40 p-8 sm:p-12 space-y-8 shadow-sm dark:shadow-none">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-semibold">
              <Server className="w-3.5 h-3.5" />
              <span>Pilier 4 : Abonnement IPTV 4K Flix IPTV</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Associez Flix IPTV à un Abonnement Serveur 10 Gbps Anti-Coupure
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Pour profiter au maximum de la réactivité de Flix IPTV sur votre télévision, nos serveurs CDN européens 10 Gbps garantissent un flux continu en 4K Ultra HD à 60 FPS sans coupure lors des matchs sous haute tension.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-rose-600 dark:text-rose-400">01</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Débit 4K Sans Saccade</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Flux vidéo calibrés pour Smart TV avec encodage H.265 haute fidélité et son Dolby Digital.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-rose-600 dark:text-rose-400">02</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">EPG 7 Jours Complet</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Toutes les grilles horaires des chaînes françaises et européennes synchronisées automatiquement.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-rose-600 dark:text-rose-400">03</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Support Francophone 24/7</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Assistance immédiate par WhatsApp pour vous guider lors de l'injection sur flixiptv.cc.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/abonnement-iptv-12-mois"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-rose-600/30 transition-all hover:scale-105"
            >
              <span>Découvrir l'Abonnement VIP 12 Mois (Compatible Flix IPTV)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section FAQ Flix IPTV */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Questions Fréquentes sur Flix IPTV
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Réponses précises aux questions les plus courantes sur l'activation et l'utilisation de Flix IPTV.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>Que se passe-t-il après les 7 jours d'essai de Flix IPTV ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                L'application affiche une invite d'activation. Vous devez vous rendre sur <code>flixiptv.cc/activation</code> et régler les 7,99 € de licence unique par carte bancaire pour conserver l'accès au lecteur à vie.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>Flix IPTV inclut-il les chaînes de télévision ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Non. Flix IPTV est un lecteur multimédia indépendant. Pour recevoir vos chaînes, vous devez y associer un abonnement IPTV 4K actif comme notre service.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>Comment changer de langue audio ou activer les sous-titres ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Pendant la lecture, appuyez sur la touche verte de la télécommande ou sur l'icône d'engrenage pour sélectionner la piste audio (Français VF, VOSTFR) et les sous-titres disponibles.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>Pourquoi mes chaînes ne se chargent-elles pas sur l'écran ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Après avoir validé votre lien sur <code>flixiptv.cc/mylist</code>, appuyez sur la touche <strong>Reload</strong> de l'application sur votre téléviseur ou redémarrez-la pour forcer la synchronisation.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
