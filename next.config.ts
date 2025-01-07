import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['spesialiskomporgas.id'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '1mb', 
      allowedOrigins: ['https://example.com'], 
    },
  },
};

export default nextConfig;
