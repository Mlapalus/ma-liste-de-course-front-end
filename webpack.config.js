const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  context: path.resolve(__dirname,'.'),
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[contenthash].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]    
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
  devServer: {
      compress: true,
      contentBase: path.join(__dirname, 'public'),
      index: "index.html",
      port: 8081
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: "Ma Liste de Course - Index",
      template: "./src/index.html",
      minify: false,
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: "Ma Liste de Course - Shop",
      template: "./src/js/ShopPage/shop.html",
      minify: false,
      filename: 'shop.html'
    }),
    new HtmlWebpackPlugin({
      title: "Ma Liste de Course - Basket",
      template: "./src/js/BasketPage/basket.html",
      minify: false,
      filename: 'basket.html'
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    minimize: true,
    minimizer: [new TerserPlugin()],
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