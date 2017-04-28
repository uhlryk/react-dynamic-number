var webpack = require('webpack');
module.exports = {
  entry: {
    dynamicNumber: './src/index.jsx'
  },
  output: {
    libraryTarget: 'umd',
    filename: './release/[name].js'
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
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ]
};
