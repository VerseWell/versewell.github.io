/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',  // Enable static exports
    images: {
        unoptimized: true, // Required for static export
    },
    // Update this with your repository name
    basePath: '',
    assetPrefix: '',
}

module.exports = nextConfig 
