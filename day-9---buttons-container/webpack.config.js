const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: "./buttons-container.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
    publicPath: ''
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, './build'),
    index: 'index.html',
    port: 9000,
    writeToDisk: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/env'],
            plugins: [ '@babel/plugin-proposal-class-properties' ]
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Buttons container',
      minify: false,
      filename: 'index.html'
    })
  ],
  
};