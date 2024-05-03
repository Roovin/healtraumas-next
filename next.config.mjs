/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    i18n: {
        locales: ["en", "ua"],
        defaultLocale: "en",
        localeDetection: false
    },
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
