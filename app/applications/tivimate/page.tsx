import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
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
  SlidersHorizontal,
  Clock,
  Download,
  Settings,
  Sliders,
  Layers
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/applications/tivimate';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "TiviMate IPTV Player : Téléchargement, Configuration & Abonnement France",
    description: "Guide complet TiviMate IPTV Player en France : Téléchargement sur Firestick et Android TV, configuration Xtream Codes et serveur 4K sans coupure.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'tivimate',
      'iptv tivimate',
      'tivimate premium',
      'tivimate firestick',
      'configuration tivimate',
      'tivimate iptv france',
      'tivimate vs smarters pro'
    ],
  });
}

export default function TiviMatePage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${PAGE_CANONICAL}/#software`,
        name: 'TiviMate IPTV Player',
        operatingSystem: 'Android TV, Google TV, Amazon Fire OS',
        applicationCategory: 'MultimediaApplication',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '1850',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: 'Comment Configurer TiviMate avec des identifiants Xtream Codes',
        description: 'Guide étape par étape pour connecter votre abonnement 4K à TiviMate en 2 minutes.',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Ajouter une playlist',
            text: 'Lancez TiviMate et cliquez sur "Ajouter une liste de lecture" (Add Playlist).',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Sélectionner Xtream Codes',
            text: 'Choisissez "Identifiants Xtream Codes" parmi les méthodes proposées.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Renseigner vos identifiants',
            text: 'Saisissez l\'adresse du serveur (Server URL), votre nom d\'utilisateur (Username) et mot de passe (Password).',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Finaliser l\'importation',
            text: 'Cliquez sur Terminé. Vos chaînes et le guide TV EPG s\'actualisent automatiquement.',
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
            name: 'TiviMate IPTV',
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
            name: 'Comment installer TiviMate sur Amazon Fire TV Stick ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ouvrez l’application Downloader sur votre Fire TV Stick, saisissez le code officiel TiviMate ou téléchargez l’APK certifié, puis connectez votre abonnement via les identifiants Xtream Codes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quelle est la différence entre TiviMate gratuit et TiviMate Premium ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'La version gratuite permet de regarder les chaînes en direct d’une playlist. TiviMate Premium débloque le catalogue VOD (films et séries), le multi-écrans, la programmation d’enregistrements et la personnalisation avancée de l’EPG.',
            },
          },
          {
            '@type': 'Question',
            name: 'TiviMate fonctionne-t-il sur Smart TV Samsung ou LG ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'TiviMate est conçu exclusivement pour Android TV, Google TV et Fire OS. Sur un téléviseur Samsung (Tizen) ou LG (webOS) sans boîtier Android, utilisez IPTV Smarters Pro ou IBO Player.',
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
            <span className="text-slate-200 font-medium" aria-current="page">TiviMate IPTV</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-emerald-400" />
            <span>Lecteur N°1 Android TV & Fire Stick &middot; Note : 4.9 / 5</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            TiviMate IPTV Player : Téléchargement, Configuration & Abonnement France
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Considéré par les passionnés comme le lecteur le plus abouti du marché, <strong>TiviMate IPTV Player</strong> transforme votre téléviseur en véritable décodeur de salon ultra-rapide. Découvrez comment l'installer et le synchroniser avec nos serveurs 4K pour bénéficier d'une fluidité irréprochable sans aucune coupure.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-10">
            
            {/* Section 1: Features */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Pourquoi Choisir TiviMate IPTV Player pour Votre Téléviseur ?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Développé spécifiquement pour les appareils pilotés à la télécommande comme l'<strong>Amazon Fire TV Stick</strong>, la <strong>Nvidia Shield TV Pro</strong> et les téléviseurs sous <strong>Google TV</strong>, TiviMate reproduit fidèlement l'expérience des meilleurs décodeurs câble et satellite.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Zapping instantané :</strong> Changement de chaîne en moins de 0,3 seconde sans écran noir grâce au moteur ExoPlayer optimisé.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Guide TV EPG 7 jours :</strong> Grille de programmes complète avec recherche en direct, logos de chaînes et rattrapage Replay.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Mode Multi-Écrans :</strong> Regardez jusqu'à 4 à 9 canaux sportifs en direct simultanément sur un seul écran de télévision.</span>
                </li>
              </ul>
            </section>

            {/* Section 2: Comparison Matrix Gratuit vs Premium */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Comparatif Fonctionnel : TiviMate Gratuit vs TiviMate Premium
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                TiviMate est téléchargeable gratuitement avec les fonctionnalités de base. Pour débloquer toute la puissance du lecteur, la licence Premium via l'application TiviMate Companion est recommandée.
              </p>
              
              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left text-xs sm:text-sm text-slate-300 border-collapse">
                  <thead className="bg-slate-950 text-slate-200 text-[11px] sm:text-xs uppercase font-bold">
                    <tr>
                      <th className="p-3 sm:p-3.5">Fonctionnalité</th>
                      <th className="p-3 sm:p-3.5">Version Gratuite</th>
                      <th className="p-3 sm:p-3.5">Version Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr className="hover:bg-slate-800/40">
                      <td className="p-3 sm:p-3.5 font-medium text-white">Nombre de listes IPTV</td>
                      <td className="p-3 sm:p-3.5">1 seule playlist</td>
                      <td className="p-3 sm:p-3.5 text-emerald-400 font-semibold">Multi-playlists illimitées</td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="p-3 sm:p-3.5 font-medium text-white">Catalogue VOD (Films & Séries)</td>
                      <td className="p-3 sm:p-3.5 text-slate-400">Non (Direct TV seul)</td>
                      <td className="p-3 sm:p-3.5 text-emerald-400 font-semibold">Oui (Fiches & résumés complets)</td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="p-3 sm:p-3.5 font-medium text-white">Affichage Multi-Vues (Split Screen)</td>
                      <td className="p-3 sm:p-3.5 text-slate-400">Non</td>
                      <td className="p-3 sm:p-3.5 text-emerald-400 font-semibold">Oui (2 à 9 fenêtres en direct)</td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="p-3 sm:p-3.5 font-medium text-white">Enregistrement PVR programmable</td>
                      <td className="p-3 sm:p-3.5 text-slate-400">Non</td>
                      <td className="p-3 sm:p-3.5 text-emerald-400 font-semibold">Oui (Stockage USB ou réseau NAS)</td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="p-3 sm:p-3.5 font-medium text-white">Sources EPG personnalisées</td>
                      <td className="p-3 sm:p-3.5 text-slate-400">1 source standard</td>
                      <td className="p-3 sm:p-3.5 text-emerald-400 font-semibold">Oui (Multi-sources XMLTV avec décalage)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Downloader Installation Guide */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Download className="w-5 h-5 text-emerald-400" />
                <span>Guide d'Installation sur Fire TV Stick via Downloader</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                TiviMate n'étant pas présent sur le store Amazon officiel, son installation sur <strong>Fire TV Stick 4K</strong> s'effectue en quelques clics via l'application certifiée <strong>Downloader</strong> :
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white">Étape 1 : Autoriser l'installation d'applications inconnues</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Sur votre Fire TV Stick, rendez-vous dans <strong>Paramètres</strong> &gt; <strong>Ma Fire TV</strong> &gt; <strong>Options pour les développeurs</strong>, puis activez l'option pour l'application Downloader.
                  </p>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white">Étape 2 : Télécharger et installer l'APK officiel TiviMate</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Ouvrez Downloader, tapez l'adresse URL officielle de TiviMate (ou le code court Downloader certifié), lancez le téléchargement du fichier APK puis appuyez sur <strong>Installer</strong>.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white">Étape 3 : Connexion via vos identifiants API Xtream Codes</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Lancez TiviMate, sélectionnez <strong>Ajouter une playlist</strong>, choisissez <strong>Xtream Codes</strong> et renseignez l'URL du serveur, votre identifiant et votre mot de passe reçus après commande.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Buffer and EPG Configuration */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-emerald-400" />
                <span>Réglages Avancés du Buffer Cache et Anti-Coupure</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Pour assurer une lecture continue en <strong>4K UHD à 60 FPS</strong> lors des rencontres sportives à fort trafic, configurez les paramètres de lecture internes de TiviMate :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">Taille du Buffer Tampon</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Dans <strong>Paramètres</strong> &gt; <strong>Lecture</strong> &gt; <strong>Taille du tampon</strong>, choisissez <strong>Grand (Large)</strong> si votre connexion Wi-Fi présente de légères fluctuations. Cela permet d'absorber les variations réseau.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">Sortie Audio Passthrough</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Activez le <strong>Passthrough audio</strong> dans les réglages audio pour transmettre directement les pistes Dolby Digital et 5.1 à votre barre de son ou amplificateur home cinéma.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ TiviMate */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Questions Fréquentes sur TiviMate IPTV Player
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">Comment installer TiviMate sur Amazon Fire TV Stick ?</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Suivez notre <Link href="/guide-installation/fire-tv-stick" className="text-emerald-400 hover:underline">guide d’installation Fire TV Stick</Link> via l’application Downloader pour installer l’APK officiel en moins de 2 minutes.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">Quelle est la différence entre TiviMate gratuit et TiviMate Premium ?</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    La version gratuite affiche les chaînes en direct. La licence TiviMate Companion débloque le <Link href="/catalogue-vod" className="text-emerald-400 hover:underline">catalogue VOD 4K</Link>, le multi-écrans et la gestion des favoris personnalisés.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">TiviMate fonctionne-t-il sur Smart TV Samsung ou LG ?</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    TiviMate nécessite Android TV ou Fire OS. Sur une <Link href="/guide-installation/smart-tv-samsung-lg" className="text-emerald-400 hover:underline">Smart TV Samsung ou LG</Link> sans boîtier externe, utilisez plutôt <Link href="/applications/iptv-smarters-pro" className="text-emerald-400 hover:underline">IPTV Smarters Pro</Link> ou <Link href="/applications/ibo-player" className="text-emerald-400 hover:underline">IBO Player</Link>.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border-2 border-emerald-500/50 space-y-5">
              <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-600 text-white text-[11px] font-bold uppercase">
                100% Compatible TiviMate
              </span>
              <h3 className="text-lg font-bold text-white">Besoin d'un abonnement 4K stable pour TiviMate ?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Activez votre formule <strong>Abonnement IPTV 12 Mois VIP</strong> avec plus de 25 000 chaînes directes sans freeze et 2 écrans simultanés inclus pour exploiter le mode multi-vues de TiviMate.
              </p>
              <Link
                href="/abonnement-iptv-12-mois"
                className="w-full flex items-center justify-center py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Formule VIP 12 Mois &rarr;
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Autres Applications Recommandées</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/applications/iptv-smarters-pro" className="text-slate-300 hover:text-emerald-400 flex items-center justify-between">
                    <span>IPTV Smarters Pro Officiel</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/applications/ibo-player" className="text-slate-300 hover:text-emerald-400 flex items-center justify-between">
                    <span>IBO Player Pro (Smart TV)</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/applications/smart-iptv" className="text-slate-300 hover:text-emerald-400 flex items-center justify-between">
                    <span>Smart IPTV (SIPTV)</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/applications/xciptv" className="text-slate-300 hover:text-emerald-400 flex items-center justify-between">
                    <span>XCIPTV Player</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/guide-iptv/meilleur-abonnement-iptv" className="text-slate-300 hover:text-emerald-400 flex items-center justify-between">
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
