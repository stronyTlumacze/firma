// const { nextI18NextRewrites } = require('next-i18next/rewrites');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

// const localeSubpaths = {
//   pl: 'pl',
//   en: 'en',
// };

module.exports = withPWA({
  // pwa
  pwa: {
    dest: 'public',
    runtimeCaching,
  },

  target: 'serverless',
  // nextI18
  // rewrites: async () => nextI18NextRewrites(localeSubpaths),
  // publicRuntimeConfig: {
  //   localeSubpaths,
  // },
  //sitemap
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./pages/api/sitemap.xml.js');
    }

    return config;
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  },
  // mongo
  env: {
    MONGO: process.env.MONGO_LINK,
  },
});
