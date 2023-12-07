"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path = require("path");
const constants_1 = require("../../constants");
const generate_1 = require("../generate");
const utils_1 = require("./utils");
describe('generate', () => {
    const dirPath = './src/lib/__tests__/generated/';
    const filePath = `${dirPath}${constants_1.OUTPUT_FILE_NAME}`;
    beforeAll(() => fs_1.mkdirSync(dirPath));
    afterAll(() => fs_1.rmdirSync(dirPath));
    afterEach(() => fs_1.unlinkSync(filePath));
    it('writes d.ts file with no key', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(1);
        return generate_1.generate({}, path.resolve(dirPath)).then(() => {
            const actual = utils_1.readFile(filePath);
            const expected = utils_1.readFile('./src/lib/__tests__/expected/no-keys.d.ts');
            expect(actual).toEqual(expected);
        });
    }));
    it('writes d.ts file with one key', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(1);
        return generate_1.generate({
            'common.cancel': 'Cancel {{value}}',
        }, path.resolve(dirPath)).then(() => {
            const actual = utils_1.readFile(filePath);
            const expected = utils_1.readFile('./src/lib/__tests__/expected/one-key.d.ts');
            expect(actual).toEqual(expected);
        });
    }));
    it('writes d.ts file with multiple keys', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(1);
        return generate_1.generate({
            'common.cancel': 'Cancel {{value}}',
            'common.ok': 'OK',
        }, path.resolve(dirPath)).then(() => {
            const actual = utils_1.readFile(filePath);
            const expected = utils_1.readFile('./src/lib/__tests__/expected/multiple-keys.d.ts');
            expect(actual).toEqual(expected);
        });
    }));
});
//# sourceMappingURL=generateTest.js.map