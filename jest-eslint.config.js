const pack = require('./package');

// See https://jestjs.io/docs/en/configuration

module.exports = {
    displayName: pack.name,
    name: pack.name,
    testEnvironment: 'node',
    coveragePathIgnorePatterns: ['/node_modules/'],

    runner: 'jest-runner-eslint',
    // displayName: 'lint',
    testMatch: ['<rootDir>/**/*.test.js'],
};
