const path = require('path');

const config = {
  mode: 'production',
  entry: './demo/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  }
}

module.exports = config;
