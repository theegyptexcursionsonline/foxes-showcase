import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Retired demo pages send visitors to the live page for the same product.
  async redirects() {
    return [
      { source: "/voice-demos/:path*", destination: "/voice-agent", permanent: false },
      { source: "/live-demo", destination: "/voice-agent", permanent: false },
      { source: "/search-agent/:path+", destination: "/search-agent", permanent: false },
      { source: "/booking-engine/:path+", destination: "/booking-engine", permanent: false },
      { source: "/hotel-booking/:path*", destination: "/", permanent: false },
      { source: "/schema-audit", destination: "/", permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
