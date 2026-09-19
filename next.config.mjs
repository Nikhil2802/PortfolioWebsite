/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Every shipped raster is 1280px or narrower, so the 2048 and 3840 buckets
    // only ever produce upscales: bigger files carrying no more detail.
    deviceSizes: [640, 750, 828, 1080, 1280],
    imageSizes: [256, 384],
    formats: ["image/webp"],
  },
};

export default nextConfig;
