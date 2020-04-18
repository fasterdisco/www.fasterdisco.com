const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const fasterDiscoColors = {
  white: '#fdfdfd',
  yellow: '#fdfd00',
  purple: '#831069',
  purplePink: '#b0247b',
  pink: '#e2388e',
};

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'index.js',
  },

  plugins: [
    // https://github.com/jantimon/html-webpack-plugin#options
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      scriptLoading: 'defer',
      hash: true,
    }),

    new MiniCssExtractPlugin(),

    // https://github.com/jantimon/favicons-webpack-plugin#advanced-usage
    new FaviconsWebpackPlugin({
      // Define source image
      logo: `${__dirname}/src/favicon-4096x4096.png`,

      // Enable caching and specify the path to store cached data
      cache: `${__dirname}/.favicons-cache`,

      // Configure favicons
      // https://github.com/itgalaxy/favicons#usage
      favicons: {
        appName: 'Faster Disco',
        appShortName: 'FasterDisco',
        appDescription: 'Disco is not dead.',
        developerName: 'Faster Disco',
        developerURL: 'https://www.fasterdisco.com/',
        background: fasterDiscoColors.purple,
        theme_color: fasterDiscoColors.purple,
        display: 'standalone',
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
