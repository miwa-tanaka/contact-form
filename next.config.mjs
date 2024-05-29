/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/contact-form" : "",
  eslint: {
    dirs: ["src/components/", "src/pages/"],
  },
};

export default nextConfig;
