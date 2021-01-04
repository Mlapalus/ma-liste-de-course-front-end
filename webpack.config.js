const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [{
              // inject CSS to page
              loader: 'style-loader'
              }, {
              // translates CSS into CommonJS modules
              loader: 'css-loader'
              }, {
              // Run postcss actions
              loader: 'postcss-loader',
              options: {
                      // `postcssOptions` is needed for postcss 8.x;
                      // if you use postcss 7.x skip the key
                      postcssOptions: {
                      // postcss plugins, can be exported to postcss.config.js
                        plugins: function () {
                          return [
                            require('autoprefixer')
                          ];
                        }
                      }
              }
              }, {
              // compiles Sass to CSS
              loader: 'sass-loader'
              }]
      }
    ]
  },
  devServer: {
      compress: true,
      contentBase: path.join(__dirname, 'public'),
      index: "index.html",
      port: 8081
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src', to: "public" }],
    }),
    new HtmlWebpackPlugin({
      title: "Ma Liste de Course",
      template: "./src/index.html",
      minify: false,
      filename: 'index.html'
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};

module.exports = config;