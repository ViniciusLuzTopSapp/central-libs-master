#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const path = require("path");
const constants_1 = require("../constants");
const file_1 = require("../lib/file");
const generate_1 = require("../lib/generate");
const watch_1 = require("../lib/watch");
program.option('-w, --watch', 'watch file change').parse(process.argv);
const configOrError = file_1.getConfigFromPackageJson(process.cwd());
if (configOrError instanceof Error) {
    console.error(configOrError.message);
    process.exit(1);
}
const config = configOrError;
const modelPath = path.resolve(config.model);
const outputPath = path.resolve(config.outputDir);
if (program.watch) {
    watch_1.watch(modelPath, outputPath);
}
else {
    const translationOrError = file_1.getTranslationFromModel(modelPath);
    if (translationOrError instanceof Error) {
        console.error(translationOrError.message);
        process.exit(1);
    }
    const translation = translationOrError;
    generate_1.generate(translation, outputPath)
        .then(() => console.info(`Emitted: ${path.join(outputPath, constants_1.OUTPUT_FILE_NAME)}`))
        .catch(error => console.error(`Error occurred while emitting: ${error.message}`));
}
//# sourceMappingURL=index.js.map