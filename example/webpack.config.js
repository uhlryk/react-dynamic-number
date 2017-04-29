var webpack = require('webpack');
module.exports = {
  entry: {
    dynamicNumber: './example/app.jsx'
  },
  output: {
    filename: './example/app.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'stage-0', 'react'],
          compact: true
        }
      }
    ]
  },
  plugins: [

  ],
  devtool: 'source-map'
};
