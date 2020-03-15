const path = require('path')

module.exports = {
    entry: {
        app: [
            '@babel/polyfill',
            './server/static/js/search.js'
        ]
    },
    output:  { 
        filename: 'bundle.js',
        path: path.resolve(`${__dirname}/server/static`, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}