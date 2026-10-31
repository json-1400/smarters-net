import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  HelpCircle, 
  ArrowRight, 
  Flame, 
  Star,
  ChevronRight,
  Clock,
  Tv,
  Award
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/tarifs-abonnement';

export function generateMetadata(): Metadata {
  const title = "Tarifs Abonnement IPTV 2026 : Comparatif des Formules & Prix France";
  const description = "Découvrez la grille tarifaire officielle de nos abonnements IPTV en France. Formules 3, 6 et 12 mois 4K Ultra HD sans coupure dès 3,33€/mois. Activation immédiate.";

  return {
    title,
    description,
    keywords: [
      'tarif abonnement iptv',
      'iptv prix',
      'prix abonnement iptv',
      'comparatif iptv france',
      'iptv pas cher',
      'abonnement iptv 12 mois prix',
      'meilleur tarif iptv 4k'
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
      type: 'website',
    },
  };
}

export default function TarifsAbonnementPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${PAGE_CANONICAL}/#product-catalog`,
        name: 'Abonnements IPTV Smarters Pro 4K France',
        description: 'Gamme complète d\'abonnements IPTV haute performance 4K avec technologie anti-freeze, +25 000 chaînes et +90 000 VOD.',
        brand: {
          '@type': 'Brand',
          name: 'IPTV Smarters Pro',
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'EUR',
          lowPrice: '19.99',
          highPrice: '59.99',
          offerCount: '4',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1420',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Quel est le prix moyen d\'un abonnement IPTV de qualité en France ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'En France, un abonnement IPTV fiable avec serveurs CDN dédiés et garantie anti-coupure coûte généralement entre 35€ et 60€ par an. Les offres à moins de 20€ par an cachent souvent des serveurs saturés qui coupent lors des grands matchs.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment sont livrés mes identifiants après le paiement ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vos identifiants Xtream Codes (nom d\'utilisateur, mot de passe, URL de serveur) et votre lien M3U Plus vous sont envoyés par e-mail et WhatsApp en moins de 15 minutes après validation de la commande.',
            },
          },
          {
            '@type': 'Question',
            name: 'Y a-t-il un engagement ou un renouvellement automatique ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non. Tous nos abonnements sont sans aucun engagement et sans prélèvement automatique. Vous recevez un simple rappel à la fin de votre période et décidez librement de renouveler.',
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
            name: 'Tarifs & Abonnements',
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
            <span className="text-slate-200 font-medium" aria-current="page">Tarifs & Abonnements</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Tarifs Transparents &middot; Sans Engagement &middot; Zéro Frais Cachés</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Tarifs Abonnement IPTV : Comparatif des Formules & Prix France
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Consultez notre comparatif officiel des <strong>tarifs d'abonnement IPTV</strong> en France pour l'année 2026. Profitez d'une diffusion 4K Ultra HD sans coupure, d'un zapping instantané et d'une activation express en moins de 15 minutes.
          </p>
        </div>
      </header>

      {/* Main Pricing Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: 3 Mois */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Formule Découverte
              </span>
              <h2 className="text-2xl font-bold text-white">Abonnement IPTV 3 Mois</h2>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">19.99 €</span>
                <span className="text-xs text-slate-400">/ 3 mois (6,66 €/m)</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Idéal pour tester la stabilité de nos serveurs 4K lors des grands événements sportifs sans engagement longue durée.
              </p>
              
              <ul className="space-y-3 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>1 Connexion active simultanée</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Qualité 4K, Full HD & HD</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>+25 000 Chaînes TV en Direct</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>+90 000 Films & Séries (VOD)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Replay 48h & EPG complet</span>
                </li>
              </ul>
            </div>

            <Link
              href="/checkout?plan=Starter"
              className="w-full flex items-center justify-center py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Commander 3 Mois
            </Link>
          </div>

          {/* Card 2: 12 Mois VIP (Highlight) */}
          <div className="rounded-2xl bg-slate-900 border-2 border-blue-500 p-8 flex flex-col justify-between space-y-6 relative shadow-2xl shadow-blue-950/50">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-md">
              Meilleur Rapport Qualité / Prix
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                  Formule Recommandée
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold">
                  1 Mois Offert
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white">Abonnement IPTV 12 Mois VIP</h2>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">39.99 €</span>
                <span className="text-xs text-slate-400">/ an (soit 3,33 €/m)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Notre offre la plus plébiscitée. Bande passante maximale prioritaire, 2 connexions incluses et zéro freeze garanti.
              </p>
              
              <ul className="space-y-3 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2 font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>2 Connexions simultanées indépendantes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Ultra Haute Définition 4K HDR & 60 FPS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>+25 000 Chaînes Monde & Chaînes Sport</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>+90 000 VOD actualisées quotidiennement</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Assistance prioritaire VIP WhatsApp 7j/7</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <Link
                href="/checkout?plan=Premium"
                className="w-full flex items-center justify-center py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                Commander 12 Mois VIP
              </Link>
              <Link
                href="/abonnement-iptv-12-mois"
                className="w-full block text-center text-xs text-blue-400 hover:text-blue-300 underline pt-1"
              >
                Découvrir tous les détails de l'offre 12 mois &rarr;
              </Link>
            </div>
          </div>

          {/* Card 3: 6 Mois */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Formule Confort
              </span>
              <h2 className="text-2xl font-bold text-white">Abonnement IPTV 6 Mois</h2>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">29.99 €</span>
                <span className="text-xs text-slate-400">/ 6 mois (5,00 €/m)</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Le juste équilibre pour suivre la saison sportive complète en bénéficiant de tous les flux premium.
              </p>
              
              <ul className="space-y-3 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>1 Connexion active simultanée</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Qualité 4K & Full HD</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>+25 000 Chaînes TV en Direct</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>+90 000 Films & Séries (VOD)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Support client francophone 7j/7</span>
                </li>
              </ul>
            </div>

            <Link
              href="/checkout?plan=Confort"
              className="w-full flex items-center justify-center py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Commander 6 Mois
            </Link>
          </div>
        </div>

        {/* Section Comparatif Marché & Rassurance */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-bold text-white">
              Analyse des Prix IPTV en France : Pourquoi les Offres Pas Chères Coupent ?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Sur le marché français, de nombreux fournisseurs affichent des tarifs dérisoires (15€ ou 20€ par an) en surchargeant leurs serveurs. Dès qu'un grand match de football débute (Ligue des Champions, Classico, Coupe du Monde), ces serveurs à bas coût saturent instantanément et provoquent l'écran noir.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Chez <strong>IPTV Smarters Pro France</strong>, notre infrastructure repose sur des grappes de serveurs CDN européens à haute bande passante (jusqu'à 10 Gb/s par nœud) avec redondance automatique. Ce protocole anti-freeze garantit un taux de disponibilité supérieur à 99.9%, même lors des pics d'audience les plus extrêmes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <h3 className="text-sm font-bold text-white">Activation en 15 Minutes</h3>
              <p className="text-xs text-slate-400">
                Traitement manuel prioritaire de votre commande pour vous garantir des identifiants vérifiés et opérationnels.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold text-white">Zéro Renouvellement Caché</h3>
              <p className="text-xs text-slate-400">
                Paiement unique sans prélèvement automatique. Vous êtes totalement libre de renouveler ou non à la fin du terme.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <Tv className="w-5 h-5 text-purple-400" />
              <h3 className="text-sm font-bold text-white">Multi-Appareils 100% Compatible</h3>
              <p className="text-xs text-slate-400">
                Fonctionne sur Fire Stick, Smart TV Samsung/LG, Box Android, Apple TV, iPhone, iPad, PC et Mac.
              </p>
            </div>
          </div>
        </section>

        {/* Section FAQ Tarifs */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Questions Fréquentes sur nos Tarifs & Abonnements
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Retrouvez toutes les précisions sur les moyens de paiement et la gestion de votre abonnement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Quels moyens de paiement sont acceptés ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Nous acceptons les règlements sécurisés par Carte Bancaire (Visa, Mastercard) et PayPal pour vous garantir une protection maximale lors de votre souscription.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Puis-je changer d'appareil en cours d'abonnement ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Oui. Vos codes d'accès Xtream ne sont pas verrouillés sur un seul appareil. Vous pouvez configurer votre abonnement sur votre Smart TV dans le salon et l'utiliser sur votre smartphone ou tablette lors de vos déplacements.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Comment fonctionne l'offre 2 Écrans (Multi-connexions) ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Notre formule 12 Mois VIP inclut 2 connexions indépendantes simultanées. Deux personnes peuvent regarder des chaînes ou des films différents sur deux téléviseurs en même temps sans coupure.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Existe-t-il une période d'essai ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Nous proposons la formule Découverte 3 Mois à 19.99€, idéale pour tester en conditions réelles sans engagement annuel. Si vous avez une question préalable, notre support WhatsApp vous répond immédiatement.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
