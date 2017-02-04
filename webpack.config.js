const entryConfig = require("./src/config/entry");
const moduleConfig = require("./src/config/module");
const outputConfig = require("./src/config/output");
const pluginConfig = require("./src/config/plugin");

module.exports = {
    entry: entryConfig,
    output: outputConfig,
    module: moduleConfig,
    plugins: pluginConfig
};

