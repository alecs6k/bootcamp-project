const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        clean: true,
        filename: '[name].[contenthash].js'
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
                test: /\.(png|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                //type: 'asset/resource'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new Terser()
        ]
    },
    plugins: [
        new HtmlWebPack({
            title: 'Webpack Starter',
            filename: 'index.html',
            template: './src/index.html',
        }),
        new MiniCssExtract({
            filename: '[name].[fullhash].css',
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets/' },
            ],
        }),
    ],
}