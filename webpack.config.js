const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelOptions = {
  presets: ['@babel/react', '@babel/preset-env'],
  plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-proposal-class-properties'],
}

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve('./dist'),
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: babelOptions
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'template.html'
      })
    ]
  };