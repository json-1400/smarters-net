import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.domain;

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/_next/image*',
          '/_next/static/',
          '/llms.txt',
          '/llms-full.txt',
        ],
        disallow: [
          '/admin/',
          '/dashboard/',
          '/api/',
          '/checkout',
          '/login',
          '/register',
          '/*?ref=',
          '/*?debug=',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl.replace(/^https?:\/\//, ''),
  };
}
