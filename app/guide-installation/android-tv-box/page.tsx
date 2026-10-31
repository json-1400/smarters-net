import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Tv, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Zap,
  Smartphone,
  Layers,
  Flame,
  Radio,
  Cpu,
  Download
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/guide-installation/android-tv-box';

export function generateMetadata(): Metadata {
  const title = "Installer IPTV sur Android TV Box : Guide Complet Pas-à-Pas 2026";
  const description = "Comment installer et configurer IPTV Smarters Pro sur Box Android TV, Nvidia Shield, Xiaomi Mi Box et smartphones Android. Guide officiel 4K sans coupure.";

  return {
    title,
    description,
    keywords: [
      'iptv android',
      'installer iptv android box',
      'iptv smarters pro android tv',
      'iptv xiaomi mi box',
      'iptv nvidia shield',
      'configuration iptv android'
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

export default function AndroidTvBoxTutorialPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: 'Comment Installer IPTV Smarters Pro sur Android TV et Box TV',
        description: 'Tutoriel officiel pas à pas pour configurer un abonnement IPTV sur Box Android TV (Xiaomi, Nvidia Shield, Mecool) et smartphones.',
        totalTime: 'PT3M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Ouvrir Google Play Store',
            text: 'Depuis l\'interface Android TV ou Google TV de votre box, ouvrez l\'application Google Play Store.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Rechercher IPTV Smarters Pro',
            text: 'Dans la barre de recherche, saisissez Smarters Pro ou Smarters Player Lite et sélectionnez l\'application certifiée.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Installer l\'application',
            text: 'Cliquez sur Installer et patientez jusqu\'à la fin du téléchargement automatique.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Sélectionner Xtream Codes API',
            text: 'Lancez l\'application, acceptez les conditions d\'utilisation puis choisissez l\'option Se connecter via Xtream Codes API.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Renseigner vos identifiants VIP',
            text: 'Saisissez le Nom de profil, votre Nom d\'utilisateur, Mot de passe et l\'URL serveur fournie lors de votre abonnement, puis cliquez sur Ajouter un utilisateur.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Quelle est la meilleure box Android pour l\'IPTV en 2026 ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'La Nvidia Shield TV Pro reste la référence absolue grâce à son processeur Tegra X1+ et son upscaling IA en 4K. La Xiaomi Mi Box S (2ème génération) et la Chromecast avec Google TV 4K offrent également un excellent rapport qualité/prix.',
            },
          },
          {
            '@type': 'Question',
            name: 'Que faire si l\'application n\'apparaît pas sur le Play Store de ma box ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vous pouvez installer le fichier APK officiel directement via une clé USB ou l\'application Downloader, ou opter pour des lecteurs alternatifs comme TiviMate ou XCIPTV qui sont également 100% compatibles avec nos flux.',
            },
          },
          {
            '@type': 'Question',
            name: 'Faut-il brancher ma box Android en Ethernet ou en Wi-Fi ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pour les flux 4K UHD à 60 FPS sans coupure, une connexion filaire Ethernet (RJ45) est vivement recommandée pour garantir un débit stable et éliminer les interférences Wi-Fi.',
            },
          },
          {
            '@type': 'Question',
            name: 'Le replay et le guide EPG fonctionnent-ils sur Android TV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, la connexion via API Xtream Codes synchronise automatiquement les 7 jours de grilles EPG et permet le retour en arrière (catch-up) sur les chaînes compatibles.',
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
            name: 'Guide d\'Installation',
            item: `${SITE_CONFIG.domain}/guide-installation`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Android TV & Box',
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
            <Link href="/guide-installation" className="hover:text-blue-400 transition-colors">Guide d'Installation</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li>
            <span className="text-slate-200 font-medium" aria-current="page">Box Android TV & Mobile</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs font-semibold">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span>Guide Certifié Android TV, Google TV & Smartphones 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Comment Installer IPTV sur <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Box Android TV</span> & Téléphones
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Suivez notre guide complet pour configurer votre <strong>abonnement IPTV</strong> sur l'ensemble de l'écosystème Android : Nvidia Shield TV, Xiaomi Mi Box, Google TV (Chromecast), Box Android générique, tablette ou smartphone.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/abonnement-iptv-12-mois"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Découvrir nos Abonnements 4K</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="#tutoriel-android"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                <span>Étapes d'Installation Pas-à-Pas</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">4K & FHD</span>
                <span className="block text-xs text-slate-400">Flux 60 FPS Anti-Freeze</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">&lt; 3 min</span>
                <span className="block text-xs text-slate-400">Configuration Rapide</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">100% Android</span>
                <span className="block text-xs text-slate-400">Shield, Xiaomi, Google TV</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-slate-950 font-black text-lg">
                    A
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-none">Fiche Technique Matérielle</h2>
                    <span className="text-xs text-slate-400">Architecture Android TV 2026</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  Certifié
                </span>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Version Système</dt>
                  <dd className="font-semibold text-slate-200">Android 7.0 à 15+ & Google TV</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Lecteur Recommandé</dt>
                  <dd className="font-semibold text-slate-200">IPTV Smarters Pro & TiviMate</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Protocole de Connexion</dt>
                  <dd className="font-semibold text-emerald-400">Xtream Codes API (Recommandé)</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Décodage Vidéo</dt>
                  <dd className="font-semibold text-slate-200">H.265 / HEVC Matériel 60 FPS</dd>
                </div>
                <div className="flex justify-between py-1.5">
                  <dt className="text-slate-400">Guide EPG & Replay</dt>
                  <dd className="font-semibold text-slate-200">Synchronisation Automatique</dd>
                </div>
              </dl>

              <div className="pt-2">
                <Link
                  href="/checkout?plan=Premium"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-slate-950 font-black text-xs uppercase tracking-wider hover:brightness-110 transition-all"
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
        
        {/* Section 1: Pourquoi Android TV est idéal */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Pourquoi choisir une Box Android TV pour votre IPTV ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Le système <strong>Android TV / Google TV</strong> est considéré par les passionnés comme la plateforme de référence pour le streaming IPTV. Doté d'un catalogue ouvert d'applications, d'une grande liberté d'installation de fichiers APK et d'une compatibilité avec les meilleurs décodeurs vidéo (AV1, HEVC), il délivre une stabilité incomparable.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Sur des modèles haut de gamme comme la <strong>Nvidia Shield TV Pro</strong>, le processeur Tegra applique un traitement d'upscaling par intelligence artificielle qui améliore la netteté de vos chaînes HD pour un rendu spectaculaire sur les téléviseurs 4K grand format.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <Zap className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Décodage Matériel 4K 60FPS</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prise en charge native de l'accélération GPU pour une fluidité sans saccades sur tous les flux sportifs.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <Radio className="w-6 h-6 text-teal-400" />
              <h3 className="text-base font-bold text-white">Contrôle Vocal & Télécommande</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Navigation fluide avec la télécommande de votre téléviseur ou commande vocale Google Assistant intégrée.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Liberté d'Applications</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Utilisez IPTV Smarters Pro, TiviMate, XCIPTV ou tout autre lecteur selon vos préférences d'interface.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Étapes Pas-à-Pas */}
        <section id="tutoriel-android" className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Tutoriel d'Installation Étape par Étape sur Android TV
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Voici la procédure exacte pour installer votre lecteur et renseigner vos identifiants en moins de 3 minutes :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-emerald-600 text-slate-950 font-black text-sm flex items-center justify-center">
                  1
                </span>
                <h3 className="text-lg font-bold text-white">Ouvrir Google Play Store</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                Allumez votre box Android (Xiaomi, Nvidia Shield, Smart TV sous Android TV). Ouvrez l'application <strong>Google Play Store</strong>. Utilisez la télécommande pour rechercher <code>Smarters Pro</code>.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-emerald-600 text-slate-950 font-black text-sm flex items-center justify-center">
                  2
                </span>
                <h3 className="text-lg font-bold text-white">Télécharger et Installer</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                Sélectionnez la fiche officielle de l'application et cliquez sur <strong className="text-white">Installer</strong>. L'application est légère et s'installe en quelques secondes. Vous pouvez aussi installer l'APK officiel via Downloader.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-emerald-600 text-slate-950 font-black text-sm flex items-center justify-center">
                  3
                </span>
                <h3 className="text-lg font-bold text-white">Sélectionner "Xtream Codes API"</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                À l'ouverture de l'application, choisissez le format TV / Box pour une interface adaptée à la télécommande, puis cliquez impérativement sur <strong className="text-white">Connexion via Xtream Codes API</strong>.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-emerald-600 text-slate-950 font-black text-sm flex items-center justify-center">
                  4
                </span>
                <h3 className="text-lg font-bold text-white">Saisir vos identifiants VIP</h3>
              </div>
              <div className="text-xs text-slate-300 leading-relaxed pl-11 space-y-2">
                <p>Complétez les 4 champs requis avec vos accès transmis lors de la commande :</p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
                  <div>Nom : Mon IPTV VIP</div>
                  <div>Identifiant : VotreIdentifiant</div>
                  <div>Mot de passe : VotreMotDePasse</div>
                  <div>URL Serveur : http://serveur-dns.com:port</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Lecteurs Alternatifs Recommandés */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Autres Lecteurs IPTV d'Élite Compatibles sur Android Box
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Nos serveurs sont 100% universels. Si vous souhaitez tester d'autres interfaces logicielles pour Android TV, voici les 3 alternatives les plus performantes :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/applications/tivimate"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Tv className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                  TiviMate IPTV Player
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  L'interface la plus plébiscitée sur Android TV. Guide EPG ultra-rapide, multi-écrans 4 flux et personnalisation intégrale.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 pt-2">
                <span>Voir le guide TiviMate</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/applications/xciptv"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">
                  XCIPTV Player
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Application moderne dotée de deux moteurs de lecture natifs (ExoPlayer et VLC) avec test de vitesse intégré.
                </p>
              </div>
              <span className="text-xs font-bold text-teal-400 flex items-center gap-1 pt-2">
                <span>Voir le guide XCIPTV</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/applications/iptv-smarters-pro"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  IPTV Smarters Pro Officiel
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  La référence absolue pour sa simplicité, sa compatibilité avec tous les formats et sa gestion intelligente du replay.
                </p>
              </div>
              <span className="text-xs font-bold text-blue-400 flex items-center gap-1 pt-2">
                <span>Découvrir Smarters Pro</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </section>

        {/* Section 4: Banner CTA pour l'abonnement */}
        <section className="rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/60 border border-emerald-500/30 p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Profitez d'un Abonnement 4K Ultra Fluide sur votre Box Android
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Accédez à +25 000 chaînes premium et +90 000 VOD en 4K Ultra HD avec serveurs anti-freeze et assistance WhatsApp 7j/7.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/abonnement-iptv-12-mois"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl shadow-emerald-500/20 transition-all hover:scale-105"
            >
              <span>Découvrir l'Abonnement 12 Mois VIP (1 Mois Offert)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section 5: FAQ Spécifique Android TV en 2 colonnes */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Foire Aux Questions sur l'IPTV Android
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Toutes les réponses pratiques pour optimiser la qualité de diffusion sur votre matériel Android.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Quelle est la meilleure box Android pour l'IPTV en 2026 ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                La Nvidia Shield TV Pro reste la référence absolue grâce à son processeur Tegra X1+ et son upscaling IA en 4K. La Xiaomi Mi Box S (2ème génération) et la Chromecast avec Google TV 4K offrent également un excellent rapport qualité/prix.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Que faire si l'application n'apparaît pas sur le Play Store ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Vous pouvez installer le fichier APK officiel directement via une clé USB ou l'application Downloader, ou opter pour des lecteurs alternatifs comme TiviMate ou XCIPTV qui sont également 100% compatibles avec nos flux.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Faut-il brancher ma box Android en Ethernet ou en Wi-Fi ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Pour les flux 4K UHD à 60 FPS sans coupure, une connexion filaire Ethernet (RJ45) est vivement recommandée pour garantir un débit stable et éliminer les interférences Wi-Fi.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Le replay et le guide EPG fonctionnent-ils sur Android TV ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Oui, la connexion via API Xtream Codes synchronise automatiquement les 7 jours de grilles EPG et permet le retour en arrière (catch-up) sur les chaînes compatibles.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
