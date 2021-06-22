const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    devServer:{
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './src')
    },
    module:{
        rules:[{
            test: /\.js$/,
            use: 'babel-loader'
        }]
    },
    output: {
        filename: 'bundle.js'
    }
};