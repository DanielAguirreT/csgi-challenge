const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: ['babel-polyfill', './app/app.module.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.html$/, 
                use: { loader: 'html-loader' } 
            }, 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            title: 'Interview CSGI',
            template: './index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },
    devtool: 'cheap-module-eval-source-map',
}