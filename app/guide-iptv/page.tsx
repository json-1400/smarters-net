import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  BookOpen, 
  ShieldCheck, 
  Zap, 
  HelpCircle, 
  ArrowRight, 
  ChevronRight, 
  Flame, 
  Wifi, 
  Lock, 
  AlertTriangle,
  Gauge,
  SlidersHorizontal,
  CheckCircle2
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/guide-iptv';

export function generateMetadata(): Metadata {
  const title = "Guide IPTV Ultime 2026 : Débuter, Optimiser & Éviter les Coupures";
  const description = "Le guide de référence pour tout comprendre à l'IPTV en France : Guide débutant, solutions anti-buffering sans coupure, débits recommandés et conseils VPN.";

  return {
    title,
    description,
    keywords: [
      'guide iptv',
      'iptv debutant',
      'iptv sans coupure',
      'resoudre buffering iptv',
      'vitesse internet iptv',
      'vpn pour iptv',
      'iptv legal france',
      'optimiser iptv'
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

export default function GuideIptvPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${PAGE_CANONICAL}/#article`,
        headline: 'Guide IPTV Ultime 2026 : Débuter, Optimiser & Éviter les Coupures',
        description: 'Tutoriel et guide complet pour configurer, fluidifier et sécuriser votre expérience de streaming IPTV en France.',
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
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Quelle vitesse de connexion internet faut-il pour regarder l\'IPTV en 4K ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pour la 4K Ultra HD à 60 FPS, un débit réel et stable d\'au moins 20 à 25 Mb/s est fortement recommandé. Pour la Full HD (1080p), une connexion de 10 à 15 Mb/s est largement suffisante.',
            },
          },
          {
            '@type': 'Question',
            name: 'Pourquoi mon IPTV coupe-t-elle souvent le soir pendant les grands matchs ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Deux causes principales existent : soit votre fournisseur actuel utilise des serveurs sous-dimensionnés saturés par l\'affluence, soit votre Fournisseur d\'Accès Internet (FAI) applique un bridage temporaire sur les flux vidéo de streaming. L\'utilisation d\'un serveur CDN haute capacité et d\'un VPN résout ce problème.',
            },
          },
          {
            '@type': 'Question',
            name: 'L\'utilisation d\'un VPN est-elle obligatoire avec l\'IPTV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non, ce n\'est pas obligatoire si votre connexion est directe et rapide. Cependant, un VPN permet de contourner tout bridage d\'opérateur et de chiffrer l\'intégralité de vos paquets réseau pour une fluidité sans faille.',
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
            name: 'Guide IPTV',
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
            <span className="text-slate-200 font-medium" aria-current="page">Guide IPTV</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Dossier Spécialisé 2026 &middot; Qualité &middot; Performance &middot; Sécurité</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Le Guide IPTV Ultime : Débuter, Optimiser & Éviter les Coupures
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tout ce que vous devez savoir pour tirer le meilleur parti de votre <strong>abonnement IPTV</strong> en France. Découvrez les astuces professionnelles pour éliminer le buffering, tester votre vitesse internet et configurer un VPN sans ralentissement.
          </p>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-16">
        
        {/* Section 1: Fonctionnement */}
        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-bold text-white">Qu'est-ce que l'IPTV et comment ça marche ?</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              L'<strong>IPTV</strong> (<em>Internet Protocol Television</em>) permet de recevoir des chaînes de télévision et des vidéos à la demande via une simple connexion internet haut débit (Fibre, VDSL ou 5G), sans nécessiter d'antenne râteau TNT ni de parabole satellite.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Le signal vidéo est encodé au format numérique (H.264 ou H.265 / HEVC) et transmis par paquets de données directement à votre application (comme <strong>IPTV Smarters Pro</strong>). Cela vous permet de profiter d'une qualité d'image allant jusqu'à la 4K Ultra HD à 60 images par seconde avec un zapping quasi instantané.
            </p>
          </div>
        </section>

        {/* Section 2: Résoudre le Buffering & Anti-Freeze */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Les 5 Clés pour Éliminer Définitivement le Buffering et les Coupures
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Appliquez ces réglages recommandés pour obtenir une stabilité de diffusion de 99.9% :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <Wifi className="w-6 h-6 text-blue-400" />
              <h3 className="text-base font-bold text-white">1. Préférer le Wi-Fi 5 GHz ou l'Ethernet</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Le Wi-Fi 2.4 GHz traditionnel est souvent saturé par les appareils domestiques. Connectez votre Smart TV ou Firestick sur la bande Wi-Fi 5 GHz ou via câble réseau RJ45.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <SlidersHorizontal className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">2. Vider le Cache Régulièrement</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sur Fire TV ou Android, videz le cache de votre application dans <em>Paramètres &gt; Applications</em> pour libérer la mémoire vive (RAM) et éviter les blocages vidéo.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <Zap className="w-6 h-6 text-amber-400" />
              <h3 className="text-base font-bold text-white">3. Choisir le Décodage Matériel</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dans les réglages de lecture d'IPTV Smarters Pro, sélectionnez le lecteur natif <strong>Hardware (HW)</strong> pour utiliser la puce graphique de votre téléviseur.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <Lock className="w-6 h-6 text-purple-400" />
              <h3 className="text-base font-bold text-white">4. Utiliser un VPN en Cas de Bridage</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Certains FAI français brident temporairement les flux de streaming le soir. Un VPN chiffré contourne instantanément ces filtres d'étranglement de bande passante.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <Gauge className="w-6 h-6 text-sky-400" />
              <h3 className="text-base font-bold text-white">5. Changer de Format de Flux (HLS / TS)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Si un flux direct bloque, basculez le format de sortie de MPEG-TS à HLS (m3u8) dans votre application pour une tolérance réseau accrue.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <ShieldCheck className="w-6 h-6 text-red-400" />
              <h3 className="text-base font-bold text-white">6. Choisir un Serveur Haute Capacité</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Aucune astuce technique ne peut compenser un serveur saturé. Optez pour nos serveurs CDN avec garantie anti-freeze 99.9%.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Vitesse Internet Débit Recommandé */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-bold text-white">Quel Débit Internet pour Regarder l'IPTV ?</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Voici les vitesses réelles recommandées pour chaque résolution d'écran :
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-2">
              <span className="text-xs text-slate-400 uppercase font-bold">Qualité Standard & HD (720p)</span>
              <span className="text-2xl font-black text-white block">5 à 8 Mb/s</span>
              <p className="text-xs text-slate-400">Parfait pour connexion ADSL stable ou 4G mobile.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-2">
              <span className="text-xs text-blue-400 uppercase font-bold">Qualité Full HD (1080p 60 FPS)</span>
              <span className="text-2xl font-black text-white block">10 à 15 Mb/s</span>
              <p className="text-xs text-slate-400">Recommandé pour tous les directs sportifs sans saccade.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border-2 border-blue-500/50 text-center space-y-2">
              <span className="text-xs text-emerald-400 uppercase font-bold">Qualité 4K Ultra HD & HDR</span>
              <span className="text-2xl font-black text-white block">25+ Mb/s</span>
              <p className="text-xs text-slate-400">Idéal pour les abonnés Fibre optique et 5G box.</p>
            </div>
          </div>
        </section>

        {/* Section 4: CTA vers Tarifs */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-900/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Prêt à tester une IPTV stable sans coupure ?</h3>
            <p className="text-xs text-slate-300">Profitez de notre formule 12 mois VIP avec 1 mois offert et 2 connexions simultanées.</p>
          </div>
          <Link
            href="/tarifs-abonnement"
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-lg"
          >
            Découvrir les Tarifs &rarr;
          </Link>
        </div>

      </main>
    </div>
  );
}
