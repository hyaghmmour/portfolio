/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,    // Enables strict mode
  swcMinify: true,          // Minify with SWC for faster builds
  basePath: '/portfolio',
  assetPrefix: '/portfolio',

};

export default nextConfig;