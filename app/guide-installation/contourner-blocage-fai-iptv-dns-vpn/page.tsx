import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Wifi,
  Lock,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  Server,
  SlidersHorizontal,
  Flame,
  AlertTriangle,
  Zap
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';

const PAGE_CANONICAL =
  'https://smarterspro12.net/guide-installation/contourner-blocage-fai-iptv-dns-vpn';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'Contourner Blocage IPTV FAI (Free, Orange, SFR) : Guide DNS & VPN 2026',
    description:
      'Votre opérateur (Free, Orange, SFR, Bouygues) bloque votre flux le soir ? Tutoriel 2026 pour contourner le blocage IPTV via DNS Cloudflare (1.1.1.1) et VPN sans perte de débit.',
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'contourner blocage iptv',
      'contourner le blocage iptv',
      'free bloque iptv',
      'orange bloque iptv',
      'changer dns iptv smart tv',
      'vpn pour iptv sans coupure',
      'dns cloudflare 1.1.1.1 iptv',
    ],
  });
}

export default function ContournerBlocageFaiPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: 'Comment contourner le blocage IPTV d\'un FAI français avec DNS ou VPN',
        description:
          'Procédure technique en 3 étapes pour éliminer le bridage opérateur (Orange, Free, SFR, Bouygues) lors des directs sportifs en 4K.',
        totalTime: 'PT3M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Remplacer les DNS opérateur par Cloudflare (1.1.1.1)',
            text: 'Dans les paramètres réseau Wi-Fi ou Ethernet de votre Smart TV ou Fire Stick, passez la configuration IP en manuel et saisissez le DNS primaire 1.1.1.1 et secondaire 1.0.0.1.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Activer le protocole HLS (m3u8) dans IPTV Smarters Pro',
            text: 'Ouvrez les paramètres de format de flux (Stream Format) dans IPTV Smarters Pro et sélectionnez HLS (.m3u8) au lieu de MPEGTS (.ts).',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Utiliser un tunnel VPN WireGuard en cas de bridage profond',
            text: 'Si votre FAI applique une inspection de paquets le soir de match, connectez un VPN en protocole WireGuard sur un serveur Suisse, Belgique ou Pays-Bas.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Comment savoir si mon FAI (Free, Orange, SFR, Bouygues) bloque mon IPTV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Faites un test simple : partagez la connexion 4G/5G de votre smartphone vers votre téléviseur. Si les chaînes fonctionnent immédiatement en 4G alors qu\'elles affichent un écran noir sur votre Box Fibre, votre FAI filtre le DNS ou l\'IP du serveur.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quel est le meilleur serveur DNS pour débloquer l\'IPTV en France ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le DNS Cloudflare (Primaire : 1.1.1.1 / Secondaire : 1.0.0.1) offre le temps de réponse le plus rapide en France (moins de 8 ms) et ne filtre aucune URL de serveur Xtream Codes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Un VPN ralentit-il la qualité 4K sur Fire TV Stick ou Android TV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non, à condition d\'utiliser le protocole moderne WireGuard (ou NordLynx / Lightway). La perte de débit est inférieure à 5%, ce qui laisse largement les 25 Mbps requis pour la 4K 60 FPS.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_CANONICAL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Guide d\'Installation', item: `${SITE_CONFIG.domain}/guide-installation` },
          { '@type': 'ListItem', position: 3, name: 'Contourner Blocage FAI (DNS & VPN)', item: PAGE_CANONICAL },
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

      <nav aria-label="Fil d'Ariane" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
        <ol className="flex items-center space-x-2 text-xs text-slate-400">
          <li><Link href="/" className="hover:text-blue-400">Accueil</Link></li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li><Link href="/guide-installation" className="hover:text-blue-400">Guide d'Installation</Link></li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li><span className="text-slate-200 font-medium" aria-current="page">Contourner Blocage FAI</span></li>
        </ol>
      </nav>

      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            Dépannage Réseau France &middot; DNS Cloudflare &amp; VPN
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Contourner le Blocage IPTV FAI (Free, Orange, SFR, Bouygues) : Guide DNS &amp; VPN
          </h1>
          <div className="p-4 rounded-xl bg-slate-900 border-l-4 border-purple-500 text-left space-y-1">
            <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider">Solution Immédiate &amp; Diagnostic FAI</span>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Vos chaînes affichent un écran noir à 21h00 alors que votre fibre optique fonctionne normalement ? Apprenez comment <strong>contourner le blocage IPTV</strong> appliqué par les Fournisseurs d&apos;Accès à Internet français en configurant vos serveurs avec le <strong>DNS Cloudflare 1.1.1.1</strong> ou en activant un tunnel chiffré <strong>VPN WireGuard</strong>.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-14 flex-grow w-full">
        
        {/* Section 1: Tableau des DNS */}
        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-10 space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Tableau des Meilleurs Serveurs DNS pour Contourner le Blocage IPTV en 2026
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Dans plus de 80% des cas, remplacer le DNS par défaut de votre box opérateur suffit à rétablir instantanément la connexion à vos flux vidéo :
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase">
                  <th className="py-3 pr-4">Fournisseur DNS</th>
                  <th className="py-3 px-4 text-emerald-400">DNS Primaire (IPv4)</th>
                  <th className="py-3 px-4">DNS Secondaire (IPv4)</th>
                  <th className="py-3 pl-4">Avantage Streaming IPTV 4K</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 text-slate-300">
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Cloudflare (Recommandé)</td>
                  <td className="py-3 px-4 font-mono font-bold text-emerald-400">1.1.1.1</td>
                  <td className="py-3 px-4 font-mono">1.0.0.1</td>
                  <td className="py-3 pl-4">Latence ultra-faible (&lt; 8 ms), zéro filtrage FAI</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Google Public DNS</td>
                  <td className="py-3 px-4 font-mono font-bold text-emerald-400">8.8.8.8</td>
                  <td className="py-3 px-4 font-mono">8.8.4.4</td>
                  <td className="py-3 pl-4">Fiabilité mondiale, contourne les résolveurs Box lents</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Quad9 Security</td>
                  <td className="py-3 px-4 font-mono font-bold text-emerald-400">9.9.9.9</td>
                  <td className="py-3 px-4 font-mono">149.112.112.112</td>
                  <td className="py-3 pl-4">Basé en Suisse, respect strict de la neutralité réseau</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Analyse Spécifique FAI */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Analyse du Bridage par Opérateur Français : Orange, Free, SFR et Bouygues
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Chaque fournisseur d'accès applique des mécanismes de restriction différents, particulièrement lors des soirées de Ligue des Champions et de grands événements sportifs :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-white">Orange Livebox (Fibre & ADSL)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Orange applique un filtrage DNS strict sur les résolveurs par défaut de la Livebox. La solution consiste à changer les adresses DNS directement sur votre téléviseur ou Firestick en renseignant <strong>1.1.1.1</strong> et <strong>1.0.0.1</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-white">Freebox (Pop, Delta, Révolution, Ultra)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Free limite la bande passante vers certains serveurs de streaming lors des pics de trafic. L'activation du <strong>protocole HLS</strong> dans les réglages de votre application IPTV permet de fragmenter les flux et d'éliminer le buffering.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-white">SFR Box & RED by SFR</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                SFR bloque occasionnellement les ports de streaming non standards. L'utilisation de nos <strong>serveurs CDN 10 Gbps</strong> multi-ports évite tout écran noir sans nécessiter d'équipement supplémentaire.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-white">Bouygues Telecom Bbox</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sur la Bbox Must et Ultym, désactivez l'option de protection réseau avancée dans l'interface d'administration de la box si vous rencontrez des difficultés de chargement du catalogue VOD.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Configuration Pas-à-Pas par Appareil */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Tutoriel Pas-à-Pas : Configurer les DNS 1.1.1.1 sur Chaque Appareil
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Pour éliminer définitivement les écrans noirs le soir sans installer de logiciel lourd, modifiez directement les paramètres IP de votre équipement de lecture :
            </p>

            {/* SEO Visual Showcase */}
            <figure className="my-6 space-y-2">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-2xl">
                <Image
                  src="/images/contournement-blocages-FAI.webp"
                  alt="Schéma configuration DNS Cloudflare 1.1.1.1 et VPN pour contourner le bridage FAI Orange SFR Free Bouygues"
                  width={1200}
                  height={675}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="text-center text-xs text-slate-400">
                Protocole de contournement des blocages FAI : paramétrage des DNS Cloudflare 1.1.1.1 et sécurisation VPN.
              </figcaption>
            </figure>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-white">Sur Smart TV Samsung et LG</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rendez-vous dans <strong>Paramètres</strong> &gt; <strong>Réseau</strong> &gt; <strong>État du réseau</strong> &gt; <strong>Paramètres IP</strong>. Basculez l'option DNS de automatique vers <strong>Manuel</strong>, puis entrez <strong>1.1.1.1</strong> pour le DNS primaire. Validez et redémarrez votre téléviseur pour vider le cache DNS.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-white">Sur Fire TV Stick et Box Android</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Allez dans <strong>Paramètres</strong> &gt; <strong>Réseau</strong>, sélectionnez votre Wi-Fi et appuyez sur le bouton Menu pour l'oublier ou modifier la configuration. En passant en <strong>IP Statique</strong>, conservez votre adresse IP locale et définissez <strong>DNS 1 : 1.1.1.1</strong> et <strong>DNS 2 : 1.0.0.1</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-white">Sur PC Windows 11 et macOS</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sous Windows, ouvrez <strong>Paramètres</strong> &gt; <strong>Réseau et Internet</strong> &gt; <strong>Propriétés Wi-Fi/Ethernet</strong>, modifiez l'attribution du serveur DNS en manuel et renseignez <strong>1.1.1.1</strong>. Sous Mac, modifiez la liste des serveurs DNS dans <strong>Réglages Système</strong> &gt; <strong>Réseau</strong> &gt; <strong>Avancé</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Étapes Rapides */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Les 3 Leviers Efficaces pour Éliminer le Bridage Opérateur
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Combinez ces trois solutions techniques simples pour vous assurer une fluidité totale en streaming direct :
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Wifi className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Étape 1 : Changer le DNS sur TV</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sur votre <Link href="/guide-installation/smart-tv-samsung-lg" className="text-blue-400 underline">Smart TV Samsung ou LG</Link> (Réseau &gt; Paramètres IP &gt; Configurer DNS manuellement), remplacez `0.0.0.0` par `1.1.1.1` puis redémarrez le téléviseur.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <SlidersHorizontal className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Étape 2 : Passer en Flux HLS</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dans <Link href="/applications/iptv-smarters-pro" className="text-blue-400 underline">IPTV Smarters Pro</Link> (Paramètres &gt; Format de Flux), cochez <strong>HLS (.m3u8)</strong> pour segmenter les paquets vidéo et éviter les micro-coupures.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Server className="w-6 h-6 text-purple-400" />
            <h3 className="text-lg font-bold text-white">Étape 3 : Serveurs CDN Multi-Ports</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tous nos <Link href="/abonnement-iptv-12-mois" className="text-blue-400 underline">abonnements 12 mois VIP</Link> incluent des URL de secours multi-ports pré-protégées contre les blocages d'adresses IP en France.
            </p>
          </div>
        </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">
            Questions Fréquentes : Blocage FAI, DNS et VPN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Comment vérifier s'il s'agit d'un blocage FAI ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connectez votre TV ou Fire Stick au partage de connexion 4G/5G de votre téléphone. Si le flux démarre immédiatement, votre Box fixe bloque le DNS.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Quel pays choisir sur mon VPN pour l'IPTV ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sélectionnez un serveur proche à faible latence comme la <strong>Suisse</strong>, la <strong>Belgique</strong> ou les <strong>Pays-Bas</strong> avec le protocole WireGuard actif.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Vos serveurs nécessitent-ils obligatoirement un VPN ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Non. Notre architecture CDN anti-coupure intègre déjà un routage dynamique qui fonctionne sans VPN chez 98% de nos abonnés français.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-blue-500/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Passez à un serveur IPTV protégé contre le bridage FAI</h3>
            <p className="text-xs sm:text-sm text-slate-300">Serveurs CDN européens redondants &middot; Assistance technique WhatsApp 7j/7.</p>
          </div>
          <Link
            href="/abonnement-iptv-12-mois"
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider inline-flex items-center gap-2 whitespace-nowrap shadow-lg"
          >
            <span>Activer mon Abonnement 12 Mois VIP</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
