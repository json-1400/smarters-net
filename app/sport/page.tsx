import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Trophy,
  Flame,
  Tv,
  Zap,
  ChevronRight,
  Award,
  Radio,
  HelpCircle,
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PAGE_CANONICAL = 'https://smarterspro12.net/sport';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'IPTV Sport Direct 4K : Football, Ligue 1, Champions League & F1 60 FPS',
    description:
      'Regardez tout le football et le sport en direct avec notre IPTV Sport Direct 4K en France : Ligue 1, Ligue des Champions, Premier League, F1, UFC et NBA en 60 FPS.',
    canonicalUrl: PAGE_CANONICAL,
    keywords: [
      'iptv sport direct 4k',
      'iptv sport',
      'football streaming iptv',
      'ligue 1 dazn iptv',
      'champions league canal iptv',
      'formule 1 ufc nba iptv',
    ],
  });
}

export default function SportPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BroadcastService',
        '@id': `${PAGE_CANONICAL}#webpage`,
        name: 'Diffusion IPTV Sport Direct 4K 60 FPS (Football, F1, UFC, NBA, Rugby)',
        description:
          'Retransmission en ultra haute définition 4K 60 FPS de l\'intégralité des compétitions sportives européennes et mondiales.',
        inLanguage: 'fr-FR',
        provider: { '@id': `${SITE_CONFIG.domain}/#organization` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Comment regarder tous les matchs de Ligue 1 et de Ligue des Champions sans coupure ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Notre bouquet sport réunit l\'intégralité des canaux DAZN, beIN Sports (1 à 10), Canal+ Foot, Canal+ Sport 360 et RMC Sport en 1080p 60 FPS et 4K UHD, doublés par les chaînes suisses (Blue Sport) et belges (Eleven Pro League).',
            },
          },
          {
            '@type': 'Question',
            name: 'Pourquoi la fréquence 60 FPS est-elle essentielle pour l\'IPTV Sport Direct 4K ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'À 30 images par seconde, le ballon ou les monoplaces de Formule 1 créent un effet de flou lors des mouvements rapides. Nos flux sportifs dédiés sont encodés à 60 images par seconde (60 FPS) en HEVC H.265 pour une fluidité identique au satellite.',
            },
          },
          {
            '@type': 'Question',
            name: 'Que faire si mon opérateur internet ralentit le flux à 21h00 le soir de match ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nos serveurs CDN utilisent un équilibrage de charge sur 10 Gbps. Si votre Box internet (Free, Orange, SFR, Bouygues) filtre le DNS le soir de match, configurez le DNS Cloudflare 1.1.1.1 en 2 minutes selon notre guide dédié.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_CANONICAL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Sport & Football 4K', item: PAGE_CANONICAL },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <Header />

      <nav aria-label="Fil d'Ariane" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
        <ol className="flex items-center space-x-2 text-xs text-slate-400">
          <li><Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link></li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li><span className="text-slate-200 font-medium" aria-current="page">Sport &amp; Football 4K</span></li>
        </ol>
      </nav>

      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Trophy className="w-3.5 h-3.5" />
            <span>Tous les Grands Matchs en Direct &middot; 4K Ultra HD &middot; 60 FPS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            IPTV Sport Direct 4K : Football, Ligue 1, Champions League &amp; F1 Sans Coupure
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Profitez d'une expérience <strong>IPTV Sport Direct 4K</strong> sans latence ni écran noir lors des grands événements. Retrouvez la Ligue 1, l'UEFA Champions League, la Premier League, la Formule 1, le Top 14, l'UFC et la NBA en fluidité native 60 FPS.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-14 flex-grow w-full">
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              L'Offre Sportive Complète en Direct et en Haute Définition
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Vivez chaque match et compétition avec un débit stable et une fréquence de <strong>60 images par seconde</strong> :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Trophy className="w-7 h-7 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Ligue 1 &amp; Football Européen</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Intégralité de la Ligue 1, <strong>Ligue des Champions</strong> UEFA, Premier League, Liga, Serie A et Bundesliga sur plusieurs sources 4K redondantes.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Zap className="w-7 h-7 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Formule 1 &amp; MotoGP 60 FPS</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Essais libres, qualifications, courses Sprint et Grands Prix en <strong>qualité 4K HDR</strong> avec caméras embarquées et commentaires francophones.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Flame className="w-7 h-7 text-red-400" />
              <h3 className="text-lg font-bold text-white">UFC, MMA &amp; Boxe PPV</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Soirées UFC numérotées, Fight Nights, PFL et grands combats de boxe anglaise inclus sans aucun paiement à la séance supplémentaire.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Award className="w-7 h-7 text-purple-400" />
              <h3 className="text-lg font-bold text-white">Tennis Grand Chelem &amp; ATP</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Roland-Garros (tous les courts), Wimbledon, US Open, Open d'Australie et Masters 1000 sur Eurosport Multi-Courts et beIN.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Tv className="w-7 h-7 text-blue-400" />
              <h3 className="text-lg font-bold text-white">NBA &amp; EuroLeague</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Saison régulière, Playoffs, NBA Finals et NBA League Pass intégral en direct et en Replay matinal.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Radio className="w-7 h-7 text-sky-400" />
              <h3 className="text-lg font-bold text-white">Rugby Top 14 &amp; Six Nations</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tous les matchs du Top 14, Pro D2, Champions Cup et Tournoi des 6 Nations sur Canal+ Sport et France Télévisions.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-10 space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Grille des Compétitions &amp; Diffuseurs IPTV Sport Direct 4K (2026)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Chaque grande compétition dispose de chaînes principales françaises et de flux de secours francophones (Suisse/Belgique/Canada) :
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase">
                  <th className="py-3 pr-4">Compétition Sportive</th>
                  <th className="py-3 px-4">Chaînes Principales France</th>
                  <th className="py-3 px-4">Canaux Francophones de Secours</th>
                  <th className="py-3 pl-4 text-emerald-400">Résolution &amp; Fluidité</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 text-slate-300">
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Ligue des Champions UEFA</td>
                  <td className="py-3 px-4">Canal+ Foot, Canal+ Sport, Canal+ Live 1–18</td>
                  <td className="py-3 px-4">Blue Sport (Suisse), RTL Club (Belgique)</td>
                  <td className="py-3 pl-4 font-semibold text-emerald-400">4K UHD &amp; FHD 60 FPS</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Ligue 1 McDonald's</td>
                  <td className="py-3 px-4">DAZN 1–5 France, beIN Sports 1</td>
                  <td className="py-3 px-4">beIN Sports MENA / International</td>
                  <td className="py-3 pl-4 font-semibold text-emerald-400">1080p 60 FPS HEVC</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Premier League, Liga, Serie A</td>
                  <td className="py-3 px-4">Canal+ Premier League, beIN Sports 1–10</td>
                  <td className="py-3 px-4">VOOsport World, Sky Sports UHD, DAZN</td>
                  <td className="py-3 pl-4 font-semibold text-emerald-400">4K UHD &amp; 60 FPS</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Formule 1 &amp; MotoGP</td>
                  <td className="py-3 px-4">Canal+ Sport, Canal+ F1 Onboard</td>
                  <td className="py-3 px-4">RTBF Tipik (BE), RTS (CH), RDS (CA)</td>
                  <td className="py-3 pl-4 font-semibold text-emerald-400">4K HDR 60 FPS</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">UFC, Boxe &amp; NBA</td>
                  <td className="py-3 px-4">RMC Sport 1 &amp; 2, beIN Sports 1–4</td>
                  <td className="py-3 px-4">TNT Sports Box Office, NBA TV, RDS</td>
                  <td className="py-3 pl-4 font-semibold text-emerald-400">Full HD 60 FPS + Replay</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-emerald-400" />
            <span>Pourquoi Nos Flux Sportifs Ne Coupent Pas à 21h00 ?</span>
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Lors des soirées de Ligue des Champions, nos 4 nœuds CDN européens 10 Gbps répartissent automatiquement les connexions. Si votre opérateur internet applique un filtrage sur votre Box, suivez notre guide pour <Link href="/guide-installation/contourner-blocage-fai-iptv-dns-vpn" className="text-blue-400 underline">contourner le blocage FAI avec DNS Cloudflare ou VPN</Link>. Vous pouvez également consulter notre <Link href="/guide-iptv/meilleur-abonnement-iptv" className="text-blue-400 underline">comparatif du meilleur abonnement IPTV 2026</Link> ou demander un <Link href="/test-iptv-gratuit" className="text-blue-400 underline">diagnostic et test IPTV</Link>.
          </p>
        </section>

        {/* Section FAQ Sport */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Questions Fréquentes sur l'IPTV Sport Direct 4K
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Retrouvez toutes les réponses sur la diffusion sportive en continu et la réduction du temps de latence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">Comment regarder les matchs de Ligue 1 et Champions League ?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Notre bouquet réunit l'intégralité des canaux DAZN, beIN Sports 1-10 et Canal+ Foot en <strong>qualité 4K Ultra HD</strong> avec bascule automatique sur les chaînes belges et suisses de secours en cas de besoin.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">Pourquoi la fréquence 60 FPS est-elle primordiale ?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                À 30 images par seconde, le ballon et les actions rapides deviennent flous. Nos serveurs encodent en <strong>60 FPS natif</strong> pour offrir une netteté cristalline identique à une transmission satellite.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">Que faire en cas de ralentissement opérateur à 21h00 ?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Nos <strong>serveurs CDN 10 Gbps</strong> répartissent la charge automatiquement. Si votre box internet bride le débit lors des affiches sportives, configurez le <strong>DNS Cloudflare 1.1.1.1</strong> en 2 minutes.
              </p>
            </div>
          </div>
        </section>

        <div className="p-8 rounded-2xl bg-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Ne manquez plus aucun grand match en 4K</h3>
            <p className="text-xs text-slate-300">Formule 12 mois VIP avec 1 mois offert et 1 connexion 4K dédiée (Packs Multi-Écrans disponibles).</p>
          </div>
          <Link
            href="/abonnement-iptv-12-mois"
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-lg"
          >
            Activer mon Accès Sport 4K &rarr;
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
