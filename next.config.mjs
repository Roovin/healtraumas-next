/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    i18n: {
        locales: ["en", "fr"],
        defaultLocale: "en",
        localeDetection: false
    },
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
