const path = require("path");

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
                }],
            }
        ]
    }
};
