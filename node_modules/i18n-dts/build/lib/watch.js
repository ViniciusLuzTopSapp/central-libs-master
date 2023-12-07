"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path = require("path");
const constants_1 = require("../constants");
const file_1 = require("./file");
const generate_1 = require("./generate");
exports.watch = (filePath, outputPath) => {
    console.info(`Start watching: ${filePath}`);
    fs_1.watchFile(filePath, (current, prev) => {
        if (current.mtime === prev.mtime) {
            return;
        }
        console.info('Detect file change');
        const translationOrError = file_1.getTranslationFromModel(filePath);
        if (translationOrError instanceof Error) {
            console.error(translationOrError.message);
        }
        const translation = translationOrError;
        generate_1.generate(translation, outputPath)
            .then(() => console.info(`Emitted: ${path.join(outputPath, constants_1.OUTPUT_FILE_NAME)}`))
            .catch(error => console.error(`Error occurred while emitting: ${error.message}`));
    });
};
//# sourceMappingURL=watch.js.map