
module.exports = {
  verbose: true,
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/*.{js,vue}",
    "!**/node_modules/**"
  ],
  coverageReporters: [
    "html",
    "text-summary"
  ],
  snapshotSerializers: ["jest-serializer-vue"],
  setupFilesAfterEnv: ['<rootDir>/tests/unit/setup.js']
}