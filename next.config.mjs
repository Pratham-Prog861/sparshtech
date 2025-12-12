/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "www.vectorlogo.zone",
            },
            {
                protocol: "https",
                hostname: "ui.shadcn.com",
            },
            {
                protocol: "https",
                hostname: "ui.aceternity.com",
            },
            {
                protocol: "https",
                hostname: "cdn.jsdelivr.net",
            },
        ],
    },

    turbopack: {
        root: process.cwd()
    },
};

export default nextConfig;
