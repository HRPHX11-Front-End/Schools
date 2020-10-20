const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const SRC_DIR = path.join(__dirname, 'public', 'src');
const DIST_DIR = path.join(__dirname, 'public', 'dist');

module.exports = {
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
      test: /\.(css|less)$/,
      exclude: /node_modules/,
      use: [{ loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: {
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        }
      }
      ]
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'School Reviews',
      template: `${SRC_DIR}/index.ejs`,
      favicon: `${DIST_DIR}/favicon.ico`
    }),
    new Dotenv()
  ]
};