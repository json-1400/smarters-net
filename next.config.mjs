/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/configurer-smarters-pro-smart-tv',
        destination: '/guide-installation/smart-tv-samsung-lg',
        permanent: true,
      },
      {
        source: '/blog/eviter-coupures-iptv-conseils',
        destination: '/guide-iptv',
        permanent: true,
      },
      {
        source: '/blog/comparatif-meilleures-applications-iptv',
        destination: '/applications',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
