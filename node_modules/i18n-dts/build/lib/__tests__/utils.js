"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.readFile = (filePath) => fs_1.readFileSync(filePath, 'utf8').trim();
//# sourceMappingURL=utils.js.map