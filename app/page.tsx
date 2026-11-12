import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Pricing } from '@/components/Pricing';
import { ThematicBouquets } from '@/components/ThematicBouquets';
import { OurCommitment } from '@/components/OurCommitment';
import { UniversalCompatibility } from '@/components/UniversalCompatibility';
import { Steps } from '@/components/Steps';
import { HomeBlogSection } from '@/components/HomeBlogSection';
import { FAQ } from '@/components/FAQ';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';
import { Footer } from '@/components/Footer';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'Abonnement IPTV France : Serveur Stable et Premium',
    description: "Découvrez le N°1 de l'abonnement IPTV en France. Serveur stable anti-coupure 10 Gbps, flux 4K direct & VOD premium. Activation express 15 min et support 7j/7.",
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
        name: 'Abonnement IPTV France : Serveur Stable et Premium',
        description: "Découvrez le N°1 de l'abonnement IPTV en France. Serveur stable anti-coupure 10 Gbps, flux 4K direct & VOD premium. Activation express 15 min et support 7j/7.",
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
            name: "Comment fonctionne l'activation de mon abonnement ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "L'activation est 100% automatisée. Dès validation de votre commande, nos clusters provisionnent vos accès sécurisés en moins de 10 minutes. Vous recevez instantanément vos identifiants Xtream Codes, M3U et portail Stalker par e-mail et WhatsApp.",
            },
          },
          {
            '@type': 'Question',
            name: "Qu'est-ce qui est inclus dans l'offre Premium France ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Tout est inclus sans pack additionnel : +25 000 chaînes directes (TNT française, Canal+, beIN Sports, RMC Sport, DAZN, chaînes internationales), +90 000 films et séries VOD en 4K, guide EPG sur 7 jours et Replay 72h.",
            },
          },
          {
            '@type': 'Question',
            name: "Quelle est la qualité du streaming 4K Ultra HD ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Nos flux sont diffusés avec le codec H.265 / HEVC à 60 FPS pour une netteté maximale et sans saccade. Un débit internet de 25 Mbps est recommandé pour la 4K Ultra HD, et 8 à 10 Mbps pour le Full HD 1080p.",
            },
          },
          {
            '@type': 'Question',
            name: "Combien d'écrans simultanés avec le Pack Famille ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Les offres individuelles autorisent 1 connexion active. Nos packs IPTV Multi-Écran (Duo, Trio et Famille) permettent de connecter simultanément de 2 à 5 écrans au sein du même foyer sans coupure.",
            },
          },
          {
            '@type': 'Question',
            name: "Sur quels appareils puis-je regarder l'IPTV ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Notre service est compatible avec tous les appareils modernes : Smart TV (Samsung, LG), Amazon Fire TV Stick, boîtiers Android TV, Apple TV, décodeurs MAG et Formuler MyTVOnline, smartphones, tablettes et ordinateurs PC/Mac.",
            },
          },
          {
            '@type': 'Question',
            name: "Y a-t-il un engagement ou renouvellement automatique ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Aucun engagement ni renouvellement automatique. Toutes nos formules fonctionnent en prépaiement unique sans aucun prélèvement récurrent caché.",
            },
          },
          {
            '@type': 'Question',
            name: "Puis-je regarder la Ligue 1 et la Champions League en direct ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, l'intégralité des compétitions majeures (Ligue 1, Champions League, Premier League, F1, MotoGP, UFC, NBA) est diffusée en direct à 60 FPS sur Canal+, beIN Sports, RMC Sport et DAZN sans frais additionnels.",
            },
          },
          {
            '@type': 'Question',
            name: "Comment fonctionne la technologie Anti-Freeze ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Nos serveurs CDN européens utilisent l'équilibrage de charge dynamique. Lors des grands soirs de matchs, le système bascule automatiquement en 500 ms vers un serveur relais disponible pour éviter tout écran noir ou buffering.",
            },
          },
          {
            '@type': 'Question',
            name: "Quels moyens de paiement acceptez-vous ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Nous acceptons les paiements sécurisés chiffrés SSL par Carte Bancaire (Visa, Mastercard via Stripe), PayPal ainsi que les cryptomonnaies (Bitcoin, USDT).",
            },
          },
          {
            '@type': 'Question',
            name: "Puis-je annuler et être remboursé ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, vous bénéficiez d'une garantie satisfait ou remboursé de 14 jours. En cas de problème technique non résolu par nos techniciens, nous procédons au remboursement intégral.",
            },
          },
          {
            '@type': 'Question',
            name: "Ai-je besoin d'un VPN pour utiliser le service ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Non, un VPN n'est pas requis au quotidien. En cas de bridage par votre opérateur internet lors des grands événements sportifs, notre service est 100% compatible avec les VPN majeurs et le DNS Cloudflare 1.1.1.1.",
            },
          },
          {
            '@type': 'Question',
            name: "Le service IPTV fonctionne-t-il à l'étranger ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, l'abonnement est totalement nomade et fonctionne partout dans le monde avec une connexion internet active (Wi-Fi, 4G, 5G, fibre).",
            },
          },
          {
            '@type': 'Question',
            name: "Quelle différence entre Premium, 4K Ultra et Famille ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Tous les forfaits intègrent 100% des chaînes et de la VOD en 4K. La seule différence est la durée d'abonnement (dégressive dès 12 mois) et le nombre d'écrans utilisables simultanément (1 à 4 écrans).",
            },
          },
          {
            '@type': 'Question',
            name: "Recevrai-je les nouvelles séries Netflix/Disney+ en avant-première ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, notre catalogue VOD de plus de 90 000 titres est enrichi quotidiennement avec les dernières sorties cinéma et séries originales de Netflix, Prime Video, Disney+ et Apple TV+ en VF et VOSTFR.",
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

        {/* 4. Thematic Bouquets & Value Proposition */}
        <ThematicBouquets />

        {/* 5. Our Commitment & High Availability Infrastructure */}
        <OurCommitment />

        {/* 6. Hardware & Cross-App Universal Compatibility */}
        <UniversalCompatibility />

        {/* 7. Activation Steps */}
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
