const path = require('path');
const million = require('million/compiler');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    ...million.webpack({ auto: true }), // Integración con Million.js
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};