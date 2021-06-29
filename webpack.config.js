const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');

const config = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        },
        // {
        //     test: /\.(png|jpg|gif)$/i,
        //     use: [
        //         {
        //             loader: 'url-loader',
        //             options: {
        //                 limit: 8192,
        //             },
        //         },
        //     ],
        // },
        {
            test: /\.txt$/i,
            use: 'raw-loader',
        },
    ]
  },
}

module.exports = config;
