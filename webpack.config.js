var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "examples/src/index.js"),
    output: {
        path: path.join(__dirname, "examples/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader',exclude: /node_modules/},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
        ]
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "examples/src/index.html"),
            filename: "./index.html"
        })
    ],
    devServer: {
        compress: true,
        port: 3005,
        open: true
    }
}