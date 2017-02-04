const webpack = require("webpack");
const CSSPlugin = require("extract-text-webpack-plugin");

//noinspection JSUnresolvedFunction
const plugins = [
    /*shimming*/
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        "window.$": "jquery",
    }),
    /*commons*/
    new webpack.optimize.CommonsChunkPlugin({
        name: "commons",
        filename: "js/[name].js",
        minChunks: 3,
    }),
    new CSSPlugin("css/[name].css")
];

//noinspection JSUnresolvedFunction
require("./page").forEach(page => plugins.push(page));
module.exports = plugins;