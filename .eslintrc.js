// http://eslint.org/docs/user-guide/configuring
// http://eslint.cn/docs/user-guide/configuring 中文
module.exports = {
  extends: [
    "prettier",
    "prettier/babel",
    "prettier/react",
    "plugin:json/recommended"
  ],
  plugins: ["babel", "prettier", "react", "json"],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    node: true
  },
  rules: {
    "json/*": ["error", "allowComments"],
    // or the equivalent:
    "json/*": ["error", { allowComments: true }],
    "prettier/prettier": "error",
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-useless-escape": 0,
    "no-unused-vars": 0,
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": [0, "always"]
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
};
