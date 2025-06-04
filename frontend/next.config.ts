import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // If you have a base path because your repository is not <username>.github.io,
  // you might also need to add:
  basePath: "/portfolio", // Set for GitHub Pages subpath
  // assetPrefix: "/portfolio/", // basePath should be sufficient for Next.js 13.4+
  /* config options here */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
