module.exports = {
  ...require('./test/jest-common'),
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 17,
      branches: 4,
      lines: 17,
      function: 20
    },
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      lines: 100,
      function: 100
    }
  },
  projects: [
    './test/jest.lint.js',
    './test/jest.client.js',
    './test/jest.server.js'
  ]
}
