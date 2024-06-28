const path = require('path');
const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                }
            },
            {
                test: /\.(css|sass|scss)$/i,
                exclude: /styles.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /styles.scss$/,
                use: [MiniCssExtract.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/i,
                loader: 'file-loader',
                //type: 'asset/resource'
            }
        ]
    },
    optimization: {},
    plugins: [
        new HtmlWebPack({
            title: 'Webpack Starter',
            filename: 'index.html',
            template: './src/index.html',
        }),
        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets/' },
            ],
        }),
    ],
}