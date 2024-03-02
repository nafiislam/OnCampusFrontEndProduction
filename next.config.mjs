/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
      webpack: (config) => {
        config.externals = [...config.externals, "canvas", "jsdom"];
        return config;
        },
      typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
};

export default nextConfig;
