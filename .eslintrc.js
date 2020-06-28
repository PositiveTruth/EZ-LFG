module.exports = {
  env: {
    browser: true,
    es2020: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
      globalReturn: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "json",
    "react-hooks",
    "import",
    "jsx-ally",
    "jest",
    "prettier",
  ],
  rules: {
    "accessor-pairs": 2,
    "array-bracket-spacing": 0,
    "arrow-spacing": 2,
    "comma-spacing": 2,
    "prettier/prettier": "error",
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
};
