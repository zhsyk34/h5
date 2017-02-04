//TODO
// const path = require("path");
// const root = require("./root");
//
// const header = require(path.resolve(root, "./ejs/component/header.ejs"));
// const footer = require(path.resolve(root, "./ejs/component/footer.ejs"));
// const layout = require(path.resolve(root, "./ejs/component/layout.ejs"));

const header = require("../ejs/component/header.ejs");
const footer = require("../ejs/component/footer.ejs");
const layout = require("../ejs/component/layout.ejs");

module.exports = function (body) {
    // const content = require(path.resolve(root, "./ejs/content/" + body + ".ejs"));
    const content = require("../ejs/content/" + body + ".ejs");
    return layout({
        header: header(),
        content: content(),
        footer: footer()
    });
};
