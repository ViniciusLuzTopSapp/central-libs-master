"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const constants_1 = require("../../constants");
const file_1 = require("../file");
describe('file', () => {
    describe('getConfigFromPackageJson', () => {
        it('returns error with wrong directory', () => {
            const error = file_1.getConfigFromPackageJson(path.resolve('./src/lib/__tests__/fixtures/not_exist'));
            expect(error instanceof Error).toBeTruthy();
            expect(error.message).toEqual('package.json does not exist on root directory');
        });
        it('returns error with no property json', () => {
            const error = file_1.getConfigFromPackageJson(path.resolve('./src/lib/__tests__/fixtures/no_config'));
            expect(error instanceof Error).toBeTruthy();
            expect(error.message).toEqual(`\"${constants_1.CONFIG_NAME}\" property does not exist on package.json`);
        });
        it('returns config with valid package.json', () => {
            const config = file_1.getConfigFromPackageJson(path.resolve('./src/lib/__tests__/fixtures/valid'));
            expect(config instanceof Error).toBeFalsy();
            expect(config).toEqual({
                model: './en.json',
                outputDir: './typings',
            });
        });
    });
    describe('isJson', () => {
        it('returns true', () => {
            expect(file_1.isJson('.json')).toBeTruthy();
        });
        it('returns false', () => {
            expect(file_1.isJson('.jsonp')).toBeFalsy();
        });
    });
    describe('isSource', () => {
        it('returns true', () => {
            expect(file_1.isSource('.ts')).toBeTruthy();
            expect(file_1.isSource('.js')).toBeTruthy();
        });
        it('returns false', () => {
            expect(file_1.isSource('.json')).toBeFalsy();
        });
    });
    describe('getTranslationFromModel', () => {
        it('returns error with no model file', () => {
            const error = file_1.getTranslationFromModel(path.resolve('./src/lib/__tests__/fixtures/not_exist'));
            expect(error instanceof Error).toBeTruthy();
            expect(error.message).toEqual('model file does not exist');
        });
        it('returns error with wrong file extension', () => {
            const error = file_1.getTranslationFromModel(path.resolve('./src/lib/__tests__/fixtures/wrong_ext_name/package.jsonp'));
            expect(error instanceof Error).toBeTruthy();
            expect(error.message).toEqual('file extension type should be either .json or .ts|.js');
        });
        it('returns json object with json file', () => {
            const config = file_1.getTranslationFromModel(path.resolve('./src/lib/__tests__/fixtures/valid/package.json'));
            expect(config instanceof Error).toBeFalsy();
            expect(config).toEqual({
                'i18n-dts': {
                    model: './en.json',
                    outputDir: './typings',
                },
            });
        });
    });
});
//# sourceMappingURL=fileTest.js.map