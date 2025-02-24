import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";


const nextConfig: NextConfig = {
  reactStrictMode: true,

};

const withPWA = withPWAInit({
  dest: "public",
});

export default withPWA(nextConfig);