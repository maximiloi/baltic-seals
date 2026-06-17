import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.0.1.9'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static-maps.yandex.ru',
      },
    ],
  },
};

export default nextConfig;
