import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Film, 
  ChevronRight, 
  Tv, 
  Sparkles, 
  HelpCircle, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  Star,
  Users
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AutoVodSwiper } from '@/components/catalogue/AutoVodSwiper';

const PAGE_CANONICAL = `${SITE_CONFIG.domain}/catalogue/vod`;

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'Catalogue VOD IPTV 2026 : +90 000 Films & Séries 4K Sans Coupure',
    description:
      'Explorez notre catalogue VOD IPTV : +90 000 films récents et séries complètes en 4K Ultra HD, VF et VOSTFR avec carrousel automatique, bandes-annonces et streaming fluide.',
    canonicalUrl: PAGE_CANONICAL,
    keywords: [
      'catalogue vod iptv',
      'films vod iptv',
      'series vod iptv',
      'vod iptv 4k france',
      'catalogue films series iptv smarters pro',
      'streaming vod sans coupure',
    ],
  });
}

export default function CatalogueVodPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${PAGE_CANONICAL}#webpage`,
        url: PAGE_CANONICAL,
        name: 'Catalogue VOD IPTV Smarters Pro 2026 : +90 000 Films & Séries 4K',
        description:
          'Répertoire des contenus à la demande (VOD) 4K Ultra HD : nouveautés box-office, intégrales de séries et documentaires en streaming sans coupure.',
        isPartOf: { '@id': `${SITE_CONFIG.domain}/#website` },
        inLanguage: 'fr-FR',
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'À quelle fréquence la bibliothèque VOD est-elle mise à jour ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Notre catalogue est actualisé quotidiennement. Les sorties cinéma récentes sont ajoutées dès leur disponibilité numérique, et les nouveaux épisodes de séries sont mis en ligne quelques heures après leur diffusion officielle.',
            },
          },
          {
            '@type': 'Question',
            name: 'Puis-je choisir les pistes audio en VF, VOSTFR ou Dolby 5.1 ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui. Le lecteur intégré sur IPTV Smarters Pro et TiviMate vous permet de sélectionner d\'un clic la langue (Français, Anglais, Espagnol, Arabe) et d\'activer les sous-titres synchronisés.',
            },
          },
          {
            '@type': 'Question',
            name: 'La VOD est-elle incluse dans toutes les formules d\'abonnement ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, l\'accès illimité aux plus de 90 000 titres VOD est inclus sans aucun supplément dans nos formules 3 mois, 6 mois et 12 mois VIP.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_CANONICAL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Catalogue', item: `${SITE_CONFIG.domain}/catalogue` },
          { '@type': 'ListItem', position: 3, name: 'Catalogue VOD', item: PAGE_CANONICAL },
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
          <li><Link href="/catalogue" className="hover:text-blue-400 transition-colors">Catalogue</Link></li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li><span className="text-slate-200 font-medium" aria-current="page">Catalogue VOD</span></li>
        </ol>
      </nav>

      {/* Hero Header Section */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-xl sm:rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[11px] sm:text-xs font-semibold max-w-full text-center">
            <Film className="w-3.5 h-3.5 shrink-0" />
            <span>Bibliothèque Cinéma &amp; Séries &middot; +90 000 Titres 4K UHD</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Catalogue VOD IPTV : +90 000 Films &amp; Séries 4K Ultra HD
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Parcourez notre <strong>catalogue VOD IPTV</strong> haute fidélité. Nouveautés cinéma 2026, séries cultes intégrales et documentaires disponibles en streaming instantané avec audio multilingue VF / VOSTFR 5.1.
          </p>
        </div>
      </header>

      {/* Direct Answer AEO Box */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="p-6 rounded-2xl bg-slate-900 border-l-4 border-l-purple-500 border border-slate-800 text-sm leading-relaxed text-slate-200 shadow-xl space-y-2">
          <p>
            <strong>En résumé :</strong> Le <strong>catalogue VOD IPTV</strong> réunit plus de 90 000 films et séries en qualité <strong>4K Ultra HD et 1080p</strong> avec débits vidéo optimisés sans mise en mémoire tampon (*buffering*). Il intègre les productions des plus grandes plateformes de streaming mondiales, l'ensemble des sagas intégrales avec reprise de lecture automatique et un moteur de recherche par titre et genre.
          </p>
        </div>
      </section>

      {/* Main Auto-Swiper Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16 flex-grow">
        
        {/* Interactive Auto-Advancing Swiper */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Vitrine Multimédia &middot; Défilement Automatique &amp; Bandes-Annonces
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Survolez une affiche pour suspendre le défilement et cliquez sur un titre pour ouvrir sa fiche détaillée et lancer la bande-annonce officielle :
            </p>
          </div>

          <AutoVodSwiper />
        </section>

        {/* Categories and Features Grid */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Une Organisation Pensée pour Votre Confort de Visionnage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Film className="w-6 h-6 text-purple-400" />
              <h3 className="text-base font-bold text-white">Sorties Cinéma Immédiates</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Les plus grands blockbusters ajoutés chaque semaine dès leur parution en vidéo, en résolution native 4K HDR avec son surround 5.1.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Tv className="w-6 h-6 text-blue-400" />
              <h3 className="text-base font-bold text-white">Séries Complètes en Binge-Watching</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Des milliers de saisons complètes avec reprise de lecture synchronisée d'un écran à l'autre (TV salon, mobile, tablette).
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Users className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Multi-Écrans &amp; Contrôle Parental</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Profitez du <Link href="/tarifs/iptv-multi-ecran" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">streaming multi-écran</Link> familial et protégez les enfants grâce au code PIN de verrouillage intégré dans l'application.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Questions Fréquentes sur la VOD
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Puis-je reprendre un film là où je l'ai arrêté ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Oui. Sur IPTV Smarters Pro et TiviMate, votre progression est mémorisée à la seconde près.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Tous les films sont-ils disponibles en français ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                La quasi-totalité du catalogue propose le choix entre la version française (VF) et la version originale sous-titrée (VOSTFR).
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Y a-t-il aussi des chaînes TV en direct ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Oui, découvrez notre <Link href="/catalogue/chaines" className="text-blue-400 underline">liste de +25 000 chaînes TV en direct 4K</Link> également incluse sans surcoût.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 border border-purple-500/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Accédez à Plus de 90 000 Films &amp; Séries 4K dès Aujourd'hui
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Formule VIP 12 mois à seulement <strong>49,99 €</strong> (soit 4,16 € / mois avec 1 mois offert). Activation immédiate de vos codes d'accès en 15 minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/abonnement-iptv-12-mois"
              className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02]"
            >
              Commander l'Abonnement 12 Mois VIP
            </Link>
            <Link
              href="/catalogue/chaines"
              className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Consulter la Liste des Chaînes TV
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}

