/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "aceternity.com",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "i.imgflip.com",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "oaidalleapiprodscus.blob.core.windows.net",
      },
    ],
  },
};
