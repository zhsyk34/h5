const CssPlugin = require("extract-text-webpack-plugin");
module.exports = {
    loaders: [
        {
            test: /\.css$/,
            exclude: /node_modules|bootstrap/,
            // loader: "style!css"
            //单独打包CSS
            loader: CssPlugin.extract("style-loader", "css-loader")
        },
        // {
        //     // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
        //     // 如下配置，将小于8192byte的图片转成base64码
        //     test: /\.(png|jpg|gif)$/,
        //     // loader: "url?limit=8192&name=./static/img/[hash].[ext]"
        //     loader: "file-loader?name=.img/[name].[ext]"
        // },
        {
            test: /\.ejs$/,
            loader: "ejs-loader"
        }
    ]
};