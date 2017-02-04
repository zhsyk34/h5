const target = require("path").resolve(require("./root"), "../dist");
module.exports = {
    // path: "./dist",
    path: target,
    // publicpath: "http://www.test.com", // 这里替换成线上实际地址，可以修改 css 中对图片资源的引用路径。
    filename: "js/[name].js" // 生成的文件名字，加上了5位的 hash值。当然了，位数和加hash的位置，你可以自己定义，比如 "[name].js?[hash]".
};