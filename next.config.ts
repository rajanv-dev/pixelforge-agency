import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Required for Tailwind v4 CSS-first config with Turbopack
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
