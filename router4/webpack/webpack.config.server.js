const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "../src"),
    entry: "./server/server.js",
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: ['transform-object-rest-spread']
                    }
                }]
            }
        ]
    }
};
