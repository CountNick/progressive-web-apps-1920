const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")


module.exports = {
    watch: true,
    mode: 'production',
    entry: './server/static/js/search.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
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