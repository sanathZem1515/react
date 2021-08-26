const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = 3000;

module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
              },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    output: {
        filename: "[name].[fullhash].js",
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            // 'REACT_APP_AUTH0_DOMAIN': JSON.stringify(dev-ydkytv6u.us.auth0.com),
           // 'REACT_APP_AUTH0_CLIENT_ID': JSON.stringify(nURJSZjxrZWU61Ku6attRPkHuxHMnbrw),
            // 'process.env.NODE_ENV': JSON.stringify('development'),
            favicon: "./public/favicon.ico",
            template: "./public/index.html",
        }),
    ],
    devServer: {
        host: "localhost",
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true,
    },
    // devtool: "inline-source-map",
};