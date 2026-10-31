import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Tv, 
  Download, 
  KeyRound, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Zap,
  Flame,
  Layers,
  Radio
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/guide-installation/fire-tv-stick';

export function generateMetadata(): Metadata {
  const title = "Installer IPTV Smarters Pro sur Fire TV Stick : Tutoriel 2026 Pas-à-Pas";
  const description = "Guide officiel pour installer IPTV Smarters Pro sur Amazon Fire TV Stick en 4 minutes via Downloader. Codes directs, configuration Xtream Codes et astuces anti-coupures.";

  return {
    title,
    description,
    keywords: [
      'iptv smarters pro fire tv stick',
      'installer iptv smarters pro firestick',
      'code downloader iptv smarters pro',
      'firestick iptv france',
      'configuration iptv fire tv stick',
      'telecharger smarters pro fire tv'
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

export default function FireStickTutorialPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: 'Comment Installer IPTV Smarters Pro sur Amazon Fire TV Stick',
        description: 'Tutoriel complet en 4 étapes pour installer IPTV Smarters Pro avec Downloader sur Amazon Firestick 4K et Fire TV Cube.',
        totalTime: 'PT4M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Installer l\'application Downloader',
            text: 'Depuis l\'écran d\'accueil de votre Fire TV Stick, allez dans Rechercher, tapez Downloader puis installez l\'application officielle (icône orange).',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Activer les Options pour Développeurs',
            text: 'Dans Paramètres > Ma Fire TV > À propos, cliquez 7 fois sur le nom de votre appareil pour débloquer les options développeurs, puis autorisez Downloader dans Installer les applications inconnues.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Télécharger IPTV Smarters Pro APK',
            text: 'Lancez Downloader, entrez le code direct 250931 pour télécharger le fichier APK officiel certifié d\'IPTV Smarters Pro.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Connecter vos identifiants Xtream Codes',
            text: 'Ouvrez IPTV Smarters Pro, choisissez Connexion via Xtream Codes API et saisissez vos codes d\'accès reçus lors de votre commande.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Pourquoi IPTV Smarters Pro n\'apparaît-il pas directement sur l\'Amazon Appstore ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Amazon filtre certains lecteurs multimédias tiers dans certaines régions. L\'installation via Downloader permet d\'installer la version officielle la plus récente et la plus stable directement depuis le fichier APK certifié.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment éviter les saccades et le buffering sur Fire TV Stick ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Utilisez un réseau Wi-Fi 5 GHz ou l\'adaptateur Ethernet Amazon officiel, videz régulièrement le cache dans les paramètres de la Fire TV, et assurez-vous d\'utiliser un abonnement IPTV avec des serveurs haute vitesse dédiés.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quel est le code Downloader direct pour IPTV Smarters Pro en 2026 ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le code numérique officiel vérifié est le 250931. Il permet de télécharger instantanément la version stable sans avoir à saisir une longue URL dans la télécommande.',
            },
          },
          {
            '@type': 'Question',
            name: 'Le Fire TV Stick 4K Max gère-t-il le Wi-Fi 6E et le Dolby Atmos ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, le Fire TV Stick 4K Max (2e génération) prend en charge le Wi-Fi 6/6E pour un débit ultra-stable et restitue le son Dolby Atmos sur les flux compatibles.',
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
            name: 'Amazon Fire TV Stick',
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
            <span className="text-slate-200 font-medium" aria-current="page">Amazon Fire TV Stick</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-950/80 border border-orange-800/60 text-orange-300 text-xs font-semibold">
              <Flame className="w-4 h-4 text-orange-400" />
              <span>Guide Fire TV Stick Vérifié 2026 &middot; Code Downloader Direct Inclus</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Comment Installer IPTV Smarters Pro sur <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Amazon Fire TV Stick</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              L'<strong>Amazon Fire TV Stick</strong> (Lite, 4K, 4K Max et Cube) est le support idéal pour profiter d'<strong>IPTV Smarters Pro</strong> en ultra haute définition. Découvrez la méthode complète et sécurisée pour télécharger l'application via Downloader et configurer votre abonnement sans blocage.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/abonnement-iptv-12-mois"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Découvrir nos Abonnements 4K</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="#tutoriel-firestick"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                <span>Étapes d'Installation Pas-à-Pas</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">4K Max</span>
                <span className="block text-xs text-slate-400">Ultra HD 60 FPS</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">&lt; 4 min</span>
                <span className="block text-xs text-slate-400">Via Downloader</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">Code 250931</span>
                <span className="block text-xs text-slate-400">Téléchargement Rapide</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white font-black text-lg">
                    <Flame className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-none">Fiche Amazon Fire OS</h2>
                    <span className="text-xs text-slate-400">Fire TV Stick 4K & Cube 2026</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  Testé 100%
                </span>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Outil de Téléchargement</dt>
                  <dd className="font-semibold text-slate-200">Downloader Official App</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Code Direct Numérique</dt>
                  <dd className="font-semibold text-orange-400 font-mono">250931</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Protocole Recommandé</dt>
                  <dd className="font-semibold text-emerald-400">Xtream Codes API</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Résolution Maximale</dt>
                  <dd className="font-semibold text-slate-200">4K UHD HDR10+ / Dolby Vision</dd>
                </div>
                <div className="flex justify-between py-1.5">
                  <dt className="text-slate-400">Espace Requis</dt>
                  <dd className="font-semibold text-slate-200">&lt; 85 Mo de stockage</dd>
                </div>
              </dl>

              <div className="pt-2">
                <Link
                  href="/checkout?plan=Premium"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
                >
                  <span>Activer mon Accès Serveur 4K</span>
                  <Zap className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Article Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Section 1: Pourquoi le Fire TV Stick est parfait */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Pourquoi l'Amazon Fire TV Stick est la Clé Streaming N°1 en France
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Branchée en HDMI directement sur votre téléviseur, la clé <strong>Amazon Fire TV Stick</strong> offre une puissance de calcul dédiée qui libère votre écran de toute lenteur logicielle. Avec son processeur quad-core et sa télécommande vocale Alexa, elle lit les flux vidéo 4K à 60 FPS sans coupure avec un temps de réponse instantané.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Grâce à l'application <strong>Downloader</strong> certifiée par Amazon, vous contournez les limitations géographiques des stores pour installer la version officielle et la plus stable d'IPTV Smarters Pro en moins de 4 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <Zap className="w-6 h-6 text-orange-400" />
              <h3 className="text-base font-bold text-white">Zapping Éclair Alexa</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Navigation rapide et recherche vocale pour changer de chaîne instantanément avec la télécommande Fire TV.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <Radio className="w-6 h-6 text-amber-400" />
              <h3 className="text-base font-bold text-white">Wi-Fi 6 / 5 GHz Puissant</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bande passante élevée pour encaisser les pics de trafic lors des grandes soirées sportives sans mise en mémoire tampon.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Format Nomade</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Emportez votre clé en vacances ou en déplacement et retrouvez tous vos bouquets sur n'importe quel téléviseur HDMI.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Étapes Pas-à-Pas Firestick */}
        <section id="tutoriel-firestick" className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Tutoriel d'Installation Pas-à-Pas sur Amazon Fire TV Stick
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Suivez ces 4 étapes rigoureuses pour activer votre lecteur avec le code officiel :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-orange-600 text-white font-black text-sm flex items-center justify-center">
                  1
                </span>
                <h3 className="text-lg font-bold text-white">Installer l'application Downloader</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                Depuis l'accueil de la Fire TV, allez sur <strong>Trouver &gt; Rechercher</strong>. Tapez <code>Downloader</code>, sélectionnez l'icône orange et cliquez sur <strong>Télécharger / Obtenir</strong>.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-orange-600 text-white font-black text-sm flex items-center justify-center">
                  2
                </span>
                <h3 className="text-lg font-bold text-white">Autoriser les applications inconnues</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                Allez dans <strong>Paramètres &gt; Ma Fire TV &gt; Options pour les développeurs &gt; Installer les applications inconnues</strong>. Cliquez sur Downloader pour passer l'état à <strong>ACTIVÉ</strong>. (Si l'option n'apparaît pas, cliquez 7 fois sur le nom de votre clé dans <em>À propos</em>).
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-orange-600 text-white font-black text-sm flex items-center justify-center">
                  3
                </span>
                <h3 className="text-lg font-bold text-white">Télécharger l'APK avec le code 250931</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                Lancez Downloader. Dans la barre d'URL centrale, tapez simplement le code direct <strong className="text-orange-400 font-mono">250931</strong> puis validez par <strong>Go</strong>. Le fichier d'installation certifié se télécharge automatiquement.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-orange-600 text-white font-black text-sm flex items-center justify-center">
                  4
                </span>
                <h3 className="text-lg font-bold text-white">Installation & Connexion Xtream Codes</h3>
              </div>
              <div className="text-xs text-slate-300 leading-relaxed pl-11 space-y-2">
                <p>Cliquez sur Installer, puis supprimez le fichier .apk téléchargé pour préserver l'espace de votre Fire TV. Ouvrez l'application, choisissez <strong>Xtream Codes API</strong> et renseignez vos 4 accès VIP :</p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
                  <div>Nom : Mon Firestick VIP</div>
                  <div>Identifiant : VotreIdentifiant</div>
                  <div>Mot de passe : VotreMotDePasse</div>
                  <div>URL Serveur : http://serveur-dns.com:port</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Astuce Anti-Surchauffe & Buffering */}
        <section className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-8 space-y-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" />
            <h2 className="text-xl font-bold text-white">
              Conseils d'Optimisation Pro pour Amazon Fire TV Stick
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-amber-200 leading-relaxed">
            Pour maintenir une fluidité 4K à 60 FPS sans buffering lors des matchs à forte affluence, appliquez ces recommandations :
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-amber-100/90 pt-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Privilégiez le Wi-Fi 5 GHz :</strong> Connectez votre Fire TV sur la bande 5 GHz de votre box internet plutôt que 2,4 GHz pour multiplier votre débit par 3.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Videz le cache régulièrement :</strong> Dans Paramètres &gt; Applications &gt; Gérer les applications &gt; IPTV Smarters Pro &gt; Vider le cache.</span>
            </li>
          </ul>
        </section>

        {/* Section 4: Banner CTA pour l'abonnement */}
        <section className="rounded-3xl bg-gradient-to-r from-orange-950/60 via-slate-900 to-amber-950/60 border border-orange-500/30 p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Activez la 4K Ultra HD sur votre Amazon Fire TV Stick
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Débloquez +25 000 chaînes directes et +90 000 VOD avec serveurs anti-freeze 60 FPS et support WhatsApp réactif 7j/7.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/abonnement-iptv-12-mois"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-orange-500/20 transition-all hover:scale-105"
            >
              <span>Découvrir l'Abonnement 12 Mois VIP (1 Mois Offert)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section 5: FAQ Spécifique Fire TV Stick en 2 colonnes */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Foire Aux Questions sur l'IPTV Fire TV Stick
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Toutes les réponses pour réussir l'installation de votre clé Amazon Fire TV.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>Pourquoi l'application n'est pas sur l'Amazon Appstore ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Amazon filtre certains lecteurs multimédias tiers dans certaines régions. L'installation via Downloader permet d'installer la version officielle la plus récente et la plus stable directement depuis le fichier APK certifié.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>Comment éviter les saccades et le buffering sur Firestick ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Utilisez un réseau Wi-Fi 5 GHz ou l'adaptateur Ethernet Amazon officiel, videz régulièrement le cache dans les paramètres de la Fire TV, et assurez-vous d'utiliser un abonnement IPTV avec des serveurs haute vitesse dédiés.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>Quel est le code Downloader pour IPTV Smarters Pro ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Le code numérique officiel vérifié est le 250931. Il permet de télécharger instantanément la version stable sans avoir à saisir une longue URL dans la télécommande.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>Le Fire TV Stick 4K Max gère-t-il le Wi-Fi 6E ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Oui, le Fire TV Stick 4K Max (2e génération) prend en charge le Wi-Fi 6/6E pour un débit ultra-stable et restitue le son Dolby Atmos sur les flux compatibles.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
