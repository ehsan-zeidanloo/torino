/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '6500',
            pathname: '/static/images/**', // پث اصلی API شما
          },
        ],
      },
};

export default nextConfig;
