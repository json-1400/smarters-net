import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.domain;

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/_next/image', '/_next/static/'],
        disallow: [
          '/admin/',
          '/admin/*',
          '/api/',
          '/api/*',
          '/dashboard/',
          '/dashboard/*',
          '/checkout',
          '/checkout/*',
          '/order/',
          '/order/*',
          '/login',
          '/register',
          '/*?*', // Prevent crawling URL query parameters to avoid duplicate content & crawl budget waste
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
