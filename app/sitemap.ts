import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';

// Revalidate every hour on Edge cache
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.domain;
  const now = new Date().toISOString();

  // 1. High-priority Commercial & Strategic Landers (Tier 1)
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tarifs-abonnement`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/abonnement-iptv-12-mois`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tarifs-abonnement/iptv-pas-cher`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tarifs-abonnement/iptv-multi-ecran`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/catalogue-vod/iptv-adulte`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // 2. Hubs, Live Streams & Entertainment (Tier 2)
  const hubPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/guide-installation`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/applications`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/applications/iptv-smarters-pro`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/chaine`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sport`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/football-streaming`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/catalogue-vod`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide-iptv`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  // 3. Hardware Tutorial Guides (Tier 3)
  const tutorialPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/guide-installation/fire-tv-stick`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide-installation/smart-tv-samsung-lg`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide-installation/android-tv-box`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide-installation/apple-tv-ios`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide-installation/pc-mac-windows`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide-installation/xtream-codes-m3u`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // 4. Player Applications (Tier 4)
  const playerPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/applications/ibo-player`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/applications/smart-iptv`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/applications/tivimate`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/applications/xciptv`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // 5. Technical Blog Guides (Tier 5)
  const blogPosts: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/configurer-smarters-pro-smart-tv`,
      lastModified: '2026-05-28T12:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/eviter-coupures-iptv-conseils`,
      lastModified: '2026-05-15T12:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/comparatif-meilleures-applications-iptv`,
      lastModified: '2026-05-02T12:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  return [
    ...corePages,
    ...hubPages,
    ...tutorialPages,
    ...playerPages,
    ...blogPosts,
  ];
}
