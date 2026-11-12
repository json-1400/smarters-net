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
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';

const PAGE_CANONICAL = `${SITE_CONFIG.domain}/applications/smart-iptv`;

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Smart IPTV (SIPTV) : Téléchargement, Code Activation & Installation 2026",
    description: "Guide expert Smart IPTV (SIPTV) : Téléchargement sur Smart TV Samsung & LG, code d'activation 5,49 € par adresse MAC vs identifiants serveur, configuration M3U et abonnement 4K.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'smart iptv',
      'siptv',
      'telecharger smart iptv',
      'code activation smart iptv',
      'smart iptv code activation gratuit',
      'activation smart iptv',
      'smart iptv samsung',
      'smart iptv lg',
      'configuration smart iptv',
      'abonnement smart iptv'
    ],
  });
}

export default function SmartIptvPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${PAGE_CANONICAL}/#software`,
        name: 'Smart IPTV (SIPTV)',
        operatingSystem: 'Samsung Tizen, LG webOS, Android TV',
        applicationCategory: 'MultimediaApplication',
        softwareVersion: '1.7.0',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.6',
          ratingCount: '1380',
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
        name: 'Comment Activer et Charger sa Playlist M3U sur Smart IPTV (SIPTV)',
        description: 'Tutoriel officiel pour associer votre abonnement IPTV 4K à votre téléviseur via le portail officiel siptv.app.',
        totalTime: 'PT3M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Relever l\'adresse MAC de votre téléviseur',
            text: 'Ouvrez Smart IPTV sur votre Smart TV et notez l\'adresse MAC physique (ex: 00:1a:79:xx:xx:xx) affichée sur l\'écran.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Ouvrir le portail siptv.app/mylist',
            text: 'Depuis votre navigateur web sur PC ou smartphone, accédez à la page officielle siptv.app/mylist.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Coller le lien M3U et configurer l\'EPG',
            text: 'Renseignez votre adresse MAC, collez l\'URL M3U fournie lors de votre commande, cochez \'Save online\', sélectionnez \'France\' pour l\'EPG et cliquez sur \'Send\'.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Relancer l\'application sur la TV',
            text: 'Redémarrez l\'application Smart IPTV sur votre téléviseur pour charger vos chaînes en direct et le guide TV.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Comment fonctionne le code d\'activation de Smart IPTV (SIPTV) ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Smart IPTV propose 7 jours d\'essai gratuit. À l\'issue de cette période, l\'éditeur facture des frais d\'activation uniques de 5,49 € à vie sur le site officiel siptv.app/activation. Ce paiement active uniquement l\'application sur votre adresse MAC et n\'inclut pas les chaînes de télévision.',
            },
          },
          {
            '@type': 'Question',
            name: 'Peut-on obtenir un code d\'activation Smart IPTV gratuit ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non. L\'activation logicielle est enregistrée directement sur la base de données de siptv.app en liant votre adresse MAC matérielle. Aucun code universel gratuit ou générateur ne peut contourner cette vérification serveur.',
            },
          },
          {
            '@type': 'Question',
            name: 'Pourquoi Smart IPTV affiche « Check playlist URL » au démarrage ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ce message survient quand la playlist M3U est trop volumineuse pour la mémoire vive de votre Smart TV ou si le lien a été mal copié. Notre service allège automatiquement votre playlist pour éviter tout plantage de l\'application.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment installer Smart IPTV si l\'application n\'est plus dans mon store Samsung ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sur certains modèles Samsung récents, Smart IPTV a été retiré du Smart Hub français. Vous pouvez l\'installer manuellement via une clé USB avec le fichier widget officiel, ou opter pour des alternatives modernes comme IPTV Smarters Pro ou IBO Player Pro.',
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
            name: 'Smart IPTV',
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
            <span className="text-slate-200 font-medium" aria-current="page">Smart IPTV</span>
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
                  src="/images/Smart-IPTV.webp"
                  alt="Logo officiel Smart IPTV (SIPTV)"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-blue-400" />
                <span>Pionnier du Streaming Smart TV &middot; Note : 4.6 / 5</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Smart IPTV (SIPTV) : Téléchargement, Code Activation &amp; Installation
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Lecteur historique le plus connu sur téléviseurs connectés, <strong>Smart IPTV</strong> (SIPTV) se distingue par sa légèreté. Découvrez comment le <strong>télécharger sur Samsung et LG</strong>, activer votre <strong>licence 5,49 € par adresse MAC</strong> et connecter notre <strong>abonnement 4K allégé sans plantage</strong>.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/abonnement-iptv-12-mois"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Activer mon Abonnement 4K Smart IPTV</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="#telechargement"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                <Download className="w-4 h-4 mr-2 text-blue-400" />
                <span>Télécharger SIPTV</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">5,49 €</span>
                <span className="block text-xs text-slate-400">Licence unique à vie</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">Léger</span>
                <span className="block text-xs text-slate-400">Idéal TV anciennes</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">Save Online</span>
                <span className="block text-xs text-slate-400">Liaison cloud directe</span>
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
                    <h2 className="text-sm font-bold text-white leading-none">Fiche Smart IPTV</h2>
                    <span className="text-xs text-slate-400">Version Officielle SIPTV</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  7 Jours d'Essai
                </span>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Systèmes Compatibles</dt>
                  <dd className="font-semibold text-slate-200">Samsung Tizen, LG webOS, Android TV</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Gestion de Playlist</dt>
                  <dd className="font-semibold text-blue-400">
                    <a href="https://siptv.app/mylist/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Portail siptv.app/mylist
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Téléchargement APK Direct</dt>
                  <dd className="font-mono text-xs text-amber-400">
                    <a href="https://siptv.app/howto/android/files/siptv.apk" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      siptv.app/.../siptv.apk
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Format Recommandé</dt>
                  <dd className="font-semibold text-slate-200">M3U Plus Allégé &amp; EPG France</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Frais d'Activation Logicielle</dt>
                  <dd className="font-semibold text-slate-200">5,49 € (paiement unique)</dd>
                </div>
                <div className="flex justify-between py-1.5">
                  <dt className="text-slate-400">Stream Type</dt>
                  <dd className="font-semibold text-emerald-400">MPEG-TS &amp; NC Auto</dd>
                </div>
              </dl>

              <div className="pt-2">
                <Link
                  href="/tarifs"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
                >
                  <span>Obtenir mon Lien M3U 4K Allégé</span>
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Section 0: Présentation Technique SIPTV */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Qu'est-ce que Smart IPTV et Comment Fonctionne ce Lecteur ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Lancé aux débuts de la télévision connectée, <strong>Smart IPTV</strong> (SIPTV) est une application minimaliste utilisant la technologie <a href="https://fr.wikipedia.org/wiki/Over-the-top_service" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">OTT (Over-The-Top)</a>. Elle ne surcharge pas l'écran d'animations graphiques superflues, ce qui en fait un lecteur particulièrement adapté aux téléviseurs datant de 2016 à 2021.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Son fonctionnement repose sur une liaison cloud : l'application ne stocke pas vos identifiants localement, mais les récupère sur le portail <em>siptv.app</em> à chaque démarrage en vérifiant l'<a href="https://fr.wikipedia.org/wiki/Adresse_MAC" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">adresse MAC</a> de l'écran. Elle est compatible avec le codec <a href="https://fr.wikipedia.org/wiki/H.265/HEVC" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">H.265 / HEVC</a> pour retransmettre vos chaînes sportives en 4K UHD.
            </p>

            <figure className="my-6 space-y-2">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-2xl">
                <Image
                  src="/images/placeholders/app-smart-iptv.svg"
                  alt="Interface Smart IPTV (SIPTV) sur Smart TV Samsung et LG avec activation portail MAC"
                  width={1200}
                  height={675}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="text-center text-xs text-slate-400">
                Interface de Smart IPTV (SIPTV) : liste épurée des bouquets de chaînes et numérotation directe à la télécommande.
              </figcaption>
            </figure>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <Zap className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm font-bold text-white">Ultra-Léger en RAM</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Consomme très peu de ressources pour préserver la fluidité des Smart TV anciennes.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <Globe className="w-5 h-5 text-cyan-400" />
              <h3 className="text-sm font-bold text-white">Gestion Déportée</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Téléversez votre lien M3U depuis votre ordinateur ou smartphone sans saisie manuelle sur la TV.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">Licence à Vie 5,49 €</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Un paiement unique symbolique auprès de l'éditeur débloque définitivement le lecteur.
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
              Télécharger Smart IPTV sur Samsung, LG &amp; Android TV
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              La disponibilité de Smart IPTV varie selon le fabricant et la région de votre téléviseur :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* LG webOS */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <Tv className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">LG Smart TV (webOS)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Directement accessible sur le <strong>LG Content Store</strong> officiel. Recherchez simplement <strong>Smart IPTV</strong> pour l'installer en un clic.
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400">
                  Site officiel : <a href="https://siptv.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">siptv.app</a>
                </div>
              </div>
              <Link
                href="/guide-installation/smart-tv-samsung-lg"
                className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300"
              >
                <span>Guide Smart TV LG</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Samsung Tizen */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Monitor className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Samsung Smart TV (Tizen)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Présente sur le Smart Hub de plusieurs pays. Si l'application n'apparaît pas, installez le widget USB officiel depuis la documentation officielle :
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1">
                  <div>Widget USB : <a href="https://siptv.app/howto/sammy/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">siptv.app/howto/sammy/</a></div>
                  <span className="text-[11px] text-slate-500 block">Fichier userwidget.zip à décompresser sur clé USB</span>
                </div>
              </div>
              <Link
                href="/guide-installation/smart-tv-samsung-lg"
                className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300"
              >
                <span>Guide Smart TV Samsung</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Android & Firestick APK Direct */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Download className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Android TV &amp; Firestick (APK Direct)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pour les boîtiers Android TV ou Fire TV Stick, téléchargez directement l'APK officiel en saisissant cette URL dans l'application <strong>Downloader</strong> :
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="text-[11px] text-slate-400 block">Lien direct APK :</span>
                  <a
                    href="https://siptv.app/howto/android/files/siptv.apk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-amber-400 hover:underline break-all block"
                  >
                    https://siptv.app/howto/android/files/siptv.apk
                  </a>
                </div>
              </div>
              <Link
                href="/guide-installation/fire-tv-stick"
                className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300"
              >
                <span>Guide Firestick &amp; Android</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

          </div>

          {/* Alternatives Modernes Banner */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Vous recherchez une interface plus moderne avec affiches VOD et replay ?</span>
              </h4>
              <p className="text-xs text-slate-400">
                Consultez nos comparatifs pour des applications plus conviviales sur Smart TV et boîtiers connectés.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/applications/iptv-smarters-pro" className="text-xs font-semibold px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-blue-400">
                IPTV Smarters Pro &rarr;
              </Link>
              <Link href="/applications/ibo-player" className="text-xs font-semibold px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400">
                IBO Player Pro &rarr;
              </Link>
            </div>

          </div>
        </section>

        {/* PILIER 2: INSTALLATION ET CONFIGURATION */}
        <section id="configuration" className="scroll-mt-24 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
              <Settings className="w-3.5 h-3.5" />
              <span>Pilier 2 : Installation &amp; Configuration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Installation et Configuration de Smart IPTV sur siptv.app/mylist
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Le téléversement de votre abonnement s'effectue en quelques clics sur le portail du développeur :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Guide siptv.app */}
            <div className="p-8 rounded-2xl bg-slate-900 border-2 border-blue-500/40 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-bold text-xs">
                  Procédure Officielle siptv.app
                </span>
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
              </div>

              <h3 className="text-lg font-bold text-white">Chargement du Lien M3U &amp; EPG</h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                <li className="leading-relaxed">
                  Lancez Smart IPTV sur votre téléviseur et notez votre <strong>Adresse MAC</strong> (ex : <code>00:1a:79:xx:xx:xx</code>).
                </li>
                <li className="leading-relaxed">
                  Sur votre smartphone ou ordinateur, ouvrez le portail officiel <code>siptv.app/mylist</code>.
                </li>
                <li className="leading-relaxed">
                  Dans le champ <strong>MAC</strong>, tapez l'adresse de votre téléviseur.
                </li>
                <li className="leading-relaxed">
                  Dans le champ <strong>URL</strong>, collez le lien M3U fourni lors de votre commande.
                </li>
                <li className="leading-relaxed">
                  Cochez <strong>Save online</strong> et sélectionnez <strong>France</strong> dans la liste EPG pour afficher les grilles de programmes.
                </li>
                <li className="leading-relaxed">
                  Cliquez sur <strong>Send</strong> puis redémarrez l'application sur la télévision.
                </li>
              </ol>
            </div>

            {/* Dépannage Check Playlist URL */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-bold text-xs">
                  Dépannage Mémoire RAM
                </span>
                <Sliders className="w-5 h-5 text-blue-400" />
              </div>

              <h3 className="text-lg font-bold text-white">Résoudre le Message « Check playlist URL »</h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-white block">Saturation de la Mémoire Vive :</span>
                  <p className="text-xs text-slate-400">
                    Si votre Smart TV affiche cette erreur, c'est que la liste contient trop de chaînes pour sa puce mémoire. Demandez à notre support d'activer le filtre de bouquets pour réduire la liste aux chaînes utiles.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-white block">Réglage du Stream Type :</span>
                  <p className="text-xs text-slate-400">
                    Dans les options de Smart IPTV sur la TV (touche rouge), basculez le <strong>Stream Type</strong> sur <em>NC Auto</em> ou <em>MPEG-TS</em> pour supprimer tout gel d'image.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* PILIER 3: CODE D'ACTIVATION SMART IPTV */}
        <section id="code-activation" className="scroll-mt-24 space-y-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
              <KeyRound className="w-3.5 h-3.5" />
              <span>Pilier 3 : Code d'Activation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Code d'Activation Smart IPTV : La Différence entre Licence et Abonnement
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              La recherche d'un « <strong>code activation Smart IPTV gratuit</strong> » conduit souvent les utilisateurs vers des sites trompeurs. Voici les explications techniques indispensables :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            
            {/* Les deux éléments */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-400" />
                <span>Deux Éléments Bien Distincts</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Pour faire fonctionner Smart IPTV sur votre téléviseur :
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-blue-400 font-semibold block mb-1">1. L'Activation du Lecteur Smart IPTV (5,49 € à vie) :</strong>
                  Cette licence se règle sur le portail officiel <code>siptv.app/activation</code> après les 7 jours d'essai pour lever le blocage de l'application sur votre adresse MAC.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <strong className="text-emerald-400 font-semibold block mb-1">2. Vos Flux de Chaînes Télévisées (Abonnement IPTV) :</strong>
                  Ce sont les identifiants et le lien M3U fournis par notre service pour recevoir les chaînes en direct et le guide <a href="https://fr.wikipedia.org/wiki/Guide_des_programmes" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">EPG</a>.
                </div>
              </div>
            </div>

            {/* Dangers des codes gratuits */}
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-amber-400 shrink-0" />
                <h3 className="text-base font-bold text-white">Pourquoi les Codes Gratuits Sont Inopérants</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Le système d'activation de Smart IPTV vérifie en temps réel l'adresse MAC auprès de ses serveurs. <strong>Aucun code d'activation gratuit ne peut débloquer votre écran</strong>.
              </p>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Générateurs fictifs :</strong> Les sites prétendant générer des clés sont des pièges publicitaires ou du phishing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">&times;</span>
                  <span><strong>Listes publiques saturées :</strong> Les playlists partagées sur Pastebin sont coupées par les hébergeurs en quelques heures.</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/tarifs"
                  className="inline-flex items-center text-xs font-bold text-blue-400 hover:text-blue-300"
                >
                  <span>Souscrire un abonnement serveur privé 4K sans coupure &rarr;</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* PILIER 4: ABONNEMENT SMART IPTV */}
        <section id="abonnement" className="scroll-mt-24 rounded-3xl bg-white dark:bg-gradient-to-b dark:from-blue-950/40 dark:to-slate-900 border border-blue-200 dark:border-blue-900/40 p-8 sm:p-12 space-y-8 shadow-sm dark:shadow-none">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold">
              <Server className="w-3.5 h-3.5" />
              <span>Pilier 4 : Abonnement IPTV 4K Spécial Smart IPTV</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Un Abonnement 4K Allégé pour une Stabilité Maximale sur Smart IPTV
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Pour éviter les plantages fréquents liés à la mémoire limitée des Smart TV sur Smart IPTV, nos liens M3U sont spécialement optimisés et allégés tout en conservant une qualité 4K Ultra HD irréprochable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-blue-600 dark:text-blue-400">01</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Format M3U Allégé</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Liste optimisée pour se charger en moins de 3 secondes sans bloquer la mémoire de la télévision.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-blue-600 dark:text-blue-400">02</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Qualité 4K 60 FPS Garantie</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Flux haute fidélité pour le sport en direct (Ligue 1, Champions League, Formule 1).
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-black text-blue-600 dark:text-blue-400">03</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Assistance de Configuration</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Notre équipe téléverse votre liste pour vous sur siptv.app si vous rencontrez la moindre difficulté.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/abonnement-iptv-12-mois"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
            >
              <span>Découvrir l'Abonnement VIP 12 Mois (Compatible Smart IPTV)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section FAQ Smart IPTV */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Questions Fréquentes sur Smart IPTV (SIPTV)
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Réponses précises à vos questions sur l'activation par adresse MAC, le téléversement et le dépannage de SIPTV.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Comment payer la licence de Smart IPTV ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Rendez-vous sur <code>siptv.app/activation</code>, entrez votre adresse MAC et réglez les 5,49 € par carte bancaire. La validation est immédiate et définitive pour cette télévision.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Pourquoi mes chaînes disparaissent-elles après redémarrage ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Lorsque vous injectez votre lien M3U sur <code>siptv.app/mylist</code>, assurez-vous de bien cocher la case <strong>Save online</strong> pour que la liste soit sauvegardée sur les serveurs cloud de SIPTV.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Peut-on utiliser les identifiants Xtream Codes sur Smart IPTV ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Smart IPTV utilise principalement les liens de playlist M3U. Toutefois, notre service convertit automatiquement vos identifiants Xtream en lien M3U compatible Smart IPTV pour faciliter votre configuration.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Quelle alternative choisir si ma Smart TV ne supporte plus SIPTV ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Nous conseillons d'installer <Link href="/applications/iptv-smarters-pro" className="text-blue-400 hover:underline">IPTV Smarters Pro</Link> (100% gratuit) ou <Link href="/applications/ibo-player" className="text-blue-400 hover:underline">IBO Player Pro</Link>, tous deux plus modernes et stables.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
