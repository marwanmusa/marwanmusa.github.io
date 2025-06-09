import type { NextConfig } from "next";
import mdx from "@next/mdx";

const withMDX = mdx({ extension: /\.mdx$/ });

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  pageExtensions: ["tsx", "ts", "js", "jsx", "mdx"],
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./src/mdx-components.tsx",
    },
  },
};

export default withMDX(nextConfig);
