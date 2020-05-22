const { configureUnitTests } = require('ajc-jest-enzyme');

const jestConfig = configureUnitTests();
jestConfig.coveragePathIgnorePatterns.push('<rootDir>/src/index.js');
jestConfig.moduleNameMapper = {};
jestConfig.setupFilesAfterEnv = [];

module.exports = jestConfig;
