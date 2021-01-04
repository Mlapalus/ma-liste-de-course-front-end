const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[contenthash].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        },{
          loader: MiniCssExtractPlugin.loader,
          options: 
          {
            publicPath: '/public/assets/css',
          },
        },
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
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
    moduleIds: 'deterministic',
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