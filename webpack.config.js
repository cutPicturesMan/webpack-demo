const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');

const config = {
  mode: 'development',
  entry: {
    a: './src/index.js',
    b: './src/b.js'
  },
	// entry: [
		// './src/index.js',
		// './src/b.js'
	// ],
  output: {
    path: path.resolve(__dirname, 'dist'),
		// publicPath: 'https://cdn.example.com/assets/[hash]/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src')
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ],
	externals: {
		jquery: 'abcd'
	}
}

module.exports = config;
