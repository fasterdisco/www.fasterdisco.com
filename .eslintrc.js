module.exports = {
  // https://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    // Enable support of all ECMAScript 2020 globals
    es2020: true,
    // Enable support of browser global variables
    browser: true,
  },

  // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
  parserOptions: {
    // Specify usage of ECMAScript syntax version 2020 (same as 11)
    ecmaVersion: 2020,
    // Specify that code is in ECMAScript modules
    sourceType: 'module',
  },

  // https://eslint.org/docs/user-guide/configuring#extending-configuration-files
  extends: [
    // Enforce rules that report common problems
    // https://eslint.org/docs/user-guide/configuring#using-eslint-recommended
    'eslint:recommended',
    // Enforce both eslint-plugin-prettier and eslint-config-prettier
    // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    'plugin:prettier/recommended',
  ],

  overrides: [
    {
      files: [
        '.eslintrc.js',
        'prettier.config.js',
        'webpack.config.js',
      ],
      env: {
        // Disable support of browser global variables
        browser: false,
        // Enable support of Node.js global variables and Node.js scoping
        node: true,
      },
    },
  ],
};