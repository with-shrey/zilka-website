
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/Zilka" : "",
  assetPrefix: isProd ? "/Zilka/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
