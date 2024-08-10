/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ['img.shields.io'],
  },
};

module.exports = nextConfig;
