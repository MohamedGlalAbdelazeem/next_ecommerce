/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com', 'images.unsplash.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'assets.example.com',
              port: '',
              pathname: '/account123/**',
            },
        ],
    },
};

export default nextConfig;
