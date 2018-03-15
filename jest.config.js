module.exports = {
  browser: true,
  setupFiles: ['./jest.setup.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/'
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/__mocks__/fileMock.js',
  },
  testMatch: ['**/test/**/*Test.js'],
  collectCoverageFrom: [
    "**/src/**/*.{js,jsx}",
    "!**/src/registerServiceWorker.{js,jsx}",
    "!**/src/index.{js,jsx}"
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