const path = require("path");

module.exports = {
  moduleFileExtensions: ["tsx", "ts", "js", "json", "node"],
  transform: {
    "^.+\\.(j|t)sx?$": "ts-jest",
  },
  roots: ["<rootDir>/__test__"],
  testEnvironment: "jest-environment-jsdom-fifteen",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  displayName: "local",
  testMatch: ["**/__test__/**/?(*.)+(spec|test).[jt]s?(x)"],
  testURL: "http://localhost",
  setupFilesAfterEnv: [path.resolve(__dirname, "./setupTest.js")],
  globals: {
    "ts-jest": {
      diagnostics: false,
      tsConfig: "jest.tsconfig.json",
      babelConfig: true,
    },
  },
  moduleNameMapper: {
    "\\.(scss|less)$": "<rootDir>/__test__/__mocks__/styleMock.js",
  },
};
