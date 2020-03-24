const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
    mode: 'production',
    entry: './server/static/js/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env'] }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                    ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new FixStyleOnlyEntriesPlugin(),
        new OptimizeCSSAssetsPlugin()
    ],
    output:  { 
        filename: 'bundle.js',
        path: path.resolve(`${__dirname}/server/static`, 'dist')
    }
}