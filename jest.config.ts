import type { Config } from 'jest';

const config: Config = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],

  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },

  verbose: true,
};

export default config;
