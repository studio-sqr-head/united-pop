/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },

  images: {
    domains: ["a.storyblok.com"],
  },
};

export default nextConfig;
