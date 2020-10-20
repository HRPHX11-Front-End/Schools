const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const SRC_DIR = path.join(__dirname, 'public', 'src');
const DIST_DIR = path.join(__dirname, 'public', 'assets', 'dist');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    app: `${SRC_DIR}/index.jsx`
  },
  target: 'web',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  }
});
