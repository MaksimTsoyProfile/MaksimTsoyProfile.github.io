const HtmlWebpackPlugin = require('html-webpack-plugin');
require('babel-polyfill');
require('path');

module.exports = {
  // entry: './src/index.js',
  // output: {
  //   filename: 'main.js',
  //   path: path.resolve(__dirname, 'dist'),
  // },
  entry: ['babel-polyfill', './src/index.js'],
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
  })],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
