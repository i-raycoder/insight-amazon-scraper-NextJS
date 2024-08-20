/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      // Ignore .map files
      config.module.rules.push({
        test: /\.js\.map$/,
        use: 'ignore-loader',
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  