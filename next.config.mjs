/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.pixabay.com'],
        
      },
      experimental: {
        images: {
            allowFutureImage: true
        }
      },
};


export default nextConfig;
