module.exports = {
  entry: {
    app: './src/main.js'
  },
  exclude: [
    './server'
  ],
  output: {
    path: './build',
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015', 'react']
      }
    }
  ]},
  devtool: '#source-map'
}