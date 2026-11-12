import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2,
  Zap,
  ArrowRight,
  Flame,
  ChevronRight,
  Tv,
  Radio,
  Headphones,
  HelpCircle,
  MessageCircle,
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { buildWhatsappUrl } from '@/lib/contact';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PAGE_CANONICAL = 'https://smarterspro12.net/abonnement-iptv-12-mois';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'Abonnement IPTV 12 Mois : Formule VIP 4K Sans Coupure (1 Mois Offert)',
    description:
      'Offre officielle Abonnement IPTV 12 mois en France : Qualité 4K HDR, +25 000 chaînes, +90 000 VOD, 1 écran inclus (multi-écrans en option) et garantie anti-freeze 99.9%. Dès 4,16€/mois.',
    canonicalUrl: PAGE_CANONICAL,
    keywords: [
      'abonnement iptv 12 mois',
      'iptv abonnement 12 mois',
      'iptv 12 mois france',
      'abonnement iptv 1 an',
      'iptv 12 mois 4k',
      'meilleur abonnement iptv 12 mois',
      'iptv smarters pro 12 mois',
    ],
  });
}

export default function AbonnementIptv12MoisPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_CANONICAL}#webpage`,
        url: PAGE_CANONICAL,
        name: 'Abonnement IPTV 12 Mois : Formule VIP 4K Sans Coupure (1 Mois Offert)',
        isPartOf: { '@id': `${SITE_CONFIG.domain}/#website` },
        about: { '@id': `${PAGE_CANONICAL}#product` },
        breadcrumb: { '@id': `${PAGE_CANONICAL}#breadcrumb` },
        inLanguage: 'fr-FR',
      },
      {
        '@type': 'Product',
        '@id': `${PAGE_CANONICAL}#product`,
        name: 'Abonnement IPTV 12 Mois VIP 4K France',
        description:
          'Formule VIP annuelle IPTV Smarters Pro 4K sans coupure avec 1 connexion dédiée, +25 000 chaînes directes et assistance prioritaire.',
        brand: { '@type': 'Brand', name: 'IPTV Smarters Pro' },
        offers: {
          '@type': 'Offer',
          price: '49.99',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
          url: `${SITE_CONFIG.domain}/checkout?plan=Premium`,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '984',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_CANONICAL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Tarifs & Abonnements', item: `${SITE_CONFIG.domain}/tarifs` },
          { '@type': 'ListItem', position: 3, name: 'Abonnement IPTV 12 Mois', item: PAGE_CANONICAL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: "Que comprend exactement l'abonnement IPTV 12 Mois VIP à 49,99 € ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "L'abonnement IPTV 12 Mois VIP inclut 12 mois d'accès + 1 mois offert, 1 connexion 4K dédiée indépendante, plus de 25 000 chaînes TV en direct (4K/FHD 60 FPS), plus de 90 000 films et séries VOD, le Replay 7 jours, l'EPG automatique et le support prioritaire WhatsApp 7j/7.",
            },
          },
          {
            '@type': 'Question',
            name: 'Puis-je regarder sur plusieurs téléviseurs en même temps ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "La formule 12 Mois VIP à 49,99 € inclut 1 connexion active à la fois. Si vous souhaitez équiper 2 à 4 téléviseurs en simultané, choisissez nos packs IPTV Multi-Écran (Duo à 69,99 €, Trio à 100 € ou Maxi à 120 €) accessibles sur notre page dédiée.",
            },
          },
          {
            '@type': 'Question',
            name: 'Y a-t-il un renouvellement ou prélèvement automatique à la fin des 12 mois ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non, aucun prélèvement automatique. Votre paiement de 49,99 € est unique pour toute l’année. À l’échéance, vous êtes libre de renouveler uniquement si vous le souhaitez.',
            },
          },
          {
            '@type': 'Question',
            name: 'Dans quel délai vais-je recevoir mes identifiants Xtream Codes et M3U ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vos identifiants Xtream Codes API et votre lien M3U sont générés et vérifiés par nos techniciens puis envoyés par e-mail et WhatsApp en moins de 15 minutes après validation.',
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
          <li><Link href="/tarifs" className="hover:text-blue-400 transition-colors">Tarifs</Link></li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li><span className="text-slate-200 font-medium" aria-current="page">Abonnement 12 Mois VIP</span></li>
        </ol>
      </nav>

      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
              <Flame className="w-4 h-4 text-orange-400" />
              <span>N°1 des Ventes en France &middot; Formule Annuelle VIP</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Abonnement IPTV 12 Mois : La Formule VIP 4K Sans Coupure
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Optez pour la tranquillité totale avec l&apos;<strong>abonnement IPTV 12 mois</strong>. Profitez de plus de 25 000 chaînes mondiales et 90 000 films et séries en 4K Ultra HD à seulement <strong>4,16 € par mois</strong> (1 mois offert inclus). Inclus d&apos;office : 1 connexion 4K dédiée prioritaire et assistance VIP 7j/7.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/checkout?plan=Premium"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-blue-600/30 transition-all"
              >
                <span>Commander 12 Mois (49.99 €)</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/tarifs"
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold text-sm transition-all"
              >
                <span>Comparer les autres durées</span>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="space-y-1">
                <span className="text-xl font-black text-white">4,16 €</span>
                <span className="block text-xs text-slate-400">Coût mensuel réel</span>
              </div>
              <div className="space-y-1">
                <span className="text-xl font-black text-emerald-400">1 Écran</span>
                <span className="block text-xs text-slate-400">Connexion dédiée</span>
              </div>
              <div className="space-y-1">
                <span className="text-xl font-black text-blue-400">99.9%</span>
                <span className="block text-xs text-slate-400">Stabilité anti-freeze</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border-2 border-blue-500/50 p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Abonnement Annuel</span>
                  <h2 className="text-xl font-bold text-white">Pack VIP 12 Mois</h2>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-white">49.99 €</span>
                  <span className="block text-[11px] text-emerald-400 font-bold">1 Mois Offert</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span className="font-semibold text-white">1 Connexion active dédiée (multi-écrans en option)</span></li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>Tous les flux en 4K Ultra HD &amp; 60 FPS</span></li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>+25 000 Chaînes Monde &amp; Chaînes Sportives</span></li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>+90 000 VOD (Films &amp; Séries récentes en FR)</span></li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>Guide TV EPG 7 jours synchronisé</span></li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>Assistance VIP prioritaire par WhatsApp 7j/7</span></li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>Garantie de remplacement immédiat en cas de panne</span></li>
              </ul>

              <div className="pt-2 space-y-2">
                <Link
                  href="/checkout?plan=Premium"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-blue-600/40 transition-all hover:scale-[1.01]"
                >
                  <span>Activer mon Abonnement 12 Mois</span>
                  <Zap className="w-4 h-4 text-amber-300" />
                </Link>
                <a
                  href={buildWhatsappUrl("Bonjour, je souhaite commander l'Abonnement 12 Mois VIP (1 Écran + 1 Mois Offert) à 49,99 €. Pouvez-vous m'envoyer le lien de paiement et mes accès 4K ?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Commander via WhatsApp</span>
                </a>
                <span className="block text-center text-[11px] text-slate-400 pt-1">
                  Activation manuelle vérifiée en moins de 15 minutes
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Pourquoi l&apos;Abonnement IPTV 12 Mois est le Choix Préféré des Français ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Souscrire à un <strong>abonnement IPTV 12 mois</strong> vous offre le coût au mois le plus économique du marché (seulement 4,16 €/mois contre 6,66 €/mois pour la formule trimestrielle). Vous ne subissez aucune hausse de tarif pendant toute une année et suivez l&apos;intégralité de la saison sur notre bouquet <Link href="/catalogue/chaines" className="text-blue-400 hover:underline font-semibold">IPTV Chaînes &amp; Sport 4K</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <Radio className="w-6 h-6 text-blue-400" />
              <h3 className="text-base font-bold text-white">Serveurs VIP Prioritaires</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Les flux des abonnés 12 mois sont routés en priorité sur nos serveurs CDN européens les plus rapides afin d&apos;éviter tout ralentissement lors des grands matchs.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <Tv className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Multi-Écrans pour le Foyer</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                1 écran inclus en formule standard. Pour diffuser simultanément sur 2 à 5 appareils au sein du foyer, découvrez nos offres <Link href="/tarifs/iptv-multi-ecran" className="text-blue-400 hover:underline">IPTV Multi-Écran</Link>.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <Headphones className="w-6 h-6 text-purple-400" />
              <h3 className="text-base font-bold text-white">Assistance WhatsApp VIP</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Un canal d&apos;assistance direct avec nos techniciens francophones 7j/7 ou un <Link href="/test-iptv-gratuit" className="text-blue-400 hover:underline">test IPTV 24h</Link> avant renouvellement.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Spécifications Techniques du Serveur VIP 12 Mois &amp; Comparatif
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Notre <strong>abonnement IPTV 12 mois</strong> repose sur une architecture de 4 nœuds <strong>serveurs CDN européens 10 Gbps</strong> interconnectés avec équilibrage de charge automatique. Chaque abonné annuel bénéficie d&apos;un flux <strong>HEVC H.265</strong> prioritaire garantissant zéro coupure lors des grands événements sportifs et une synchronisation quotidienne du <Link href="/catalogue/vod" className="text-blue-400 hover:underline">catalogue VOD 4K</Link>.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase">
                  <th className="py-3 pr-4">Caractéristique</th>
                  <th className="py-3 px-4 text-emerald-400">Pack VIP 12 Mois (49,99 €)</th>
                  <th className="py-3 px-4">Formule 3 / 6 Mois</th>
                  <th className="py-3 pl-4">Revendeurs Standards</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 text-slate-300">
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Coût Mensuel Réel</td>
                  <td className="py-3 px-4 font-bold text-emerald-400">4,16 € / mois (+1 mois offert)</td>
                  <td className="py-3 px-4">5,00 € à 6,66 € / mois</td>
                  <td className="py-3 pl-4">4,50 € à 6,00 € / mois</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Écrans Simultanés Inclus</td>
                  <td className="py-3 px-4 font-bold text-emerald-400">1 Connexion Dédiée</td>
                  <td className="py-3 px-4">1 Connexion</td>
                  <td className="py-3 pl-4">1 Connexion (souvent bridée)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Qualité &amp; Encodage</td>
                  <td className="py-3 px-4 font-bold text-emerald-400">4K UHD &amp; FHD 60 FPS (HEVC H.265)</td>
                  <td className="py-3 px-4">4K UHD &amp; FHD 60 FPS</td>
                  <td className="py-3 pl-4">720p / 1080p compressé</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Protocoles &amp; EPG</td>
                  <td className="py-3 px-4 font-bold text-emerald-400">API Xtream Codes, M3U &amp; EPG 7j</td>
                  <td className="py-3 px-4">API Xtream Codes &amp; M3U</td>
                  <td className="py-3 pl-4">Lien M3U instable sans EPG</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Installation Universelle : Smart TV, Firestick, Box, Windows, iOS, iPhone &amp; Android
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Vos <strong>identifiants Xtream Codes</strong> et votre <strong>lien M3U</strong> reçus en moins de 15 minutes sur WhatsApp s&apos;installent sur l&apos;ensemble de vos appareils domestiques et mobiles. Nos serveurs synchronisent automatiquement le guide électronique des programmes (EPG XMLTV sur 7 jours), le rattrapage Replay et le contrôle parental par code PIN. En cas de filtrage opérateur (Orange Livebox, Freebox Pop/Ultra, SFR Box, Bouygues Bbox), notre équipe technique vous accompagne pas à pas pour activer le <strong>DNS Cloudflare 1.1.1.1</strong> ou privilégier une liaison câble Ethernet RJ45 / Wi-Fi 5 GHz afin de garantir un zapping instantané sans écran noir :
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/guide-installation/fire-tv-stick" className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 space-y-1.5 transition-colors">
              <h3 className="font-bold text-sm text-white">1. Amazon Fire TV Stick 4K</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Installation rapide sur <strong>Firestick Lite, 4K et Max</strong> via Downloader avec IPTV Smarters Pro ou TiviMate.</p>
              <span className="text-xs text-blue-400 block font-semibold">Voir le guide Fire TV &rarr;</span>
            </Link>
            <Link href="/guide-installation/smart-tv-samsung-lg" className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 space-y-1.5 transition-colors">
              <h3 className="font-bold text-sm text-white">2. Smart TV Samsung &amp; LG</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Téléchargement direct sur <strong>Samsung Tizen</strong> et <strong>LG webOS</strong> via Smarters Player Lite ou IBO Player Pro.</p>
              <span className="text-xs text-blue-400 block font-semibold">Voir le guide Smart TV &rarr;</span>
            </Link>
            <Link href="/guide-installation/android-tv-box" className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 space-y-1.5 transition-colors">
              <h3 className="font-bold text-sm text-white">3. Box Android TV &amp; Google TV</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Configuration 4K 60 FPS sur <strong>Nvidia Shield TV</strong>, <strong>Xiaomi Mi Box S</strong>, Formuler et Chromecast Google TV.</p>
              <span className="text-xs text-blue-400 block font-semibold">Voir le guide Box Android &rarr;</span>
            </Link>
            <Link href="/guide-installation/apple-tv-ios" className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 space-y-1.5 transition-colors">
              <h3 className="font-bold text-sm text-white">4. Apple TV, iOS, iPhone &amp; iPad</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Application officielle App Store pour <strong>iPhone</strong>, <strong>iPad</strong> et <strong>Apple TV 4K (tvOS)</strong> avec connexion Xtream API.</p>
              <span className="text-xs text-blue-400 block font-semibold">Voir le guide Apple &amp; iOS &rarr;</span>
            </Link>
            <Link href="/guide-installation/pc-mac-windows" className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 space-y-1.5 transition-colors">
              <h3 className="font-bold text-sm text-white">5. PC Windows &amp; Apple Mac</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Lecture fluide sur ordinateur <strong>Windows 10/11 (.exe)</strong> et <strong>macOS (.dmg)</strong> avec IPTV Smarters Pro ou VLC.</p>
              <span className="text-xs text-blue-400 block font-semibold">Voir le guide Windows &amp; Mac &rarr;</span>
            </Link>
            <Link href="/applications" className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 space-y-1.5 transition-colors">
              <h3 className="font-bold text-sm text-white">6. Smartphones &amp; Tablettes Android</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Emportez vos chaînes sur <strong>smartphone et tablette Android</strong> en Wi-Fi ou 4G/5G avec XCIPTV et Smarters Pro.</p>
              <span className="text-xs text-blue-400 block font-semibold">Comparatif des applications &rarr;</span>
            </Link>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-extrabold text-white">Questions Fréquentes — Abonnement IPTV 12 Mois</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2"><HelpCircle className="w-4 h-4 text-blue-400 shrink-0" /><span>Que comprend l&apos;abonnement IPTV 12 Mois VIP à 49,99 € ?</span></h3>
              <p className="text-xs text-slate-400 leading-relaxed">Il inclut 12 mois + 1 mois offert, 1 connexion 4K dédiée, +25 000 chaînes directes 4K/FHD, +90 000 films et séries VOD, le Replay 7 jours et l&apos;EPG complet.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2"><HelpCircle className="w-4 h-4 text-blue-400 shrink-0" /><span>Puis-je regarder sur plusieurs téléviseurs en même temps ?</span></h3>
              <p className="text-xs text-slate-400 leading-relaxed">La formule 12 Mois VIP inclut 1 connexion active à la fois. Pour diffuser simultanément sur 2 à 4 écrans au sein de votre foyer sans coupure, optez pour nos packs <Link href="/tarifs/iptv-multi-ecran" className="text-blue-400 hover:underline">IPTV Multi-Écran</Link> (Duo à 69,99 €, Trio à 100 € ou Maxi à 120 €).</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2"><HelpCircle className="w-4 h-4 text-blue-400 shrink-0" /><span>Y a-t-il un prélèvement automatique ?</span></h3>
              <p className="text-xs text-slate-400 leading-relaxed">Non, aucun renouvellement automatique caché. Votre règlement de 49,99 € est unique pour l&apos;année complète.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2"><HelpCircle className="w-4 h-4 text-blue-400 shrink-0" /><span>Dans quel délai vais-je recevoir mes codes ?</span></h3>
              <p className="text-xs text-slate-400 leading-relaxed">Vos identifiants Xtream Codes et votre lien M3U vous sont envoyés par e-mail et WhatsApp en moins de 15 minutes, avec aide à la configuration (<Link href="/guide-installation/contourner-blocage-fai-iptv-dns-vpn" className="text-blue-400 hover:underline">DNS &amp; anti-blocage FAI</Link>).</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2"><HelpCircle className="w-4 h-4 text-blue-400 shrink-0" /><span>Quelle vitesse de connexion internet est recommandée ?</span></h3>
              <p className="text-xs text-slate-400 leading-relaxed">Une bande passante de 12 Mbps est suffisante pour le streaming Full HD direct, et un débit stable de 25 Mbps en fibre optique ou 5G assure une fluidité 4K UHD 60 FPS absolue.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
