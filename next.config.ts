import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.airedesantafe.com.ar',
      },
      {
        protocol: 'https',
        hostname: 'piratasdelrock.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  }
};

export default nextConfig;
