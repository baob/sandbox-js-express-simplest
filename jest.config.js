// See https://jestjs.io/docs/en/configuration

module.exports = {
    projects: [
        '<rootDir>/jest-test.config.js',
        '<rootDir>/jest-eslint.config.js',
        '<rootDir>/jest-flow.config.js',
    ],
    watchPlugins: ['jest-runner-eslint/watch-fix'],
};
