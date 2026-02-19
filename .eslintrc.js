module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react/no-unknown-property": "off",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    // Zgodne z .prettierrc – przy zmianie Prettiera zaktualizuj i tu
    "prettier/prettier": [
      "warn",
      {
        trailingComma: "none",
        semi: false,
        arrowParens: "avoid",
      },
    ],
  },
}
