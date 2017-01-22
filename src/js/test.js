const path = require("path");
const dir = path.resolve(__dirname);

const root = path.resolve(dir, "../../");
console.log("dir:" + dir);
console.log("root:" + root);

const file = path.resolve(root, "src/ejs/component/header.ejs");
console.log("file:" + file);