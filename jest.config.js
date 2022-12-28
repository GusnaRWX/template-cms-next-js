const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // provide the path to your next.js app to load next.config.js and env files in your test environment
  dir: './'
})

const customJestConfig = {
  // add more custom option before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom'
}

module.exports = createJestConfig(customJestConfig)