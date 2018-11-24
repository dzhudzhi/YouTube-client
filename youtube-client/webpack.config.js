const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'main.js'),
  output: {
    filename: 'app.bundle.js',
    publicPath: '/dist',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
