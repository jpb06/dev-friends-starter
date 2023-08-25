const nextJest = require('next/jest');
const { transformTsPaths } = require('ts-paths-transform');

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
    ...transformTsPaths(tsconfigPaths, {
      prefix: '<rootDir>',
      //  debug: true,
    }),
  },
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js', "@testing-library/jest-dom"],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!src/pages/**/*.tsx',
  ],
};

module.exports = createJestConfig(jestConfig);
