import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Radio, 
  ChevronRight, 
  Tv, 
  Trophy, 
  Film, 
  Globe, 
  HelpCircle, 
  ShieldCheck, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChannelAccordions } from '@/components/catalogue/ChannelAccordions';

const PAGE_CANONICAL = `${SITE_CONFIG.domain}/catalogue/chaines`;

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'Liste des Chaînes TV IPTV 2026 : France, Belgique, Suisse & Monde 4K',
    description:
      'Consultez la liste des chaînes TV IPTV (+25 000 canaux Direct 4K/FHD) : TNT France, Canal+, bouquets Belgique (RTBF, RTL), Suisse (RTS), Canada et Maghreb.',
    canonicalUrl: PAGE_CANONICAL,
    keywords: [
      'liste chaines iptv',
      'chaines tv iptv france',
      'bouquet tnt iptv 4k',
      'iptv belgique rtbf rtl',
      'iptv suisse rts blue sport',
      'iptv canada quebec',
      'liste des chaines iptv smarters pro',
    ],
  });
}

export default function CatalogueChainesPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BroadcastService',
        '@id': `${PAGE_CANONICAL}#webpage`,
        name: 'Bouquet +25 000 Chaînes IPTV Smarters Pro 4K (France, Belgique, Suisse, Canada, Monde)',
        broadcastDisplayName: 'IPTV Smarters Pro Direct TV',
        inLanguage: 'fr-FR',
        provider: { '@id': `${SITE_CONFIG.domain}/#organization` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Les chaînes belges (RTBF, RTL-TVI) et suisses (RTS, Blue Sport) sont-elles incluses ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, tous nos abonnements incluent l\'intégralité des bouquets Belgique (La Une, Tipik, RTL-TVI, DAZN Eleven Pro League), Suisse (RTS 1, RTS 2, Blue Sport 4K) et Canada/Québec (RDS, TVA Sports) sans supplément.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment filtrer les chaînes par pays ou par thématique dans IPTV Smarters Pro ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dans l\'application, les chaînes sont automatiquement réparties dans des répertoires étanches avec recherche prédictive, logos officiels en haute définition et guide TV EPG intégré.',
            },
          },
          {
            '@type': 'Question',
            name: 'Puis-je créer une liste de favoris ou verrouiller certaines catégories ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui. Vous pouvez marquer n\'importe quelle chaîne en Favoris d\'un clic sur la télécommande ou définir un code PIN parental à 4 chiffres pour masquer les groupes non désirés.',
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
          { '@type': 'ListItem', position: 3, name: 'Chaînes TV', item: PAGE_CANONICAL },
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
          <li><span className="text-slate-200 font-medium" aria-current="page">Chaînes TV</span></li>
        </ol>
      </nav>

      {/* Hero Header Section */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-xl sm:rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] sm:text-xs font-semibold max-w-full text-center">
            <Radio className="w-3.5 h-3.5 shrink-0" />
            <span>Répertoire Officiel Live TV &middot; +25 000 Canaux 4K &amp; FHD</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Liste des Chaînes TV IPTV : +25 000 Canaux France, Belgique, Suisse &amp; Monde
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Consultez notre <strong>liste des chaînes TV IPTV</strong> diffusées en 4K Ultra HD et 60 FPS fluide. Filtrez ci-dessous par pays ou par thématique pour vérifier la présence de vos chaînes préférées.
          </p>
        </div>
      </header>

      {/* Direct Answer AEO Box */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="p-6 rounded-2xl bg-slate-900 border-l-4 border-l-blue-500 border border-slate-800 text-sm leading-relaxed text-slate-200 shadow-xl space-y-2">
          <p>
            <strong>En résumé :</strong> La <strong>liste des chaînes TV IPTV</strong> comprend l'ensemble de la TNT française (TF1 4K, France Télévisions, M6 4K), les bouquets premium Canal+, beIN Sports, RMC Sport et DAZN, ainsi que les chaînes nationales de Belgique (RTBF, RTL), Suisse (RTS, Blue Sport), Canada (RDS, TVA) et du Maghreb. Chaque canal bénéficie d'un flux redondé <strong>sans coupure à 60 FPS</strong> avec guide électronique (EPG) et Replay 7 jours.
          </p>
        </div>
      </section>

      {/* Main Interactive Accordions Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16 flex-grow">
        
        {/* Interactive Channel Accordions Component */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Répertoire Interactif des Chaînes TV par Pays &amp; Thématique
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Utilisez les onglets ci-dessous pour basculer entre la vue géographique et la vue par genre, ou tapez le nom d'une chaîne dans la barre de recherche :
            </p>
          </div>

          <ChannelAccordions />
        </section>

        {/* Big Networks Overview Cards */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Les Grands Bouquets Inclus dans Notre Flux Live TV
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Tv className="w-6 h-6 text-blue-400" />
              <h3 className="text-base font-bold text-white">TNT Française 4K &amp; FHD</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                TF1 4K, France 2 4K, Canal+, M6 4K, Arte, TMC, BFM TV, CNews, L'Équipe et les 27 canaux nationaux avec Replay 7 jours.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Trophy className="w-6 h-6 text-amber-400" />
              <h3 className="text-base font-bold text-white">Bouquets Sportifs 60 FPS</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                beIN Sports 1–10, Canal+ Foot, RMC Sport, DAZN Ligue 1 et Eurosport. Consultez notre page <Link href="/sport" className="text-blue-400 hover:underline">IPTV Sport 4K</Link>.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Film className="w-6 h-6 text-purple-400" />
              <h3 className="text-base font-bold text-white">Cinéma, Séries &amp; Jeunesse</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Canal+ Box Office, Ciné+ OCS, Paramount, Disney Channel, Cartoon Network et documentaires Planète+.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <Globe className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Francophonie &amp; Monde</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Belgique (RTBF, RTL), Suisse (RTS, Blue Sport), Québec (RDS, TVA), Maghreb, UK, Espagne, Italie et chaînes internationales.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Questions Fréquentes sur la Liste des Chaînes TV
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Les chaînes sportives coupent-elles pendant les matchs ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Non. Grâce à nos serveurs CDN 10 Gbps dédiés, la bande passante est allouée en priorité lors des grands soirs de Ligue des Champions et de Classico.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Y a-t-il un guide des programmes (EPG) ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Oui. L'EPG électronique s'actualise automatiquement chaque jour dans l'application pour afficher les horaires et résumés des programmes sur 7 jours.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Puis-je regarder aussi des films à la demande ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Oui, explorez notre <Link href="/catalogue/vod" className="text-blue-400 underline">catalogue VOD de +90 000 films et séries 4K</Link> inclus dans toutes nos formules.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 border border-blue-500/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Activez Vos +25 000 Chaînes TV en Moins de 15 Minutes
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Abonnement 12 mois VIP à seulement <strong>49,99 €</strong> (soit 4,16 € / mois avec 1 mois offert). Zéro engagement, zéro prélèvement automatique.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/abonnement-iptv-12-mois"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
            >
              Commander l'Offre 12 Mois VIP
            </Link>
            <Link
              href="/catalogue/vod"
              className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Voir le Catalogue VOD 4K
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}

