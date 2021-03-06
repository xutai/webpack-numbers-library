const path = require('path')

module.exports = [
    'source-map'
].map(devtool => ({
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-numbers.js',
        // Exposing the library as a variable called webpackNumbers.
        library: 'webpackNumbers',
        libraryTarget: 'umd'
    },
    devtool,
    optimization: {
        runtimeChunk: true
    },
    // Using externals to avoid bundling lodash, so the consumer is required to load it.
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    }
}))