module.exports = {
  extends: ["@commitlint/config-conventional"],

  rules: {
    "references-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "revert"],
    ],
  },
};
