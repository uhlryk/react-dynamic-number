module.exports = {
  entry: {
    dynamicNumber: './src/dynamicNumber.jsx'
  },
  output: {
    filename: './release/[name].js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
