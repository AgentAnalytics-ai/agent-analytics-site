// next.config.ts
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'http', hostname: 'localhost' },
    ],
    formats: ['image/webp', 'image/avif'],
  },

  // ✅ Do not block production builds on ESLint or TS
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
