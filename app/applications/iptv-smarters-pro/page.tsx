import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Tv, 
  Smartphone, 
  Monitor, 
  Download, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Zap, 
  HelpCircle, 
  ArrowRight,
  Flame,
  Radio,
  SlidersHorizontal,
  ChevronRight,
  KeyRound,
  FileDown,
  ExternalLink,
  Lock,
  Server,
  Sparkles,
  Laptop
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';

const PAGE_CANONICAL = `${SITE_CONFIG.domain}/applications/iptv-smarters-pro`;

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "IPTV Smarters Pro : Téléchargement APK, Code Activation & Installation 2026",
    description: "Guide expert IPTV Smarters Pro : Téléchargement APK officiel, Downloader Fire Stick, codes d'activation & identifiants Xtream, configuration pas-à-pas et abonnement 4K sans coupure.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'iptv smarters pro',
      'telecharger iptv smarters pro',
      'iptv smarters pro apk',
      'code activation iptv smarters pro',
      'code iptv smarters pro gratuit',
      'installation iptv smarters pro',
      'configuration iptv smarters pro',
      'abonnement iptv smarters pro',
      'iptv smarters pro fire tv stick',
      'iptv smarters pro smart tv samsung'
    ],
  });
}

export default function IptvSmartersProPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${PAGE_CANONICAL}/#software`,
        name: 'IPTV Smarters Pro',
        operatingSystem: 'Android, Android TV, iOS, Windows, macOS, Fire OS, Tizen, webOS',
        applicationCategory: 'MultimediaApplication',
        softwareVersion: '4.0.2',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '1680',
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
        name: 'Comment Installer et Configurer IPTV Smarters Pro avec Xtream Codes',
        description: 'Tutoriel officiel pour installer IPTV Smarters Pro et connecter votre abonnement 4K via l\'API Xtream Codes en moins de 2 minutes.',
        totalTime: 'PT3M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Télécharger et ouvrir IPTV Smarters Pro',
            text: "Installez l'application sur votre appareil (Google Play, Firestick Downloader code ou Smart Hub) et choisissez 'Connexion via API Xtream Codes'.",
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Renseigner vos identifiants d\'activation',
            text: "Saisissez un nom arbitraire, votre identifiant (Username), votre mot de passe (Password) et l'URL du serveur reçus lors de la souscription.",
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Synchroniser le flux et le guide EPG',
            text: "Cliquez sur 'Ajouter un utilisateur'. Le lecteur télécharge en quelques secondes l'ensemble des chaînes en direct, films VOD et l'EPG.",
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: "Où trouver un code d'activation IPTV Smarters Pro valide ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "L'application IPTV Smarters Pro est un lecteur multimédia vierge de tout contenu : elle ne génère pas de codes d'activation. Pour charger des chaînes, vous devez utiliser les identifiants d'accès (Nom d'utilisateur, Mot de passe et URL de serveur DNS) délivrés avec votre abonnement IPTV actif.",
            },
          },
          {
            '@type': 'Question',
            name: "Pourquoi les codes IPTV Smarters Pro gratuits trouvés sur Internet ne fonctionnent-ils pas ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Les codes gratuits partagés sur les réseaux sociaux sont des flux publics saturés ou expirés. Bloqués dès qu'un second utilisateur s'y connecte, ils provoquent des erreurs 'Invalid Details' et des coupures systématiques. De plus, les prétendus générateurs de codes cachent souvent des logiciels malveillants.",
            },
          },
          {
            '@type': 'Question',
            name: "Quel est le lien ou code Downloader officiel pour IPTV Smarters Pro sur Fire TV ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Sur Amazon Fire TV Stick, ouvrez l'application Downloader et tapez directement l'URL officielle https://www.iptvsmarters.com/smarters.apk ou le code court 298382. L'URL directe est recommandée pour éviter tout problème d'expiration de redirection.",
            },
          },
          {
            '@type': 'Question',
            name: "Comment installer IPTV Smarters Pro sur Smart TV Samsung et LG ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Sur Samsung Smart TV (Tizen) et LG (webOS), recherchez simplement 'Smarters Pro' dans la boutique d'applications intégrée (Samsung Smart Hub ou LG Content Store) et téléchargez-la directement sans clé USB.",
            },
          },
          {
            '@type': 'Question',
            name: "Quelle est la différence entre la connexion Xtream Codes et une URL M3U ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "L'API Xtream Codes est plus fluide, gère automatiquement le guide des programmes (EPG), les catégories de séries et les affiches de films VOD. La liste M3U est un fichier statique plus lourd à mettre à jour.",
            },
          },
          {
            '@type': 'Question',
            name: "Ai-je besoin d'un VPN pour utiliser IPTV Smarters Pro en France ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Nos serveurs utilisent des connexions chiffrées sécurisées. Si votre fournisseur d'accès à Internet bride le streaming aux heures de grande écoute sportive, un VPN reste compatible et configurable dans l'application.",
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
            name: 'IPTV Smarters Pro',
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
            <span className="text-slate-200 font-medium" aria-current="page">IPTV Smarters Pro</span>
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
                  src="/images/smarters-pro-logo.webp"
                  alt="Logo officiel IPTV Smarters Pro"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold">
                <Flame className="w-4 h-4 text-orange-400" />
                <span>Lecteur Multimédia N°1 en France &middot; Version 4.0.2</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              IPTV Smarters Pro : Téléchargement APK, Code Activation &amp; Installation
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Retrouvez le guide complet pour maîtriser l'<strong>application IPTV Smarters Pro</strong> en 2026. Du <strong>téléchargement APK certifié</strong> à l'obtention de votre <strong>code d'activation serveur</strong>, apprenez à configurer vos flux 4K sans aucune coupure sur Smart TV, Fire Stick, Android et PC.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/abonnement-iptv-12-mois"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Activer mon Abonnement 4K</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="#telechargement"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                <Download className="w-4 h-4 mr-2 text-blue-400" />
                <span>Télécharger l'Application</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">4K 60 FPS</span>
                <span className="block text-xs text-slate-400">Décodage matériel</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">Xtream API</span>
                <span className="block text-xs text-slate-400">Synchronisation EPG</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">&lt; 2 min</span>
                <span className="block text-xs text-slate-400">Installation rapide</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg">
                    S
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-none">Spécifications Logicielles</h2>
                    <span className="text-xs text-slate-400">IPTV Smarters Pro V4.0.2</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  Gratuit au Téléchargement
                </span>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Protocoles Pris en Charge</dt>
                  <dd className="font-semibold text-slate-200">Xtream Codes API, M3U Plus</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">URL Directe APK</dt>
                  <dd className="font-mono font-semibold text-blue-400 text-xs">iptvsmarters.com/smarters.apk</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Code Court Downloader</dt>
                  <dd className="font-mono font-bold text-slate-200">298382</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Compatibilité Matérielle</dt>
                  <dd className="font-semibold text-slate-200">Fire TV, Samsung, LG, Android, PC</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Guide TV (EPG)</dt>
                  <dd className="font-semibold text-emerald-400">Automatique 7 Jours</dd>
                </div>
                <div className="flex justify-between py-1.5">
                  <dt className="text-slate-400">Contrôle Parental</dt>
                  <dd className="font-semibold text-slate-200">Verrouillage par code PIN</dd>
                </div>
              </dl>

              <div className="pt-2">
                <Link
                  href="/tarifs"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
                >
                  <span>Obtenir mes Identifiants 4K</span>
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Section 0: Présentation Technique Accessible */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Qu'est-ce qu'IPTV Smarters Pro et Comment Fonctionne ce Lecteur ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong>IPTV Smarters Pro</strong> est un lecteur multimédia spécialisé dans la réception de flux audiovisuels en technologie <a href="https://fr.wikipedia.org/wiki/Over-the-top_service" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">OTT (Over-The-Top)</a>. Conçu pour remplacer les décodeurs traditionnels, il organise vos chaînes télévisées en direct, vos films à la demande et vos séries avec une fluidité exceptionnelle.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Il est capital de comprendre que l'application est un contenant neutre : <strong>elle ne fournit aucune chaîne</strong> par elle-même. Pour profiter de vos programmes favoris, vous devez lui injecter un <strong>abonnement IPTV actif</strong> configuré sur des serveurs haute vitesse capables de décoder les flux <a href="https://fr.wikipedia.org/wiki/H.265/HEVC" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">H.265 / HEVC</a> en temps réel.
            </p>

            <figure className="my-6 space-y-2">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-2xl">
                <Image
                  src="/images/IPTV-Smarters-Pro-interface.webp"
                  alt="Interface IPTV Smarters Pro 4K sur Smart TV et Fire Stick avec guide des programmes EPG"
                  width={1200}
                  height={675}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="text-center text-xs text-slate-400">
                Interface d'IPTV Smarters Pro : affichage des catégories Live TV, VOD et EPG synchronisées avec nos serveurs.
              </figcaption>
            </figure>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <Zap className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm font-bold text-white">Zapping Ultra-Rapide</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Basculez d'une chaîne à l'autre en moins de 500 ms grâce au décodage matériel intégré.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <Radio className="w-5 h-5 text-purple-400" />
              <h3 className="text-sm font-bold text-white">Mode Multi-Écrans</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Suivez jusqu'à 4 événements sportifs simultanément sur un même téléviseur sans ralentissement.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">Contrôle Parental PIN</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Protégez l'accès aux catégories sensibles grâce à un code de sécurité à 4 chiffres.
              </p>
            </div>
          </div>
        </section>

        {/* PILIER 1: TÉLÉCHARGEMENT */}
        <section id="telechargement" className="scroll-mt-24 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
              <Download className="w-3.5 h-3.5" />
              <span>Pilier 1 : Téléchargement</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Télécharger IPTV Smarters Pro : APK, Fire Stick &amp; Smart TV
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Pour garantir la sécurité de votre équipement et éviter les versions modifiées contenant des logiciels publicitaires, utilisez exclusivement les méthodes de téléchargement certifiées listées ci-dessous :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Carte Fire TV Stick */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Tv className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Amazon Fire TV Stick</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sur Fire TV Stick, ouvrez <strong>Downloader</strong>. Vous pouvez soit taper le code court, soit saisir l'URL directe officielle de l'APK si le code de redirection ne répond pas :
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2 text-center">
                  <div>
                    <span className="text-[11px] text-slate-400 block mb-0.5">Code Downloader</span>
                    <span className="font-mono text-lg font-extrabold text-amber-400">298382</span>
                  </div>
                  <div className="border-t border-slate-800 pt-1.5">
                    <span className="text-[11px] text-slate-400 block mb-0.5">URL directe officielle APK</span>
                    <span className="font-mono text-[11px] text-blue-400 select-all break-all">https://www.iptvsmarters.com/smarters.apk</span>
                  </div>
                </div>
              </div>
              <Link
                href="/guide-installation/fire-tv-stick"
                className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300"
              >
                <span>Guide pas-à-pas Firestick</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Carte Smart TV Samsung & LG */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Monitor className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Samsung Tizen &amp; LG webOS</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Directement accessible sur les magasins d'applications intégrés. Aucune clé USB n'est nécessaire pour l'installation :
                </p>
                <ul className="text-xs text-slate-400 space-y-1.5 pl-1">
                  <li>&bull; <strong>Samsung :</strong> Recherchez « Smarters Pro » dans le Smart Hub.</li>
                  <li>&bull; <strong>LG :</strong> Disponible sur le LG Content Store officiel.</li>
                </ul>
              </div>
              <Link
                href="/guide-installation/smart-tv-samsung-lg"
                className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300"
              >
                <span>Guide Smart TV Samsung &amp; LG</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Carte Android APK & Box */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Android Box, Google TV &amp; Smartphone</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Compatible avec Nvidia Shield, Xiaomi TV Box, Chromecast Google TV et smartphones Android :
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Lien APK Direct :</span>
                    <a href="https://www.iptvsmarters.com/smarters.apk" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline">
                      Télécharger smarters.apk
                    </a>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Google Play :</span>
                    <a href="https://play.google.com/store/apps/details?id=com.nst.iptvsmarterstvbox" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      Voir sur Play Store
                    </a>
                  </div>
                </div>
              </div>
              <Link
                href="/guide-installation"
                className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300"
              >
                <span>Guide d'installation Android</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Carte Windows & macOS */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Laptop className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">PC Windows &amp; Mac</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Visionnez vos programmes sur ordinateur. Téléchargez l'exécutable officiel <code>.exe</code> (Windows) ou le paquet <code>.dmg</code> (macOS) :
                </p>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-center">
                  <a href="https://www.iptvsmarters.com/#downloads" target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-semibold hover:underline">
                    Portail officiel iptvsmarters.com/#downloads
                  </a>
                </div>
              </div>
              <Link
                href="/guide-installation"
                className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300"
              >
                <span>Consulter les guides PC</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Carte Apple iOS & Apple TV */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  <Monitor className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">iPhone, iPad &amp; Apple TV</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Disponible sous l'appellation officielle <em>Smarters Player Lite</em> sur l'App Store Apple, entièrement gratuite et sécurisée :
                </p>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-center">
                  <a href="https://apps.apple.com/app/smarters-player-lite/id1628995509" target="_blank" rel="noopener noreferrer" className="text-violet-400 font-semibold hover:underline">
                    Voir Smarters Player Lite sur l'App Store
                  </a>
                </div>
              </div>
              <Link
                href="/guide-installation"
                className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300"
              >
                <span>Guide iOS &amp; Apple TV</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Téléchargement Direct Résumé */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/60 to-slate-900 border border-blue-800/40 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Besoin d'Assistance Directe ?</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Notre équipe technique francophone vous transmet le lien de téléchargement direct et vos identifiants d'accès personnalisés par WhatsApp 7j/7.
                </p>
              </div>
              <Link
                href="/abonnement-iptv-12-mois"
                className="inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Commander avec Support Inclus</span>
              </Link>
            </div>

          </div>
        </section>

        {/* PILIER 2: INSTALLATION ET CONFIGURATION */}
        <section id="configuration" className="scroll-mt-24 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Pilier 2 : Installation &amp; Configuration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Installation et Configuration Pas-à-Pas d'IPTV Smarters Pro
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Pour connecter votre lecteur à un flux télévisuel de haute qualité, deux méthodes existent. Nous conseillons impérativement la méthode <strong>Xtream Codes API</strong>, qui gère la synchronisation du <a href="https://fr.wikipedia.org/wiki/Guide_des_programmes" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300">Guide des programmes (EPG)</a> et évite les lourdeurs des listes M3U statiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Méthode 1: Xtream Codes */}
            <div className="p-8 rounded-2xl bg-slate-900 border-2 border-blue-500/40 space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-bold text-xs">
                  Méthode 1 : API Xtream Codes (Recommandée)
                </span>
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>

              <h3 className="text-lg font-bold text-white">Connexion Rapide par Identifiants Serveur</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Cette option structure automatiquement vos chaînes par pays, sépare les directs des films VOD et actualise les grilles horaires sans intervention manuelle.
              </p>

              <figure className="space-y-2">
                <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950/60 shadow-xl">
                  <Image
                    src="/images/IPTV-Smarters-Pro-activation.webp"
                    alt="Écran d'activation et de configuration Xtream Codes API sur IPTV Smarters Pro"
                    width={1200}
                    height={675}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="text-center text-xs text-slate-400">
                  Formulaire officiel Xtream Codes : Nom de profil, Nom d'utilisateur, Mot de passe et URL de serveur.
                </figcaption>
              </figure>

              <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                <li className="leading-relaxed">
                  Lancez l'application et cliquez sur <strong>Connexion avec l'API Xtream Codes</strong>.
                </li>
                <li className="leading-relaxed">
                  <strong>Nom du compte :</strong> Renseignez le nom de votre choix (ex : <em>Mon Abonnement 4K</em>).
                </li>
                <li className="leading-relaxed">
                  <strong>Nom d'utilisateur (Username) :</strong> Entrez l'identifiant reçu par e-mail ou WhatsApp.
                </li>
                <li className="leading-relaxed">
                  <strong>Mot de passe (Password) :</strong> Saisissez votre mot de passe privé sécurisé.
                </li>
                <li className="leading-relaxed">
                  <strong>URL du Serveur :</strong> Indiquez l'adresse de notre serveur <a href="https://fr.wikipedia.org/wiki/Domain_Name_System" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">DNS</a> dédiée (ex : <code>http://serveur-dns.pro:8080</code>).
                </li>
                <li className="leading-relaxed">
                  Validez sur <strong>Ajouter un utilisateur</strong> et patientez pendant le chargement.
                </li>
              </ol>
            </div>

            {/* Méthode 2: Playlist M3U */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-bold text-xs">
                  Méthode 2 : Lien de Playlist M3U
                </span>
                <SlidersHorizontal className="w-5 h-5 text-slate-400" />
              </div>

              <h3 className="text-lg font-bold text-white">Importation par Fichier ou URL M3U</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Cette méthode convient pour charger une liste externe sous format texte. Elle nécessite toutefois une bonne connexion pour télécharger l'intégralité du fichier d'un seul bloc.
              </p>

              <figure className="space-y-2">
                <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950/60 shadow-xl">
                  <Image
                    src="/images/smarters-pro-m3u.webp"
                    alt="Écran d'ajout de playlist M3U sur l'application IPTV Smarters Pro"
                    width={1200}
                    height={675}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <figcaption className="text-center text-xs text-slate-400">
                  Formulaire M3U : saisie du libellé de playlist et du lien de streaming complet.
                </figcaption>
              </figure>

              <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                <li className="leading-relaxed">
                  Sur l'écran d'accueil, cliquez sur <strong>Charger votre liste de lecture ou fichier/URL</strong>.
                </li>
                <li className="leading-relaxed">
                  Cochez l'option <strong>URL M3U</strong>.
                </li>
                <li className="leading-relaxed">
                  Collez le lien complet transmis lors de l'activation de votre abonnement.
                </li>
                <li className="leading-relaxed">
                  Cliquez sur <strong>Ajouter un utilisateur</strong> pour synchroniser les chaînes.
                </li>
              </ol>
            </div>

          </div>
        </section>

        {/* PILIER 3: CODE D'ACTIVATION IPTV SMARTERS PRO */}
        <section id="code-activation" className="scroll-mt-24 space-y-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
              <KeyRound className="w-3.5 h-3.5" />
              <span>Pilier 3 : Code d'Activation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Code d'Activation IPTV Smarters Pro : Comprendre et Obtenir un Accès Valide
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              La recherche d'un « <strong>code activation IPTV Smarters Pro gratuit</strong> » est l'une des requêtes les plus fréquentes sur Google. Pourtant, une immense confusion persiste entre la licence logicielle et l'accès aux serveurs de diffusion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            
            {/* Explication Pédagogique */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-amber-400" />
                <span>Pourquoi un « Code Universel » N'Existe Pas</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Contrairement à un logiciel de bureautique activé par une clé de licence unique, IPTV Smarters Pro ne stocke aucun flux vidéo. Pour diffuser une chaîne en direct ou un film 4K, l'application doit s'authentifier auprès d'un serveur distant sécurisé.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Le fameux « code » que l'application réclame correspond donc en réalité à <strong>un trio d'identifiants privés</strong> générés spécifiquement pour votre ligne :
              </p>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-2 pl-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Nom d'utilisateur unique :</strong> Attribué à votre compte.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Mot de passe chiffré :</strong> Pour verrouiller vos flux.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>URL de portail sécurisée :</strong> Redirigeant vers des serveurs CDN dédiés.</span>
                </li>
              </ul>
            </div>

            {/* Alerte sur les faux codes gratuits */}
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-amber-400 shrink-0" />
                <h3 className="text-base font-bold text-white">Le Piège des Codes Gratuits sur Forums &amp; Telegram</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Les listes de codes distribuées publiquement sur Telegram ou les forums présentent des risques majeurs :
              </p>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Coupures permanentes :</strong> Limités à une seule connexion simultanée, ces accès sautent dès qu'un autre utilisateur s'y branche.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Durée de vie éphémère :</strong> Les serveurs bannissent ces accès piratés en moins de 24 à 48 heures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Risque de logiciels espions :</strong> Les sites proposant des « générateurs de codes IPTV » forcent le téléchargement d'APK corrompus.</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/tarifs"
                  className="inline-flex items-center text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  <span>Obtenir des identifiants personnels sécurisés &rarr;</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* PILIER 4: ABONNEMENT IPTV SMARTERS PRO */}
        <section id="abonnement" className="scroll-mt-24 rounded-3xl bg-white dark:bg-gradient-to-b dark:from-blue-950/40 dark:to-slate-900 border border-blue-200 dark:border-blue-900/40 p-8 sm:p-12 space-y-8 shadow-sm dark:shadow-none">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold">
              <Server className="w-3.5 h-3.5" />
              <span>Pilier 4 : Abonnement IPTV 4K</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Optimisez IPTV Smarters Pro avec un Abonnement Serveur Haute Vitesse
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Pour profiter pleinement des capacités graphiques d'IPTV Smarters Pro, votre connexion doit s'appuyer sur une infrastructure serveur robuste. Notre offre a été spécialement conçue pour garantir la stabilité des flux en direct lors des plus grands rendez-vous sportifs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-blue-600 dark:text-blue-400">01</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Serveurs Anti-Coupure 99.8%</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Réseau de serveurs CDN européens à équilibrage de charge pour supprimer tout buffering en soirée de Ligue des Champions.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-blue-600 dark:text-blue-400">02</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Qualité 4K Ultra HD &amp; 60 FPS</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Encodage vidéo haute fidélité H.265 avec son Dolby Digital 5.1 pour une immersion cinématographique sur grand écran.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-blue-600 dark:text-blue-400">03</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Activation Express en 10 Minutes</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Identifiants Xtream Codes et guide de mise en route transmis instantanément par e-mail et WhatsApp avec support 7j/7.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/abonnement-iptv-12-mois"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
            >
              <span>Découvrir l'Abonnement 12 Mois VIP</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section 5: FAQ Spécifique IPTV Smarters Pro */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Questions Fréquentes sur IPTV Smarters Pro
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Réponses précises à vos questions sur les codes d'activation, l'installation et le dépannage de l'application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Pourquoi l'application affiche-t-elle le message « Invalid Details » ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Ce message indique une erreur dans la saisie de votre nom d'utilisateur, de votre mot de passe ou de l'URL du serveur (attention aux majuscules, minuscules et aux espaces insérés involontairement par le correcteur automatique).
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Puis-je utiliser un même code d'activation sur plusieurs téléviseurs ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Vous pouvez installer l'application sur tous vos écrans. En revanche, le visionnage simultané dépend de votre formule : notre pack multi-écrans permet de regarder deux chaînes différentes en même temps sans coupure.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Comment changer de lecteur interne si une chaîne a un problème de son ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Rendez-vous dans <strong>Paramètres</strong> &gt; <strong>Sélection du lecteur</strong> (Player Selection) et basculez du lecteur par défaut vers <em>VLC</em> ou <em>ExoPlayer</em> pour forcer le décodage matériel audio AC3/Dolby.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>IPTV Smarters Pro est-elle une application légale ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Oui, IPTV Smarters Pro est un lecteur multimédia 100% légal distribué sur les boutiques officielles Google Play, Samsung Smart Hub et LG Content Store. Sa légalité est comparable à celle de lecteurs comme VLC.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
