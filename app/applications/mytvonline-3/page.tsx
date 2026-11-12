import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Tv, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  ChevronRight, 
  Star, 
  Flame, 
  ShieldCheck, 
  HelpCircle,
  Clock,
  Settings,
  Layers,
  Radio,
  Box,
  Sliders,
  RefreshCw,
  Download,
  KeyRound,
  AlertCircle,
  Lock,
  Server,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';

const PAGE_CANONICAL = `${SITE_CONFIG.domain}/applications/mytvonline-3`;

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "MyTVOnline 3 (MOL3) : Téléchargement, Code Activation & Configuration Formuler 2026",
    description: "Guide expert MyTVOnline 3 (MOL3) pour boîtiers Formuler (Z11 Pro Max, Z10). Téléchargement des mises à jour, activation adresse MAC vs Xtream, configuration pas-à-pas et abonnement 4K sans freeze.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'mytvonline 3',
      'mol3 iptv',
      'telecharger mytvonline 3',
      'code activation mytvonline 3',
      'configuration mytvonline 3',
      'formuler z11 iptv',
      'mytvonline 3 stalker',
      'mytvonline 3 xtream codes',
      'formuler mytvonline 3',
      'abonnement iptv formuler'
    ],
  });
}

export default function MyTVOnline3Page() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${PAGE_CANONICAL}/#software`,
        name: 'MyTVOnline 3 (MOL3)',
        operatingSystem: 'Formuler OS, Android TV (Formuler Devices)',
        applicationCategory: 'MultimediaApplication',
        softwareVersion: '3.4.0',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '2280',
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
        name: 'Comment Configurer MyTVOnline 3 sur Boîtier Formuler',
        description: 'Tutoriel étape par étape pour activer et synchroniser votre abonnement IPTV 4K sur MyTVOnline 3 via Portail Stalker (MAC) ou API Xtream Codes.',
        totalTime: 'PT3M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Ouvrir MyTVOnline 3 et créer un portail',
            text: 'Lancez l\'application MyTVOnline 3 depuis l\'écran d\'accueil de votre boîtier Formuler et cliquez sur \'Ajouter un Portail\' (Content Manager).',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Choisir la méthode de connexion',
            text: 'Sélectionnez \'Portail Stalker\' pour lier votre adresse MAC-ID, ou \'API Xtream\' pour renseigner vos identifiants utilisateur et mot de passe.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Renseigner les informations de serveur',
            text: 'Entrez l\'URL de notre serveur IPTV 10 Gbps et vos identifiants fournis par e-mail et WhatsApp dès la confirmation de votre commande.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Synchroniser et profiter des flux 4K',
            text: 'Cliquez sur Connecter. MyTVOnline 3 télécharge automatiquement la liste des chaînes, l\'EPG 7 jours et le catalogue VOD 4K.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Peut-on télécharger MyTVOnline 3 sur Firestick ou Nvidia Shield ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non. MyTVOnline 3 (MOL3) est une application propriétaire verrouillée au niveau matériel pour les processeurs des boîtiers Formuler (séries Z11, Z10, Z Mini). Pour une Fire TV Stick ou une Nvidia Shield, nous recommandons TiviMate ou IPTV Smarters Pro.',
            },
          },
          {
            '@type': 'Question',
            name: 'Où trouver le code d\'activation pour MyTVOnline 3 ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'L\'application MyTVOnline 3 est gratuite et déjà intégrée à votre boîtier Formuler : il n\'y a pas de licence logicielle payante. L\'activation correspond à la liaison de votre adresse MAC-ID (affichée sous le boîtier) sur nos serveurs IPTV ou à la saisie de vos identifiants Xtream Codes fournis lors de votre souscription.',
            },
          },
          {
            '@type': 'Question',
            name: 'Vaut-il mieux configurer MOL3 par adresse MAC (Stalker) ou par Xtream Codes ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'La connexion par API Xtream Codes est la plus recommandée : elle s\'active instantanément sans délai d\'enregistrement d\'adresse MAC et offre la synchronisation dynamique complète de l\'EPG et de la VOD.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment mettre à jour MyTVOnline 3 vers la dernière version ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Depuis l\'écran d\'accueil de votre Formuler, ouvrez l\'application \'Software Update\' ou le \'Formuler Market\'. Les mises à jour du firmware et de MOL3 sont déployées gratuitement par le constructeur.',
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
            name: 'MyTVOnline 3 (MOL3)',
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
            <span className="text-slate-200 font-medium" aria-current="page">MyTVOnline 3 (MOL3)</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold">
              <Box className="w-4 h-4 text-cyan-400" />
              <span>Exclusivité Décodeurs Formuler &middot; Guide Expert 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              MyTVOnline 3 : Téléchargement, Code Activation &amp; Configuration Formuler
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Considérée comme la référence absolue du streaming télévisuel sur récepteur Android, l'application <strong>MyTVOnline 3 (MOL3)</strong> équipe en exclusivité les boîtiers <strong>Formuler Z11 Pro Max, Z11 Pro et Z Mini</strong>. Découvrez comment mettre à jour l'application, activer votre <strong>code serveur ou adresse MAC</strong> et profiter d'un <strong>abonnement 4K sans freeze</strong>.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/abonnement-iptv-12-mois"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-lg shadow-cyan-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Activer mon Abonnement Formuler 4K</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="#tutoriel-mol3"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                <span>Tutoriel de Configuration</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">&lt; 0.5s</span>
                <span className="block text-xs text-slate-400">Zapping instantané</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">Mode PiP</span>
                <span className="block text-xs text-slate-400">Double écran direct</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">Groupes</span>
                <span className="block text-xs text-slate-400">Playlists universelles</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center text-white font-black text-lg">
                    <Tv className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-none">Fiche MyTVOnline 3</h2>
                    <span className="text-xs text-slate-400">Version 3.4.0 Officielle Formuler</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  Certifié 4K HDR10+
                </span>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Matériel Compatible</dt>
                  <dd className="font-semibold text-slate-200">Formuler Z11 Pro Max, Z10, Z Mini</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Canal de Mise à Jour</dt>
                  <dd className="font-semibold text-cyan-400">Formuler Market (Natif)</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Site Officiel</dt>
                  <dd className="font-mono text-xs text-slate-200">formuler.tv</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Protocoles Pris en Charge</dt>
                  <dd className="font-semibold text-cyan-400 font-mono">Portail Stalker &amp; Xtream API</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Résolution Maximale</dt>
                  <dd className="font-semibold text-slate-200">4K UHD 60 FPS HDR10+</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Enregistrement &amp; Replay</dt>
                  <dd className="font-semibold text-emerald-400">PVR USB &amp; TimeShift 72h</dd>
                </div>
                <div className="flex justify-between py-1.5">
                  <dt className="text-slate-400">Gestion des Listes</dt>
                  <dd className="font-semibold text-slate-200">Groupes Universels Multi-Fournisseurs</dd>
                </div>
              </dl>

              <div className="pt-2">
                <Link
                  href="/tarifs"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
                >
                  <span>Activer mon Accès Serveur Formuler</span>
                  <Zap className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Section 0: Présentation Technique MOL3 */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Pourquoi MyTVOnline 3 Révolutionne l'Expérience Télévisuelle ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Développée sur mesure par l'équipe d'ingénieurs de Formuler, l'application <strong>MyTVOnline 3 (MOL3)</strong> n'est pas une simple application Android générique : elle exploite directement l'accélération matérielle des processeurs Realtek et la technologie <a href="https://fr.wikipedia.org/wiki/Over-the-top_service" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">OTT (Over-The-Top)</a>.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Le résultat est saisissant : une interface utilisateur digne des meilleurs décodeurs d'opérateurs, un guide TV <a href="https://fr.wikipedia.org/wiki/Guide_des_programmes" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">EPG</a> fluide sur plusieurs jours, et une prise en charge native du codec <a href="https://fr.wikipedia.org/wiki/H.265/HEVC" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">H.265 / HEVC</a> pour diffuser vos chaînes en direct et films VOD en 4K 60 FPS sans coupure.
            </p>

            <figure className="my-6 space-y-2">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-2xl">
                <Image
                  src="/images/The_Function_and_Operation_of_an_IPTV_Set-Top_Box1680x660-576x420-c-default.jpg.webp"
                  alt="Interface et fonctionnalités MyTVOnline 3 sur décodeur Formuler Z11 Pro Max"
                  width={1200}
                  height={675}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="text-center text-xs text-slate-400">
                L'interface MyTVOnline 3 sur récepteur Formuler Z11 Pro Max connecté à nos serveurs 10 Gbps.
              </figcaption>
            </figure>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <Layers className="w-5 h-5 text-cyan-400" />
              <h3 className="text-sm font-bold text-white">Groupes Universels</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rassemblez les chaînes de plusieurs abonnements dans une seule et même liste de favoris harmonisée.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <Tv className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm font-bold text-white">Mode Picture-in-Picture (PiP)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Suivez deux matchs en direct simultanément grâce au double décodage matériel 4K.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <Clock className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">TimeShift &amp; Enregistrement</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mettez le direct en pause, revenez jusqu'à 72h en arrière et enregistrez sur clé USB.
              </p>
            </div>
          </div>
        </section>

        {/* PILIER 1: TÉLÉCHARGEMENT ET MISES À JOUR */}
        <section id="telechargement" className="scroll-mt-24 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
              <Download className="w-3.5 h-3.5" />
              <span>Pilier 1 : Téléchargement &amp; Mises à Jour</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Télécharger MyTVOnline 3 : Procédure Officielle et Mises à Jour Formuler
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Une particularité majeure distingue MyTVOnline 3 des autres lecteurs multimédias : <strong>l'application n'est pas distribuée sur le Google Play Store public</strong>, mais pré-installée en usine sur le système d'exploitation Formuler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Mise à jour Formuler Market */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Mises à Jour Logicielles Gratuites</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sur votre Formuler Z11 ou Z10, ouvrez l'outil <strong>Software Update</strong> ou le <strong>Formuler Market</strong> pour installer la dernière version officielle de MOL3 en un clic.
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Version actuelle :</span>
                    <span className="text-cyan-400 font-mono font-semibold">MOL3 v3.4.0</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Site Constructeur :</span>
                    <a href="https://www.formuler.tv" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      formuler.tv
                    </a>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Coût :</span>
                    <span className="text-emerald-400 font-semibold">Inclus avec le boîtier</span>
                  </div>
                </div>
              </div>
              <span className="text-[11px] text-slate-500">Mises à jour OTA automatiques</span>
            </div>

            {/* Avertissement Fake APK */}
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Attention aux Faux APK pour Firestick &amp; Shield</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Il est impossible d'installer MyTVOnline 3 sur Fire TV Stick, Apple TV ou Nvidia Shield. Les prétendus « MOL3 APK » disponibles sur Internet sont des pièges contenant des malwares.
                </p>
              </div>
              <div className="space-y-1.5 text-xs">
                <Link href="/applications/tivimate" className="block text-emerald-400 hover:underline">
                  &rarr; Pour Firestick / Shield, utilisez TiviMate
                </Link>
                <Link href="/applications/iptv-smarters-pro" className="block text-blue-400 hover:underline">
                  &rarr; Pour Smart TV, utilisez Smarters Pro
                </Link>
              </div>
            </div>

            {/* Modèles Pris en Charge */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Box className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Modèles Formuler Compatibles</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  L'application MyTVOnline 3 est opérationnelle sur la gamme de récepteurs Formuler récents :
                </p>
                <ul className="text-xs text-slate-400 space-y-1 pl-1">
                  <li>&bull; Formuler Z11 Pro Max (4K, 4 Go RAM, Gigabit)</li>
                  <li>&bull; Formuler Z11 Pro (4K, 2 Go RAM)</li>
                  <li>&bull; Formuler Z Mini (format dongle HDMI compact)</li>
                  <li>&bull; Formuler Z10 Pro &amp; Z10 SE (compatibilité MOL2/MOL3)</li>
                </ul>
              </div>
              <Link
                href="/guide-installation"
                className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300"
              >
                <span>Voir les guides Formuler</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

          </div>
        </section>

        {/* PILIER 2: INSTALLATION ET CONFIGURATION */}
        <section id="tutoriel-mol3" className="scroll-mt-24 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
              <Settings className="w-3.5 h-3.5" />
              <span>Pilier 2 : Installation &amp; Configuration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Tutoriel de Configuration : Connecter votre Abonnement sur MyTVOnline 3
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              MyTVOnline 3 prend en charge aussi bien le protocole Portail Stalker (par adresse MAC) que l'API Xtream Codes. Voici la marche à suivre pour chaque méthode :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Méthode 1: Xtream Codes (Recommandé) */}
            <div className="p-8 rounded-2xl bg-slate-900 border-2 border-cyan-500/40 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-cyan-600 text-white font-bold text-xs">
                  Méthode 1 : API Xtream Codes (Recommandée)
                </span>
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              </div>

              <h3 className="text-lg font-bold text-white">Connexion Immédiate Sans Attente</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Cette méthode est la plus simple et rapide : elle ne requiert aucun enregistrement préalable d'<a href="https://fr.wikipedia.org/wiki/Adresse_MAC" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">adresse MAC</a> et s'active en 60 secondes.
              </p>

              <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                <li className="leading-relaxed">
                  Dans MyTVOnline 3, ouvrez <strong>Content Manager</strong> &gt; <strong>Add Xtream API</strong>.
                </li>
                <li className="leading-relaxed">
                  Renseignez un nom de portail (ex : <em>Formuler 4K VIP</em>).
                </li>
                <li className="leading-relaxed">
                  Saisissez l'<strong>URL du serveur</strong> <a href="https://fr.wikipedia.org/wiki/Domain_Name_System" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">DNS</a> (ex : <code>http://serveur-dns.pro:8080</code>).
                </li>
                <li className="leading-relaxed">
                  Entrez votre <strong>Identifiant</strong> et votre <strong>Mot de passe</strong>.
                </li>
                <li className="leading-relaxed">
                  Cliquez sur <strong>Connecter</strong> pour finaliser la synchronisation de vos chaînes et de l'EPG.
                </li>
              </ol>
            </div>

            {/* Méthode 2: Portail Stalker */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-bold text-xs">
                  Méthode 2 : Portail Stalker (MAC-ID)
                </span>
                <Tv className="w-5 h-5 text-slate-400" />
              </div>

              <h3 className="text-lg font-bold text-white">Connexion par Adresse MAC Matérielle</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Idéal si vous préférez l'authentification par l'adresse physique unique de votre boîtier Formuler.
              </p>

              <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                <li className="leading-relaxed">
                  Accédez à <strong>Content Manager</strong> &gt; <strong>Portals</strong> &gt; <strong>Add Portal</strong>.
                </li>
                <li className="leading-relaxed">
                  Relevez votre <strong>MAC-ID</strong> (format <code>00:1E:B8:XX:XX:XX</code>) et transmettez-la à notre support lors de votre commande.
                </li>
                <li className="leading-relaxed">
                  Renseignez l'<strong>URL de portail</strong> fournie (ex : <code>http://mag.serveur-dns.com:8080/c/</code>).
                </li>
                <li className="leading-relaxed">
                  Validez sur <strong>Connecter</strong> une fois la confirmation d'activation reçue.
                </li>
              </ol>
            </div>

          </div>
        </section>

        {/* PILIER 3: CODE D'ACTIVATION MYTVONLINE 3 */}
        <section id="code-activation" className="scroll-mt-24 space-y-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
              <KeyRound className="w-3.5 h-3.5" />
              <span>Pilier 3 : Code d'Activation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Code d'Activation MyTVOnline 3 : Ce qu'il Faut Savoir pour Éviter les Blocages
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              De nombreux propriétaires de décodeurs Formuler cherchent sur le web un « <strong>code activation MyTVOnline 3 gratuit</strong> ». Voici la vérité technique sur le fonctionnement des licences et de l'accès aux flux :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            
            {/* Explication Licence Gratuite vs Serveur */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-cyan-400" />
                <span>MyTVOnline 3 ne Nécessite Aucun Achat de Licence</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Contrairement à des applications tierces payantes comme TiviMate Premium ou IBO Player, <strong>l'application MyTVOnline 3 est gratuite à vie</strong> pour tout possesseur d'un décodeur Formuler authentique.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ce que l'application réclame lors du premier démarrage n'est pas un code d'activation logiciel, mais <strong>l'autorisation de vos flux audiovisuels</strong>. Cette étape s'effectue :
              </p>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-2 pl-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Soit par vos identifiants privés Xtream Codes (Nom d'utilisateur et Mot de passe).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Soit par l'enregistrement de votre adresse MAC Formuler sur notre serveur CDN.</span>
                </li>
              </ul>
            </div>

            {/* Dangers des faux portails gratuits */}
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-amber-400 shrink-0" />
                <h3 className="text-base font-bold text-white">Pourquoi Bannir les Portails et Codes Gratuits Partagés</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Les URL de portails Stalker partagées sur les réseaux sociaux et forums provoquent de multiples désagréments :
              </p>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Message « Your account is expired » :</strong> Ces liens sont désactivés en quelques heures par les hébergeurs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Saturation et saccades :</strong> Partagés entre des milliers d'utilisateurs, les flux s'interrompent toutes les 15 secondes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Risque de blacklisting matériel :</strong> L'envoi répété de requêtes vers des serveurs malveillants peut corrompre la configuration réseau du boîtier.</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/tarifs"
                  className="inline-flex items-center text-xs font-bold text-cyan-400 hover:text-cyan-300"
                >
                  <span>Souscrire un accès serveur privé 10 Gbps garanti &rarr;</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Tableau Comparatif */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Tableau Comparatif : MyTVOnline 3 face aux Autres Lecteurs IPTV
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Découvrez pourquoi la combinaison d'un boîtier Formuler et de MyTVOnline 3 offre le plus haut niveau de confort du marché.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300 border-collapse">
              <thead className="bg-slate-950 text-slate-200 border-b border-slate-800 text-[11px] sm:text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5 sm:p-4">Critère</th>
                  <th className="p-3.5 sm:p-4 text-cyan-400">MyTVOnline 3 (Formuler)</th>
                  <th className="p-3.5 sm:p-4">TiviMate Premium</th>
                  <th className="p-3.5 sm:p-4">IPTV Smarters Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3.5 sm:p-4 font-bold text-white">Compatibilité Matérielle</td>
                  <td className="p-3.5 sm:p-4 text-cyan-400 font-semibold">Boîtiers Formuler Dédiés</td>
                  <td className="p-3.5 sm:p-4">Android TV &amp; Fire Stick</td>
                  <td className="p-3.5 sm:p-4">Universel (TV, PC, Mobile)</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3.5 sm:p-4 font-bold text-white">Groupes Universels Multi-Playlists</td>
                  <td className="p-3.5 sm:p-4 text-emerald-400 font-bold">Oui (Unifié en natif)</td>
                  <td className="p-3.5 sm:p-4 text-slate-400">Limité</td>
                  <td className="p-3.5 sm:p-4 text-red-400">Non</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3.5 sm:p-4 font-bold text-white">Double Écran PiP Matériel</td>
                  <td className="p-3.5 sm:p-4 text-emerald-400 font-bold">Oui (Fluide 4K 60 FPS)</td>
                  <td className="p-3.5 sm:p-4 text-emerald-400">Oui (Split screen)</td>
                  <td className="p-3.5 sm:p-4 text-slate-400">Basique</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3.5 sm:p-4 font-bold text-white">Vitesse de Zapping</td>
                  <td className="p-3.5 sm:p-4 text-emerald-400 font-bold">&lt; 0.5 seconde</td>
                  <td className="p-3.5 sm:p-4 text-slate-200">~ 1.0 seconde</td>
                  <td className="p-3.5 sm:p-4 text-slate-200">~ 1.5 seconde</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3.5 sm:p-4 font-bold text-white">Prix de l'Application</td>
                  <td className="p-3.5 sm:p-4 text-emerald-400 font-bold">Gratuite (Fournie avec le boîtier)</td>
                  <td className="p-3.5 sm:p-4 text-amber-400">35 € à vie ou 9 €/an</td>
                  <td className="p-3.5 sm:p-4 text-emerald-400">Gratuite</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PILIER 4: ABONNEMENT FORMULER MYTVONLINE 3 */}
        <section id="abonnement" className="scroll-mt-24 rounded-3xl bg-white dark:bg-gradient-to-r dark:from-cyan-950 dark:via-slate-900 dark:to-blue-950 border border-cyan-200 dark:border-cyan-500/30 p-8 sm:p-12 text-center space-y-6 shadow-xl dark:shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold">
              <Server className="w-3.5 h-3.5" />
              <span>Pilier 4 : Abonnement IPTV Spécial Formuler</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Libérez Toute la Puissance 4K de votre Boîtier Formuler
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Associez MyTVOnline 3 à notre infrastructure CDN européenne 10 Gbps. Plus de 25 000 chaînes directes sans coupure et 90 000 VOD avec EPG dynamique et Replay 72h.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/abonnement-iptv-12-mois"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-cyan-600/30 transition-all hover:scale-105"
            >
              <span>Découvrir l'Abonnement VIP 12 Mois (Formuler Inclus)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section FAQ MOL3 */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Foire Aux Questions sur MyTVOnline 3
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Réponses concrètes aux interrogations courantes sur l'installation, les codes et l'usage de MyTVOnline 3.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Puis-je installer MyTVOnline 3 sur Firestick ou Shield ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Non. MyTVOnline 3 est verrouillé matériellement pour fonctionner exclusivement sur les processeurs des décodeurs Formuler. Sur Firestick ou Nvidia Shield, nous recommandons le guide <Link href="/applications/tivimate" className="text-cyan-400 hover:underline">TiviMate IPTV Player</Link>.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Comment activer le mode Picture-in-Picture (PiP) ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Pendant la lecture d'une chaîne, appuyez longuement sur la touche OK ou Info de votre télécommande Formuler et choisissez l'icône PiP pour incruster une seconde chaîne en direct.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Les mises à jour EPG sont-elles automatiques ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Oui. À chaque ouverture de MOL3 ou à intervalle régulier en arrière-plan, la grille électronique des programmes sur 7 jours s'actualise automatiquement sans aucune manipulation requise.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Comment enregistrer une émission sur clé USB avec MyTVOnline 3 ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Branchez une clé USB ou un disque dur externe formaté en exFAT ou NTFS. Dans le guide EPG, sélectionnez le programme souhaité et appuyez sur la touche rouge REC de la télécommande.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
