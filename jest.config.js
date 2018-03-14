module.exports = {
  browser: true,
  setupFiles: ['./jest.setup.js', './test/__mocks__/browserMocks.js'],
  verbose: true,
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/'
  ],
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx}',
    '!**/src/registerServiceWorker.{js,jsx}',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/test/__mocks__/styleMocks.js',
  },
  testMatch: ['**/test/**/*.test.js'],
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75,
    },
  },
};
