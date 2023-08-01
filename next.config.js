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
  };