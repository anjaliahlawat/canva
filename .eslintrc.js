const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: [
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  env: {
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 12,
  },
  globals: {
    require: true,
  },
  plugins: ["react", "prettier", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "max-len": [WARNING, { code: 100 }],
    "no-console": WARNING,
    "no-await-in-loop": OFF,
    "class-methods-use-this": OFF,
    "no-unused-vars": WARNING,
    "prettier/prettier": ERROR,
    "no-use-before-define": OFF,
    "import/extensions": OFF,
    "import/no-unresolved": OFF,
    "@typescript-eslint/no-var-requires": OFF,
  },
};
