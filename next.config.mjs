/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,    // Enables strict mode
  swcMinify: true,          // Minify with SWC for faster builds
  output: 'export',
  basePath: '/portfolio'
};

export default nextConfig;