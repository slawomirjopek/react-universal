const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: path.join(__dirname, "src/app-client.js"),
    output: {
        path: path.join(__dirname, "src/static/js"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                loader: "babel-loader",
                query: {
                    cacheDirectory: "babel_cache"
                }
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    }
};