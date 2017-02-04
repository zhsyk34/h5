const path = require("path");
const dir = path.resolve(require("./root"), "./js");

const list = new require("glob").Glob("*.js", {
    cwd: dir,
    sync: true
}).found;

// const map = new Map();
//  list.forEach(file => {
//  map.set(file.replace(/\.js$/, ""), path.resolve(dir, "./" + file));
//  });
const map = {};
list.forEach(file => {
    map[file.replace(/\.js$/, "")] = path.resolve(dir, "./" + file);
});
module.exports = map;
