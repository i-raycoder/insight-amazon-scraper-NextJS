/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      // Ignore .map files
      config.module.rules.push({
        test: /\.js\.map$/,
        use: 'ignore-loader',
      });
  
      // Exclude puppeteer-core and chrome-aws-lambda from the server bundle
      config.externals = [
        ...config.externals,
        'puppeteer-core',
        'chrome-aws-lambda',
      ];
  
      return config;
    },
  };
  
  export default nextConfig;
  