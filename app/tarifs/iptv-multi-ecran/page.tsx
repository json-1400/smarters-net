import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Tv, 
  Smartphone, 
  Monitor, 
  Laptop, 
  CheckCircle2, 
  Users, 
  Zap, 
  ShieldCheck, 
  Wifi, 
  ChevronRight, 
  ArrowRight,
  Flame,
  HelpCircle,
  Layers,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { buildWhatsappUrl } from '@/lib/contact';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PAGE_CANONICAL = 'https://smarterspro12.net/tarifs/iptv-multi-ecran';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "IPTV Multi-Écran (2 à 5 Écrans Simultanés) : Formules & Prix France 2026",
    description: "Découvrez nos offres IPTV multi-écrans sans coupure en France : regardez simultanément sur 2, 3 ou 5 appareils (Smart TV, Fire Stick, smartphone) en 4K fluide.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'iptv multi ecran',
      'iptv multi connexions',
      'iptv 2 ecrans',
      'iptv 3 ecrans',
      'iptv multi room france',
      'abonnement iptv multi ecran',
      'iptv simultane famille',
      'iptv smarters pro multi ecran'
    ],
  });
}

export default function IptvMultiEcranPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${PAGE_CANONICAL}/#product`,
        name: 'Abonnement IPTV Multi-Écran (2 à 5 Connexions Simultanées)',
        description: 'Formule IPTV multi-écrans 4K avec 2 à 5 connexions simultanées sans coupure pour toute la famille sur IPTV Smarters Pro.',
        brand: {
          '@type': 'Brand',
          name: 'IPTV Smarters Pro',
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'EUR',
          lowPrice: '69.99',
          highPrice: '120.00',
          offerCount: '3',
          offers: [
            {
              '@type': 'Offer',
              name: 'Pack Duo 2 Écrans Simultanés',
              price: '69.99',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: `${PAGE_CANONICAL}#duo`,
            },
            {
              '@type': 'Offer',
              name: 'Pack Trio 3 Écrans Famille',
              price: '100.00',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: `${PAGE_CANONICAL}#trio`,
            },
            {
              '@type': 'Offer',
              name: 'Pack Maxi Multi-Room 4 Écrans',
              price: '120.00',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: `${PAGE_CANONICAL}#maxi`,
            },
          ],
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '870',
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
            name: "Comment fonctionne un abonnement IPTV multi-écran ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Un abonnement IPTV multi-écran autorise 2, 3 ou jusqu'à 5 appareils connectés en même temps à diffuser des flux vidéo différents. Le serveur alloue des flux parallèles distincts, évitant ainsi le message d'erreur 'Too many connections' ou la déconnexion automatique d'un écran lorsque quelqu'un d'autre allume son téléviseur.",
            },
          },
          {
            '@type': 'Question',
            name: "Les écrans doivent-ils être situés sur la même adresse IP / même box internet ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Non, nos formules IPTV multi-écrans sont flexibles : un membre de votre famille peut regarder le football sur la Smart TV du salon en Wi-Fi à la maison, pendant qu'un autre regarde une série sur tablette ou smartphone en 4G/5G en déplacement.",
            },
          },
          {
            '@type': 'Question',
            name: "Quel débit internet est nécessaire pour faire fonctionner 2 ou 3 écrans en 4K ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Pour une diffusion optimale sans aucun ralentissement, nous recommandons environ 25 Mbps par écran pour un flux 4K Ultra HD. Une connexion Fibre optique standard (100 à 500 Mbps) ou une très bonne ligne VDSL/4G est amplement suffisante pour 3 à 5 écrans simultanés.",
            },
          },
          {
            '@type': 'Question',
            name: "Reçoit-on un seul identifiant ou des codes Xtream séparés ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Selon votre préférence lors de l'activation, nous pouvons vous fournir un identifiant maître multi-flux ou des identifiants Xtream Codes distincts par écran pour faciliter la personnalisation des favoris et de l'historique sur chaque téléviseur.",
            },
          },
          {
            '@type': 'Question',
            name: "Comment souscrire à une formule IPTV Multi-Écran ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Vous pouvez commander directement votre formule Duo (2 écrans), Trio (3 écrans) ou contacter directement notre service commercial sur WhatsApp pour un pack sur mesure de 4 ou 5 écrans avec activation immédiate en moins de 10 minutes.",
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
            item: `${SITE_CONFIG.domain}/tarifs`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'IPTV Multi-Écran (2 à 5 Écrans)',
            item: PAGE_CANONICAL,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased flex flex-col selection:bg-blue-600 selection:text-white w-full overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Fil d'Ariane" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
        <ol className="flex items-center flex-wrap gap-2 text-xs text-slate-400">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li>
            <Link href="/tarifs" className="hover:text-blue-400 transition-colors">Tarifs & Abonnements</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li>
            <span className="text-slate-200 font-medium" aria-current="page">IPTV Multi-Écran</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-xl sm:rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider max-w-full text-center">
              <Users className="w-4 h-4 shrink-0" />
              <span>Solution Famille & Multi-Room &middot; 2 à 5 Écrans en Simultané</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Abonnement IPTV Multi-Écrans : 2 à 5 Connexions Simultanées 4K sans Coupure
            </h1>

            {/* AEO Direct Snippet Answer Box */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-sm leading-relaxed text-slate-300 space-y-2">
              <p>
                <strong>Réponse directe :</strong> Un abonnement <strong>IPTV multi-écrans</strong> (ou multi-connexions) permet de diffuser simultanément des chaînes de télévision et des films VOD différents sur <strong>2 à 5 appareils distincts</strong> (<strong>Smart TV, Firestick et Box Android</strong> ainsi que <strong>PC Windows, iOS, iPhone et Android</strong>) au sein du même foyer sans coupure de flux. Contrairement à un abonnement standard limité à 1 seule session active, la technologie multi-écrans alloue des <strong>flux parallèles 4K 60 FPS</strong> redondés sur chaque écran.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#formules"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Voir les Formules Multi-Écrans</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href={buildWhatsappUrl("Bonjour, je souhaite commander une formule IPTV Multi-Écran")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all"
              >
                <span>Commander sur WhatsApp (Conseiller Direct)</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">2 à 5 Écrans</span>
                <span className="block text-xs text-slate-400">Flux 100% indépendants</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">Zéro Blocage IP</span>
                <span className="block text-xs text-slate-400">Maison ou mobilité 4G</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">4K 60 FPS</span>
                <span className="block text-xs text-slate-400">Sans baisse de débit</span>
              </div>
            </div>
          </div>

          {/* Interactive Scenario Visualization */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl space-y-5 relative">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Diffusion Simultanée en Direct</span>
                </h2>
                <span className="text-[10px] uppercase font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30">
                  En ligne (3 sessions)
                </span>
              </div>

              {/* Screen 1 */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-sm dark:shadow-none">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-600/20 dark:text-blue-400">
                    <Tv className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white">Smart TV Salon (Samsung 4K)</span>
                    <span className="block text-[11px] text-slate-600 dark:text-slate-400">Canal+ Sport &middot; Match en Direct 4K UHD</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400">60 FPS</span>
              </div>

              {/* Screen 2 */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-sm dark:shadow-none">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-600/20 dark:text-purple-400">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white">Fire TV Chambre (Amazon Stick)</span>
                    <span className="block text-[11px] text-slate-600 dark:text-slate-400">Série VOD Récente &middot; VF 1080p</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400">1080p</span>
              </div>

              {/* Screen 3 */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-sm dark:shadow-none">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-50 text-cyan-600 dark:bg-cyan-600/20 dark:text-cyan-400">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white">Tablette iPad (Mobilité 4G)</span>
                    <span className="block text-[11px] text-slate-600 dark:text-slate-400">Chaîne Enfant &middot; Streaming sans coupure</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400">Fluide</span>
              </div>

              <div className="pt-2 text-center">
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Chaque appareil change de chaîne et contrôle son direct sans impacter les autres écrans.
                </p>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 w-full">

        {/* Section 1: Pricing Formulations Multi-Screen */}
        <section id="formules" className="space-y-8 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Nos Formules IPTV Multi-Écrans (Abonnement 12 Mois)
            </h2>
            <p className="text-sm text-slate-400">
              Profitez d'un tarif dégressif ultra-compétitif pour équiper tous les membres de la famille sous une seule facture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Duo Pack */}
            <div id="duo" className="p-7 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Pack Duo</span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 text-[10px] font-bold">2 Écrans</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">69,99 €</span>
                    <span className="text-xs text-slate-400">/ an</span>
                  </div>
                  <span className="block text-xs text-emerald-400 font-semibold">Soit ~35 € par écran pour 1 an</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  La solution parfaite pour un couple : le sport dans le salon et vos séries préférées dans la chambre sans conflit.
                </p>
                <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>2 Connexions 4K actives 24h/24</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>+25 000 chaînes + VOD sur chaque appareil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>IP identique ou différente autorisée</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Link
                  href="/checkout?plan=Pack2"
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Commander en ligne</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={buildWhatsappUrl("Bonjour, je souhaite commander le Pack Duo (2 Écrans en simultané) à 69,99 € / 12 mois. Pouvez-vous m'envoyer le lien de paiement et mes accès 4K ?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Commander via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Trio Pack (Most Popular for Families) */}
            <div id="trio" className="p-7 rounded-2xl bg-slate-900 border-2 border-blue-500/50 flex flex-col justify-between space-y-6 relative shadow-xl shadow-blue-500/10">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-blue-400">Pack Famille Trio</span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-black uppercase">3 Écrans &middot; Populaire</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">100 €</span>
                    <span className="text-xs text-slate-400">/ an</span>
                  </div>
                  <span className="block text-xs text-emerald-400 font-extrabold">Seulement ~33,33 € par écran pour 1 an</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Idéal pour toute la famille : les parents, les enfants et les adolescents regardent leurs programmes sans dispute.
                </p>
                <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>3 Connexions simultanées 4K indépendantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Codes Xtream séparés ou uniques au choix</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Support VIP famille par WhatsApp</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Link
                  href="/checkout?plan=Pack3"
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
                >
                  <span>Commander en ligne</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={buildWhatsappUrl("Bonjour, je souhaite commander le Pack Trio (3 Écrans en simultané) à 100 € / 12 mois. Pouvez-vous m'envoyer le lien de paiement et mes accès 4K ?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Commander via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Maxi Pack 4-5 Screens */}
            <div id="maxi" className="p-7 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Pack Multi-Room Maxi</span>
                  <span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 text-[10px] font-bold">4 Écrans</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">120 €</span>
                    <span className="text-xs text-slate-400">/ an</span>
                  </div>
                  <span className="block text-xs text-emerald-400 font-semibold">30 € par écran pour l'année</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Pour les grandes résidences, colocations ou amateurs de multi-écrans complets (Salon, Chambres, Cuisine, Mobile).
                </p>
                <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Jusqu'à 4 Sessions simultanées ultra-haut débit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Bande passante prioritaire dédiée (10 Gbps)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Configuration assistée sur tous vos appareils</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Link
                  href="/checkout?plan=Pack4"
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Commander en ligne</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={buildWhatsappUrl("Bonjour, je souhaite commander le Pack Maxi (4 Écrans en simultané) à 120 € / an. Pouvez-vous m'envoyer le lien de paiement et mes accès 4K ?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Commander via WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Technical Configuration: How Multi-Screen Works */}
        <section className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Comment configurer vos multiples écrans avec IPTV Smarters Pro ?
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              La mise en place de vos accès multi-écrans s'effectue en 3 étapes simples et ne requiert aucune compétence technique complexe :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="font-bold text-sm text-white block">Étape 1 : Réception des accès</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Après souscription, vous recevez vos identifiants Xtream Codes autorisant 2, 3 ou 5 connexions simultanées selon la formule choisie.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="font-bold text-sm text-white block">Étape 2 : Installation de l'application</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Téléchargez l'application IPTV Smarters Pro sur chacun de vos téléviseurs (Smart TV, Fire Stick) et appareils mobiles (iOS, Android).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="font-bold text-sm text-white block">Étape 3 : Connexion simultanée</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Saisissez les codes sur chaque appareil. Vous pouvez dès lors allumer tous vos écrans en même temps : chacun diffuse son propre programme sans interférence.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Bandwidth Requirements */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Quel débit internet faut-il pour le Multi-Écran ?
            </h2>
            <p className="text-sm text-slate-400">
              Pour profiter d'une expérience 4K fluide sans temps de chargement, voici les recommandations de vitesse internet :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base">2 Écrans en 4K</span>
                <span className="text-xs text-blue-400 font-bold">Dès 30 Mbps</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Une ligne VDSL2 performante, une box 4G ou n'importe quelle connexion Fibre optique absorbe aisément 2 flux simultanés en ultra-haute définition.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base">3 Écrans en 4K</span>
                <span className="text-xs text-emerald-400 font-bold">Dès 50 Mbps</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Une connexion Fibre optique standard (Orange, Free, SFR, Bouygues) garantit une lecture instantanée avec zéro temps de buffering.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base">4 à 5 Écrans</span>
                <span className="text-xs text-purple-400 font-bold">Dès 80 Mbps</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Idéal avec un réseau Wi-Fi 6 ou des connexions Ethernet filaires vers vos téléviseurs principaux pour une fluidité maximale.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: AEO FAQ Section */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Foire Aux Questions : IPTV Multi-Écran
            </h2>
            <p className="text-sm text-slate-400">
              Toutes les réponses aux questions sur la gestion simultanée de vos téléviseurs et appareils.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base">
                Comment fonctionne un abonnement IPTV multi-écran ?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Un abonnement IPTV multi-écran autorise 2, 3 ou jusqu'à 5 appareils connectés en même temps à diffuser des flux vidéo différents. Le serveur alloue des flux parallèles distincts, évitant ainsi le message d'erreur 'Too many connections' ou la déconnexion automatique d'un écran lorsque quelqu'un d'autre allume son téléviseur.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base">
                Les écrans doivent-ils être situés sur la même adresse IP / même box internet ?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Non, nos formules IPTV multi-écrans sont flexibles : un membre de votre famille peut regarder le football sur la Smart TV du salon en Wi-Fi à la maison, pendant qu'un autre regarde une série sur tablette ou smartphone en 4G/5G en déplacement.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base">
                Quel débit internet est nécessaire pour faire fonctionner 2 ou 3 écrans en 4K ?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pour une diffusion optimale sans aucun ralentissement, nous recommandons environ 25 Mbps par écran pour un flux 4K Ultra HD. Une connexion Fibre optique standard (100 à 500 Mbps) ou une très bonne ligne VDSL/4G est amplement suffisante pour 3 à 5 écrans simultanés.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base">
                Reçoit-on un seul identifiant ou des codes Xtream séparés ?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Selon votre préférence lors de l'activation, nous pouvons vous fournir un identifiant maître multi-flux ou des identifiants Xtream Codes distincts par écran pour faciliter la personnalisation des favoris et de l'historique sur chaque téléviseur.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base">
                Comment souscrire à une formule IPTV Multi-Écran ?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Vous pouvez commander directement votre formule Duo (2 écrans), Trio (3 écrans) ou contacter directement notre service commercial sur WhatsApp pour un pack sur mesure de 4 ou 5 écrans avec activation immédiate en moins de 10 minutes.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900/60 to-slate-900 border border-blue-500/30 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Équipez toute votre maison</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Prêt à profiter du Multi-Écran sans coupure ?
            </h2>
            <p className="text-sm text-slate-300">
              Activez votre pack 2, 3 ou 5 écrans avec notre équipe sur WhatsApp et recevez vos codes instantanément.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={buildWhatsappUrl("Bonjour, je souhaite activer un abonnement IPTV Multi-Écrans")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition-all hover:scale-105"
            >
              <span>Contacter le Support WhatsApp pour Activer mon Pack</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <Link
              href="/tarifs"
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all"
            >
              <span>Consulter Toutes les Formules Solo</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
