const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({})],
    output: {
        filename: 'prod.js',
        path: path.resolve(__dirname, 'lib'),
    },
};