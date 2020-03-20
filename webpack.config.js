const path = require('path')

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
                test: /\.css/,
                use: {
                    loader: 'css-loader'
                }
            }
        ]
    },
    output:  { 
        filename: 'bundle.js',
        path: path.resolve(`${__dirname}/server/static`, 'dist')
    },
    watch: false
}