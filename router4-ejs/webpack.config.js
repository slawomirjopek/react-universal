const path = require("path");

module.exports = {
    entry: path.join(__dirname, "src/app-client.js"),
    output: {
        path: path.join(__dirname, "src/static/js"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["env", "react"]
                    }
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