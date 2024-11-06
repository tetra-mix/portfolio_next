/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    basePath: '/portfolio', // Sakura Server
    images: { loader: "custom" },
    transpilePackages: ["next-image-export-optimizer"],
};

export default nextConfig;
