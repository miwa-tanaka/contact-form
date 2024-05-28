/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
  },
  eslint: {
    dirs: ["src/components/", "src/pages/"],
  },
};

export default nextConfig;
