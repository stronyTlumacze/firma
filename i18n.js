const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

module.exports = new NextI18Next({
  browserLanguageDetection: true,
  defaultLanguage: 'pl',
  otherLanguages: ['pl', 'en'],
  defaultNS: 'common', // defeault name space
  localeSubpaths: {
    pl: 'pl',
    en: 'en',
  },
  localePath: path.resolve('./public/static/locales'),
});