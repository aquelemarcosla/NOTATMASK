/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  async rewrites() {
    return [
      {
        source: '/pagenotfound',
        destination: '/',
      },
    ]
  },
}