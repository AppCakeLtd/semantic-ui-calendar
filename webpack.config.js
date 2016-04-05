module.exports = {
    entry: [
        __dirname + '/src/index.js'
    ],

    output: {
        path: __dirname + '/dist',
        filename: 'packed.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel?cacheDirectory'],
                include: __dirname + '/src'
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    }
}
