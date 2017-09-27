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
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"],
                        plugins: ["transform-object-rest-spread", "async-to-promises"]
                    }
                }]
            }
        ]
    },
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        open: true,
        port: "11111",
        progress: true
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "client/index.html", to: "../index.html" }
        ])
    ]
};
