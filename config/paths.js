const path = require("path");

const resolveOwn = relativePath => path.resolve(__dirname, '..', relativePath);

module.exports = {
    outputDir: resolveOwn("dist"),
    apexRoot: resolveOwn("src/apex"),
    apexVariables: resolveOwn("src/constants/apex_variables.js"),
    apexModules: resolveOwn("src/constants/apex_modules.js")
};