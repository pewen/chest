module.exports = {
  // Global ESLint Settings
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  // Set up ESLint for .js files
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    requireConfigFile: false,
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:eslint-plugin-import/recommended',
    'plugin:eslint-plugin-import/typescript',
    'prettier',
  ],

  overrides: [
    // For .ts files
    {
      files: ["*.ts"],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaVersion: 2020,
      },
      plugins: [
        '@typescript-eslint',
        'eslint-plugin-prettier'
      ],
      extends: [
        'standard',
        'eslint:recommended',
        'plugin:eslint-plugin-import/recommended',
        'plugin:eslint-plugin-import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        'prettier',
      ],
    }
  ]
}
