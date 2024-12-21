/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
    ],
  },
  typescript: {
    // Set this to false if you want production builds to abort if there are type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    // Set this to false if you want production builds to abort if there are lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
}

module.exports = nextConfig
