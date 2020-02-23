const pack = require('./package');

// See https://jestjs.io/docs/en/configuration

module.exports = {
    // displayName: pack.name,
    name: pack.name,
    displayName: 'jest',
    testEnvironment: 'node',
    coveragePathIgnorePatterns: ['/node_modules/'],
};
