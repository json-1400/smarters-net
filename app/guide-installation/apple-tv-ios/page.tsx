import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
  Apple,
  Sliders,
  Wifi
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/guide-installation/apple-tv-ios';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Installer IPTV sur Apple TV, iPhone et iPad : Tutoriel Pas-à-Pas 2026",
    description: "Guide officiel 2026 pour configurer votre abonnement IPTV sur Apple TV, iPhone et iPad via Smarters Player Lite. Identifiants Xtream Codes et flux 4K sans coupure.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'iptv sur apple tv, iphone et ipad',
      'iptv apple tv',
      'installer iptv iphone',
      'iptv ipad',
      'smarters player lite apple tv',
      'iptv smarters pro ios',
      'configuration iptv apple tv 4k'
    ],
  });
}

export default function AppleTvIosTutorialPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: 'Comment Installer IPTV sur Apple TV, iPhone et iPad',
        description: 'Tutoriel officiel pour installer Smarters Player Lite sur l\'écosystème Apple (iOS et tvOS) avec identifiants Xtream Codes.',
        totalTime: 'PT3M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Ouvrir l\'App Store Apple',
            text: 'Depuis votre Apple TV 4K, iPhone ou iPad, ouvrez l\'App Store officiel.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Télécharger Smarters Player Lite',
            text: 'Recherchez Smarters Player Lite (version officielle certifiée pour iOS et tvOS) et cliquez sur Obtenir.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Lancer l\'application et accepter les conditions',
            text: 'Ouvrez l\'application et acceptez le contrat de licence utilisateur.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Sélectionner Login with Xtream Codes API',
            text: 'Choisissez l\'option de connexion API Xtream Codes.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Saisir vos identifiants d\'accès',
            text: 'Remplissez vos 4 champs (Nom, Utilisateur, Mot de passe, URL serveur) et validez en cliquant sur Add User.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Pourquoi l\'application s\'appelle-t-elle "Smarters Player Lite" sur l\'App Store ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sur iOS et tvOS, l\'éditeur officiel WHMCS Smarters publie son application sous le nom de Smarters Player Lite afin de respecter rigoureusement les directives de validation de l\'App Store Apple. C\'est l\'application officielle authentique.',
            },
          },
          {
            '@type': 'Question',
            name: 'L\'Apple TV 4K supporte-t-elle la 4K HDR et 60 FPS ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, l\'Apple TV 4K dispose de la puce Apple Bionic/A15 qui offre l\'une des meilleures puissances de décodage vidéo du marché, garantissant une fluidité parfaite à 60 images par seconde sans aucune surchauffe.',
            },
          },
          {
            '@type': 'Question',
            name: 'Puis-je utiliser AirPlay depuis mon iPhone vers ma télévision ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, vous pouvez diffuser n\'importe quelle chaîne ou film en direct depuis l\'application sur iPhone/iPad vers votre téléviseur ou Apple TV via le protocole Apple AirPlay 2.',
            },
          },
          {
            '@type': 'Question',
            name: 'La télécommande Siri Remote permet-elle de zapper facilement ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, la molette tactile et les touches directionnelles de la Siri Remote permettent un zapping instantané et un défilement rapide dans les catégories.',
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
            name: 'Apple TV, iPhone & iPad',
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
            <span className="text-slate-200 font-medium" aria-current="page">Apple TV, iPhone & iPad</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/80 border border-sky-800/60 text-sky-300 text-xs font-semibold">
              <Apple className="w-4 h-4 text-sky-400" />
              <span>Guide Certifié Apple tvOS, iPhone & iPad 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Comment Configurer <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">IPTV sur Apple TV, iPhone et iPad</span> en 2026
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Découvrez notre guide complet pour configurer <strong>IPTV sur Apple TV, iPhone et iPad</strong> en moins de 3 minutes via l'application officielle <strong>Smarters Player Lite</strong>. Profitez de la puissance de décodage de la puce Apple Bionic pour streamer vos chaînes TV en direct et vos films VOD en <strong>4K Ultra HD à 60 FPS</strong> avec un son <strong>Dolby Surround</strong> sans coupure.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/abonnement-iptv-12-mois"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-lg shadow-sky-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Découvrir nos Abonnements 4K</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="#tutoriel-apple"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                <span>Étapes d'Installation Pas-à-Pas</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">4K & HDR</span>
                <span className="block text-xs text-slate-400">Puce Apple A15 Bionic</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">&lt; 2 min</span>
                <span className="block text-xs text-slate-400">Installation App Store</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">AirPlay 2</span>
                <span className="block text-xs text-slate-400">iPhone vers Grand Écran</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-black text-lg">
                    <Apple className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-none">Fiche Écosystème Apple</h2>
                    <span className="text-xs text-slate-400">tvOS 17+ & iOS 17+</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold">
                  Officiel
                </span>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">App Store Officielle</dt>
                  <dd className="font-semibold text-slate-200">Smarters Player Lite</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Compatibilité Matériel</dt>
                  <dd className="font-semibold text-slate-200">Apple TV 4K, HD, iPhone, iPad</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Protocole de Connexion</dt>
                  <dd className="font-semibold text-sky-400">API Xtream Codes & M3U</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Résolution Maximale</dt>
                  <dd className="font-semibold text-slate-200">4K Dolby Vision / HDR10</dd>
                </div>
                <div className="flex justify-between py-1.5">
                  <dt className="text-slate-400">Télécommande Siri</dt>
                  <dd className="font-semibold text-slate-200">Zapping Tactile 100% Géré</dd>
                </div>
              </dl>

              <div className="pt-2">
                <Link
                  href="/tarifs"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
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
        
        {/* Section 1: Pourquoi l'Apple TV est supérieure */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              L'Expérience IPTV Ultime sur Apple TV 4K, iPhone & iPad
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Grâce à la puce surpuissante Apple Bionic (A15), l'<strong>Apple TV 4K</strong> offre un confort de visionnage sans égal : aucun temps de chargement, zapping ultra-nerveux et une fluidité parfaite à 60 images par seconde sans aucune surchauffe matérielle.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              En déplacement, vous profitez de vos bouquets en direct sur <strong>iPhone</strong> ou <strong>iPad</strong> via le réseau 4G/5G, avec la possibilité de basculer la diffusion sur le téléviseur du salon en un clic grâce au protocole <strong>Apple AirPlay 2</strong>.
            </p>

            {/* SEO Visual Showcase */}
            <figure className="my-6 space-y-2">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-2xl">
                <Image
                  src="/images/placeholders/guide-apple-tv.svg"
                  alt="Tutoriel installation IPTV sur Apple TV 4K et iOS avec AirPlay et application officielle"
                  width={1200}
                  height={675}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="text-center text-xs text-slate-400">
                Installation sur Apple TV 4K &amp; iOS : streaming haute performance et intégration AirPlay.
              </figcaption>
            </figure>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <Zap className="w-6 h-6 text-sky-400" />
              <h3 className="text-base font-bold text-white">Puce A15 Bionic 60 FPS</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Le décodage matériel le plus puissant du marché pour des retransmissions sportives en direct d'une netteté absolue.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <Radio className="w-6 h-6 text-blue-400" />
              <h3 className="text-base font-bold text-white">AirPlay 2 Intégré</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Diffusez instantanément depuis votre iPhone ou iPad vers n'importe quelle TV connectée compatible Apple.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">App Store Sécurisé</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Téléchargement certifié sans manipulation complexe ni jailbreak, 100% conforme aux standards Apple.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Étapes Pas-à-Pas */}
        <section id="tutoriel-apple" className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Tutoriel d'Installation : IPTV sur Apple TV, iPhone et iPad Pas-à-Pas
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              L'application officielle est disponible directement sur l'App Store Apple. Suivez ces 4 étapes simples :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-sky-600 text-white font-black text-sm flex items-center justify-center">
                  1
                </span>
                <h3 className="text-lg font-bold text-white">Ouvrir l'App Store Apple</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                Sur votre Apple TV 4K, iPhone ou iPad, ouvrez l'<strong>App Store</strong>. Dans l'onglet de recherche, saisissez <code>Smarters Player Lite</code>.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-sky-600 text-white font-black text-sm flex items-center justify-center">
                  2
                </span>
                <h3 className="text-lg font-bold text-white">Télécharger l'Application Gratuite</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                Cliquez sur <strong>Obtenir</strong>. L'application officielle éditée par WHMCS Smarters est entièrement gratuite et s'installe automatiquement sur votre appareil.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-sky-600 text-white font-black text-sm flex items-center justify-center">
                  3
                </span>
                <h3 className="text-lg font-bold text-white">Sélectionner Xtream Codes API</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                Lancez l'application, acceptez la licence utilisateur puis cliquez sur <strong>Login with Xtream Codes API</strong> (protocole le plus stable et rapide sur iOS et tvOS).
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-sky-600 text-white font-black text-sm flex items-center justify-center">
                  4
                </span>
                <h3 className="text-lg font-bold text-white">Entrer vos identifiants VIP</h3>
              </div>
              <div className="text-xs text-slate-300 leading-relaxed pl-11 space-y-2">
                <p>Complétez les 4 champs de connexion avec vos accès reçus par email :</p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
                  <div>Any Name : Smarters Apple TV</div>
                  <div>Username : VotreIdentifiant</div>
                  <div>Password : VotreMotDePasse</div>
                  <div>Server URL : http://serveur-dns.com:port</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Lecteurs Alternatifs Apple TV */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Lecteurs Alternatifs Populaires sur Apple TV (tvOS)
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Si vous recherchez une présentation différente de vos chaînes et VOD sur Apple TV, nos serveurs sont également optimisés pour :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <span className="px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase">
                Style SVOD
              </span>
              <h3 className="text-lg font-bold text-white">IPTVX (tvOS)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Lecteur premium dédié à l'Apple TV avec synchronisation iCloud, reprise de lecture automatique sur tous vos appareils Apple et affichage élégant des jaquettes VOD.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase">
                Performances EPG
              </span>
              <h3 className="text-lg font-bold text-white">iPlayTV</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Une des applications les plus rapides pour charger d'importantes listes de chaînes, avec gestion native des favoris et contrôle tactile avec la télécommande Siri.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Banner CTA pour l'abonnement */}
        <section className="rounded-3xl bg-white dark:bg-gradient-to-r dark:from-sky-950 dark:via-slate-900 dark:to-blue-950 border border-sky-200 dark:border-sky-500/30 p-8 sm:p-12 text-center space-y-6 shadow-xl dark:shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Activez la Puissance 4K sur votre Écosystème Apple
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Profitez d'un accès instantané à +25 000 chaînes en direct et +90 000 films et séries en 4K Ultra HD sans aucune interruption sur tous vos appareils Apple.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/abonnement-iptv-12-mois"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-sky-500/20 transition-all hover:scale-105"
            >
              <span>Découvrir l'Abonnement 12 Mois VIP (2 Écrans Inclus)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section 5: FAQ Spécifique Apple TV & iOS en 2 colonnes */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Foire Aux Questions sur l'IPTV Apple TV & iOS
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Toutes les réponses à vos questions techniques pour l'environnement Apple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Pourquoi le nom "Smarters Player Lite" sur l'App Store ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Sur iOS et tvOS, l'éditeur officiel WHMCS Smarters publie son application sous le nom de Smarters Player Lite afin de respecter rigoureusement les directives de validation de l'App Store Apple. C'est l'application officielle authentique.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>L'Apple TV 4K supporte-t-elle la 4K HDR et 60 FPS ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Oui, l'Apple TV 4K dispose de la puce Apple Bionic/A15 qui offre l'une des meilleures puissances de décodage vidéo du marché, garantissant une fluidité parfaite à 60 images par seconde sans aucune surchauffe.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Puis-je utiliser AirPlay depuis mon iPhone vers ma TV ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Oui, vous pouvez diffuser n'importe quelle chaîne ou film en direct depuis l'application sur iPhone/iPad vers votre téléviseur ou Apple TV via le protocole Apple AirPlay 2.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>La télécommande Siri Remote permet-elle de zapper vite ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Oui, la surface tactile de la télécommande Siri Remote est entièrement prise en charge dans Smarters Player Lite pour naviguer instantanément dans les catégories, le guide EPG et les flux 4K.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
