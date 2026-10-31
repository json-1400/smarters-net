import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Tv, 
  Monitor, 
  KeyRound, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Zap,
  Flame,
  Radio,
  Layers
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/guide-installation/smart-tv-samsung-lg';

export function generateMetadata(): Metadata {
  const title = "Installer IPTV sur Smart TV Samsung & LG : Tutoriel 2026 Pas-à-Pas";
  const description = "Guide complet pour installer IPTV Smarters Pro sur Smart TV Samsung (Tizen) et LG (webOS). Recherche sur le store officiel, configuration Xtream Codes et astuces sans boîtier.";

  return {
    title,
    description,
    keywords: [
      'iptv smart tv samsung',
      'iptv smart tv lg',
      'installer iptv smarters pro samsung',
      'installer iptv smarters pro lg',
      'iptv tizen samsung',
      'iptv webos lg',
      'smarters player lite smart tv'
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

export default function SmartTvSamsungLgTutorialPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: 'Comment Installer IPTV Smarters Pro sur Smart TV Samsung et LG',
        description: 'Tutoriel officiel pas-à-pas pour installer Smarters Player Lite directement depuis le Samsung Smart Hub ou le LG Content Store sans boîtier externe.',
        totalTime: 'PT5M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Ouvrir le magasin d\'applications de votre téléviseur',
            text: 'Appuyez sur le bouton Home de votre télécommande et rendez-vous dans Apps (Samsung Smart Hub) ou LG Content Store.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Rechercher Smarters Pro ou Smarters Player Lite',
            text: 'Dans la barre de recherche, tapez Smarters Pro ou Smarters Player Lite et sélectionnez l\'application officielle.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Télécharger et installer l\'application',
            text: 'Appuyez sur Installer puis sur Ouvrir une fois l\'installation terminée.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Choisir la méthode de connexion Xtream Codes',
            text: 'Sélectionnez Connexion avec l\'API Xtream Codes pour synchroniser automatiquement l\'EPG et les catégories.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Saisir vos identifiants d\'accès',
            text: 'Entrez le nom de votre profil, votre nom d\'utilisateur, votre mot de passe et l\'URL du serveur reçus lors de votre abonnement.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Que faire si IPTV Smarters Pro n\'apparaît pas sur mon store Samsung ou LG ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sur certains modèles ou selon la région géographique configurée sur la télévision, l\'application peut porter le nom "Smarters Player Lite" ou être temporairement absente. Vous pouvez alors installer des lecteurs alternatifs certifiés tels qu\'IBO Player ou Smart IPTV, ou connecter un Amazon Fire TV Stick.',
            },
          },
          {
            '@type': 'Question',
            name: 'L\'application est-elle payante sur Smart TV Samsung et LG ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le téléchargement de base d\'IPTV Smarters Pro est gratuit. Certaines versions récentes peuvent proposer une mise à niveau optionnelle pour des fonctionnalités avancées, mais les fonctions essentielles de streaming direct et VOD restent accessibles.',
            },
          },
          {
            '@type': 'Question',
            name: 'Faut-il brancher sa Smart TV en câble Ethernet ou Wi-Fi ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pour visionner les chaînes sportives en 4K UHD 60 FPS sans coupure, une connexion par câble Ethernet RJ45 direct à votre box internet est fortement recommandée par rapport au Wi-Fi.',
            },
          },
          {
            '@type': 'Question',
            name: 'La télécommande Magic Remote de LG est-elle compatible ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, le pointeur gyroscopique et la molette de défilement de la Magic Remote de LG sont parfaitement reconnus pour zapper rapidement entre les chaînes.',
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
            name: 'Smart TV Samsung & LG',
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
            <span className="text-slate-200 font-medium" aria-current="page">Smart TV Samsung & LG</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold">
              <Monitor className="w-4 h-4 text-blue-400" />
              <span>Guide Officiel Tizen OS & webOS 2026 &middot; Zéro Boîtier Additionnel</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Comment Installer IPTV sur <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Smart TV Samsung & LG</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Profitez du confort de votre écran 4K de salon sans aucun boîtier additionnel. Découvrez comment installer <strong>IPTV Smarters Pro</strong> (ou <strong>Smarters Player Lite</strong>) directement sur le Samsung Smart Hub et le LG Content Store, et activez votre flux en quelques instants.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/abonnement-iptv-12-mois"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Découvrir nos Abonnements 4K</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="#tutoriel-smarttv"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                <span>Étapes d'Installation Pas-à-Pas</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">4K UHD</span>
                <span className="block text-xs text-slate-400">Dalle TV Native</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">&lt; 5 min</span>
                <span className="block text-xs text-slate-400">Sans Câbles Additionnels</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">1 Télécommande</span>
                <span className="block text-xs text-slate-400">Contrôle Direct TV</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg">
                    <Tv className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-none">Fiche Téléviseurs Connectés</h2>
                    <span className="text-xs text-slate-400">Samsung Tizen & LG webOS</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                  Intégré
                </span>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Systèmes Supportés</dt>
                  <dd className="font-semibold text-slate-200">Samsung Tizen (2017+) & LG webOS</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Nom sur le Store</dt>
                  <dd className="font-semibold text-blue-400">Smarters Player Lite / Pro</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Connexion Recommandée</dt>
                  <dd className="font-semibold text-emerald-400">Câble Ethernet RJ45</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Lecteurs Alternatifs</dt>
                  <dd className="font-semibold text-slate-200">IBO Player, Smart IPTV</dd>
                </div>
                <div className="flex justify-between py-1.5">
                  <dt className="text-slate-400">Gestion Télécommande</dt>
                  <dd className="font-semibold text-slate-200">Magic Remote & Samsung One</dd>
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
        
        {/* Section 1: Pourquoi l'installation directe est pratique */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Une Installation Épurée Directement Intégrée à votre Téléviseur
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Installer votre lecteur directement sur le système d'exploitation de votre <strong>Smart TV Samsung (Tizen)</strong> ou <strong>LG (webOS)</strong> élimine le besoin d'acheter un boîtier externe ou d'ajouter des câbles encombrants derrière votre meuble TV.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Vous pilotez l'intégralité de vos 25 000 chaînes, du guide des programmes et du catalogue VOD avec la seule télécommande d'origine de votre téléviseur (Samsung One Remote ou LG Magic Remote).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <Zap className="w-6 h-6 text-blue-400" />
              <h3 className="text-base font-bold text-white">Zéro Câble Supplémentaire</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tout se passe directement sur la dalle TV connectée à votre réseau internet local.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <Radio className="w-6 h-6 text-cyan-400" />
              <h3 className="text-base font-bold text-white">Télécommande Universelle</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Contrôle fluide du direct et zapping instantané avec la télécommande de votre téléviseur.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Mises à Jour Officielles</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                L'application se met à jour automatiquement via le Samsung Smart Hub ou le LG Content Store.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Étapes Pas-à-Pas Samsung & LG */}
        <section id="tutoriel-smarttv" className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Tutoriel d'Installation selon votre Marque de Téléviseur
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Sélectionnez le guide adapté à votre écran de salon :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Guide Samsung Tizen */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Méthode 1 : Sur Smart TV Samsung (Tizen)</h3>
                  <span className="text-xs text-slate-400">Modèles 2017 à 2026</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Les téléviseurs Samsung bénéficient d'une intégration directe dans la boutique officielle :
              </p>

              <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                <li>Appuyez sur la touche <strong>Home</strong> de votre télécommande Samsung.</li>
                <li>Naviguez vers la section <strong>Apps (Smart Hub)</strong>.</li>
                <li>Recherchez <strong className="text-white">Smarters Pro</strong> ou <strong className="text-white">Smarters Player Lite</strong>.</li>
                <li>Cliquez sur <strong>Installer</strong> puis sur <strong>Ouvrir</strong>.</li>
                <li>Sélectionnez <strong>Xtream Codes API</strong> et renseignez vos identifiants d'accès VIP.</li>
              </ol>
            </div>

            {/* Guide LG webOS */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Tv className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Méthode 2 : Sur Smart TV LG (webOS)</h3>
                  <span className="text-xs text-slate-400">Modèles webOS 3.0 à 24+</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Sur les écrans OLED, QNED et NanoCell de LG, la procédure est tout aussi directe :
              </p>

              <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                <li>Appuyez sur le bouton <strong>Accueil</strong> de votre télécommande Magic Remote.</li>
                <li>Ouvrez le <strong>LG Content Store</strong> (ou Apps).</li>
                <li>Tapez <strong className="text-white">IPTV Smarters Pro</strong> ou <strong className="text-white">Smarters Player Lite</strong> dans la loupe.</li>
                <li>Téléchargez et lancez l'application sur votre écran.</li>
                <li>Choisissez <strong>Connexion via Xtream Codes API</strong> et entrez vos accès reçus.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 3: Lecteurs Alternatifs pour Smart TV */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Lecteurs Alternatifs Compatibles sur Samsung & LG
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Si Smarters Pro n'est pas répertorié dans la région de votre téléviseur, vous pouvez utiliser ces applications certifiées 100% compatibles avec nos serveurs :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/applications/ibo-player"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase">
                  Le Plus Populaire sur Smart TV
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  IBO Player
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Lecteur nouvelle génération disponible sur les stores Samsung et LG. Activation simple via adresse MAC et clé Device Key sur le portail iboplayer.com.
                </p>
              </div>
              <span className="text-xs font-bold text-blue-400 flex items-center gap-1 pt-2">
                <span>Consulter le guide IBO Player</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/applications/smart-iptv"
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-400 text-xs font-bold uppercase">
                  Pionnier Smart TV
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  Smart IPTV (SIPTV)
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  L'application historique pour téléviseurs connectés. Chargement de votre playlist M3U directement via l'adresse MAC sur le site siptv.app.
                </p>
              </div>
              <span className="text-xs font-bold text-blue-400 flex items-center gap-1 pt-2">
                <span>Consulter le guide Smart IPTV</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </section>

        {/* Section 4: Banner CTA pour l'abonnement */}
        <section className="rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-cyan-950/60 border border-blue-500/30 p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Débloquez la Qualité 4K Optimale sur votre Smart TV
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Profitez d'un accès instantané à +25 000 chaînes en direct et +90 000 films et séries en 4K Ultra HD sans aucune interruption.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/abonnement-iptv-12-mois"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
            >
              <span>Découvrir l'Abonnement 12 Mois VIP (1 Mois Offert)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section 5: FAQ Spécifique Smart TV Samsung & LG en 2 colonnes */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Foire Aux Questions sur l'IPTV Smart TV
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Toutes les réponses pour réussir l'installation sur votre téléviseur Samsung ou LG.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Que faire si l'app n'apparaît pas sur mon store TV ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Sur certains modèles ou selon la région géographique configurée sur la télévision, l'application peut porter le nom "Smarters Player Lite" ou être temporairement absente. Vous pouvez alors installer des lecteurs alternatifs certifiés tels qu'IBO Player ou Smart IPTV, ou connecter un Amazon Fire TV Stick.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>L'application est-elle payante sur Samsung et LG ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Le téléchargement de base d'IPTV Smarters Pro est gratuit. Certaines versions récentes peuvent proposer une mise à niveau optionnelle pour des fonctionnalités avancées, mais les fonctions essentielles de streaming direct et VOD restent accessibles.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Faut-il brancher sa TV en câble Ethernet ou Wi-Fi ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Pour visionner les chaînes sportives en 4K UHD 60 FPS sans coupure, une connexion par câble Ethernet RJ45 direct à votre box internet est fortement recommandée par rapport au Wi-Fi.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>La télécommande Magic Remote de LG est-elle compatible ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Oui, le pointeur gyroscopique et la molette de défilement de la Magic Remote de LG sont parfaitement reconnus pour zapper rapidement entre les chaînes.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
