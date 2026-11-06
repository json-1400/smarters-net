import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Film,
  Tv,
  Sparkles,
  ChevronRight,
  Users,
  Lock,
  HelpCircle,
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PAGE_CANONICAL = 'https://smarterspro12.net/catalogue-vod';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'Catalogue VOD IPTV : +90 000 Films, Séries & 4K Ultra HD (2026)',
    description:
      'Explorez notre catalogue VOD IPTV complet en France : Plus de 90 000 films récents et séries complètes en 4K UHD, VF et VOSTFR avec mises à jour quotidiennes.',
    canonicalUrl: PAGE_CANONICAL,
    keywords: [
      'catalogue vod iptv',
      'films iptv',
      'series iptv france',
      'iptv 4k uhd',
      'iptv vod francais',
      'iptv streaming films series',
      'iptv multi ecrans vod',
    ],
  });
}

export default function CatalogueVodPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${PAGE_CANONICAL}#product`,
        name: 'Catalogue VOD IPTV Smarters Pro 4K',
        description:
          'Vidéothèque de plus de 90 000 films et séries en ultra haute définition 4K avec son Dolby multilingue.',
        brand: { '@type': 'Brand', name: 'IPTV Smarters Pro' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_CANONICAL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Catalogue VOD', item: PAGE_CANONICAL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'À quelle fréquence le catalogue VOD films et séries est-il mis à jour ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Notre catalogue VOD de plus de 90 000 titres est actualisé automatiquement chaque jour avec les dernières sorties cinéma box-office et les nouveaux épisodes de séries en VF et VOSTFR.',
            },
          },
          {
            '@type': 'Question',
            name: 'Peut-on changer la langue audio (VF / VOSTFR) et les sous-titres sur IPTV Smarters Pro ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, le lecteur intégré d’IPTV Smarters Pro et de TiviMate permet de basculer en un clic entre la piste audio française (VF Dolby 5.1), la version originale (VO) et les sous-titres français.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment fonctionne le contrôle parental PIN sur le catalogue VOD ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vous pouvez verrouiller par code PIN à 4 chiffres ou masquer intégralement les catégories sensibles (+18) dans les réglages d’IPTV Smarters Pro ou sur simple demande lors de la commande.',
            },
          },
          {
            '@type': 'Question',
            name: 'Le catalogue VOD 4K est-il inclus sans supplément dans tous les abonnements ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, l’intégralité des +90 000 films et séries VOD en 4K Ultra HD et Full HD est incluse d’office dans nos formules 3 mois, 6 mois et 12 mois VIP.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />
      <Header />

      <nav aria-label="Fil d'Ariane" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
        <ol className="flex items-center space-x-2 text-xs text-slate-400">
          <li><Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link></li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li><span className="text-slate-200 font-medium" aria-current="page">Catalogue VOD</span></li>
        </ol>
      </nav>

      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Médiathèque 4K &middot; +90 000 Titres &middot; Mises à Jour Quotidiennes</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Catalogue VOD IPTV : +90 000 Films, Séries &amp; Qualité 4K Ultra HD
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Accédez à une cinémathèque sans équivalent directement sur votre téléviseur avec votre <strong>catalogue VOD IPTV</strong>. Toutes les dernières sorties cinéma et saisons complètes de vos séries favorites en version française (VF) et originale sous-titrée (VOSTFR), en complément de nos <Link href="/chaine" className="text-blue-400 hover:underline font-semibold">+25 000 chaînes directes</Link> et du <Link href="/sport" className="text-blue-400 hover:underline font-semibold">bouquet Sport 4K</Link>.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-16">
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Les Atouts Clés de Notre Vidéothèque VOD IPTV
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explorez une expérience cinéma à domicile pensée pour toute la famille avec un zapping réactif et une compatibilité multi-supports :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Film className="w-7 h-7 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Films Box-Office &amp; Cinéma</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Des milliers de longs-métrages récents classés par genre (Action, Comédie, Thriller, Science-Fiction, Animation) en <strong>qualité 4K Ultra HD</strong> avec piste <strong>Dolby 5.1</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Tv className="w-7 h-7 text-purple-400" />
              <h3 className="text-lg font-bold text-white">Séries Complètes &amp; Nouveautés</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Retrouvez les <strong>saisons intégrales</strong> de vos sagas préférées et les nouveaux épisodes ajoutés en direct avec des <strong>mises à jour quotidiennes</strong> en VF et VOSTFR.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Users className="w-7 h-7 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Multi-Écrans &amp; Contrôle Parental</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Profitez du <Link href="/tarifs-abonnement/iptv-multi-ecran" className="text-blue-400 hover:underline">streaming multi-écran</Link> familial et sécurisez l&apos;accès des enfants grâce à notre <Link href="/catalogue-vod/iptv-adulte" className="text-blue-400 hover:underline">contrôle parental sécurisé</Link> par code PIN.
              </p>
            </div>
          </div>
        </section>

        {/* Section Thématiques VOD Détaillées */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Organisation et Thématiques du Catalogue VOD IPTV
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Pour faciliter votre navigation sur <strong>IPTV Smarters Pro</strong> et vos lecteurs multimédias, nos contenus à la demande sont compartimentés par univers dédiés :
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-base font-bold text-white">Films Récentes Sorties 4K</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Derniers chefs-d'œuvre du box-office international disponibles en résolution native 2160p et encodage <strong>HEVC H.265</strong> pour économiser votre bande passante.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-base font-bold text-white">Séries VF &amp; VOSTFR</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Épisodes classés chronologiquement par saison avec mémorisation de reprise de lecture sur Smart TV, Firestick, PC et smartphones.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-base font-bold text-white">Documentaires &amp; Société</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reportages animaliers, histoire, investigations, sciences et découvertes issus des plus grands producteurs internationaux en Full HD.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-base font-bold text-white">Univers Enfants &amp; Famille</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Films d'animation, dessins animés classiques et comédies familiales protégés contre les contenus sensibles pour les plus jeunes.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-bold text-white">
              IPTV Tout-en-Un vs Cumul des Abonnements SVOD Classiques
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Aujourd&apos;hui, cumuler plusieurs plateformes de streaming et chaînes sportives dépasse 80 € par mois. Notre <Link href="/abonnement-iptv-12-mois" className="text-blue-400 hover:underline font-semibold">formule IPTV 12 mois VIP</Link> regroupe tous ces contenus en une interface unique dès <strong>4,16 € par mois</strong>.
            </p>
          </div>

          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300 border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase text-[11px]">
                  <th className="py-3 px-4">Critère</th>
                  <th className="py-3 px-4">Abonnements SVOD Séparés</th>
                  <th className="py-3 px-4 text-blue-400">Abonnement IPTV Smarters Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Coût mensuel moyen</td>
                  <td className="py-3 px-4 text-red-400">75 € à 95 € / mois</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">Dès 4,16 € / mois (49.99 €/an)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Volume de films &amp; séries</td>
                  <td className="py-3 px-4">Fragmenté sur 5 applications</td>
                  <td className="py-3 px-4 font-semibold text-white">+90 000 titres en 1 seule app</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Chaînes TV en Direct &amp; Sport</td>
                  <td className="py-3 px-4 text-slate-500">Non inclus (surcoût nécessaire)</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">+25 000 chaînes incluses</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Résolution maximale</td>
                  <td className="py-3 px-4">Surcoût pour l&apos;option 4K</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">4K Ultra HD &amp; 60 FPS inclus</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-extrabold text-white">Questions Fréquentes sur le Catalogue VOD 4K</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2"><HelpCircle className="w-4 h-4 text-blue-400 shrink-0" /><span>À quelle fréquence la VOD est-elle mise à jour ?</span></h3>
              <p className="text-xs text-slate-400 leading-relaxed">Notre vidéothèque de +90 000 titres est actualisée quotidiennement avec les dernières nouveautés cinéma et séries en VF et VOSTFR sans aucune manipulation de votre part.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2"><HelpCircle className="w-4 h-4 text-blue-400 shrink-0" /><span>Peut-on choisir entre VF, VOSTFR et Dolby 5.1 ?</span></h3>
              <p className="text-xs text-slate-400 leading-relaxed">Oui, le lecteur intégré sur <Link href="/applications/iptv-smarters-pro" className="text-blue-400 hover:underline">IPTV Smarters Pro</Link> et <Link href="/applications/tivimate" className="text-blue-400 hover:underline">TiviMate</Link> permet de sélectionner la piste audio et les sous-titres en un clic.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2"><Lock className="w-4 h-4 text-amber-400 shrink-0" /><span>Comment activer le contrôle parental sur la VOD ?</span></h3>
              <p className="text-xs text-slate-400 leading-relaxed">Consultez notre <Link href="/catalogue-vod/iptv-adulte" className="text-blue-400 hover:underline">guide Contrôle Parental &amp; PIN</Link> pour verrouiller ou masquer totalement les catégories réservées aux adultes.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2"><HelpCircle className="w-4 h-4 text-blue-400 shrink-0" /><span>La VOD est-elle incluse dans toutes les formules ?</span></h3>
              <p className="text-xs text-slate-400 leading-relaxed">Oui, 100 % du catalogue VOD 4K est inclus sans supplément dans nos abonnements 3 mois, 6 mois et 12 mois VIP.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2"><HelpCircle className="w-4 h-4 text-blue-400 shrink-0" /><span>Peut-on reprendre la lecture d'un film là où on s'est arrêté ?</span></h3>
              <p className="text-xs text-slate-400 leading-relaxed">Oui, IPTV Smarters Pro et TiviMate enregistrent votre progression à la seconde près. Vous pouvez débuter un film sur votre Smart TV et poursuivre sa lecture sur smartphone ou tablette.</p>
            </div>
          </div>
        </section>

        <div className="p-8 rounded-2xl bg-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Accédez immédiatement à toute la VOD 4K</h3>
            <p className="text-xs text-slate-300">Activez votre abonnement en 15 minutes et profitez du cinéma illimité.</p>
          </div>
          <Link
            href="/abonnement-iptv-12-mois"
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-lg"
          >
            Découvrir la Formule 12 Mois VIP &rarr;
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
