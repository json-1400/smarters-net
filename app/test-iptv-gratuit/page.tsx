import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  MessageSquare,
  AlertTriangle,
  Tv,
  Clock,
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { CONTACT } from '@/lib/contact';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PAGE_CANONICAL = 'https://smarterspro12.net/test-iptv-gratuit';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'Test IPTV Gratuit 24h & Essai 4K France : Tester Notre Serveur (2026)',
    description:
      'Vous cherchez un test IPTV gratuit 24h ou un essai IPTV 4K stable en France ? Découvrez comment tester notre serveur CDN anti-freeze sur Smart TV et Fire Stick.',
    canonicalUrl: PAGE_CANONICAL,
    keywords: [
      'test iptv gratuit',
      'test iptv 24h',
      'essai iptv',
      'ip tv gratuite',
      'tester iptv smarters pro',
      'code test iptv gratuit',
      'abonnement iptv test',
    ],
  });
}

export default function TestIptvGratuitPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: 'Comment obtenir et configurer votre Test IPTV 4K sur IPTV Smarters Pro',
        description:
          'Procédure en 3 étapes pour vérifier la stabilité de nos serveurs 4K Ultra HD sur votre téléviseur ou boîtier.',
        totalTime: 'PT5M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Installer le lecteur IPTV Smarters Pro',
            text: 'Téléchargez gratuitement IPTV Smarters Pro ou IBO Player sur votre Smart TV, Fire TV Stick ou Box Android.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Contacter le support ou choisir la Formule Découverte',
            text: 'Demandez une vérification de compatibilité sur WhatsApp ou activez la Formule Découverte 3 Mois sans engagement.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Tester les flux 4K et le zapping en conditions réelles',
            text: 'Connectez-vous via Xtream Codes API et vérifiez la fluidité des chaînes sportives 60 FPS et du catalogue VOD.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Pourquoi les listes M3U de test IPTV gratuit publiques coupent-elles toutes les 10 secondes ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Les fichiers M3U gratuits partagés sur les forums sont limités à 1 seule connexion mais utilisés simultanément par des centaines d\'internautes. Le serveur bloque alors chaque flux au bout de quelques secondes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Pourquoi suspendez-vous les codes test IPTV 24h automatiques les soirs de grands matchs ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lors des affiches de Ligue des Champions ou de Ligue 1, des robots génèrent des milliers de tests gratuits qui saturent la bande passante. Nous réservons 100% de notre capacité 10 Gbps à nos abonnés actifs.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quelle est la meilleure solution pour tester le serveur sans risque ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vous pouvez contacter notre équipe technique sur WhatsApp pour valider la compatibilité de votre appareil, ou souscrire à la Formule Découverte 3 Mois (19,99 €) sur serveur VIP dédié sans renouvellement automatique.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_CANONICAL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Tarifs & Abonnements', item: `${SITE_CONFIG.domain}/tarifs-abonnement` },
          { '@type': 'ListItem', position: 3, name: 'Test IPTV Gratuit', item: PAGE_CANONICAL },
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
          <li><Link href="/" className="hover:text-blue-400">Accueil</Link></li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li><Link href="/tarifs-abonnement" className="hover:text-blue-400">Tarifs</Link></li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li><span className="text-slate-200 font-medium" aria-current="page">Test IPTV Gratuit</span></li>
        </ol>
      </nav>

      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Serveurs CDN 4K Vérifiés &middot; Zéro Engagement
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Test IPTV Gratuit 24h & Essai 4K : Comment Tester Notre Serveur en 2026 ?
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Vous recherchez un <strong>test IPTV gratuit</strong> (24h) ou un essai fiable avant de vous engager ? Contrairement aux listes M3U publiques saturées qui coupent toutes les 15 secondes, notre infrastructure CDN 10 Gbps privilégie une bande passante garantie pour tester la vraie stabilité 4K Ultra HD sur votre téléviseur.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-3">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Demander un Diagnostic & Test sur WhatsApp</span>
            </a>
            <Link
              href="/checkout?plan=Starter"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg"
            >
              <span>Formule Découverte 3 Mois (19,99 €)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-14 flex-grow w-full">
        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-10 space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Comparatif : Liste de Test IPTV Gratuit Public vs Accès Serveur Dédié
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Voici pourquoi les liens gratuits trouvés sur internet ne reflètent jamais la qualité d'un véritable serveur premium :
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase">
                  <th className="py-3 pr-4">Critère Technique</th>
                  <th className="py-3 px-4">Lien M3U Gratuit Public</th>
                  <th className="py-3 px-4">Test 24h Automatisé</th>
                  <th className="py-3 pl-4 text-emerald-400">Accès Découverte Smarters Pro 12</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 text-slate-300">
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Stabilité Soir de Match</td>
                  <td className="py-3 px-4 text-red-400">Coupure toutes les 10 sec</td>
                  <td className="py-3 px-4 text-amber-400">Bridage à 21h00</td>
                  <td className="py-3 pl-4 font-semibold text-emerald-400">Priorité CDN 99.9% Sans Freeze</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Qualité d'Image</td>
                  <td className="py-3 px-4">SD / 720p instable</td>
                  <td className="py-3 px-4">1080p limité</td>
                  <td className="py-3 pl-4 font-semibold text-emerald-400">4K UHD & Full HD 60 FPS (HEVC)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Catalogue VOD & Replay</td>
                  <td className="py-3 px-4">Absent</td>
                  <td className="py-3 px-4">Partiel</td>
                  <td className="py-3 pl-4 font-semibold text-emerald-400">+25 000 Chaînes & +90 000 VOD</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-white">Accompagnement Installation</td>
                  <td className="py-3 px-4">Aucun</td>
                  <td className="py-3 px-4">Robot automatique</td>
                  <td className="py-3 pl-4 font-semibold text-emerald-400">Technicien WhatsApp 7j/7 en direct</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            <h3 className="text-lg font-bold text-white">1. Protection Anti-Saturation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pour protéger nos abonnés lors des soirées Ligue des Champions, nous désactivons les générateurs de tests automatiques afin de maintenir 100% de la bande passante 4K.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Tv className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-bold text-white">2. Validation Matérielle Directe</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Notre équipe vérifie avec vous sur WhatsApp l'installation de votre lecteur (<Link href="/applications/iptv-smarters-pro" className="text-blue-400 underline">IPTV Smarters Pro</Link>, TiviMate ou IBO Player) avant activation.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Clock className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">3. Activation en 15 Minutes</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Que vous passiez par notre Formule Découverte 3 Mois (19,99 €) ou notre <Link href="/abonnement-iptv-12-mois" className="text-blue-400 underline">Abonnement 12 Mois VIP</Link>, vos <strong>identifiants Xtream Codes</strong> sont livrés en 15 minutes.
            </p>
          </div>
        </section>

        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-10 space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-bold text-white">
              Configuration de Votre Essai par Appareil : Smart TV, Firestick, Box, Windows, iOS, iPhone &amp; Android
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Avant d&apos;activer votre <strong>test IPTV gratuit</strong> ou votre Formule Découverte 4K, il suffit d&apos;installer le lecteur multimédia adapté à votre équipement. Nos flux <strong>HEVC H.265 à 60 FPS</strong> fonctionnent nativement via l&apos;<strong>API Xtream Codes</strong> (Server URL, Username, Password) ou un <strong>lien M3U Plus</strong> sur l&apos;ensemble des systèmes d&apos;exploitation domestiques et mobiles :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">1. Smart TV Samsung (Tizen) &amp; LG (webOS)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ouvrez le Samsung Smart Hub ou le LG Content Store de votre <strong>Smart TV</strong> et téléchargez gratuitement <Link href="/applications/iptv-smarters-pro" className="text-blue-400 hover:underline">Smarters Player Lite</Link> ou <Link href="/applications/ibo-player" className="text-blue-400 hover:underline">IBO Player Pro</Link> (activation par <strong>adresse MAC</strong> Device ID / Device Key sans clé USB). Consultez notre <Link href="/guide-installation/smart-tv-samsung-lg" className="text-blue-400 hover:underline">guide Smart TV Samsung &amp; LG</Link> pour un paramétrage en 2 minutes.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">2. Amazon Fire TV Stick 4K &amp; Fire Cube</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sur votre clé <strong>Firestick</strong>, installez l&apos;utilitaire officiel <strong>Downloader</strong> depuis l&apos;Amazon Appstore, activez les <strong>Sources inconnues</strong> dans les Options pour les développeurs et installez l&apos;APK <Link href="/applications/iptv-smarters-pro" className="text-blue-400 hover:underline">IPTV Smarters Pro</Link> ou <Link href="/applications/tivimate" className="text-blue-400 hover:underline">TiviMate IPTV Player</Link> en suivant notre <Link href="/guide-installation/fire-tv-stick" className="text-blue-400 hover:underline">tutoriel Fire TV Stick</Link>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">3. Box Android TV &amp; Google TV</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Les boîtiers <strong>Nvidia Shield TV Pro</strong>, <strong>Xiaomi Mi Box S</strong>, Chromecast Google TV et Formuler Z11 offrent un décodage matériel 4K HDR exceptionnel. Installez TiviMate ou <Link href="/applications/xciptv" className="text-blue-400 hover:underline">XCIPTV Player</Link> (double lecteur ExoPlayer et VLC) via notre <Link href="/guide-installation/android-tv-box" className="text-blue-400 hover:underline">guide Box Android TV</Link>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">4. iOS : iPhone, iPad &amp; Apple TV 4K (tvOS)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sur l&apos;écosystème Apple (<strong>iOS</strong>, <strong>iPhone</strong>, <strong>iPad</strong> et <strong>Apple TV 4K</strong>), rendez-vous sur l&apos;App Store officiel pour télécharger Smarters Player Lite ou GSE Smart IPTV. Sélectionnez la connexion <strong>API Xtream Codes</strong> comme détaillé dans notre <Link href="/guide-installation/apple-tv-ios" className="text-blue-400 hover:underline">guide Apple TV &amp; iOS</Link>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">5. PC Windows (.exe) &amp; Apple Mac (.dmg)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pour regarder vos chaînes sportives et films VOD sur ordinateur portable ou fixe (<strong>Windows 10/11</strong> et <strong>macOS</strong>), utilisez le logiciel desktop IPTV Smarters Pro ou ouvrez directement votre flux M3U dans <strong>VLC Media Player</strong> grâce à notre <Link href="/guide-installation/pc-mac-windows" className="text-blue-400 hover:underline">tutoriel PC Windows &amp; Mac</Link>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">6. Smartphones &amp; Tablettes Android</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                En déplacement en 4G/5G ou en Wi-Fi sur votre <strong>smartphone Android</strong> (Samsung Galaxy, Xiaomi, Pixel), installez l&apos;application officielle IPTV Smarters Pro ou XCIPTV pour accéder à vos <strong>+25 000 chaînes en direct</strong>, au guide EPG 7 jours et au Replay.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-10 space-y-5">
          <h2 className="text-2xl font-bold text-white">
            Diagnostic Réseau, Débit Conseillé &amp; Dépannage Anti-Coupure FAI
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Pour valider votre essai dans des conditions optimales, vérifiez que votre connexion domestique (Fibre optique, VDSL ou 4G/5G) dispose d&apos;un débit stable d&apos;au moins <strong>15 à 25 Mbps</strong>. Grâce à la compression <strong>HEVC H.265</strong> de nos serveurs CDN européens, le changement de chaîne s&apos;effectue en moins de 0,5 seconde sans mise en mémoire tampon (buffering).
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Si vous constatez un écran noir ou un ralentissement entre 20h45 et 23h00 lors d&apos;une affiche de Ligue des Champions sur <strong>Orange Livebox</strong>, <strong>Freebox Pop/Ultra</strong>, <strong>SFR Box</strong> ou <strong>Bouygues Bbox</strong>, il s&apos;agit généralement d&apos;un filtrage DNS opérateur. Il suffit alors de configurer le <strong>DNS Cloudflare (1.1.1.1)</strong> ou un tunnel VPN comme expliqué dans notre <Link href="/guide-installation/contourner-blocage-fai-iptv-dns-vpn" className="text-blue-400 hover:underline">guide pour contourner le blocage FAI</Link>. Pour une réception sans latence sur téléviseur, privilégiez toujours un câble <strong>Ethernet RJ45</strong> ou un réseau Wi-Fi 5 GHz.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">
            Questions Fréquentes sur le Test IPTV Gratuit 24h
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Pourquoi les listes M3U gratuites coupent-elles ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Un lien M3U gratuit public est partagé entre des centaines de personnes simultanément. Le serveur éjecte chaque utilisateur toutes les 10 secondes.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Comment tester sur Smart TV Samsung ou Fire Stick ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Installez d'abord l'application via notre <Link href="/guide-installation" className="text-blue-400 underline">guide d'installation</Link>, puis contactez notre support WhatsApp pour recevoir vos paramètres de connexion.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Y a-t-il un prélèvement automatique après un essai ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Jamais. Toutes nos formules (<Link href="/tarifs-abonnement" className="text-blue-400 underline">3, 6 et 12 mois</Link>) sont à paiement unique sans aucun renouvellement automatique caché.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

