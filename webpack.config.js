var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js"
  },
  //loaders
  module: {
      loaders: [
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ["es2015","react"]
            }
        }
      ]
  }
}
