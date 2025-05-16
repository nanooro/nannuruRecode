const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // skip linting during build
  },
  typescript: {
    ignoreBuildErrors: true, // skip type checking during build
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
