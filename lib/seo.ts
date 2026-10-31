import type { Metadata } from 'next';

export const SITE_CONFIG = {
  name: 'IPTV Smarters Pro Officiel',
  legalName: 'Smarters Pro France',
  domain: process.env.NEXT_PUBLIC_SITE_URL && !process.env.NEXT_PUBLIC_SITE_URL.includes('localhost') 
    ? process.env.NEXT_PUBLIC_SITE_URL 
    : 'https://smarterspro12.net',
  description:
    'Profitez du meilleur abonnement IPTV Smarters Pro en France. +25 000 chaînes directes et +90 000 VOD en qualité 4K Ultra HD sans coupure. Activation immédiate 7j/7.',
  defaultKeywords: [
    'abonnement iptv',
    'iptv smarters pro',
    'abonnement iptv smarters pro',
    'iptv france',
    'iptv 4k',
    'flux tv france',
    'lecteur iptv',
    'serveur iptv stable',
    'xtream codes france',
    'm3u france'
  ],
  supportEmail: 'support@smarterspro-france.net',
  dmcaEmail: 'dmca@smarterspro-france.net',
  locales: [
    { code: 'fr-FR', name: 'France' },
    { code: 'fr-BE', name: 'Belgique' },
    { code: 'fr-CH', name: 'Suisse' },
    { code: 'fr-CA', name: 'Canada' },
  ],
};

export function constructMetadata({
  title,
  description = SITE_CONFIG.description,
  image = '/images/og-banner.jpg',
  canonicalUrl,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const fullTitle = title 
    ? `${title} | ${SITE_CONFIG.name}` 
    : `IPTV Smarters Pro : N°1 Abonnement IPTV 4K en France | Serveur Stable`;

  const canonical = canonicalUrl ? `${SITE_CONFIG.domain}${canonicalUrl}` : SITE_CONFIG.domain;

  return {
    title: fullTitle,
    description,
    keywords: SITE_CONFIG.defaultKeywords,
    metadataBase: new URL(SITE_CONFIG.domain),
    alternates: {
      canonical,
      languages: {
        'fr-FR': `${canonical}?lang=fr-fr`,
        'fr-BE': `${canonical}?lang=fr-be`,
        'fr-CH': `${canonical}?lang=fr-ch`,
        'fr-CA': `${canonical}?lang=fr-ca`,
        'x-default': canonical,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_CONFIG.name,
      locale: 'fr_FR',
      type: 'website',
      images: [
        {
          url: image.startsWith('http') ? image : `${SITE_CONFIG.domain}${image}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image.startsWith('http') ? image : `${SITE_CONFIG.domain}${image}`],
    },
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon.ico' },
      ],
      apple: [{ url: '/images/brand-logo.png' }],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateStructuredDataGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.domain}/#organization`,
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.domain,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_CONFIG.domain}/logo.png`,
          caption: SITE_CONFIG.name,
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: SITE_CONFIG.supportEmail,
            availableLanguage: ['French', 'English'],
          },
          {
            '@type': 'ContactPoint',
            contactType: 'technical support',
            email: SITE_CONFIG.dmcaEmail,
            availableLanguage: ['French', 'English'],
          }
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_CONFIG.domain}/#website`,
        url: SITE_CONFIG.domain,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        publisher: {
          '@id': `${SITE_CONFIG.domain}/#organization`,
        },
        inLanguage: 'fr-FR',
      },
      {
        '@type': 'Product',
        '@id': `${SITE_CONFIG.domain}/#product`,
        name: 'Abonnement IPTV Smarters Pro 4K',
        description: 'Abonnement IPTV haute performance avec plus de 25 000 chaînes directes et catalogue VOD complet.',
        brand: {
          '@type': 'Brand',
          name: 'IPTV Smarters Pro',
        },
        offers: [
          {
            '@type': 'Offer',
            name: 'Formule Découverte 3 Mois',
            price: '19.99',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: `${SITE_CONFIG.domain}/#pricing`,
          },
          {
            '@type': 'Offer',
            name: 'Formule Confort 6 Mois',
            price: '29.99',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: `${SITE_CONFIG.domain}/#pricing`,
          },
          {
            '@type': 'Offer',
            name: 'Formule VIP 12 Mois',
            price: '39.99',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: `${SITE_CONFIG.domain}/#pricing`,
          },
        ],
      },
    ],
  };
}
