module.exports = {
  verbose: true,
  automock: false,
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*': '<rootDir>/node_modules/jest-css-modules'
  },
  moduleFileExtensions: ['js', 'jsx'],
  setupFiles: ['./setupJest.js']
};
