import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  // If deploying to a subdirectory (e.g., /portfolio), uncomment and set:
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio',
};

export default nextConfig;
