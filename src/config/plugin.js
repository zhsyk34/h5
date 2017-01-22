const webpack = require("webpack");
const CSSPlugin = require("extract-text-webpack-plugin");

const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        filename: "common.js",
        minChunks: 3,
    }),
    new CSSPlugin("[name].css")
];

const HTMLPlugin = require("html-webpack-plugin");
const pages = require("./pages");
const base = require("./base");
pages.forEach((page) => {
    plugins.push(new HTMLPlugin({
        title: page,
        filename: "html/" + page + ".html",
        chunks: [page, "commons"],
        template: "./src/js/" + page + ".js",
        inject: true,
        hash: false,
        showErrors: true,
        // minify: {},
        xhtml: true
    }));
});

module.exports = plugins;