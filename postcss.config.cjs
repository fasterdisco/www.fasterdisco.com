// This PostCSS configuration is picked by Vite (used by Astro)
// https://docs.astro.build/en/guides/styling/#postcss
// https://vitejs.dev/guide/features.html#postcss

const postcssPresetEnv = require('postcss-preset-env');

module.exports = () => ({
    plugins: [postcssPresetEnv({})],
});
