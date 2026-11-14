import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (https://zhambyl14.github.io/profile/)
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/profile" : "",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
