"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ast_1 = require("../ast");
const utils_1 = require("./utils");
describe('ast', () => {
    describe('dts', () => {
        it('returns dts file with no translation', () => {
            const actual = ast_1.dts([]);
            const expected = utils_1.readFile('./src/lib/__tests__/expected/no-keys.d.ts');
            expect(actual).toEqual(expected);
        });
        it('returns dts file with one translation', () => {
            const actual = ast_1.dts([
                {
                    interpolations: ['value'],
                    key: 'common.cancel',
                    value: 'Cancel {{value}}',
                },
            ]);
            const expected = utils_1.readFile('./src/lib/__tests__/expected/one-key.d.ts');
            expect(actual).toEqual(expected);
        });
        it('returns dts file with multiple translations', () => {
            const actual = ast_1.dts([
                {
                    interpolations: ['value'],
                    key: 'common.cancel',
                    value: 'Cancel {{value}}',
                },
                {
                    interpolations: [],
                    key: 'common.ok',
                    value: 'OK'
                },
            ]);
            const expected = utils_1.readFile('./src/lib/__tests__/expected/multiple-keys.d.ts');
            expect(actual).toEqual(expected);
        });
    });
});
//# sourceMappingURL=astTest.js.map