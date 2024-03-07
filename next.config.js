/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};
