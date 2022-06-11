const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "api.ts"],
  sassOptions: {
    prependData: `@import "styles/injected.scss";`,
  },
};

module.exports = nextConfig;
