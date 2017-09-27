const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: {
        app: "./client/index.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "../dist/assets"),
        publicPath: "/assets",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"],
                        plugins: ["transform-object-rest-spread", "async-to-promises"]
                    }
                }
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        publicPath: "assets/"
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        port: "11111",
        progress: true
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "client/index.html", to: "../index.html" }
        ])
    ]
};
