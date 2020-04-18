const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
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
    // https://webpack.js.org/plugins/copy-webpack-plugin/
    new CopyWebpackPlugin([{ from: 'src/static', to: 'static/' }]),

    // https://github.com/jantimon/html-webpack-plugin#options
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      scriptLoading: 'defer',
      hash: true,
    }),

    // https://github.com/jharris4/html-webpack-tags-plugin
    new HtmlWebpackTagsPlugin({
      metas: [
        {
          path: 'static/fasterdisco-social-1200x630.png',
          attributes: {
            property: 'og:image',
          },
        },
      ],
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
