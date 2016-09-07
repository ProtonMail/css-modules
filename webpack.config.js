var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      app: [
        'webpack/hot/dev-server',
        './node_modules/angular/angular.js,
        './node_modules/angular-route/angular-route.js',
        './src/app.js'
      ]
    },
    output: {
      filename: '[name].js',
      path: './dest',
      chunkFilename: '[id].chunk.js'
    },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', include: path.resolve('src')},
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        ]
      },
      {test: /\.(png|jpg)$/, loader: 'url'},
      {test: /\.ejs$/, loader: 'ng-cache?prefix=[dir]/[dir]'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
