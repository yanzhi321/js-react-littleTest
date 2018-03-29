const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
    entry: {
        "app": './src/entry.js',
    },

    devtool: 'inline-source-map',

   

    module: {
        rules: [

            {
                test:/\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: { presets: ["react","es2015"] }
                }],
            },

            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    'file-loader'
                ]
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },

            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },

            {
                test: /\.(xml)$/,
                use: [
                    'xml-loader'
                ]
            }

           
        ]
    },

    plugins: [
        new CleanWebpackPlugin('[dist]'),
        new HtmlWebpackPlugin({
            title: 'webpack index',
            template: './dist/index.html'
        })
    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/', 
    }
}



