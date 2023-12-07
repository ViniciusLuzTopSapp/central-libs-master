"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");
const constants_1 = require("../constants");
const ast_1 = require("./ast");
const parser_1 = require("./parser");
exports.generate = (translations, dirPath) => {
    if (!fs_1.existsSync(dirPath)) {
        mkdirp.sync(dirPath);
    }
    const keys = parser_1.flattenKeys(translations);
    const data = ast_1.dts(keys);
    const outputPath = path.join(dirPath, constants_1.OUTPUT_FILE_NAME);
    return execWriteFile(outputPath, data);
};
const execWriteFile = (pathFile, data) => new Promise((resolve, reject) => {
    fs_1.writeFile(pathFile, data, error => {
        if (error) {
            reject(error);
        }
        else {
            resolve();
        }
    });
});
//# sourceMappingURL=generate.js.map