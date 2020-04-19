// This configuration file having a name ending witg '.babel.js',
// it is loaded by webpack to be interpreted through Babel transpilation.
// This only works if @babel/register is an explicit project dependency.

import CopyWebpackPlugin from 'copy-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import FileManagerPlugin from 'filemanager-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTagsPlugin from 'html-webpack-tags-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import fasterDiscoColors from './src/lib/faster-disco-colors';

const srcPath = path.resolve(__dirname, 'src');
const buildPath = path.resolve(__dirname, 'build');

const isProductionBuild = process.env.NODE_ENV === 'production';

const publicOrigin = isProductionBuild
  ? 'https://www.fasterdisco.com/'
  : 'http://localhost:8080/';

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
          publicPath: publicOrigin,
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
