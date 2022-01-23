const nextJest = require('next/jest');
const { pathsToModuleNameMapper } = require('ts-jest');

const {
  compilerOptions: { paths: tsconfigPaths },
} = require('./tsconfig');

const createJestConfig = nextJest({
  dir: './',
});

const jestConfig = {
  logHeapUsage: true,
  testEnvironment: 'jest-environment-jsdom',
  globalSetup: '<rootDir>/jest/jest.setup.env.ts',
  moduleNameMapper: {
    ...pathsToModuleNameMapper(tsconfigPaths, { prefix: '<rootDir>/src' }),
  },
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!src/pages/**/*.tsx',
  ],
};

module.exports = createJestConfig(jestConfig);
