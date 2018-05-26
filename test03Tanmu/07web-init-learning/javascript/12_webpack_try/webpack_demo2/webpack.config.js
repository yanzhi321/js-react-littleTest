const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const devServer = require('webpack-dev-server')
const webpack = require('webpack')

module.exports = {
    entry: {
        "app": './src/index.js',
        "print": './src/print.js'
    },
    
    devtool: 'inline-source-map',
   
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },

    "output": {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
}