/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // enable static HTML export
    output: 'export',
    // When using static export, Next's Image Optimization API isn't available.
    // Disable built-in optimization so `<Image />` works during `next export` / static
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    webpack(config) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
      return config;
    },
  };
  
  export default nextConfig;