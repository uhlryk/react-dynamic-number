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
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  },
  plugins: [
	new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: '.',
    publicPath: '/',
    host: 'localhost',
    port: 3005,
    historyApiFallback: true,
    quiet: false,
    inline: true,
    open: true,
    openPage: './example/index.html',
    hot: true,
    stats: {
      colors: true,
      hash: false,
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      modules: false,
      moduleTrace: false,
      assets: true,
      version: true,
      reasons: true,
      errorDetails: true
    }
  }
};
