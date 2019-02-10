const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const baseConfig = require('./webpack.config');

module.exports = {
  ...baseConfig,
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  },
};
