const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "../src"),
    entry: "./server/server.js",
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "../dist/")
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: ['transform-object-rest-spread']
                    }
                }
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "assets/"
                    }
                }
            }
        ]
    },
    externals: nodeExternals()
};
