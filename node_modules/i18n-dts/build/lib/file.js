"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path = require("path");
const constants_1 = require("../constants");
exports.getConfigFromPackageJson = (dir) => {
    const packageJsonPath = path.join(dir, constants_1.PACKAGE_JSON);
    if (!fs_1.existsSync(packageJsonPath)) {
        return Error('package.json does not exist on root directory');
    }
    const config = require(packageJsonPath)[constants_1.CONFIG_NAME];
    if (!config) {
        return Error(`\"${constants_1.CONFIG_NAME}\" property does not exist on package.json`);
    }
    return {
        model: config.model,
        outputDir: config.outputDir,
    };
};
exports.isJson = (extname) => {
    return extname.endsWith('.json');
};
exports.isSource = (extname) => {
    return extname.endsWith('.ts') || extname.endsWith('.js');
};
exports.getTranslationFromModel = (filePath) => {
    if (!fs_1.existsSync(filePath)) {
        return Error('model file does not exist');
    }
    const extname = path.extname(filePath);
    if (exports.isJson(extname) || exports.isSource(extname)) {
        return require(filePath);
    }
    return Error('file extension type should be either .json or .ts|.js');
};
//# sourceMappingURL=file.js.map