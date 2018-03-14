module.exports = {
  browser: true,
  setupFiles: ['./jest.setup.js', './test/mocks/browser.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/'
  ],
  testMatch: ['**/test/**/*.test.js', '**/test/**/*.test.jsx'],
  collectCoverageFrom: [
    "**/src/**/*.{js,jsx}",
    "!**/src/registerServiceWorker.{js,jsx}",
    "!**/src/index.js",
    "!**/src/sagas/index.js"
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
