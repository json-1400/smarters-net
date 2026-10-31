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
  ShieldCheck 
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/applications/smart-iptv';

export function generateMetadata(): Metadata {
  const title = "Smart IPTV (SIPTV) : Activation, Chargement M3U & Abonnement France";
  const description = "Guide complet Smart IPTV (SIPTV) en France : Téléversement de liste M3U par adresse MAC, activation officielle siptv.app et abonnement 4K sans coupure.";

  return {
    title,
    description,
    keywords: [
      'smart iptv',
      'activation smart iptv',
      'siptv',
      'smart iptv samsung',
      'smart iptv lg',
      'televerser liste smart iptv',
      'siptv app france'
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
            <Tv className="w-3.5 h-3.5" />
            <span>Application Historique Smart TV &middot; Note : 4.5 / 5</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Smart IPTV (SIPTV) : Activation, Chargement M3U & Abonnement France
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            <strong>Smart IPTV</strong> (SIPTV) est le lecteur pionnier sur les téléviseurs connectés Samsung et LG. Découvrez comment charger votre lien M3U via le portail officiel et profiter de nos flux 4K ultra-stables sans latence.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-10">
            
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
              <h2 className="text-xl font-bold text-white">Comment Téléverser Votre Playlist sur Smart IPTV ?</h2>
              <ol className="space-y-4 text-xs sm:text-sm text-slate-300 list-decimal list-inside">
                <li>Lancez Smart IPTV sur votre téléviseur et repérez votre <strong>Adresse MAC</strong> (composée de 12 caractères séparés par deux-points).</li>
                <li>Ouvrez votre navigateur web sur ordinateur ou mobile et rendez-vous sur <code className="bg-slate-950 px-2 py-0.5 rounded text-blue-400">siptv.app/mylist</code>.</li>
                <li>Dans la section <em>Upload playlist to Smart IPTV</em>, entrez votre adresse MAC.</li>
                <li>Collez votre <strong>Lien M3U</strong> complet transmis lors de votre souscription.</li>
                <li>Cochez la case <em>Save online</em> et le pays <em>France</em> pour l'EPG, puis cliquez sur <strong>Send</strong>.</li>
                <li>Redémarrez Smart IPTV sur votre écran de télévision pour charger l'intégralité des chaînes.</li>
              </ol>
            </section>

          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border-2 border-blue-500/50 space-y-5">
              <span className="inline-block px-2.5 py-1 rounded-md bg-blue-600 text-white text-[11px] font-bold uppercase">
                Lien M3U Haute Performance
              </span>
              <h3 className="text-lg font-bold text-white">Abonnement 4K compatible Smart IPTV</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Obtenez un lien M3U optimisé allégé pour un chargement instantané sur Smart IPTV, sans ralentissement.
              </p>
              <Link
                href="/tarifs-abonnement"
                className="w-full flex items-center justify-center py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Découvrir les Tarifs &rarr;
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
