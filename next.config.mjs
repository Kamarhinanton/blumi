import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default bundleAnalyzer({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'blumi-phi.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'blumi-git-main-kamarhinantons-projects.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'blumi-avv3ggrlq-kamarhinantons-projects.vercel.app',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(glsl|frag|vert)$/,
        use: 'raw-loader',
      }
    );
    return config;
  },
});
