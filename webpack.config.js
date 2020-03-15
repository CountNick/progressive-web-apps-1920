const path = require('path')

module.exports = {
    entry: './server/static/js/search.js',
    output:  { 
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}