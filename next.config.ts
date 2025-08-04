/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;
