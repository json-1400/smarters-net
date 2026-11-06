import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Tv, 
  Monitor, 
  CheckCircle2, 
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

const PAGE_CANONICAL = 'https://smarterspro12.net/applications/smart-iptv';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Smart IPTV (SIPTV) : Activation, Chargement M3U & Abonnement France",
    description: "Guide complet Smart IPTV (SIPTV) en France : Téléversement de liste M3U par adresse MAC, activation officielle siptv.app et abonnement 4K sans coupure.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'smart iptv',
      'activation smart iptv',
      'siptv',
      'smart iptv samsung',
      'smart iptv lg',
      'televerser liste smart iptv',
      'siptv app france'
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
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.5',
          ratingCount: '1120',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: 'Comment Activer et Charger sa Liste M3U sur Smart IPTV (SIPTV)',
        description: 'Tutoriel officiel pour associer votre lien M3U à votre téléviseur via le portail siptv.app.',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Récupérer l\'adresse MAC de votre téléviseur',
            text: 'Ouvrez Smart IPTV sur votre TV et notez l\'adresse MAC (ex: 00:1a:79:xx:xx:xx) affichée à l\'écran.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Ouvrir le portail siptv.app',
            text: 'Rendez-vous sur siptv.app/mylist depuis votre navigateur web.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Coller le lien de votre abonnement',
            text: 'Entrez votre adresse MAC dans le champ MAC, collez votre URL M3U dans le champ URL, cochez "Save online" et validez en cliquant sur "Send".',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Recharger l\'application sur votre TV',
            text: 'Redémarrez l\'application Smart IPTV sur votre téléviseur : vos chaînes et bouquets TV apparaissent immédiatement.',
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
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Comment activer l’application Smart IPTV (SIPTV) sur ma TV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Après les 7 jours d’essai, l’activation de l’application Smart IPTV s’effectue une seule fois (5,49 €) sur le site officiel siptv.app/activation à l’aide de l’adresse MAC de votre téléviseur.',
            },
          },
          {
            '@type': 'Question',
            name: 'Pourquoi Smart IPTV affiche « Check playlist URL » au démarrage ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ce message survient généralement quand la playlist dépasse la mémoire vive allouée de la Smart TV ou si le lien M3U est corrompu. Réduire le nombre de bouquets résout immédiatement ce blocage.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quelle alternative choisir si Smart IPTV n’est plus dans mon store TV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sur les Smart TV Samsung et LG récentes, IPTV Smarters Pro (Smarters Player Lite) ou IBO Player Pro sont les deux alternatives les plus modernes et performantes.',
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
            <span className="text-slate-200 font-medium" aria-current="page">Smart IPTV</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-blue-400" />
            <span>Lecteur Historique Smart TV &middot; Note : 4.5 / 5</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Smart IPTV (SIPTV) : Activation, Chargement M3U & Abonnement France
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Pionnier du streaming sur téléviseurs connectés Samsung et LG, <strong>Smart IPTV</strong> (SIPTV) reste une solution ultra-légère pour lire vos chaînes en direct. Découvrez comment téléverser votre lien M3U via le portail officiel et configurer vos flux 4K sans aucune latence.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-10">
            
            {/* Section 1: Upload Step-by-Step */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-400" />
                <span>Comment Téléverser Votre Playlist M3U sur Smart IPTV ?</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Le chargement de vos chaînes sur Smart IPTV s'effectue entièrement en ligne via le portail web de l'application à l'aide de l'<strong>adresse MAC</strong> de votre téléviseur :
              </p>

              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white">Étape 1 : Récupérer l'adresse MAC de votre téléviseur</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Lancez Smart IPTV sur votre téléviseur. Repérez votre <strong>Adresse MAC</strong> (suite de 12 caractères hexadécimaux du type <em>a1:b2:c3:d4:e5:f6</em>) affichée au centre de l'écran d'accueil ou dans le menu des réglages.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white">Étape 2 : Chargement en ligne sur le portail siptv.app/mylist</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Depuis votre smartphone ou ordinateur, ouvrez la page officielle <em>siptv.app/mylist</em>. Dans le formulaire <strong>Upload playlist to Smart IPTV</strong>, tapez votre adresse MAC puis collez l'URL M3U complète de votre <strong>abonnement IPTV 4K</strong>.
                  </p>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white">Étape 3 : Paramètres EPG France et option Save Online</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Cochez impérativement la case <strong>Save online</strong> pour conserver votre liste en mémoire cloud. Dans le menu déroulant des pays pour l'EPG, sélectionnez <strong>France</strong> afin d'afficher la grille des programmes en français, puis cliquez sur <strong>Send</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Memory & Anti-Buffering */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-blue-400" />
                <span>Optimisation Mémoire et Réglages Anti-Buffer sur Smart IPTV</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Les téléviseurs connectés plus anciens disposent d'une mémoire RAM limitée. Pour éviter les plantages ou les ralentissements lors du zapping, appliquez ces recommandations :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">Prévention du bug Check playlist URL</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Si l'application affiche ce message d'erreur, c'est que votre playlist contient trop d'éléments pour la mémoire de la TV. Demandez à notre support d'activer le filtre de bouquets pour ne conserver que les chaînes françaises et le sport en direct.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">Réglage du Stream Type et Buffer</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Dans les paramètres de Smart IPTV sur votre TV (touche rouge ou bleue de la télécommande), configurez le <strong>Stream Type</strong> sur <em>NC Auto</em> ou <em>MPEG-TS</em> pour garantir une reprise instantanée du flux sans coupure d'image.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Smart TV Apps Comparison */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Smart IPTV vs IBO Player vs IPTV Smarters Pro : Que Choisir en 2026 ?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Voici un comparatif rapide pour vous aider à choisir le lecteur le plus adapté à votre modèle de Smart TV :
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left text-xs sm:text-sm text-slate-300 border-collapse">
                  <thead className="bg-slate-950 text-slate-200 text-[11px] sm:text-xs uppercase font-bold">
                    <tr>
                      <th className="p-3 sm:p-3.5">Critère</th>
                      <th className="p-3 sm:p-3.5">Smart IPTV (SIPTV)</th>
                      <th className="p-3 sm:p-3.5">IBO Player Pro</th>
                      <th className="p-3 sm:p-3.5">IPTV Smarters Pro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr className="hover:bg-slate-800/40">
                      <td className="p-3 sm:p-3.5 font-medium text-white">Interface Graphique</td>
                      <td className="p-3 sm:p-3.5">Classique (texte simple)</td>
                      <td className="p-3 sm:p-3.5 text-cyan-400">Moderne avec jaquettes</td>
                      <td className="p-3 sm:p-3.5 text-blue-400 font-semibold">Style SVOD moderne</td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="p-3 sm:p-3.5 font-medium text-white">Gestion Films & Séries VOD</td>
                      <td className="p-3 sm:p-3.5 text-slate-400">Rudimentaire</td>
                      <td className="p-3 sm:p-3.5 text-emerald-400">Excellente (Catégories)</td>
                      <td className="p-3 sm:p-3.5 text-emerald-400 font-semibold">Complète (Résumés + Cast)</td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="p-3 sm:p-3.5 font-medium text-white">Tarif de l'Application</td>
                      <td className="p-3 sm:p-3.5">5,49 € (licence à vie)</td>
                      <td className="p-3 sm:p-3.5">~8 € (licence à vie)</td>
                      <td className="p-3 sm:p-3.5 text-emerald-400 font-semibold">100% Gratuit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ Smart IPTV */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Questions Fréquentes sur Smart IPTV (SIPTV)
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">Comment activer l’application Smart IPTV (SIPTV) sur ma TV ?</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    L’activation logicielle de SIPTV (5,49 € à vie par téléviseur) se règle sur le portail officiel <em>siptv.app/activation</em> avec votre adresse MAC, avant d’y charger votre <Link href="/abonnement-iptv-12-mois" className="text-blue-400 hover:underline">abonnement IPTV 4K</Link>.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">Pourquoi Smart IPTV affiche « Check playlist URL » au démarrage ?</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Sur certains téléviseurs anciens, une playlist M3U de plus de 25 000 chaînes dépasse la mémoire cache de l’application. Contactez notre <Link href="/support" className="text-blue-400 hover:underline">support client 7j/7</Link> pour alléger votre liste M3U en 2 minutes.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h3 className="text-sm font-bold text-white">Quelle alternative choisir si Smart IPTV n’est plus dans mon store TV ?</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Consultez notre <Link href="/guide-installation/smart-tv-samsung-lg" className="text-blue-400 hover:underline">guide Smart TV Samsung &amp; LG</Link> pour installer gratuitement <Link href="/applications/iptv-smarters-pro" className="text-blue-400 hover:underline">IPTV Smarters Pro</Link> ou <Link href="/applications/ibo-player" className="text-blue-400 hover:underline">IBO Player Pro</Link>.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border-2 border-blue-500/50 space-y-5">
              <span className="inline-block px-2.5 py-1 rounded-md bg-blue-600 text-white text-[11px] font-bold uppercase">
                Lien M3U Optimisé 4K
              </span>
              <h3 className="text-lg font-bold text-white">Abonnement 4K compatible Smart IPTV</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Obtenez un lien M3U optimisé et allégé pour un chargement instantané sur Smart IPTV, sans ralentissement ni freeze.
              </p>
              <Link
                href="/tarifs-abonnement"
                className="w-full flex items-center justify-center py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Découvrir les Tarifs &rarr;
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Autres Applications Recommandées</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/applications/iptv-smarters-pro" className="text-slate-300 hover:text-blue-400 flex items-center justify-between">
                    <span>IPTV Smarters Pro Officiel</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/applications/ibo-player" className="text-slate-300 hover:text-blue-400 flex items-center justify-between">
                    <span>IBO Player Pro (Smart TV)</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/applications/tivimate" className="text-slate-300 hover:text-blue-400 flex items-center justify-between">
                    <span>TiviMate IPTV Player</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/applications/xciptv" className="text-slate-300 hover:text-blue-400 flex items-center justify-between">
                    <span>XCIPTV Player</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  </Link>
                </li>
                <li>
                  <Link href="/guide-iptv/meilleur-abonnement-iptv" className="text-slate-300 hover:text-blue-400 flex items-center justify-between">
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
