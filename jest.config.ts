import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./src/tests/setup.ts"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**"],
  coverageDirectory: "coverage/merged",
  coverageProvider: "babel",
  coverageReporters: ["none"],
  reporters: [
    // If custom reporters are specified, the default Jest reporter will be overridden. If you wish to keep it, 'default' must be passed as a reporters name:
    "default",

    // Monocart custom reporter to generate coverage reports.
    [
      "jest-monocart-coverage",
      {
        name: "My Unit Coverage Report",
        reports: [
          ["v8"],
          ["json", { file: "unit-coverage.json" }],
          ["console-details"],
          ["lcovonly"],
        ],
        outputDir: "coverage/merged",
      },
    ],
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/coverage/",
    // '**.stories**',
    // '.storybook/**',
    // '**.types**'
  ],

  testMatch: ["<rootDir>/src/**/*.spec.ts", "<rootDir>/src/**/*.spec.tsx"],
  verbose: true,
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
};

export default config;
