module.exports = {
  setupFiles: [
    './setupJest.js',
  ],
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  testEnvironment: 'jest-environment-jsdom-fourteen',
};
