import path from 'path';
import { fileURLToPath } from 'node:url';

// Pin Turbopack root so dev/build don’t pick a parent folder’s lockfile (e.g. user home).
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  turbopack: {
    root: projectRoot,
  },
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
