// const { nextI18NextRewrites } = require('next-i18next/rewrites');
// const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache')

// const localeSubpaths = {
//   pl: 'pl',
//   en: 'en',
// };

// module.exports = withPWA({
//   // pwa
//   pwa: {
//     dest: 'public',
//     runtimeCaching,
//   },
//   // nextI18
//   rewrites: async () => nextI18NextRewrites(localeSubpaths),
//   publicRuntimeConfig: {
//     localeSubpaths,
//   },
//   //sitemap
//   webpack: (config, { isServer }) => {
//     if (isServer) {
//       require('./pages/api/sitemap.xml.js');
//     }

//     return config;
//   },
// });

module.exports = {
  env: {
    MONGO:
      'mongodb+srv://marcin100:marcinmarcin100@afi-app.rcqkw.mongodb.net/Afi-app?retryWrites=true&w=majority',
  },
};
