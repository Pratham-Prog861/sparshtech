/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },

    turbopack: {
        root: process.cwd()
    },
    output: "standalone"
};

export default nextConfig;
