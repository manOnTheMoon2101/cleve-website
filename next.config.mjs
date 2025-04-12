/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        // your remote patterns if any
      ],
    },
    // Add this to ensure proper Sharp compatibility
    webpack: (config) => {
      config.externals = [...(config.externals || []), "sharp"];
      return config;
    },
  };
  
  module.exports = nextConfig;