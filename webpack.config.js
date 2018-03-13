const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const publicPath = '/';
const srcPath = './src';

const webpackConfig = {
  entry: {
    index: [
      'react-hot-loader/patch',
      path.resolve(__dirname, path.resolve(srcPath, 'index.js'))
    ]
  },

  output: {
    filename: '[name].bundle.min.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
        include: path.join(__dirname, srcPath)
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    new webpack.DefinePlugin({
      'process.env': {
         NODE_ENV: JSON.stringify('production')
       }
    })
  ],
  devServer: {
    contentBase: './dist',
    port: 3003,
    publicPath: '/',
    inline: true,
    hotOnly: true
  },
};

module.exports = webpackConfig;
