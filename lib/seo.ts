import type { Metadata } from 'next';

export const SITE_CONFIG = {
  name: 'IPTV Smarters Pro Officiel',
  legalName: 'Smarters Pro France',
  domain: (process.env.NEXT_PUBLIC_SITE_URL && !process.env.NEXT_PUBLIC_SITE_URL.includes('localhost') 
    ? process.env.NEXT_PUBLIC_SITE_URL 
    : 'https://smarterspro12.net').replace(/\/+$/, ''),
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
  supportEmail: 'contact@smarterspro12.com',
  dmcaEmail: 'contact@smarterspro12.com',
  locales: [
    { code: 'fr-FR', name: 'France' },
    { code: 'fr-BE', name: 'Belgique' },
    { code: 'fr-CH', name: 'Suisse' },
    { code: 'fr-CA', name: 'Canada' },
  ],
};

export function buildAlternates(canonical: string) {
  return {
    canonical,
    languages: {
      'fr': canonical,
      'fr-FR': canonical,
      'fr-BE': canonical,
      'fr-CH': canonical,
      'fr-CA': canonical,
      'x-default': canonical,
    },
  };
}

export function constructMetadata({
  title,
  description = SITE_CONFIG.description,
  image = '/images/hero-family-bg.jpg',
  canonicalUrl,
  keywords = SITE_CONFIG.defaultKeywords,
  type = 'website',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  noIndex?: boolean;
} = {}): Metadata {
  const fullTitle = title
    ? title.length >= 45 || title.toLowerCase().includes('iptv')
      ? title
      : `${title} | ${SITE_CONFIG.name}`
    : `IPTV Smarters Pro : N°1 Abonnement IPTV 4K en France | Serveur Stable`;

  const canonical = canonicalUrl
    ? canonicalUrl.startsWith('http')
      ? canonicalUrl
      : `${SITE_CONFIG.domain}${canonicalUrl}`
    : SITE_CONFIG.domain;

  const imageUrl = image.startsWith('http') ? image : `${SITE_CONFIG.domain}${image}`;

  return {
    title: fullTitle,
    description,
    keywords,
    metadataBase: new URL(SITE_CONFIG.domain),
    alternates: buildAlternates(canonical),
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_CONFIG.name,
      locale: 'fr_FR',
      type,
      images: [
        {
          url: imageUrl,
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
      images: [imageUrl],
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
        legalName: SITE_CONFIG.legalName,
        url: SITE_CONFIG.domain,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE_CONFIG.domain}/#logo`,
          url: `${SITE_CONFIG.domain}/images/brand-logo.png`,
          caption: SITE_CONFIG.name,
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: SITE_CONFIG.supportEmail,
            telephone: '+212-715-214-002',
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
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1420',
          bestRating: '5',
          worstRating: '1',
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
            name: 'Formule VIP 12 Mois (1 Connexion)',
            price: '49.99',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: `${SITE_CONFIG.domain}/abonnement-iptv-12-mois`,
          },
          {
            '@type': 'Offer',
            name: 'Abonnement Pack Duo (2 Écrans)',
            price: '69.99',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: `${SITE_CONFIG.domain}/tarifs/iptv-multi-ecran`,
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${SITE_CONFIG.domain}/#navigation`,
        name: 'Navigation Principale IPTV Smarters Pro',
        itemListElement: [
          { '@type': 'SiteNavigationElement', position: 1, name: 'Tarifs & Abonnements', url: `${SITE_CONFIG.domain}/tarifs` },
          { '@type': 'SiteNavigationElement', position: 2, name: 'Abonnement 12 Mois VIP', url: `${SITE_CONFIG.domain}/abonnement-iptv-12-mois` },
          { '@type': 'SiteNavigationElement', position: 3, name: 'Applications IPTV', url: `${SITE_CONFIG.domain}/applications` },
          { '@type': 'SiteNavigationElement', position: 4, name: "Guide d'Installation", url: `${SITE_CONFIG.domain}/guide-installation` },
          { '@type': 'SiteNavigationElement', position: 5, name: 'Chaînes & Direct', url: `${SITE_CONFIG.domain}/catalogue/chaines` },
          { '@type': 'SiteNavigationElement', position: 6, name: 'Blog & Comparatifs', url: `${SITE_CONFIG.domain}/blog` },
          { '@type': 'SiteNavigationElement', position: 7, name: 'Support Client 7j/7', url: `${SITE_CONFIG.domain}/support` },
        ],
      },
    ],
  };
}
