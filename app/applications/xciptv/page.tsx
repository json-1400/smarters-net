import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
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
  Wifi,
  HelpCircle,
  Layers,
  Lock
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/applications/xciptv';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "XCIPTV Player : Téléchargement, Configuration & Abonnement France",
    description: "Guide complet XCIPTV Player en France : Téléchargement APK officiel, configuration Xtream Codes et lecteur vidéo 4K double moteur ExoPlayer et VLC.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'xciptv',
      'xciptv player',
      'application xciptv',
      'xciptv apk',
      'configuration xciptv',
      'xciptv vs smarters pro',
      'xciptv iptv france'
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
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.6',
          ratingCount: '980',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: 'Comment Configurer XCIPTV Player avec Xtream Codes',
        description: 'Tutoriel officiel pour connecter votre abonnement 4K à l\'application XCIPTV.',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Télécharger XCIPTV',
            text: 'Téléchargez XCIPTV Player depuis le Google Play Store ou installez le fichier APK certifié.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Saisir les identifiants Xtream Codes',
            text: 'Sur l\'écran de bienvenue, entrez l\'URL de serveur (Portal URL), votre Nom d\'utilisateur et Mot de passe.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Connexion et chargement',
            text: 'Appuyez sur "Sign In" pour démarrer la synchronisation des chaînes directes, du guide EPG et du catalogue VOD.',
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
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'L’application XCIPTV Player est-elle 100% gratuite ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, l’application XCIPTV Player est entièrement gratuite au téléchargement sur Android TV, Google TV, smartphones Android et Amazon Fire TV Stick. Vous n’avez besoin que de vos identifiants Xtream Codes actifs.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quel lecteur choisir dans XCIPTV : ExoPlayer ou VLC ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Conservez ExoPlayer pour le zapping instantané des chaînes directes Sport en 4K 60 FPS, et activez VLC dans les paramètres lecteur pour les films VOD nécessitant des pistes audio multipistes AC3 ou DTS.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quelle différence entre XCIPTV et IPTV Smarters Pro ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Les deux lecteurs exploitent l\'API Xtream Codes. XCIPTV se distingue par son interface par cartes horizontales très épurée, tandis qu’IPTV Smarters Pro est disponible sur un plus grand nombre d\'écrans (Smart TV Samsung/LG et iOS).',
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
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-indigo-400" />
            <span>Lecteur Android & Firestick Double Moteur &middot; Note : 4.6 / 5</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            XCIPTV Player : Téléchargement, Configuration & Abonnement France
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Plébiscité pour son ergonomie moderne et son double moteur de décodage ExoPlayer et VLC, <strong>XCIPTV Player</strong> est l'une des applications les plus polyvalentes sur Android TV et Firestick. Découvrez comment l'installer et synchroniser vos flux 4K sans aucune saccade.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-10">
            
            {/* Section 1: Step-by-Step Setup */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-indigo-400" />
                <span>Comment Configurer XCIPTV Player avec Xtream Codes ?</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                La mise en service de votre <strong>abonnement IPTV 4K</strong> sur XCIPTV ne prend que deux minutes grâce à la compatibilité directe avec l'<strong>API Xtream Codes</strong> :
              </p>

              <ol className="space-y-4 text-xs sm:text-sm text-slate-300 list-decimal list-inside pt-1">
                <li>Installez <strong>XCIPTV Player</strong> depuis le Google Play Store ou via l'application Downloader sur Firestick.</li>
                <li>À l'ouverture, sélectionnez la méthode de connexion <strong>Xtream Codes API</strong>.</li>
                <li>Renseignez le champ <strong>Server URL</strong> avec l'adresse transmise par email après votre commande.</li>
                <li>Indiquez votre <strong>Nom d'utilisateur</strong> (Username) et votre <strong>Mot de passe</strong> (Password).</li>
                <li>Cliquez sur <strong>Sign In</strong> pour synchroniser vos chaînes en direct, la grille EPG et le catalogue VOD.</li>
              </ol>
            </section>

            {/* Section 2: Dual Player ExoPlayer vs VLC */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <PlayCircle className="w-5 h-5 text-indigo-400" />
                <span>Double Lecteur Vidéo ExoPlayer vs VLC : Quel Moteur Choisir ?</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                La force majeure de XCIPTV réside dans son architecture à double moteur vidéo intégrée, permettant d'adapter le décodage au type de contenu :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">Moteur ExoPlayer (Direct TV & Sport)</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    ExoPlayer est le lecteur natif développé par Google pour Android. Il offre le zapping le plus réactif du marché (moins de 0,4 seconde) et prend en charge l'accélération matérielle des flux directs en <strong>HEVC H.265 à 60 FPS</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">Moteur VLC Player (Films & Séries VOD)</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Le moteur VLC intègre une compatibilité universelle avec tous les formats de conteneurs (MKV, MP4, AVI). Il gère parfaitement les bandes-son multicanaux AC3, EAC3 et DTS ainsi que l'incrustation des sous-titres personnalisés.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Key Features & Parental Control */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-indigo-400" />
                <span>Fonctionnalités Clés et Réglages Avancés de XCIPTV</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                L'application intègre des options de confort avancées pensées pour une expérience télévisuelle familiale complète :
              </p>

              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-400" />
                    <span>Mode Multi-Screen (Double & Quadruple Écran)</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    XCIPTV permet de visionner deux à quatre chaînes sportives simultanément sur un même téléviseur, idéal pour suivre plusieurs rencontres de football en direct sans avoir à zapper continuellement.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-400" />
                    <span>Contrôle Parental Sécurisé par Code PIN</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Protégez l'accès aux catégories sensibles en configurant un code PIN à 4 chiffres dans les réglages de l'application, verrouillant ainsi automatiquement les bouquets réservés aux adultes.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-amber-400" />
                    <span>Testeur de Débit et Réglage du Buffer Vidéo</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Un outil de Speed Test intégré vous permet de tester la vitesse de votre ligne vers les serveurs de diffusion. En cas de réseau Wi-Fi instable, basculez le cache tampon sur <strong>Grand (10 secondes)</strong> pour éliminer les micro-coupures.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Installation Guide */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Download className="w-5 h-5 text-indigo-400" />
                <span>Installation sur Amazon Fire TV Stick et Boîtiers Android</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Sur les appareils <strong>Android TV</strong> (Nvidia Shield, Xiaomi Mi Box, téléviseurs Sony et Philips), XCIPTV est disponible directement sur le <strong>Google Play Store</strong>.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Pour l'<strong>Amazon Fire TV Stick</strong>, utilisez l'application <strong>Downloader</strong> pour récupérer l'APK officiel en quelques secondes, puis connectez vos identifiants pour démarrer votre visionnage en haute définition.
              </p>
            </section>

            {/* FAQ XCIPTV */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Questions Fréquentes sur XCIPTV Player
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">L’application XCIPTV Player est-elle 100% gratuite ?</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Oui, contrairement aux applications exigeant une licence payante par adresse MAC, XCIPTV Player est totalement gratuit sur <Link href="/guide-installation/android-tv-box" className="text-indigo-400 hover:underline">Box Android TV</Link> et <Link href="/guide-installation/fire-tv-stick" className="text-indigo-400 hover:underline">Fire TV Stick</Link>.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">Quel lecteur choisir dans XCIPTV : ExoPlayer ou VLC ?</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Conservez <strong>ExoPlayer</strong> pour le zapping instantané des chaînes <Link href="/sport" className="text-indigo-400 hover:underline">Sport 4K 60 FPS</Link>, et activez <strong>VLC</strong> dans les paramètres lecteur pour les films <Link href="/catalogue-vod" className="text-indigo-400 hover:underline">VOD</Link> en audio multi-pistes.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">Quelle différence entre XCIPTV et IPTV Smarters Pro ?</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Les deux lecteurs exploitent l'API Xtream Codes. XCIPTV se distingue par son interface par cartes horizontales très épurée, tandis qu’<Link href="/applications/iptv-smarters-pro" className="text-indigo-400 hover:underline">IPTV Smarters Pro</Link> est disponible sur un plus grand nombre d'écrans (Smart TV Samsung/LG et iOS).
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border-2 border-indigo-500/50 space-y-5">
              <span className="inline-block px-2.5 py-1 rounded-md bg-indigo-600 text-white text-[11px] font-bold uppercase">
                100% Compatible XCIPTV
              </span>
              <h3 className="text-lg font-bold text-white">Abonnement 4K optimisé pour XCIPTV</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Profitez d'un zapping ultra-rapide sur XCIPTV grâce à nos serveurs CDN européens sans freeze et recevez vos codes d'accès en 15 minutes.
              </p>
              <Link
                href="/tarifs-abonnement"
                className="w-full flex items-center justify-center py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Découvrir les Tarifs &rarr;
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Autres Applications Recommandées</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/applications/iptv-smarters-pro" className="text-slate-300 hover:text-indigo-400 flex items-center justify-between">
                    <span>IPTV Smarters Pro Officiel</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/applications/tivimate" className="text-slate-300 hover:text-indigo-400 flex items-center justify-between">
                    <span>TiviMate IPTV Player</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/applications/ibo-player" className="text-slate-300 hover:text-indigo-400 flex items-center justify-between">
                    <span>IBO Player Pro (Smart TV)</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/applications/smart-iptv" className="text-slate-300 hover:text-indigo-400 flex items-center justify-between">
                    <span>Smart IPTV (SIPTV)</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/guide-iptv/meilleur-abonnement-iptv" className="text-slate-300 hover:text-indigo-400 flex items-center justify-between">
                    <span>Guide Meilleur IPTV 2026</span>
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
