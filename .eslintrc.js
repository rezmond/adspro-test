module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: [ ".eslintrc.js" ],
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module"
  },
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "groups": [
          "object",
          "builtin",
          "external",
          "index",
          "internal",
          "parent",
          "sibling",
          "type"
        ]
      }
    ]
  },
  settings: {
    "import/resolver": {
      "typescript": true,
      "node": true
    }
  }
}
