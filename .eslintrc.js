module.exports = {
    // https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-environments
    env: {
        // Enable support of all ECMAScript 2022 globals
        // and automatically sets `parserOption.ecmaVersion` to 13
        // to specify usage of ECMAScript syntax version 2022
        es2020: true,

        // Enable support for Node.js global variables and Node.js scoping.
        node: true,
    },

    // https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-parser-options
    parserOptions: {
        // Specify that code is in ECMAScript modules
        sourceType: 'module',
    },

    // https://eslint.org/docs/latest/user-guide/configuring/configuration-files#extending-configuration-files
    extends: [
        // Enforce rules that report common problems
        // https://ota-meshi.github.io/eslint-plugin-astro/user-guide/#configuration
        'plugin:astro/recommended',
        // Enforce both eslint-plugin-prettier and eslint-config-prettier
        // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
        'plugin:prettier/recommended',
    ],
};
