const path = require('path');
var SRC_DIR = path.join(__dirname, '/public/src');
var DIST_DIR = path.join(__dirname, '/public/assets/dist');

module.exports = {
  // set webpack mode
  mode: 'development',
  entry: {
    // select entry point for webpack
    app: `${SRC_DIR}/app.jsx`
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
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }
    ],
  }
}

// test: cssRegex,
//   exclude: cssModuleRegex,
//     use: getStyleLoaders({
//       importLoaders: 1,
//       modules: true,
//       localIdentName: '[name]__[local]__[hash:base64:5]'
//     })