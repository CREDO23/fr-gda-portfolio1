module.exports = {
    reactStrictMode: true,
    transpilePackages: ["@smarket-design"],
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "*.com",
        },
      ],
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        
        use: ['@svgr/webpack'],
      })
      return config
    },
  };