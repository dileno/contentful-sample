/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.ctfassets.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig
