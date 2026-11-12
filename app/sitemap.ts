import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';
import { POSTS_LIST } from '@/lib/blog-data';

// Revalidate every hour on Edge cache (ISR)
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.domain.replace(/\/+$/, '');
  const TODAY = '2026-11-10T14:00:00.000Z';
  const BASE_UPDATE = '2026-11-05T12:00:00.000Z';
  const LEGAL_UPDATE = '2026-01-15T00:00:00.000Z';

  // 1. High-priority Commercial & Strategic Conversion Landers (Tier 1)
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: TODAY,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: TODAY,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/abonnement-iptv-12-mois`,
      lastModified: TODAY,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tarifs/iptv-pas-cher`,
      lastModified: BASE_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tarifs/iptv-multi-ecran`,
      lastModified: BASE_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/test-iptv-gratuit`,
      lastModified: BASE_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // 2. Pillar Pages : Applications IPTV (Tier 2 - Haute Valeur SEO & Conversion)
  const applicationPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/applications`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/applications/iptv-smarters-pro`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/applications/tivimate`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/applications/mytvonline-3`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/applications/ibo-player`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/applications/flix-iptv`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/applications/smart-iptv`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/applications/gse-smart-iptv`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/applications/xciptv`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ];

  // 3. Guides Techniques & Tutoriels Matériels (Tier 3)
  const tutorialPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/guide-installation`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/guide-installation/fire-tv-stick`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide-installation/smart-tv-samsung-lg`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide-installation/android-tv-box`,
      lastModified: BASE_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide-installation/apple-tv-ios`,
      lastModified: BASE_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide-installation/pc-mac-windows`,
      lastModified: BASE_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide-installation/xtream-codes-m3u`,
      lastModified: BASE_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide-installation/mag-box`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide-installation/contourner-blocage-fai-iptv-dns-vpn`,
      lastModified: BASE_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // 4. Hubs de Contenu, Catalogue & Support (Tier 4)
  const hubPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/catalogue`,
      lastModified: TODAY,
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/catalogue/chaines`,
      lastModified: BASE_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/catalogue/vod`,
      lastModified: BASE_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide-depannage`,
      lastModified: BASE_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: BASE_UPDATE,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: TODAY,
      changeFrequency: 'daily',
      priority: 0.85,
    },
  ];

  // 5. Articles de Blog Dynamiques (Mappés avec dates réelles E-E-A-T)
  const dynamicBlogPages: MetadataRoute.Sitemap = POSTS_LIST.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.dateModified || post.datePublished,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // 6. Pages Légales & Informatives (Tier 5 - Priorité basse)
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/dmca`,
      lastModified: LEGAL_UPDATE,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: LEGAL_UPDATE,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: LEGAL_UPDATE,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-de-remboursement`,
      lastModified: LEGAL_UPDATE,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [
    ...corePages,
    ...applicationPages,
    ...tutorialPages,
    ...hubPages,
    ...dynamicBlogPages,
    ...legalPages,
  ];
}
