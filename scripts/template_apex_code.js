"use strict";
const glob = require("glob");
const Handlebars = require("handlebars");
const path = require("path");
const fs = require("fs");
const fsExtra = require('fs-extra')

const Paths = require("../config/paths");
const APEX_VARIABLES = require(Paths.apexVariables);
const APEX_MODULES = require(Paths.apexModules);

const clearDistFolder = () => {
    fsExtra.emptyDirSync(Paths.outputDir);
};

const createDistFolderIfNeeded = () => {
  if (!fs.existsSync(Paths.outputDir)) {
    fs.mkdirSync(Paths.outputDir);
  }
};

var numFilesProcessed = 0;

// Remove all of /dist
clearDistFolder();

// Create /dist folder
createDistFolderIfNeeded();

// Find all .txt files within src/apex
// For each file, run handlebars
const filesToProcess = glob.sync(`${Paths.apexRoot}/**/*.hbs`, {});

filesToProcess.forEach((filePath) => {
  const fileStringContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const template = Handlebars.compile(fileStringContent);
  const templatedContent = template({
    apexVariables: APEX_VARIABLES,
    apexModules: APEX_MODULES,
  });
  const fileName = path.basename(filePath);
  const fileNameWithoutExt = path.parse(filePath).name;
  // Bump number of files processed
  numFilesProcessed += 1;

  // Create the new file
  fs.writeFileSync(`${Paths.outputDir}/${fileNameWithoutExt}.txt`, templatedContent);
});

console.log(`Succesfully output ${numFilesProcessed} files! APEX code is located in ${Paths.outputDir}`);