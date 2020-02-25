const pack = require('./package');

// See https://jestjs.io/docs/en/configuration

module.exports = {
    // displayName: pack.name,
    name: pack.name,
    testEnvironment: 'node',
    runner: 'jest-runner-eslint',
    displayName: 'lint',
    testMatch: [
        '<rootDir>/app*.js',
        '<rootDir>/tests/*.js',
        '<rootDir>/routes/*.js',
    ],
    watchPlugins: ['jest-runner-eslint/watch-fix'],
};
