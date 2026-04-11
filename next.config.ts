import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.mehul.codes",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
