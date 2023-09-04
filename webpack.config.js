const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { mainModule } = require("process");
module.exports = {
    mode: "development",
    entry: "./src/game.js",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)/i,
                type: "asset/resource",
            },
            {
                test: /\.html/,
                use: ["html-loader"],
            },
            {
                test: /\.js/,
                exclude: /(node_modules)|(test)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/template.html",
        }),
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.[contenthash].js",
        assetModuleFilename: "./assets/[name][hash][ext]",
    },
};
