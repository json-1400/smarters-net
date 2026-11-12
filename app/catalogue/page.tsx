import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Tv, 
  Film, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Globe, 
  ArrowRight, 
  Sparkles, 
  HelpCircle,
  Radio,
  CheckCircle2,
  Trophy,
  SlidersHorizontal
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PAGE_CANONICAL = `${SITE_CONFIG.domain}/catalogue`;

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'Catalogue IPTV 2026 : +25 000 Chaînes Direct 4K & +90 000 VOD Complètes',
    description:
      'Explorez le catalogue IPTV Smarters Pro : +25 000 chaînes en direct 4K (France, Belgique, Suisse, Canada) et +90 000 films et séries VOD sans coupure avec zapping instantané.',
    canonicalUrl: PAGE_CANONICAL,
    keywords: [
      'catalogue iptv',
      'liste catalogue chaines iptv',
      'catalogue vod iptv',
      'bouquet iptv 4k france',
      'chaines directes iptv smarters pro',
      'films et series iptv',
    ],
  });
}

export default function CatalogueHubPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${PAGE_CANONICAL}#webpage`,
        url: PAGE_CANONICAL,
        name: 'Catalogue IPTV Smarters Pro 2026 : +25 000 Chaînes TV & +90 000 VOD',
        description:
          'Répertoire exhaustif des chaînes de télévision en direct 4K et de la bibliothèque multimédia VOD (films, séries, documentaires) de Smarters Pro France.',
        isPartOf: { '@id': `${SITE_CONFIG.domain}/#website` },
        inLanguage: 'fr-FR',
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Que contient l\'intégralité du catalogue IPTV Smarters Pro ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Notre catalogue réunit plus de 25 000 chaînes TV en direct diffusées en 4K UHD et 60 FPS (France, Belgique, Suisse, Canada, Maghreb, UK, USA) ainsi que plus de 90 000 films et séries VOD actualisés quotidiennement en VF et VOSTFR.',
            },
          },
          {
            '@type': 'Question',
            name: 'Le catalogue est-il accessible sur tous les appareils ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui. Le catalogue complet est compatible avec les Smart TV (Samsung, LG), Fire TV Stick, Box Android (Nvidia Shield, Xiaomi), PC Windows, Mac, iPhone, iPad et smartphones Android via IPTV Smarters Pro, TiviMate et IBO Player.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment sont organisées les chaînes et les VOD dans l\'application ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Grâce à l\'API Xtream Codes, les flux sont automatiquement classés par dossiers pays, bouquets thématiques (Sport, Cinéma, TNT, Enfants) et catégories VOD (Genres, Nouveautés 2026, 4K HDR) avec logos HD et guide TV EPG.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_CANONICAL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Catalogue', item: PAGE_CANONICAL },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans antialiased w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <Header />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Fil d'Ariane" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <ol className="flex items-center flex-wrap gap-2 text-xs text-slate-400">
          <li><Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link></li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li><span className="text-slate-200 font-medium" aria-current="page">Catalogue</span></li>
        </ol>
      </nav>

      {/* Hero Header Section */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-xl sm:rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] sm:text-xs font-semibold max-w-full text-center">
            <Radio className="w-3.5 h-3.5 shrink-0" />
            <span>Hub Multimédia Officiel &middot; +25 000 Canaux &amp; +90 000 VOD</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Catalogue IPTV Smarters Pro : Chaînes en Direct 4K &amp; Bibliothèque VOD
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Accédez à l'univers télévisuel le plus exhaustif de France. Choisissez ci-dessous d'explorer la <strong>grille des chaînes TV en direct</strong> ou de parcourir la <strong>bibliothèque de films et séries VOD en 4K Ultra HD</strong>.
          </p>
        </div>
      </header>

      {/* Direct Answer AEO Box */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="p-6 rounded-2xl bg-slate-900 border-l-4 border-l-blue-500 border border-slate-800 text-sm leading-relaxed text-slate-200 shadow-xl space-y-2">
          <p>
            <strong>En résumé :</strong> Le <strong>catalogue IPTV Smarters Pro</strong> comprend l'ensemble des bouquets TV mondiaux (+25 000 chaînes directes) et une vidéothèque à la demande (+90 000 titres VOD). Tous les flux bénéficient d'une diffusion en <strong>4K UHD 60 FPS sans coupure</strong> grâce à nos serveurs CDN européens 10 Gbps, avec guide EPG 7 jours et compatibilité intégrale sur Smart TV, Firestick, Box Android, Apple TV et PC.
          </p>
        </div>
      </section>

      {/* Main Dual Mega-Cards Section */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16 flex-grow">
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Choisissez Votre Espace Catalogue
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Sélectionnez votre univers pour afficher le répertoire interactif, les filtres par pays ou les bandes-annonces :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Mega-Card 1: Chaînes Live TV */}
            <div className="group rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 hover:border-blue-500/50 p-6 sm:p-10 flex flex-col justify-between space-y-8 shadow-xl transition-all duration-300 hover:-translate-y-1.5">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Tv className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-black uppercase tracking-wider">
                    Live TV &middot; 4K 60 FPS
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-white group-hover:text-blue-300 transition-colors">
                    Liste des Chaînes TV en Direct
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Plus de <strong>25 000 chaînes</strong> triées par pays (France TNT, Belgique, Suisse, Canada, Maghreb, UK, USA) et par thématiques (Sport Direct, Cinéma, Séries, Info 24/7).
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300 border-t border-slate-800/80 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Bouquets TNT, Canal+, beIN Sports, RMC &amp; DAZN</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Filtres par accordéons réactifs par pays ou par thématique</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Guide des programmes électronique (EPG) &amp; Replay 7 jours</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href="/catalogue/chaines"
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.01]"
                >
                  <span>Explorer les +25 000 Chaînes TV</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Mega-Card 2: VOD Films & Séries */}
            <div className="group rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 hover:border-purple-500/50 p-6 sm:p-10 flex flex-col justify-between space-y-8 shadow-xl transition-all duration-300 hover:-translate-y-1.5">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                    <Film className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-black uppercase tracking-wider">
                    VOD &middot; +90 000 Titres
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-white group-hover:text-purple-300 transition-colors">
                    Bibliothèque VOD Films &amp; Séries
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Plus de <strong>90 000 films et séries</strong> en 4K Ultra HD avec audio multicanal (VF, VOSTFR 5.1). Nouveautés 2026, sagas complètes et documentaires actualisés quotidiennement.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300 border-t border-slate-800/80 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Films du box-office récents &amp; séries événements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Carrousel swiper automatique avec bandes-annonces en pop-up</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Pistes audio VF / VOSTFR Dolby Atmos &amp; sous-titres personnalisables</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href="/catalogue/vod"
                  className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.01]"
                >
                  <span>Explorer le Catalogue VOD 4K</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Technical Highlights Section */}
        <section className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Une Infrastructure Haute Performance au Service du Catalogue
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Pourquoi notre diffusion garantit une stabilité irréprochable sur 100 % de nos flux :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <Zap className="w-6 h-6 text-blue-400" />
              <h3 className="text-base font-bold text-white">Serveurs CDN 10 Gbps</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Réseau de distribution de contenu européen à très haut débit garantissant un zapping instantané en moins d'une demi-seconde.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Technologie Anti-Freeze v4.2</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Équilibrage dynamique de la charge pour éviter toute coupure ou écran noir lors des grands rendez-vous sportifs mondiaux.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <Sparkles className="w-6 h-6 text-amber-400" />
              <h3 className="text-base font-bold text-white">Mises à Jour Quotidiennes</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Nouveaux films dès leur sortie, épisodes de séries ajoutés le jour même et ajustement en continu des fréquences directes.
              </p>
            </div>
          </div>
        </section>

        {/* Hub FAQ */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Questions Fréquentes sur le Catalogue
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Les chaînes et VOD sont-elles toutes incluses ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Oui. Quel que soit votre abonnement (3, 6 ou 12 mois), vous avez accès à l'intégralité du bouquet sans frais additionnel.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Peut-on tester le catalogue avant de s'abonner ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Consultez notre page <Link href="/test-iptv-gratuit" className="text-blue-400 underline">test IPTV gratuit</Link> pour demander une session d'essai 24h et évaluer la qualité en direct.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Puis-je créer mes listes de favoris ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Absolument. Sur IPTV Smarters Pro et TiviMate, ajoutez vos chaînes et séries favorites en un clic pour un accès rapide.
              </p>
            </div>
          </div>
        </section>

        {/* Final Hub CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 border border-blue-500/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Accédez Immédiatement à l'Intégralité du Catalogue 4K
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Profitez de nos formules dès <strong>4,16 € / mois</strong> avec activation express de vos accès Xtream Codes et M3U en moins de 15 minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/tarifs"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
            >
              Voir la Grille des Tarifs &amp; Commander
            </Link>
            <Link
              href="/test-iptv-gratuit"
              className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Conditions du Test IPTV Gratuit
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}

