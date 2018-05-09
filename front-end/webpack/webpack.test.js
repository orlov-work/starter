const path = require('path');
const glob = require('glob');
const paths = require('./paths');
const nodeExternals = require('webpack-node-externals');

const load = src => glob.sync(path.join(src, '/**/*.spec.js'));

module.exports = {
  entry: load(paths.src),
  target: 'node',
  mode: 'development',
  output: {
    path: paths.testDist,
    filename: 'spec.bundle.js'
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: 'eslint-loader',
        exclude: /(node_modules)/,
        include: paths.src
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
        include: paths.src
      },
      {
        test: /\.(png|gif|jpe?g|svg|ttf|eot|otf|woff2)$/,
        use: 'url-loader?limit=10000&name=[path][name].[hash:base64:5].[ext]'
      },
      {
        test: /\.css$/,
        include: paths.src,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
};