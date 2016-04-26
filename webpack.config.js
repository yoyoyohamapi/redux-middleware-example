var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel?presets[]=es2015'],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    }
}