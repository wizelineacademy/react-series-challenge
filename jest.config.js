module.exports = {
  browser: true,
  setupFiles: ['./jest.setup.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/'
  ],
  testMatch: ['**/test/**/*.test.js'],
  collectCoverageFrom: [
    "**/src/**/*.{js,jsx}",
    "!**/src/registerServiceWorker.{js,jsx}"
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
