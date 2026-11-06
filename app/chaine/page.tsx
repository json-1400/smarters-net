import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Tv,
  Radio,
  ChevronRight,
  ShieldCheck,
  Globe,
  Trophy,
  Film,
  Clock,
  HelpCircle,
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PAGE_CANONICAL = 'https://smarterspro12.net/chaine';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'Liste des Chaînes TV IPTV 2026 : France, Belgique, Suisse & Monde 4K',
    description:
      'Consultez la liste des chaînes TV IPTV (+25 000 canaux Direct 4K/FHD) : TNT France, Canal+, bouquets Belgique (RTBF, RTL-TVI), Suisse (RTS), Canada et Maghreb.',
    canonicalUrl: PAGE_CANONICAL,
    keywords: [
      'liste chaines iptv',
      'chaines tnt iptv france',
      'iptv belgique rtbf rtl tvi',
      'iptv suisse rts blue sport',
      'iptv canada quebec rds tva',
      'bouquet chaines iptv 4k',
    ],
  });
}

export default function ChainePage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BroadcastService',
        '@id': `${PAGE_CANONICAL}#webpage`,
        name: 'Bouquet +25 000 Chaînes IPTV Smarters Pro 4K (France, Belgique, Suisse, Canada)',
        broadcastDisplayName: 'IPTV Smarters Pro Direct TV',
        inLanguage: 'fr-FR',
        provider: { '@id': `${SITE_CONFIG.domain}/#organization` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Les chaînes belges (RTBF, RTL-TVI, Proximus) et suisses (RTS, Blue Sport) sont-elles incluses ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, tous nos abonnements incluent sans supplément les bouquets complets Belgique (La Une, Tipik, RTL-TVI, Club RTL, DAZN Eleven Pro League), Suisse (RTS 1, RTS 2, Blue Sport) et Canada/Québec (RDS, TVA Sports, ICI Télé).',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment les +25 000 chaînes sont-elles organisées dans IPTV Smarters Pro ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Grâce à la connexion API Xtream Codes, les chaînes sont automatiquement triées par dossiers de pays et par thématiques (France TNT, France Sport, France Cinéma, Belgique, Suisse, Canada, Maghreb) avec logos HD et guide TV EPG.',
            },
          },
          {
            '@type': 'Question',
            name: 'Puis-je masquer certains pays ou activer un contrôle parental ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, vous pouvez créer votre liste de Favoris en un clic ou verrouiller n\'importe quelle catégorie par code PIN à 4 chiffres directement dans les réglages de votre lecteur.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_CANONICAL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Chaînes TV', item: PAGE_CANONICAL },
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
          <li><span className="text-slate-200 font-medium" aria-current="page">Chaînes TV</span></li>
        </ol>
      </nav>

      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Radio className="w-3.5 h-3.5" />
            <span>Bouquet Télévisuel Francophone &amp; Mondial &middot; +25 000 Canaux 4K</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Liste des Chaînes TV IPTV : +25 000 Canaux France, Belgique, Suisse &amp; Monde
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Explorez notre <strong>liste des chaînes TV IPTV</strong> diffusées en 4K Ultra HD et Full HD 60 FPS. Un seul abonnement réunit l'intégralité de la TNT française, les bouquets sportifs et cinéma, ainsi que toutes les chaînes nationales de Belgique, Suisse, Canada et du Maghreb.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-14 flex-grow w-full">
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Les Grands Bouquets Inclus dans la Liste des Chaînes TV IPTV
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Profitez d'un accès instantané aux plus grands réseaux télévisuels en <strong>qualité 4K Ultra HD</strong> avec son multicanal :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Tv className="w-6 h-6 text-blue-400" />
              <h3 className="text-base font-bold text-white">TNT Française HD &amp; 4K</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                TF1 4K, France 2, France 3, Canal+, M6 4K, Arte, TMC, BFM TV, CNews, L'Équipe et les 27 chaînes nationales avec <strong>Replay 48h</strong>.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Trophy className="w-6 h-6 text-amber-400" />
              <h3 className="text-base font-bold text-white">Bouquets Sportifs 60 FPS</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                beIN Sports 1–10, Canal+ Foot, Canal+ Sport 360, RMC Sport, DAZN Ligue 1, Eurosport 1 &amp; 2 et flux sportifs à <strong>60 FPS fluide</strong>.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Film className="w-6 h-6 text-purple-400" />
              <h3 className="text-base font-bold text-white">Cinéma, Séries &amp; Jeunesse</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Canal+ Box Office, Canal+ Grand Écran, Ciné+ OCS, Paramount, Disney Channel, Cartoon Network, National Geographic et Planète+ en direct.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Globe className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Francophonie &amp; International</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Belgique (RTBF, RTL-TVI), Suisse (RTS, Blue Sport), Québec (RDS, TVA), Maroc, Algérie, Tunisie, Espagne, Italie et chaînes mondiales.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-10 space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Répertoire de la Liste des Chaînes TV IPTV par Pays Francophone
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Détail des principaux bouquets inclus par défaut dans nos formules 3, 6 et 12 mois :
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase">
                  <th className="py-3 pr-4">Région / Bouquet</th>
                  <th className="py-3 px-4">Chaînes Nationales &amp; Divertissement</th>
                  <th className="py-3 px-4">Chaînes Sportives Incluses</th>
                  <th className="py-3 pl-4 text-emerald-400">Qualité &amp; Options</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 text-slate-300">
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">France (FR)</td>
                  <td className="py-3 px-4">TNT 27 chaînes, Canal+, Ciné+ OCS, Paris Première, Téva</td>
                  <td className="py-3 px-4">DAZN, beIN Sports 1-10, Canal+ Foot, RMC Sport, Eurosport</td>
                  <td className="py-3 pl-4 font-semibold text-emerald-400">4K UHD / FHD 60 FPS + Replay 48h</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Belgique (BE)</td>
                  <td className="py-3 px-4">RTBF La Une, Tipik, La Trois, RTL-TVI, Club RTL, Plug RTL, AB3</td>
                  <td className="py-3 px-4">DAZN Eleven Pro League 1-3, VOOsport World, Play Sports</td>
                  <td className="py-3 pl-4 font-semibold text-emerald-400">Full HD 60 FPS + EPG Belge</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Suisse (CH)</td>
                  <td className="py-3 px-4">RTS 1, RTS 2, Léman Bleu, Rouge TV, La Télé, RSI, SRF</td>
                  <td className="py-3 px-4">Blue Sport 1–6 (Ligue des Champions &amp; Super League), MySports</td>
                  <td className="py-3 pl-4 font-semibold text-emerald-400">Full HD &amp; 4K + EPG Suisse</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Canada / Québec (CA)</td>
                  <td className="py-3 px-4">ICI Radio-Canada, TVA, Noovo, Télé-Québec, LCN, RDI, SériesPlus</td>
                  <td className="py-3 px-4">RDS, RDS 2, RDS Info, TVA Sports 1 &amp; 2 (NHL, MLS, F1), TSN</td>
                  <td className="py-3 pl-4 font-semibold text-emerald-400">FHD 60 FPS (Fuseau horaire dédié)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Maghreb &amp; Monde</td>
                  <td className="py-3 px-4">2M Maroc, Al Aoula, Canal Algérie, Echourouk, Watania, MBC, Rotana</td>
                  <td className="py-3 px-4">Arryadia TNT, beIN Sports MENA 1–16, SSC Sport, Sport TV</td>
                  <td className="py-3 pl-4 font-semibold text-emerald-400">HEVC H.265 Anti-Coupure</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <Clock className="w-5 h-5 text-blue-400" />
            <h3 className="text-sm font-bold text-white">Replay 48h &amp; Guide EPG 7 Jours</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Grille horaire synchronisée automatiquement sur <Link href="/applications/iptv-smarters-pro" className="text-blue-400 underline">IPTV Smarters Pro</Link> et TiviMate.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="text-sm font-bold text-white">Catalogue +90 000 VOD Inclus</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              En plus du direct, accédez à notre <Link href="/catalogue-vod" className="text-blue-400 underline">catalogue VOD 4K</Link> et à l'option <Link href="/catalogue-vod/iptv-adulte" className="text-blue-400 underline">contrôle parental PIN</Link>.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <HelpCircle className="w-5 h-5 text-purple-400" />
            <h3 className="text-sm font-bold text-white">Test &amp; Comparatif 2026</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Consultez notre <Link href="/guide-iptv/meilleur-abonnement-iptv" className="text-blue-400 underline">comparatif du meilleur abonnement IPTV</Link> ou demandez un <Link href="/test-iptv-gratuit" className="text-blue-400 underline">essai découverte</Link>.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Questions Fréquentes sur la Liste des Chaînes IPTV
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Retrouvez toutes les précisions sur l'organisation des flux, les bouquets internationaux et la qualité d'image.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">Les chaînes belges et suisses sont-elles incluses ?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Oui, l'ensemble des bouquets Belgique (RTBF, RTL-TVI, DAZN Pro League) et Suisse (RTS 1, RTS 2, Blue Sport) sont compris sans surcoût dans tous nos abonnements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">Comment les chaînes sont-elles organisées ?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Via l'<strong>API Xtream Codes</strong> sur <strong>IPTV Smarters Pro</strong>, vos chaînes sont automatiquement classées par pays et thématiques avec logos HD et <strong>guide TV EPG 7 jours</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">Puis-je masquer certains bouquets non désirés ?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Oui, vous pouvez personnaliser vos listes de favoris ou verrouiller n'importe quelle catégorie par un <strong>code PIN de contrôle parental</strong> directement dans les réglages de votre application.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">Y a-t-il des décalages de son sur les flux directs ?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Non, nos flux 4K 60 FPS bénéficient d'une synchronisation audio-vidéo native parfaite en direct avec décodage matériel optimisé.
              </p>
            </div>
          </div>
        </section>

        <div className="p-8 rounded-2xl bg-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Prêt à débloquer toutes les chaînes TV en 4K ?</h3>
            <p className="text-xs text-slate-300">Formule annuelle VIP avec 1 mois offert et 1 connexion 4K dédiée (options multi-écrans disponibles).</p>
          </div>
          <Link
            href="/abonnement-iptv-12-mois"
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-lg"
          >
            Voir l'Abonnement 12 Mois VIP &rarr;
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
