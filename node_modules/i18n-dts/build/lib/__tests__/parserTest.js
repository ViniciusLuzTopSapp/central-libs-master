"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("../parser");
describe('parser', () => {
    describe('extractInterpolations', () => {
        it('returns empty array', () => {
            expect(parser_1.extractInterpolations('test')).toEqual([]);
        });
        it('returns single matched string', () => {
            expect(parser_1.extractInterpolations('{{test}}')).toEqual(['test']);
        });
        it('returns multiple matched strings', () => {
            expect(parser_1.extractInterpolations('{{test}} {{test1}}')).toEqual([
                'test',
                'test1',
            ]);
        });
    });
    describe('flattenKeys', () => {
        it('returns flatten key', () => {
            expect(parser_1.flattenKeys({
                common: {
                    cancel: 'Cancel',
                },
            })).toEqual([
                {
                    interpolations: [],
                    key: 'common.cancel',
                    value: "Cancel"
                },
            ]);
        });
        it('returns flatten key with interpolation', () => {
            expect(parser_1.flattenKeys({
                common: {
                    cancel: 'Cancel {{value}}',
                },
            })).toEqual([
                {
                    interpolations: ['value'],
                    key: 'common.cancel',
                    value: "Cancel {{value}}",
                },
            ]);
        });
    });
});
//# sourceMappingURL=parserTest.js.map