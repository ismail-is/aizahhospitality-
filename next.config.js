/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true, // Fix for GitHub Pages
    },
    basePath: "/aizahhospitality-", // Change this to your GitHub repo name
    assetPrefix: "/aizahhospitality-",
  };
  
  module.exports = nextConfig;
  