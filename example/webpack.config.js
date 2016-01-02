module.exports = {
  entry: {
    dynamicNumber: './example/app.jsx'
  },
  output: {
    filename: './example/app.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          compact: true
        }
      }
    ]
  },
};
