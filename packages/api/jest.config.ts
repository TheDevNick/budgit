import type { Config } from "jest";

const config: Config = {
  roots: ["<rootDir>"],
  rootDir: ".",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePathIgnorePatterns: [
    "<rootDir>/test/__fixtures__",
    "<rootDir>/node_modules",
    "<rootDir>/dist",
  ],
  preset: "ts-jest",
  testMatch: ["<rootDir>/src/**/*.test.ts"],
};

export default config;
