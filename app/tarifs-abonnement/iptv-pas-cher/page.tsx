import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  TrendingDown, 
  Zap, 
  Tv, 
  Flame, 
  HelpCircle, 
  ChevronRight, 
  ArrowRight,
  Clock,
  Sparkles,
  Lock,
  Headphones
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PAGE_CANONICAL = 'https://smarterspro12.net/tarifs-abonnement/iptv-pas-cher';

export function generateMetadata(): Metadata {
  const title = "IPTV Pas Cher et Fiable en France (2026) : Comparatif, Prix & Anti-Arnaque";
  const description = "Guide complet 2026 de l'IPTV pas cher et stable en France : comparez les tarifs, évitez les arnaques à 15€ et accédez à nos formules 4K fiables dès 19,99€.";

  return {
    title,
    description,
    keywords: [
      'iptv pas cher',
      'iptv pas cher et fiable',
      'meilleur iptv pas cher france',
      'prix abonnement iptv',
      'comparatif iptv pas cher',
      'iptv sans coupure pas cher',
      'iptv smarters pro pas cher',
      'arnaque iptv pas cher'
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

export default function IptvPasCherPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${PAGE_CANONICAL}/#product`,
        name: 'Abonnement IPTV Pas Cher & Fiable France',
        description: 'Abonnement IPTV premium accessible sans coupure compatible IPTV Smarters Pro avec +25 000 chaînes direct et 90 000 VOD.',
        brand: {
          '@type': 'Brand',
          name: 'IPTV Smarters Pro',
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'EUR',
          lowPrice: '19.99',
          highPrice: '39.99',
          offerCount: '3',
          offers: [
            {
              '@type': 'Offer',
              name: 'Formule Découverte 3 Mois',
              price: '19.99',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: 'https://smarterspro12.net/checkout?plan=Starter',
            },
            {
              '@type': 'Offer',
              name: 'Formule Confort 6 Mois',
              price: '29.99',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: 'https://smarterspro12.net/checkout?plan=Confort',
            },
            {
              '@type': 'Offer',
              name: 'Formule VIP 12 Mois',
              price: '39.99',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: 'https://smarterspro12.net/abonnement-iptv-12-mois',
            },
          ],
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '1180',
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
            name: "Qu'est-ce qu'un abonnement IPTV pas cher et fiable en 2026 ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Un abonnement IPTV pas cher et fiable est un service de flux multimédia diffusé en direct et VOD à un tarif accessible (entre 3,30 € et 6,60 € par mois), proposant des flux 4K/FHD stables sans freeze lors des grands matchs, avec une assistance technique réactive et des codes d'accès Xtream compatibles avec IPTV Smarters Pro.",
            },
          },
          {
            '@type': 'Question',
            name: "Pourquoi faut-il se méfier des abonnements IPTV à 10 € ou 15 € par an ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Les offres à 10 € ou 15 € par an vendues sur les marketplaces non vérifiées souffrent d'une survente massive de bande passante : les serveurs coupent systématiquement les soirs de Ligue des Champions, aucun support technique n'est joignable et le service disparaît souvent après quelques semaines sans aucun recours possible.",
            },
          },
          {
            '@type': 'Question',
            name: "Quel est le juste prix pour un abonnement IPTV de qualité ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Le juste prix d'un IPTV fiable en France se situe entre 20 € (pour 3 mois) et 40 € (pour 1 an complet). Ce coût permet au fournisseur de financer des serveurs anti-DDoS dédiés, une bande passante 10 Gbps et une équipe d'assistance technique francophone 7j/7.",
            },
          },
          {
            '@type': 'Question',
            name: "Puis-je utiliser un abonnement IPTV pas cher sur plusieurs appareils ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Une formule standard autorise 1 connexion simultanée à la fois, mais vous pouvez installer vos identifiants sur tous vos appareils (Smart TV, Fire Stick, smartphone, tablette). Pour regarder simultanément sur plusieurs écrans à la maison, une formule multi-écrans dédiée est recommandée.",
            },
          },
          {
            '@type': 'Question',
            name: "Faut-il obligatoirement un VPN avec un abonnement IPTV pas cher ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Bien qu'un VPN ne soit pas obligatoire grâce à nos serveurs sécurisés et chiffrés, il est utile si votre fournisseur d'accès internet (FAI) bride la bande passante vidéo aux heures de pointe le soir.",
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
            item: `${SITE_CONFIG.domain}/tarifs-abonnement`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'IPTV Pas Cher & Fiable',
            item: PAGE_CANONICAL,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <Header />

      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Fil d'Ariane" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
        <ol className="flex items-center space-x-2 text-xs text-slate-400">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li>
            <Link href="/tarifs-abonnement" className="hover:text-blue-400 transition-colors">Tarifs & Abonnements</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li>
            <span className="text-slate-200 font-medium" aria-current="page">IPTV Pas Cher</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <TrendingDown className="w-4 h-4" />
              <span>Guide Tarifaire & Comparatif 2026 &middot; Dès 3,33 € / Mois</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              IPTV Pas Cher et Fiable en France : Comparatif, Prix Réels & Anti-Arnaque
            </h1>

            {/* AEO Direct Snippet Answer Box */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-sm leading-relaxed text-slate-300 space-y-2">
              <p>
                <strong>Réponse directe :</strong> Un abonnement <strong>IPTV pas cher et fiable</strong> désigne un service de streaming multimédia dont le coût se situe entre <strong>20 € et 40 € par an</strong> (soit 1,65 € à 3,33 € par mois). Contrairement aux arnaques à 10 € qui coupent lors des soirs de match, un fournisseur fiable garantit une infrastructure de serveurs dédiés avec technologie anti-freeze, une diffusion en 4K/FHD 60 FPS, une compatibilité avec l'application IPTV Smarters Pro et une assistance francophone 7j/7.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/abonnement-iptv-12-mois"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Abonnement 12 Mois VIP (39,99 €)</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/checkout?plan=Starter"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                <span>Formule Découverte 3 Mois (19,99 €)</span>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">0 € Surprise</span>
                <span className="block text-xs text-slate-400">Sans engagement tacite</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">99.9% Uptime</span>
                <span className="block text-xs text-slate-400">Serveurs anti-freeze</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">&lt; 5 min</span>
                <span className="block text-xs text-slate-400">Livraison des codes</span>
              </div>
            </div>
          </div>

          {/* Quick Price Visual Card */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs uppercase font-extrabold text-blue-400 tracking-wider">Top Vente France</span>
                  <h3 className="text-xl font-bold text-white mt-0.5">Formule VIP 12 Mois</h3>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-white">39,99 €</span>
                  <span className="block text-[10px] text-emerald-400 font-bold">Soit 3,33 € / mois</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+25 000 chaînes françaises, belges, suisses et mondiales</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tous les bouquets sportifs (Canal+, beIN, RMC, DAZN 4K)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+90 000 films et séries VOD en haute définition</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Codes Xtream API & lien M3U universel</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Support prioritaire francophone 7j/7</span>
                </li>
              </ul>

              <Link
                href="/abonnement-iptv-12-mois"
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider text-center block shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                Activer mon accès VIP maintenant
              </Link>
            </div>
          </div>

        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 w-full">

        {/* Section 1: The Trap of 15€/year vs True Quality */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Pourquoi les abonnements IPTV à 15 € par an sont presque tous des arnaques ?
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Sur AliExpress, Telegram ou certains forums, des vendeurs anonymes proposent des abonnements annuels à des prix défiant toute concurrence (10 € à 15 €). Voici la réalité technique derrière ces offres :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-red-500/30 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Survente massive de serveurs</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Le même serveur est revendu à 500 utilisateurs au lieu de 50. Résultat : dès qu'un grand match commence (Ligue des Champions, Clasico), le débit s'effondre et l'écran se fige toutes les 10 secondes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-red-500/30 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Fausse 4K et débit bridé</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Les flux étiquetés "4K Ultra HD" sont en réalité de simples résolutions 720p fortement compressées, avec un son décalé et un taux de rafraîchissement instable (25 FPS au lieu de 60 FPS fluides).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-red-500/30 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Coupure définitive après 3 semaines</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Une fois le paiement encaissé, le vendeur disparaît. Sans support client ni garantie, votre compte est désactivé au bout de quelques semaines, vous obligeant à repayer ailleurs.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Market Comparison Table */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Tableau Comparatif : IPTV Low-Cost vs IPTV Smarters Pro Officiel
            </h2>
            <p className="text-sm text-slate-400">
              Analysez point par point les différences techniques qui justifient d'opter pour un service stable et pérenne.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900">
            <table className="min-w-full divide-y divide-slate-800 text-sm">
              <thead className="bg-slate-950/60 text-xs font-bold uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="py-4 px-6 text-left">Critères Essentiels</th>
                  <th className="py-4 px-6 text-left text-red-400">IPTV Low-Cost (10-15 € / an)</th>
                  <th className="py-4 px-6 text-left text-blue-400">IPTV Smarters Pro Officiel (Dès 19,99 €)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs text-slate-300">
                <tr className="hover:bg-slate-800/20">
                  <td className="py-4 px-6 font-bold text-white">Stabilité soirs de match</td>
                  <td className="py-4 px-6 text-red-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 shrink-0" />
                    <span>Coupures régulières, freeze constant</span>
                  </td>
                  <td className="py-4 px-6 text-emerald-400 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>99.9% Uptime garanti (Load Balancing 10 Gbps)</span>
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-800/20">
                  <td className="py-4 px-6 font-bold text-white">Qualité d'image réelle</td>
                  <td className="py-4 px-6 text-slate-400">720p étiré, saccades fréquentes</td>
                  <td className="py-4 px-6 text-white font-semibold">Vrai 4K UHD, FHD 1080p natif & 60 FPS</td>
                </tr>
                <tr className="hover:bg-slate-800/20">
                  <td className="py-4 px-6 font-bold text-white">Support Technique</td>
                  <td className="py-4 px-6 text-slate-400">Inexistant ou bot automatique</td>
                  <td className="py-4 px-6 text-emerald-400 font-semibold">Assistance francophone par WhatsApp 7j/7</td>
                </tr>
                <tr className="hover:bg-slate-800/20">
                  <td className="py-4 px-6 font-bold text-white">Compatibilité Xtream Codes</td>
                  <td className="py-4 px-6 text-slate-400">Liens M3U instables souvent bloqués</td>
                  <td className="py-4 px-6 text-white">API Xtream Codes officielle + Guide TV (EPG)</td>
                </tr>
                <tr className="hover:bg-slate-800/20">
                  <td className="py-4 px-6 font-bold text-white">Durée réelle de service</td>
                  <td className="py-4 px-6 text-red-400">2 à 6 semaines avant désactivation</td>
                  <td className="py-4 px-6 text-emerald-400 font-bold">Validité garantie sur toute la durée souscrite</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Official Pricing Tiers */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Nos Tarifs IPTV Pas Cher : La Qualité Premium au Meilleur Prix
            </h2>
            <p className="text-sm text-slate-400">
              Choisissez la durée qui correspond à vos besoins sans aucun engagement caché ni renouvellement automatique involontaire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Starter 3 Months */}
            <div className="p-7 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Formule Découverte</span>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">19,99 €</span>
                    <span className="text-xs text-slate-400">/ 3 mois</span>
                  </div>
                  <span className="block text-xs text-slate-400">Soit 6,66 € / mois</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Idéal pour tester la stabilité de nos flux lors des compétitions sportives sans s'engager sur le long terme.
                </p>
                <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Toutes les chaînes en 4K/FHD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Catalogue VOD complet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>1 Connexion active</span>
                  </div>
                </div>
              </div>

              <Link
                href="/checkout?plan=Starter"
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider text-center block transition-colors"
              >
                Commander 3 Mois
              </Link>
            </div>

            {/* Confort 6 Months */}
            <div className="p-7 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Formule Confort</span>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">29,99 €</span>
                    <span className="text-xs text-slate-400">/ 6 mois</span>
                  </div>
                  <span className="block text-xs text-emerald-400 font-semibold">Soit 4,99 € / mois</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Le parfait compromis pour passer toute une saison sportive avec sérénité et fluidité continue.
                </p>
                <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Chaînes direct + Replay 7 jours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Guide des programmes EPG</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Support WhatsApp prioritaire</span>
                  </div>
                </div>
              </div>

              <Link
                href="/checkout?plan=Confort"
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider text-center block transition-colors"
              >
                Commander 6 Mois
              </Link>
            </div>

            {/* VIP 12 Months (Best Value) */}
            <div className="p-7 rounded-2xl bg-slate-900 border-2 border-blue-500/50 flex flex-col justify-between space-y-6 relative shadow-xl shadow-blue-500/10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-blue-400">Meilleure Offre France</span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-black uppercase">Économie 50%</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">39,99 €</span>
                    <span className="text-xs text-slate-400">/ 12 mois</span>
                  </div>
                  <span className="block text-xs text-emerald-400 font-extrabold">Seulement 3,33 € / mois</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  La formule la plus économique et complète : 1 an entier d'accès VIP à tous les canaux sans coupure.
                </p>
                <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>+25 000 chaînes + VOD 4K illimitée</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Serveur Anti-DDoS VIP redondé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Garantie de remplacement immédiat</span>
                  </div>
                </div>
              </div>

              <Link
                href="/abonnement-iptv-12-mois"
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider text-center block shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                Commander 12 Mois VIP
              </Link>
            </div>

          </div>
        </section>

        {/* Section 4: 6 Criteria to Verify Before Buying */}
        <section className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Les 6 critères à vérifier avant de souscrire un IPTV pas cher
            </h2>
            <p className="text-sm text-slate-400">
              Assurez-vous que votre futur fournisseur respecte scrupuleusement ces 6 points avant tout règlement :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="font-bold text-sm text-white block">1. Technologie Xtream Codes API</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Permet une intégration propre et rapide sur IPTV Smarters Pro avec affichage du guide des programmes et des résumés de films.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="font-bold text-sm text-white block">2. Bande passante anti-freeze</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Des serveurs hébergés en Europe avec au minimum 10 Gbps de bande passante pour absorber les pics d'audience sportifs.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="font-bold text-sm text-white block">3. Support joignable 7j/7</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Une assistance directe sur WhatsApp pour résoudre vos éventuels problèmes de configuration en moins de 10 minutes.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="font-bold text-sm text-white block">4. Multi-compatibilité matérielle</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Possibilité d'installer vos codes sur votre téléviseur Smart TV (Samsung, LG), votre boîtier Fire Stick ou votre smartphone.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="font-bold text-sm text-white block">5. Pas de reconduction tacite</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Vous payez une fois pour la période choisie (3, 6 ou 12 mois) sans prélèvement automatique bancaire dissimulé.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="font-bold text-sm text-white block">6. Catalogue VOD actualisé</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Des films et séries récents mis à jour chaque semaine en version française (VF) et version originale sous-titrée (VOSTFR).
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: AEO FAQ Section */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Foire Aux Questions : IPTV Pas Cher & Fiable
            </h2>
            <p className="text-sm text-slate-400">
              Retrouvez les réponses claires et précises aux interrogations les plus fréquentes sur nos abonnements accessibles.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base">
                Qu'est-ce qu'un abonnement IPTV pas cher et fiable en 2026 ?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Un abonnement IPTV pas cher et fiable est un service de flux multimédia diffusé en direct et VOD à un tarif accessible (entre 3,30 € et 6,60 € par mois), proposant des flux 4K/FHD stables sans freeze lors des grands matchs, avec une assistance technique réactive et des codes d'accès Xtream compatibles avec IPTV Smarters Pro.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base">
                Pourquoi faut-il se méfier des abonnements IPTV à 10 € ou 15 € par an ?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Les offres à 10 € ou 15 € par an vendues sur les marketplaces non vérifiées souffrent d'une survente massive de bande passante : les serveurs coupent systématiquement les soirs de Ligue des Champions, aucun support technique n'est joignable et le service disparaît souvent après quelques semaines sans aucun recours possible.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base">
                Quel est le juste prix pour un abonnement IPTV de qualité ?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Le juste prix d'un IPTV fiable en France se situe entre 20 € (pour 3 mois) et 40 € (pour 1 an complet). Ce coût permet au fournisseur de financer des serveurs anti-DDoS dédiés, une bande passante 10 Gbps et une équipe d'assistance technique francophone 7j/7.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base">
                Puis-je utiliser un abonnement IPTV pas cher sur plusieurs appareils ?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Une formule standard autorise 1 connexion simultanée à la fois, mais vous pouvez installer vos identifiants sur tous vos appareils (Smart TV, Fire Stick, smartphone, tablette). Pour regarder simultanément sur plusieurs écrans à la maison, notre formule multi-écrans dédiée est recommandée.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base">
                Faut-il obligatoirement un VPN avec un abonnement IPTV pas cher ?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bien qu'un VPN ne soit pas obligatoire grâce à nos serveurs sécurisés et chiffrés, il est utile si votre fournisseur d'accès internet (FAI) bride la bande passante vidéo aux heures de pointe le soir.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900/60 to-slate-900 border border-blue-500/30 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Passez à l'étape supérieure</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Rejoignez plus de 12 000 abonnés satisfaits en France
            </h2>
            <p className="text-sm text-slate-300">
              Profitez d'un accès immédiat dès 19,99 € avec activation assistée par WhatsApp et garantie de stabilité.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/abonnement-iptv-12-mois"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
            >
              <span>Prendre l'Abonnement 12 Mois (39,99 €)</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href="https://wa.me/33600000000?text=Bonjour,%20je%20souhaite%20des%20renseignements%20sur%20l'IPTV%20pas%20cher"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition-all"
            >
              <span>Poser une question sur WhatsApp</span>
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
