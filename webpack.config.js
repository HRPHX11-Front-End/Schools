const path = require('path');
var SRC_DIR = path.join(__dirname, '/public/src');
var DIST_DIR = path.join(__dirname, '/public/assets/dist');
const autoprefixer = require('autoprefixer');
// const CompressionPlugin = require('compression-webpack-plugin');
// const BrotliPlugin = require('brotli-webpack-plugin');

require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-syntax-jsx"]
});

module.exports = {
  mode: 'development',
  entry: {
    app: `${SRC_DIR}/index.jsx`
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [{
      test: [/\.jsx$/],
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: ["@babel/plugin-syntax-jsx"]
        }
      },
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          }
        },
      ]
    }],
  },
  // plugins: [
  //   new CompressionPlugin({
  //   filename: '[path].gz[query]',
  //   algorithm: 'gzip',
  //   test: /\.js$|\.css$|\.html$/,
  //   threshold: 10240,
  //   minRatio: 0.7
  //   }),
  //   new BrotliPlugin({
  //   asset: '[path].br[query]',
  //   test: /\.js$|\.css$|\.html$/,
  //   threshold: 10240,
  //   minRatio: 0.7
  //   })
  //  ]

}
