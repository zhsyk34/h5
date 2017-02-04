const path = require("path");
const entry = require("./entry");
const HtmlPlugin = require("html-webpack-plugin");

const pages = [];
for (let k of Object.keys(entry)) {
    let hp = new HtmlPlugin({
        title: k,
        filename: `html/${k}.html`,
        chunks: [k, "commons"],
        // template: v,//指定为一个js文件而非普通的模板文件
        template: path.resolve(require("./root"), `./layout/${k}.js`),
        inject: true,
        hash: false,
        showErrors: true,
        minify: {},
        xhtml: true
    });
    pages.push(hp);
}

module.exports = pages;

