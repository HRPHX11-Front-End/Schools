const path = require('path');
var SRC_DIR = path.join(__dirname, '/public/src');
var DIST_DIR = path.join(__dirname, '/public/assets/dist');
const autoprefixer = require('autoprefixer');
require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-syntax-jsx"]
});

module.exports = {
  // set webpack mode
  mode: 'development',
  entry: {
    // select entry point for webpack
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
      // A regex that looks at all Javascript files
      test: [/\.jsx$/],
      // include: SRC_DIR,
      // do not include node modules
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        // this is where we define our presets
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
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => [autoprefixer()]
          }
        }
      ]
    }],
  }
}
