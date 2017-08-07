const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: 'dist',
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }],
  },
};
