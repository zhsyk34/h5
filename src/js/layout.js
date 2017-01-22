//TODO
// const path = require("path");
// const dir = path.resolve(__dirname);
// const src = path.resolve(dir, "../src");
// const component = path.resolve(src, "ejs/component");
// const content = path.resolve(root, "root/ejs/content");
// const header = require("../ejs/component/header.ejs");
// const footer = require("../ejs/component/footer.ejs");
// const layout = require("../ejs/component/layout.ejs");

const header = require("../ejs/component/header.ejs");
const footer = require("../ejs/component/footer.ejs");
const layout = require("../ejs/component/layout.ejs");

module.exports = layout({
    header: header(),
    footer: footer()
});