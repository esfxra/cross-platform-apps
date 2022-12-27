const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];

    // React Query
    if (options.isServer) {
      config.externals = ['@tanstack/react-query', ...config.externals]
    }
    config.resolve.alias['@tanstack/react-query'] = path.resolve(
      require.resolve('@tanstack/react-query'),
      '../../../'
    )    

    return config;
  },
  images: {
    domains: ['static.coinstats.app'],
  },
};
