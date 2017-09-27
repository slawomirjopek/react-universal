const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
    entry: path.join(__dirname, "src/server.js"),
    output: {
        filename: "server.js",
        path: path.join(__dirname, "src/static/")
    },
    target: "node",
    node: {
        __dirname: false
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, 'src'),
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["env", "react"]
                    }
                }
            }
        ]
    },
    externals: [
        nodeExternals({ modulesFromFile: true})
    ]
};