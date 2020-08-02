const path = require('path');

const SRC = path.resolve(__dirname, './script/');

module.exports = {
  entry: './script/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
        include: SRC,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
};