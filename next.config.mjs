/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: { loader: "custom" },
    transpilePackages: ["next-image-export-optimizer"],
    basePath: '/portfolio', // Sakura Server
};

export default nextConfig;
