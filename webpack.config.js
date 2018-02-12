// Example webpack configuration with asset fingerprinting in production.
"use strict";

// See for reference:
// http://tech.trivago.com/2015/12/17/export-multiple-javascript-module-formats/

function createConfig(target) {
  return {
    entry: './index.js',

    output: {
      path: __dirname +'/dist/',
      filename: 'timp.' + target + '.js',
      library: 'timp',
      libraryTarget: target
    },

    module: {
      loaders: [
          { 
            loader: "babel-loader",
            test: /\.js$/,
          },
          {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.inline.svg$/,
            loader: 'babel!svg-react',
          },
          {
            test: /\.jpe?g$|\.gif$|\.png$|^(?!.*\.inline\.svg$).*\.svg$/,
            loader: 'url',
          },
        ]
    },

    resolve: {
      root: './'
    },
  };
}

module.exports = [
  createConfig('var'),
  createConfig('commonjs2'),
  createConfig('amd'),
  createConfig('umd')
];
