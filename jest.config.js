module.exports = {
  browser: true,
  setupFiles: ["./jest.setup.js", "./test/__mocks__/browserMock.js"],
  testPathIgnorePatterns: ["/node_modules/", "/coverage/"],
  testMatch: ["**/*.test.js"],
  collectCoverageFrom: [
    "**/src/**/*.{js,jsx}",
    "!**/src/registerServiceWorker.{js,jsx}",
    "!**/src/index.js"
  ],
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75
    }
  }
};