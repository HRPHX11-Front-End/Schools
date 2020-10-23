const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const SRC_DIR = path.join(__dirname, 'public', 'src');
const DIST_DIR = path.join(__dirname, 'public', 'dist');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const zlib = require('zlib');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: `${SRC_DIR}/index.jsx`
  },
  target: 'web',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.7
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.7
    })
  ]
});
