module.exports = {
  browser: true,
  setupFiles: ['./jest.setup.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/'
  ],
  moduleNameMapper: {
    "\\.(css|scss|svg|gif|jpg|png|jpeg)$": "identity-obj-proxy"
  },
  testMatch: ['**/__tests__/*.test.js'],
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
