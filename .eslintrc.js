module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jasmine: true
  },
  globals: {
    StatfulUtil: true,
    StatfulLogger: true,
    statful: true
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    sourceType: "module"
  }
};
