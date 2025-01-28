/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  rewrites: async () => {
    return [
      {
        source: '/apis/:path*',
        destination: process.env.NEXT_PUBLIC_DEV_SERVER_URL,
      },
    ];
  },
};

module.exports = nextConfig;
