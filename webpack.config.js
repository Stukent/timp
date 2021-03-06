// Example webpack configuration with asset fingerprinting in production.


// See for reference:
// http://tech.trivago.com/2015/12/17/export-multiple-javascript-module-formats/

module.exports = {
  entry: './index.js',

  output: {
    path: `${__dirname}/dist/`,
    filename: 'timp.umd.js',
    library: 'timp',
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.inline.svg$/,
        loader: 'babel-loader!svg-react-loader',
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|^(?!.*\.inline\.svg$).*\.svg$/,
        loader: 'url-loader',
      },
    ],
  },

  resolve: {
    modules: [
      './',
      'node_modules',
    ],
  },
}

