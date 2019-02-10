const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// No stage 0, 1, 2 babelscript that might not even make it to ES
const babelOptions = {
  presets: ['@babel/react', '@babel/preset-env'],
  plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-proposal-class-properties'],
}

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    output: {
      path: path.resolve('./dist'),
      filename: 'index.js'
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 8080
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