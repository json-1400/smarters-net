import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Wrench,
  AlertTriangle,
  Wifi,
  ShieldAlert,
  Tv,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  HelpCircle,
  Zap,
  Gauge,
  Lock,
  RefreshCw,
  SlidersHorizontal,
  Server
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PAGE_CANONICAL = 'https://smarterspro12.net/guide-depannage';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Guide Dépannage IPTV : Solutions aux Coupures, Buffering & Écran Noir (2026)",
    description: "Guide technique complet pour dépanner votre IPTV : supprimer le buffering, débloquer l'écran noir, contourner les blocages FAI avec DNS 1.1.1.1 et configurer vos lecteurs.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'depannage iptv',
      'probleme iptv coupure',
      'resoudre buffering iptv',
      'iptv ecran noir',
      'blocage fai iptv',
      'dns 1.1.1.1 iptv',
      'erreur 403 iptv smarters',
      'optimiser connexion iptv'
    ],
  });
}

const DIAGNOSTIC_STEPS = [
  {
    step: '01',
    title: 'Testez votre connexion & basculez en Ethernet',
    desc: 'Un débit descendant instable ou un Wi-Fi saturé par d’autres appareils est responsable de 70 % des saccades. Branchez votre téléviseur ou box en câble RJ45 et vérifiez un minimum de 25 Mbps pour la 4K.',
  },
  {
    step: '02',
    title: 'Modifiez les DNS de votre appareil (1.1.1.1 / 8.8.8.8)',
    desc: 'Les fournisseurs d’accès internet (Orange, SFR, Bouygues, Free) brident ou censurent fréquemment les serveurs IPTV via leurs serveurs DNS. Le passage au DNS Cloudflare résout instantanément le blocage.',
  },
  {
    step: '03',
    title: 'Ajustez le moteur de décodage dans votre application',
    desc: 'Dans les réglages de votre lecteur (IPTV Smarters Pro ou TiviMate), passez le lecteur vidéo interne de "Hardware (Matériel)" à "Software (VLC)" ou activez ExoPlayer pour synchroniser audio et vidéo.',
  },
  {
    step: '04',
    title: 'Vérifiez la validité de vos identifiants Xtream Codes',
    desc: 'En cas de code 403 ou d’erreur d’autorisation, contrôlez la date d’expiration de votre abonnement, le respect des majuscules/minuscules et l’absence d’espace masqué dans votre mot de passe.',
  },
];

const FAQS = [
  {
    q: "Pourquoi mon IPTV coupe-t-elle uniquement le soir entre 20h45 et 23h ?",
    a: "Ce phénomène survient sur les abonnements d'entrée de gamme dont les serveurs saturent dès que l'audience explose lors des matchs de football. Une architecture CDN multi-nœuds 10 Gbps (comme celle de Smarters Pro 12) absorbe cette affluence sans aucune dégradation.",
  },
  {
    q: "Comment changer ses DNS sur Smart TV Samsung ou LG ?",
    a: "Rendez-vous dans Paramètres Réseau > État du réseau > Paramètres IP > Configuration DNS. Basculez en mode 'Manuel' et saisissez 1.1.1.1 (serveur principal) et 1.0.0.1 (serveur secondaire). Redémarrez ensuite votre téléviseur.",
  },
  {
    q: "Que signifie le message 'Playlist introuvable' ou 'Erreur 403 Forbidden' ?",
    a: "L'erreur 403 indique un refus d'accès serveur. Les causes les plus fréquentes sont : une faute de frappe dans le mot de passe, un compte expiré, ou un dépassement du nombre d'écrans autorisés par votre formule.",
  },
  {
    q: "Faut-il utiliser un VPN pour regarder l'IPTV en France ?",
    a: "Un VPN n'est pas requis si vos flux sont cryptés et que vous utilisez des DNS neutres (1.1.1.1). Cependant, si votre opérateur bride volontairement votre bande passante le soir, un VPN permet de masquer le trafic et de restaurer le plein débit.",
  },
  {
    q: "Comment régler un décalage entre la voix et l'image ?",
    a: "Dans les réglages du lecteur (Smarters ou TiviMate), rendez-vous dans 'Audio Settings' et appliquez un décalage de -200ms ou +200ms jusqu'à synchronisation parfaite, ou changez de moteur lecteur vidéo.",
  },
];

export default function GuideDepannagePage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${PAGE_CANONICAL}/#article`,
        headline: 'Guide Dépannage IPTV : Solutions aux Coupures, Buffering & Écran Noir (2026)',
        description: 'Tutoriel et guide de diagnostic complet pour résoudre les problèmes de buffering, de coupures et de blocages sur abonnement IPTV.',
        inLanguage: 'fr-FR',
        publisher: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.domain,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Guide Dépannage', item: PAGE_CANONICAL },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <Header />

      <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-slate-800/80 bg-slate-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav aria-label="Fil d'Ariane">
              <ol className="flex items-center gap-2 text-xs text-slate-400">
                <li><Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5 text-slate-600" /></li>
                <li className="text-slate-200 font-semibold" aria-current="page">Guide Dépannage</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-12 pb-16 overflow-hidden border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" />
              <span>Diagnostic Technique &amp; Résolution de Pannes</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Guide Dépannage IPTV : Solutions aux Coupures, Buffering &amp; Écran Noir (2026)
            </h1>

            <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed">
              Votre flux IPTV subit des ralentissements, des déconnexions ou un écran noir ? Suivez notre protocole de diagnostic pas à pas pour identifier l’origine du problème (connexion, FAI, lecteur ou serveur) et retrouver une image 4K fluide en moins de 5 minutes.
            </p>

            {/* Direct Answer Box */}
            <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-slate-900/90 border border-amber-500/30 text-left shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Solution Immédiate (Diagnostic Express)</span>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    Pour régler 90 % des pannes IPTV sans attendre : <strong>1.</strong> Redémarrez votre box internet et votre équipement TV. <strong>2.</strong> Remplacez les DNS de votre appareil par les <strong>DNS Cloudflare (1.1.1.1 et 1.0.0.1)</strong> pour contourner les bridages FAI. <strong>3.</strong> Dans votre application (Smarters ou TiviMate), passez le moteur vidéo sur <strong>ExoPlayer</strong> ou <strong>VLC</strong> et basculez la mémoire tampon (Buffer) sur 3 à 5 secondes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step Diagnostic Matrix */}
        <section className="py-16 border-b border-slate-800 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Protocole de Résolution</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Les 4 Étapes Clés pour Résoudre les Problèmes de Streaming
              </h2>
              <p className="text-sm text-slate-400">
                Suivez ces vérifications dans l’ordre pour éliminer méthodiquement chaque cause potentielle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {DIAGNOSTIC_STEPS.map((item) => (
                <div key={item.step} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-blue-500/40 transition-colors shadow-lg">
                  <div className="space-y-3">
                    <span className="text-2xl font-black text-blue-500 font-mono">{item.step}</span>
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Troubleshooting Breakdown */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section 1: Buffering & Débit */}
          <article className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400">
                <Gauge className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                1. Comment Éliminer le Buffering &amp; les Ralentissements Vidéo
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Le <strong>buffering</strong> (mise en mémoire tampon répétée) survient lorsque les paquets de données vidéo ne parviennent pas assez vite au lecteur multimédia. Avant d’incriminer le serveur, il convient de calibrer votre lecteur :
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-blue-400" />
                    <span>Ajuster le Buffer Size (Mémoire Tampon)</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Par défaut, certains lecteurs sont configurés sur un buffer de 0 seconde (temps réel strict). Augmentez cette valeur à <strong>3 ou 5 secondes</strong> dans les paramètres de lecture pour créer un réservoir de sécurité contre les micro-variations de débit.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Tv className="w-4 h-4 text-blue-400" />
                    <span>Changer de Décodeur Vidéo</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Si le processeur de votre téléviseur peine à décoder le HEVC H.265 en mode matériel (Hardware), basculez sur le lecteur <strong>VLC</strong> ou <strong>ExoPlayer</strong> intégré dans les options de votre application <Link href="/applications/iptv-smarters-pro" className="text-blue-400 hover:underline">IPTV Smarters Pro</Link>.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Section 2: FAI Blocking & DNS */}
          <article className="space-y-6 pt-10 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-600/10 text-emerald-400">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                2. Blocages Opérateurs (Orange, SFR, Free, Bouygues) : Solution DNS &amp; VPN
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                En France, les fournisseurs d’accès appliquent fréquemment des restrictions DNS dynamiques pendant la diffusion des grands matchs. Pour contourner ce blocage sans ralentir votre débit :
              </p>

              <div className="p-6 rounded-2xl bg-slate-900 border border-emerald-500/20 space-y-4">
                <h3 className="text-base font-bold text-white">Configuration du DNS Cloudflare (1.1.1.1) :</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>DNS Primaire</strong> : 1.1.1.1 (ou 8.8.8.8 pour Google)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>DNS Secondaire</strong> : 1.0.0.1 (ou 8.8.4.4 pour Google)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Cette manipulation prend 2 minutes sur Smart TV, Fire Stick ou boîtier Android et neutralise les filtres DNS de votre box internet.</span>
                  </li>
                </ul>
              </div>

              <p className="text-xs text-slate-400">
                Pour un tutoriel pas à pas complet par modèle de téléviseur, consultez notre guide détaillé : <Link href="/guide-installation/contourner-blocage-fai-iptv-dns-vpn" className="text-emerald-400 hover:underline font-semibold">Tutoriel Contourner le Blocage FAI avec DNS et VPN</Link>.
              </p>
            </div>
          </article>

          {/* Section 3: Error 403 & Black Screen */}
          <article className="space-y-6 pt-10 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-600/10 text-purple-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                3. Résoudre l’Écran Noir, l’Erreur 403 &amp; "Playlist Vide"
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Si les chaînes ne se chargent plus du tout ou affichent un écran noir, effectuez ces 3 contrôles immédiats :
              </p>

              <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-300">
                <li><strong>Nettoyez le cache de l'application</strong> : Rendez-vous dans les paramètres d'applications de votre Android TV ou Fire Stick, sélectionnez votre lecteur IPTV et cliquez sur "Vider le cache".</li>
                <li><strong>Rechargez les données EPG &amp; Chaînes</strong> : Dans Smarters Pro, cliquez sur "Refresh Channels &amp; VOD" pour télécharger la dernière liste à jour.</li>
                <li><strong>Contrôlez les connexions simultanées</strong> : Si votre formule autorise un seul écran, assurez-vous qu'aucun autre smartphone ou tablette de votre domicile n'utilise le flux en arrière-plan. Pour plusieurs écrans, optez pour notre <Link href="/tarifs/iptv-multi-ecran" className="text-purple-400 hover:underline font-semibold">abonnement IPTV multi-écrans</Link>.</li>
              </ol>
            </div>
          </article>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-900/40 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Questions Fréquentes</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                FAQ Dépannage IPTV &amp; Support Technique
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div key={index} className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <h3 className="text-base font-bold text-white">{faq.q}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-16 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-gradient-to-b dark:from-slate-950 dark:to-blue-950/20 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Server className="w-7 h-7" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Besoin d'un Serveur 100% Stable Sans Coupure ?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Si vos problèmes persistent malgré tous les réglages, le goulot d'étranglement provient de votre fournisseur actuel. Testez notre infrastructure CDN 10 Gbps avec équilibrage de charge dynamique.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/test-iptv-gratuit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <span>Lancer un Test IPTV Gratuit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/tarifs"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-slate-700 dark:text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Voir les Formules &amp; Tarifs</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

