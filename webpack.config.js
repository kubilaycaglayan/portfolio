const path = require('path');

module.exports = {
  entry: './script/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};