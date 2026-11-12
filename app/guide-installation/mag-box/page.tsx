import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Box, 
  Settings, 
  KeyRound, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Zap,
  Radio,
  Layers,
  RefreshCw,
  Tv,
  Wifi,
  Sliders
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';

const PAGE_CANONICAL = `${SITE_CONFIG.domain}/guide-installation/mag-box`;

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Installer IPTV sur Boîtier MAG et Formuler : Tutoriel Configuration 2026",
    description: "Guide complet 2026 pour configurer votre abonnement IPTV sur boîtier MAG (250, 254, 322, 520, 524, 540) et Formuler (MyTVOnline). Activation par adresse MAC et portail Stalker.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'iptv boitier mag',
      'configurer iptv mag 254',
      'iptv mag 322 portail',
      'mag 520 iptv configuration',
      'mag 540 iptv stalker',
      'adresse mac iptv mag',
      'formuler z11 mytvonline 3 iptv',
      'portail stalker iptv',
      'tutoriel iptv boitier mag'
    ],
  });
}

export default function MagBoxTutorialPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: 'Comment Configurer un Abonnement IPTV sur Boîtier MAG et Formuler',
        description: 'Guide technique étape par étape pour configurer votre portail IPTV Stalker sur récepteur MAG Infomir ou Formuler MyTVOnline via votre adresse MAC.',
        totalTime: 'PT5M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Localiser l\'adresse MAC de votre boîtier MAG',
            text: 'Relevez l\'adresse MAC située sur l\'étiquette sous votre boîtier ou dans le menu Paramètres > Informations Système (format 00:1A:79:XX:XX:XX).',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Transmettre votre adresse MAC pour activation',
            text: 'Indiquez cette adresse MAC lors de votre commande d\'abonnement pour qu\'elle soit autorisée sur nos serveurs de streaming haute disponibilité.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Accéder aux paramètres des serveurs et portails',
            text: 'Allumez votre MAG sans câble réseau ou interrompez le chargement, puis allez dans System Settings > Servers > Portals.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Renseigner l\'URL du portail Stalker',
            text: 'Dans Portal 1 name entrez le nom de votre choix (ex: IPTV France), puis dans Portal 1 URL saisissez l\'adresse exacte envoyée par notre support.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Redémarrer le boîtier (Reboot Device)',
            text: 'Sauvegardez avec la touche OK de la télécommande et sélectionnez Reboot Device. La barre jaune se charge et vos chaînes 4K apparaissent.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Pourquoi mon boîtier MAG affiche-t-il le message "Your STB is blocked" ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ce message signifie que votre adresse MAC n\'est pas reconnue ou que votre période d\'abonnement est expirée. Contactez notre support WhatsApp avec votre adresse MAC pour vérifier son activation sur nos serveurs.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quelle est la différence entre un boîtier MAG et un boîtier Formuler ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Les boîtiers MAG (Infomir) fonctionnent sous Linux avec le middleware Stalker natif, tandis que les récepteurs Formuler fonctionnent sous Android avec l\'application MyTVOnline, permettant aussi bien l\'activation par adresse MAC que par API Xtream Codes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Faut-il brancher mon boîtier MAG en Wi-Fi ou en câble Ethernet ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nous recommandons fortement une connexion par câble Ethernet RJ45 directe à votre box internet afin d\'éviter toute fluctuation de débit et garantir une lecture 4K Ultra HD à 60 FPS sans buffering.',
            },
          },
          {
            '@type': 'Question',
            name: 'Les chaînes et la VOD sont-elles mises à jour automatiquement sur MAG ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui. À chaque redémarrage de votre boîtier ou rechargement du portail (Portal Reload), la liste des chaînes, le guide des programmes (EPG) et les nouveaux films/séries VOD s\'actualisent automatiquement.',
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
            name: 'Guides d\'Installation',
            item: `${SITE_CONFIG.domain}/guide-installation`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Boîtiers MAG & Formuler',
            item: PAGE_CANONICAL,
          },
        ],
      },
    ],
  };

  return (
    <>
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
            <span className="text-slate-200 font-medium" aria-current="page">Boîtiers MAG &amp; Formuler</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section (2 Columns: Left Hero Pitch, Right Specs Card) */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Pitch & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-300 text-xs font-semibold">
              <Box className="w-4 h-4 text-purple-400" />
              <span>Guide Décodeurs Stalker &amp; MyTVOnline 2026 &middot; Activation MAC Directe</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Comment <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">Installer IPTV sur Boîtier MAG &amp; Formuler</span> en 2026
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Considérés par les puristes comme les décodeurs de télévision les plus réactifs au monde, les boîtiers <strong>MAG (Infomir)</strong> et <strong>Formuler</strong> offrent une expérience zapping instantanée et un rendu <strong>4K UHD à 60 FPS</strong> sans coupure. Découvrez comment lier votre <strong>adresse MAC</strong> et configurer l&apos;URL de notre portail serveur Stalker haute vitesse en moins de 4 minutes.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/abonnement-iptv-12-mois"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Activer mon Boîtier MAG</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="#tutoriel-mag"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                <span>Étapes de Configuration Pas-à-Pas</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">4K 60 FPS</span>
                <span className="block text-xs text-slate-400">Ultra Haute Définition</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">&lt; 4 min</span>
                <span className="block text-xs text-slate-400">Configuration Simple</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">Adresse MAC</span>
                <span className="block text-xs text-slate-400">Liaison Sécurisée</span>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Specification Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white font-black text-lg">
                    <Box className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-none">Fiche Décodeurs Stalker</h2>
                    <span className="text-xs text-slate-400">Infomir MAG &amp; Formuler Z Series</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  Testé 100%
                </span>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Modèles MAG Recommandés</dt>
                  <dd className="font-semibold text-slate-200">254, 322, 420, 520, 524, 540</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Modèles Formuler</dt>
                  <dd className="font-semibold text-purple-400 font-mono">Z8, Z10, Z11 Pro Max</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Protocole Recommandé</dt>
                  <dd className="font-semibold text-emerald-400">Portail Stalker / MAC</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Format d'Adresse MAC</dt>
                  <dd className="font-semibold text-slate-200 font-mono">00:1A:79:XX:XX:XX</dd>
                </div>
                <div className="flex justify-between py-1.5">
                  <dt className="text-slate-400">Fonctions Natives</dt>
                  <dd className="font-semibold text-slate-200">TimeShift 72h &amp; EPG Auto</dd>
                </div>
              </dl>

              <div className="pt-2">
                <Link
                  href="/tarifs"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
                >
                  <span>Activer mon Accès Serveur Stalker</span>
                  <Zap className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Content Article Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Section 1: Pourquoi le Boîtier MAG est la référence des passionnés TV */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Pourquoi les Boîtiers MAG et Formuler Restent la Référence Télévisuelle
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Contrairement aux Smart TV ou clés HDMI grand public soumises aux lenteurs de leur système d&apos;exploitation généraliste, un <strong>boîtier MAG</strong> ou <strong>Formuler</strong> est un récepteur 100% dédié au décodage des flux IPTV en direct.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Grâce au <strong>middleware Stalker natif</strong> sous Linux ou à l&apos;application <strong>MyTVOnline 3</strong> sous Android, vous profitez d&apos;un zapping instantané inférieur à une seconde, d&apos;une gestion complète du contrôle du direct (TimeShift) et d&apos;une grille EPG 7 jours synchronisée en continu sans aucun ralentissement.
            </p>

            {/* Visual Showcase */}
            <figure className="my-6 space-y-2">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-2xl">
                <Image
                  src="/images/The_Function_and_Operation_of_an_IPTV_Set-Top_Box1680x660-576x420-c-default.jpg.webp"
                  alt="Décodeur et boîtier IPTV MAG avec interface Stalker et télécommande"
                  width={1200}
                  height={675}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="text-center text-xs text-slate-400">
                Installation et fonctionnement d&apos;un décodeur IPTV dédié MAG / Formuler pour le streaming 4K Ultra HD.
              </figcaption>
            </figure>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <Zap className="w-6 h-6 text-purple-400" />
              <h3 className="text-base font-bold text-white">Zapping Ultra-Rapide</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Changement de chaîne instantané en moins d&apos;une seconde grâce au décodage matériel natif du processeur Infomir.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <Radio className="w-6 h-6 text-indigo-400" />
              <h3 className="text-base font-bold text-white">Stabilité Stalker Dédiée</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Liaison directe au middleware serveur sans passerelle applicative tierce pour une résilience maximale.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Authentification MAC Sécurisée</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Aucun mot de passe à ressaisir : votre boîtier est reconnu automatiquement et de manière chiffrée par nos serveurs.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Tutoriel Pas-à-Pas MAG */}
        <section id="tutoriel-mag" className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Tutoriel Pas-à-Pas : Configurer le Portail IPTV sur Boîtier MAG
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Suivez ces 4 étapes rigoureuses pour activer votre boîtier Infomir (MAG 250, 254, 322, 420, 520, 524, 540) en toute simplicité :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-purple-600 text-white font-black text-sm flex items-center justify-center">
                  1
                </span>
                <h3 className="text-lg font-bold text-white">Relever l&apos;adresse MAC de votre décodeur</h3>
              </div>
              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11 space-y-2">
                <p>
                  Regardez l&apos;étiquette située sous votre appareil MAG. Repérez la ligne <strong>MAC: 00:1A:79:XX:XX:XX</strong>.
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] text-purple-300">
                  Format standard : 00:1A:79:B4:C2:10
                </div>
                <p className="text-xs text-slate-400">
                  Vous pouvez également la trouver dans <em>System Settings &gt; Device Info</em>. Indiquez cette adresse lors de votre commande ou à notre support WhatsApp.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-purple-600 text-white font-black text-sm flex items-center justify-center">
                  2
                </span>
                <h3 className="text-lg font-bold text-white">Accéder aux Paramètres Système</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                Allumez votre MAG. Si le boîtier tente de charger un ancien portail, débranchez le câble Ethernet pour stopper le chargement, puis appuyez sur la touche <strong>Setup</strong> ou <strong>Menu</strong> de la télécommande pour entrer dans <strong>System Settings</strong>.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-purple-600 text-white font-black text-sm flex items-center justify-center">
                  3
                </span>
                <h3 className="text-lg font-bold text-white">Renseigner le Portail Stalker</h3>
              </div>
              <div className="text-xs text-slate-300 leading-relaxed pl-11 space-y-2">
                <p>Allez dans <strong>Servers &gt; Portals</strong> et renseignez les deux champs :</p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
                  <div>Portal 1 name : IPTV France VIP</div>
                  <div className="text-purple-400">Portal 1 URL : http://mag.serveur-dns.com:8080/c/</div>
                </div>
                <p className="text-xs text-slate-400">
                  (Veillez à bien inclure la barre oblique finale <code>/c/</code>).
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-purple-600 text-white font-black text-sm flex items-center justify-center">
                  4
                </span>
                <h3 className="text-lg font-bold text-white">Sauvegarder &amp; Redémarrer (Reboot)</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                Appuyez sur la touche <strong>OK</strong> pour enregistrer. Rebranchez votre câble Ethernet si vous l&apos;aviez retiré, revenez au menu principal et sélectionnez <strong>Reboot Device</strong>. La barre jaune se charge et vos chaînes 4K apparaissent directement.
              </p>
            </div>

          </div>
        </section>

        {/* Section 3: Configuration Formuler MyTVOnline */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Écosystème Formuler Z Series</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Configuration Avancée sur Formuler (MyTVOnline 2 &amp; 3)
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Les décodeurs Formuler (Z8 Pro, Z10 Pro Max, Z11 Pro Max) embarquent l&apos;application exclusive <strong>MyTVOnline</strong>. Ils offrent la flexibilité unique de choisir entre deux méthodes d&apos;authentification :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>Méthode A : Portail Stalker (MAC-ID)</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dans MyTVOnline, cliquez sur <em>Ajouter un Portail</em>. Notez votre <strong>ID MAC</strong> affiché sur l&apos;écran (commençant généralement par <code>00:1E:B8</code>), communiquez-le à notre support WhatsApp et entrez l&apos;URL de notre portail.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>Méthode B : API Xtream Codes</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dans MyTVOnline, choisissez <em>Connexion Xtream</em>. Saisissez votre nom d&apos;utilisateur, mot de passe et l&apos;adresse du serveur. Cette option s&apos;active instantanément sans enregistrement préalable d&apos;adresse MAC.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Astuce Anti-Coupure & Optimisation Pro */}
        <section className="rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 p-6 sm:p-8 space-y-4 shadow-sm dark:shadow-none">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Conseils d&apos;Optimisation Pro pour Boîtiers MAG &amp; Stalker
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-amber-200 leading-relaxed font-medium">
            Pour maintenir une fluidité 4K à 60 FPS sans buffering lors des matchs à forte affluence, appliquez ces recommandations :
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 dark:text-amber-100/90 pt-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <span><strong className="text-slate-900 dark:text-white font-semibold">Branchez impérativement en Ethernet :</strong> Les boîtiers MAG exploitent toute leur puissance sur un câble RJ45 direct, éliminant les interférences Wi-Fi.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <span><strong className="text-slate-900 dark:text-white font-semibold">Réglez la taille du Buffer :</strong> Dans <em>System Settings &gt; Video &gt; Buffer</em>, réglez la valeur sur <strong>2 000 ms ou 4 000 ms</strong> pour une absorption parfaite des micro-variations réseau.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <span><strong className="text-slate-900 dark:text-white font-semibold">Résolution d&apos;écran HDMI :</strong> Réglez la sortie vidéo sur <em>Auto</em> ou <em>1080p-60 / 2160p-60</em> pour éviter les scintillements à l&apos;écran.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <span><strong className="text-slate-900 dark:text-white font-semibold">Rechargement EPG rapide :</strong> Si une chaîne n&apos;affiche pas sa grille horaire, appuyez sur la touche bleue (F4) de votre télécommande pour actualiser le portail.</span>
            </li>
          </ul>
        </section>

        {/* Section 5: Banner CTA pour l'abonnement */}
        <section className="rounded-3xl bg-white dark:bg-gradient-to-r dark:from-purple-950 dark:via-slate-900 dark:to-indigo-950 border border-purple-200 dark:border-purple-500/30 p-8 sm:p-12 text-center space-y-6 shadow-xl dark:shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Activez la 4K Ultra HD sur votre Boîtier MAG ou Formuler
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Débloquez +25 000 chaînes directes et +90 000 VOD avec serveurs Stalker anti-freeze 60 FPS et support WhatsApp réactif 7j/7.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/abonnement-iptv-12-mois"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-purple-600/30 transition-all hover:scale-105"
            >
              <span>Découvrir l&apos;Abonnement 12 Mois VIP (Stalker Inclus)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section 6: FAQ MAG Box en 2 colonnes */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Foire Aux Questions sur Boîtiers MAG &amp; Stalker
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Toutes les réponses pour bien gérer votre décodeur et profiter d&apos;une diffusion optimale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>Pourquoi mon MAG indique "Your STB is blocked" ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Ce message survient lorsque l&apos;adresse MAC de votre appareil n&apos;a pas encore été renseignée sur notre portail ou que l&apos;abonnement est expiré. Transmettez votre MAC à notre équipe WhatsApp pour une réactivation immédiate en moins de 10 minutes.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>Puis-je changer d&apos;appareil MAG pendant mon abonnement ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Oui, sans aucun problème. Si vous remplacez votre décodeur (par exemple de MAG 254 à MAG 540 ou Formuler Z11), fournissez simplement la nouvelle adresse MAC à notre support pour transférer vos accès sans interruption.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>Que faire en cas d&apos;erreur "Page Loading Error" ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Vérifiez deux points cruciaux : l&apos;orthographe exacte de l&apos;URL du portail (notamment le port et le slash final <code>/c/</code>) et assurez-vous que votre box internet ne bloque pas le résolveur DNS par défaut (passez vos DNS en 1.1.1.1 si nécessaire).
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>Les mises à jour des chaînes et VOD sont-elles automatiques ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Absolument. Grâce à l&apos;architecture dynamique Stalker, à chaque démarrage ou actualisation du portail, l&apos;ensemble des nouvelles chaînes sportives, les programmes EPG et les derniers ajouts VOD 4K sont synchronisés automatiquement.
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
