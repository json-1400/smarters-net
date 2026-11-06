import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
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
  Wifi,
  HelpCircle
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/applications/ibo-player';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "IBO Player Pro : Activation, Configuration Smart TV & Abonnement France",
    description: "Guide complet IBO Player en France : Téléchargement sur Smart TV Samsung et LG, activation Device ID/Key et configuration Xtream Codes sans coupure.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'ibo player',
      'abonnement ibo player',
      'activation ibo player',
      'ibo player samsung',
      'ibo player lg webos',
      'configurer ibo player',
      'ibo player pro france'
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
        operatingSystem: 'Samsung Tizen, LG webOS, Android TV, Fire OS',
        applicationCategory: 'MultimediaApplication',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.7',
          ratingCount: '1340',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: 'Comment Configurer son Abonnement sur IBO Player',
        description: 'Tutoriel officiel pour lier vos codes Xtream à l\'application IBO Player.',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Récupérer Device ID et Device Key',
            text: 'Ouvrez IBO Player sur votre téléviseur Samsung ou LG. Notez le Device ID (adresse MAC) et la Device Key affichés à l\'écran.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Accéder au portail en ligne',
            text: 'Sur votre téléphone ou ordinateur, rendez-vous sur le portail iboplayer.com et connectez-vous avec vos identifiants d\'appareil.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Ajouter votre abonnement Xtream',
            text: 'Cliquez sur "Add XC Playlist" et saisissez le nom de la liste, votre Username, Password et URL Serveur.',
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
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'L’application IBO Player est-elle gratuite sur Smart TV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'IBO Player propose une période d’essai gratuite de 7 jours à l’installation. Passé ce délai, l’éditeur de l’application demande une licence unique d’environ 8 € par adresse MAC (indépendante de votre abonnement IPTV).',
            },
          },
          {
            '@type': 'Question',
            name: 'Vaut-il mieux ajouter un lien M3U ou Xtream Codes sur IBO Player ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Privilégiez toujours l\'option "Add XC Playlist" avec l\'API Xtream Codes : vos bouquets de chaînes en direct et films VOD se chargent instantanément avec jaquettes et guide EPG complet.',
            },
          },
          {
            '@type': 'Question',
            name: 'Que faire si mes chaînes ne s’affichent pas après l’ajout sur iboplayer.com ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Une fois vos identifiants validés sur le portail web, appuyez sur le bouton "Change Playlist / Reload" sur l\'écran de votre Smart TV pour actualiser les données.',
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
            <span className="text-slate-200 font-medium" aria-current="page">IBO Player</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-cyan-400" />
            <span>Lecteur N°1 Smart TV Samsung & LG &middot; Note : 4.7 / 5</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            IBO Player Pro : Activation, Configuration Smart TV & Abonnement France
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Spécialement développé pour les téléviseurs connectés, <strong>IBO Player Pro</strong> est devenu l'application de prédilection des possesseurs de Smart TV. Découvrez notre guide complet pour l'installer, activer votre licence et connecter votre abonnement 4K en quelques minutes sans manipulation technique complexe.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-10">
            
            {/* Section 1: Installation on Smart TV */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Tv className="w-5 h-5 text-cyan-400" />
                <span>Téléchargement & Installation d'IBO Player sur Smart TV Samsung et LG</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Contrairement à d'autres lecteurs qui requièrent un téléchargement APK manuel via une clé USB, <strong>IBO Player</strong> est directement référencé dans les magasins d'applications officiels des plus grands fabricants de téléviseurs :
              </p>

              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white">Installation sur Samsung Smart Hub (Tizen OS 2016-2026)</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Allumez votre téléviseur Samsung, ouvrez la barre d'accueil <strong>Smart Hub</strong>, accédez à la section <strong>Apps</strong>, puis tapez <strong>IBO Player</strong> dans la loupe de recherche. Cliquez sur Installer puis épinglez l'application à votre écran d'accueil.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white">Installation sur LG Content Store (webOS 3.0 à webOS 24)</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Sur votre téléviseur LG, lancez le <strong>LG Content Store</strong> ou le portail <strong>LG Apps</strong>. Recherchez <strong>IBO Player</strong>, téléchargez l'application officielle et ouvrez-la directement avec votre télécommande Magic Remote.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white">Disponibilité sur Apple TV, Firestick & Android</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    IBO Player est également disponible sur l'App Store d'<strong>Apple TV (tvOS)</strong>, sur <strong>Amazon Fire TV Stick</strong> et sur le <strong>Google Play Store</strong> pour les boîtiers Android TV, offrant la même interface épurée sur tous vos écrans de maison.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Web Portal Playlist Upload */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span>Gestion de Playlist sur le Portail Officiel (iboplayer.com)</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                La configuration des chaînes s'effectue facilement depuis un navigateur web sur smartphone, tablette ou ordinateur sans avoir à taper de longs identifiants avec la télécommande de la télévision :
              </p>

              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white">Étape 1 : Récupérer le Device ID et la Device Key</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Lancez l'application sur votre TV. Sur l'écran principal ou dans les réglages, notez l'adresse <strong>Device ID</strong> (format adresse MAC) et le code secret <strong>Device Key</strong> généré pour votre appareil.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white">Étape 2 : Privilégier l'option Add XC Playlist (Xtream Codes)</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Rendez-vous sur le portail <em>iboplayer.com</em>, connectez-vous avec vos deux identifiants puis cliquez sur <strong>Add XC Playlist</strong>. Renseignez l'URL du serveur, votre identifiant et votre mot de passe. Cette méthode est nettement plus rapide et stable que l'ajout d'une URL M3U brute.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white">Étape 3 : Rechargement et mise à jour de la liste</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Une fois la playlist enregistrée en ligne, retournez sur votre téléviseur et appuyez sur <strong>Reload Playlist</strong>. Vos bouquets de chaînes directes, films et séries VOD apparaissent instantanément avec leurs catégories respectives.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Recommended Settings & Anti-Buffering */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-cyan-400" />
                <span>Paramètres Recommandés & Dépannage Anti-Coupure</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Pour profiter pleinement des retransmissions sportives en <strong>4K UHD à 60 FPS</strong> sans décalage ni coupure, ajustez les paramètres internes de l'application :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">Sélection du Lecteur Vidéo Interne</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Dans les réglages d'IBO Player, vous pouvez basculer entre le moteur <strong>EXO Player</strong> et <strong>VLC Player</strong>. Si un flux vidéo spécifique présente un écran noir ou un problème de son, changer de lecteur résout immédiatement le souci.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">Optimisation DNS FAI Anti-Blocage</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Si vos chaînes peinent à charger les soirs de match de Ligue des Champions, modifiez les paramètres réseau de votre Smart TV en configurant le <strong>DNS Cloudflare 1.1.1.1</strong> pour contourner les ralentissements imposés par votre fournisseur d'accès.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ IBO Player */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Questions Fréquentes sur IBO Player Pro
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">L’application IBO Player est-elle gratuite sur Smart TV ?</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    IBO Player offre une période d’essai gratuit de 7 jours. Ensuite, son éditeur facture une activation unique d’environ 8 € à vie par adresse MAC (indépendante de votre <Link href="/abonnement-iptv-12-mois" className="text-cyan-400 hover:underline">abonnement IPTV</Link>). Pour un lecteur 100% gratuit, optez pour <Link href="/applications/iptv-smarters-pro" className="text-cyan-400 hover:underline">IPTV Smarters Pro</Link>.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">Vaut-il mieux ajouter un lien M3U ou Xtream Codes sur IBO Player ?</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Privilégiez systématiquement <strong>Add XC Playlist</strong> (<Link href="/guide-installation/xtream-codes-m3u" className="text-cyan-400 hover:underline">API Xtream Codes</Link>) : vos bouquets TV, films VOD et guide EPG se chargent instantanément sans ralentir la mémoire de votre téléviseur.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">Que faire si mes chaînes ne s’affichent pas après l’ajout sur iboplayer.com ?</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Une fois la liste validée sur le portail web, appuyez sur <strong>Change Playlist / Reload</strong> sur votre Smart TV Samsung ou LG pour forcer la synchronisation immédiate des serveurs.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border-2 border-cyan-500/50 space-y-5">
              <span className="inline-block px-2.5 py-1 rounded-md bg-cyan-600 text-white text-[11px] font-bold uppercase">
                Abonnement Compatible 4K
              </span>
              <h3 className="text-lg font-bold text-white">Prêt à activer IBO Player avec nos flux 4K ?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Recevez vos identifiants API Xtream Codes par email en 15 minutes et profitez de plus de 25 000 chaînes directes sans freeze sur votre <strong>Smart TV Samsung</strong> ou <strong>LG</strong>.
              </p>
              <Link
                href="/tarifs-abonnement"
                className="w-full flex items-center justify-center py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Découvrir nos Tarifs &rarr;
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Autres Lecteurs Recommandés</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/applications/iptv-smarters-pro" className="text-slate-300 hover:text-cyan-400 flex items-center justify-between">
                    <span>IPTV Smarters Pro Officiel</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/applications/tivimate" className="text-slate-300 hover:text-cyan-400 flex items-center justify-between">
                    <span>TiviMate IPTV Player</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/applications/smart-iptv" className="text-slate-300 hover:text-cyan-400 flex items-center justify-between">
                    <span>Smart IPTV (SIPTV)</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/applications/xciptv" className="text-slate-300 hover:text-cyan-400 flex items-center justify-between">
                    <span>XCIPTV Player Pro</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/guide-iptv/meilleur-abonnement-iptv" className="text-slate-300 hover:text-cyan-400 flex items-center justify-between">
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
