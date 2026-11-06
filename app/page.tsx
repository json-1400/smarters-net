import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Pricing } from '@/components/Pricing';
import { HomeChannelsSport } from '@/components/HomeChannelsSport';
import { VodSwiper } from '@/components/vod/VodSwiper';
import { Features } from '@/components/Features';
import { Compatibility } from '@/components/Compatibility';
import { Steps } from '@/components/Steps';
import { HomeBlogSection } from '@/components/HomeBlogSection';
import { FAQ } from '@/components/FAQ';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';
import { Footer } from '@/components/Footer';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'Abonnement IPTV Premium 2026 : +25 000 Chaînes & VOD 4K Sans Coupure',
    description: 'Profitez du meilleur abonnement IPTV en France : +25 000 chaînes direct 4K et 90 000 films/séries. Serveurs stables anti-coupure et activation immédiate.',
    canonicalUrl: SITE_CONFIG.domain,
  });
}

export default function Home() {
  const homeSchemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${SITE_CONFIG.domain}/#webpage`,
        url: SITE_CONFIG.domain,
        name: 'IPTV Smarters Pro : N°1 Abonnement IPTV 4K en France | Serveur Stable',
        description: SITE_CONFIG.description,
        isPartOf: { '@id': `${SITE_CONFIG.domain}/#website` },
        about: { '@id': `${SITE_CONFIG.domain}/#product` },
        publisher: { '@id': `${SITE_CONFIG.domain}/#organization` },
        inLanguage: 'fr-FR',
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_CONFIG.domain}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: "Qu'est-ce que l'IPTV Smarters Pro ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "IPTV Smarters Pro est l'application de lecture de flux vidéo la plus performante au monde. Elle permet aux abonnés de charger leur abonnement IPTV France via l'API Xtream Codes ou un lien M3U pour regarder les chaînes TV en direct, les replays et la VOD (films et séries) en 4K Ultra HD.",
            },
          },
          {
            '@type': 'Question',
            name: "Comment installer l'abonnement sur Smart TV Samsung / LG ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Téléchargez l'application officielle IPTV Smarters Pro ou Smarters Player Lite depuis le magasin d'applications de votre téléviseur (Samsung Smart Hub ou LG Content Store), choisissez Connexion avec l'API Xtream Codes et saisissez vos identifiants reçus après commande.",
            },
          },
          {
            '@type': 'Question',
            name: 'Puis-je utiliser mon abonnement sur plusieurs écrans en même temps ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Toutes nos formules individuelles (3 mois, 6 mois et 12 mois VIP) incluent 1 connexion active à la fois. Nos offres IPTV Multi-Écran (Packs Duo, Trio et Maxi) permettent de connecter de 2 à 4 écrans en même temps sans coupure.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quel débit internet est recommandé pour regarder en 4K ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pour la HD 1080p, 10 Mbps suffisent. Pour la qualité IPTV 4K Ultra HD à 60 FPS sans coupure, nous recommandons un débit stable d’au moins 25 Mbps.',
            },
          },
          {
            '@type': 'Question',
            name: 'Le paiement est-il sécurisé et confidentiel ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, à 100 %. Vos coordonnées de commande sont traitées de manière chiffrée et sans aucun renouvellement automatique caché. Vous recevez vos accès par e-mail et WhatsApp.',
            },
          },
          {
            '@type': 'Question',
            name: "Comment se passe la livraison des codes après l'achat ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dès validation de votre commande, nos techniciens provisionnent vos accès dédiés sur nos clusters haute vitesse. Vos identifiants Xtream Codes et M3U vous sont envoyés par e-mail et WhatsApp en moins de 15 minutes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Proposez-vous une assistance technique en cas de problème ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolument. Nous offrons un support client francophone 7j/7 par WhatsApp et par e-mail pour vous accompagner pas à pas lors de l’installation et de la configuration.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quels sont les avantages de cet abonnement IPTV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Notre abonnement IPTV Smarters Pro Officiel intègre la technologie anti-freeze et des serveurs européens redondés avec plus de 25 000 chaînes mondiales et 90 000 VOD en 4K/HD, EPG complet et Replay 72h.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans antialiased text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchemaGraph) }}
      />
      {/* 0. Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* 1. Hero Header */}
        <Hero />

        {/* 2. Stats & Trust Indicators */}
        <Stats />

        {/* 3. Pricing & Money Section (Early in funnel) */}
        <Pricing />

        {/* 4. Live Channels & 4K Sport Showcase */}
        <HomeChannelsSport />

        {/* 5. Interactive VOD Catalogue Swiper */}
        <VodSwiper />

        {/* 6. Technical Superiority & Anti-Freeze Infrastructure */}
        <Features />

        {/* 7. Hardware & Cross-App Compatibility */}
        <Compatibility />

        {/* 8. Activation Steps */}
        <Steps />

        {/* 9. Recent Blog Posts & Comparative Dossiers */}
        <HomeBlogSection />

        {/* 10. FAQ Accordion Module */}
        <FAQ />

        {/* 11. Final Conversion CTA Banner */}
        <HomeFinalCTA />
      </main>

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}
