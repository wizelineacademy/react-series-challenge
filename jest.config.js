module.exports = {
  browser: true,
  setupFiles: ['./src/setup.test.js', "jest-localstorage-mock"],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/'
  ],
  moduleNameMapper: {
    "\\.(css|scss|svg|gif|jpg|png|jpeg)$": "identity-obj-proxy"
  },
  testMatch: ['**/__tests__/*.test.js'],
  collectCoverageFrom: [
    "**/src/pages/data/**/*.{js,jsx}",
    "**/src/styledComponents/**/*.{js,jsx}",
    "**/src/components/**/*.{js,jsx}",
    "**/src/appComponents/**/*.{js,jsx}",
    "!**/src/registerServiceWorker.{js,jsx}",
    '!**/**/saga.js'
  ],
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75,
    },
  },
};
