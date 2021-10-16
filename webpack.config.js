const path = require('path');
const Dotenv = require('dotenv-webpack');
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: [
    require.resolve(`webpack-dev-server/client`),
    path.resolve(__dirname, "./src/main.js")
  ].filter(Boolean),
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/"
  },
  resolve: {
    alias: {
      vue: "@vue/runtime-dom"
    }
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.png$/,
        use: {
          loader: "url-loader",
          options: { limit: 8192 }
        }
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader',
      //     'sass-loader'
      //   ]
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
}