import type { NextConfig } from "next";
import { localhostIp } from "./localhost_ip";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  allowedDevOrigins: [localhostIp],
  experimental: {
    agentFeedback: true,
  },
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
