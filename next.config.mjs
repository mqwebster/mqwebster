/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    // formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        port: "",
        pathname: "/images/products/thumbnails/new/**",
      },
    ],
  },
};
