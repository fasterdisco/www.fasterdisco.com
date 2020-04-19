const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const fasterDiscoColors = {
  white: '#fdfdfd',
  yellow: '#fdfd00',
  purple: '#831069',
  purplePink: '#b0247b',
  pink: '#e2388e',
};

const srcPath = path.resolve(__dirname, 'src');
const buildPath = path.resolve(__dirname, 'build');

const isProductionBuild = process.env.NODE_ENV === 'production';

const buildConfig = {
  mode: isProductionBuild ? 'production' : 'development',

  entry: path.resolve(srcPath, 'index.js'),
  output: {
    path: buildPath,
    filename: 'index.js',
  },

  plugins: [
    // https://webpack.js.org/plugins/copy-webpack-plugin/
    new CopyWebpackPlugin([
      { from: path.resolve(srcPath, 'static'), to: 'static' },
    ]),

    // https://github.com/jantimon/html-webpack-plugin#options
    new HtmlWebpackPlugin({
      template: path.resolve(srcPath, 'index.html'),
      scriptLoading: 'defer',
      hash: true,
    }),

    // https://github.com/jharris4/html-webpack-tags-plugin
    new HtmlWebpackTagsPlugin({
      metas: [
        {
          path: 'static/fasterdisco-social-1200x630.png',
          publicPath: 'https://www.fasterdisco.com/',
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
      logo: path.resolve(srcPath, 'favicons', 'favicon-4096x4096.png'),

      // Enable caching and specify the path to store cached data
      cache: path.resolve(__dirname, '.favicons-webpack-plugin-cache'),

      prefix: 'favicons',

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

if (isProductionBuild) {
  buildConfig.plugins.push(
    // https://github.com/gregnb/filemanager-webpack-plugin#usage
    new FileManagerPlugin({
      onEnd: {
        copy: [
          {
            source: path.resolve(buildPath, 'favicons', 'favicon.ico'),
            destination: buildPath,
          },
        ],
      },
    })
  );
}

module.exports = buildConfig;
