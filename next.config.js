/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
  experimental: {
    nextScriptWorkers: true,
  },
};

module.exports = nextConfig;
