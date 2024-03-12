import type { Config } from 'jest';

const config: Config = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],

  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/templates/*'],

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@app(.*)$': '<rootDir>/src/01_app$1',
    '^@pages(.*)$': '<rootDir>/src/01_pages$1',
    '^@widgets(.*)$': '<rootDir>/src/02_widgets$1',
    '^@features(.*)$': '<rootDir>/src/03_features$1',
    '^@entities(.*)$': '<rootDir>/src/04_entities$1',
    '^@shared(.*)$': '<rootDir>/src/04_shared$1',
  },

  verbose: true,
};

export default config;
