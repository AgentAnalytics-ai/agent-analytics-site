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

  // Typecheck runs in `pnpm build` before `next build`; keep Next from double-validating in CI
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
