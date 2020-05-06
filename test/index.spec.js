/**
 * @jest-environment node
 */

// Local modules.
import { default as languramaTypeCheck } from '../src';

function check(type, object) {
    if (type !== 'array') expect(languramaTypeCheck.array(object)).toBeFalsy();
    if (type !== 'asyncFunction') expect(languramaTypeCheck.asyncFunction(object)).toBeFalsy();
    if (type !== 'bigint') expect(languramaTypeCheck.bigint(object)).toBeFalsy();
    if (type !== 'boolean') expect(languramaTypeCheck.boolean(object)).toBeFalsy();
    if (type !== 'date') expect(languramaTypeCheck.date(object)).toBeFalsy();
    if (type !== 'error') expect(languramaTypeCheck.error(object)).toBeFalsy();
    if (type !== 'function') expect(languramaTypeCheck.function(object)).toBeFalsy();
    if (type !== 'generatorFunction')
        expect(languramaTypeCheck.generatorFunction(object)).toBeFalsy();
    if (type !== 'nan') expect(languramaTypeCheck.nan(object)).toBeFalsy();
    if (type !== 'null') expect(languramaTypeCheck.null(object)).toBeFalsy();
    if (type !== 'number') expect(languramaTypeCheck.number(object)).toBeFalsy();
    if (type !== 'object') expect(languramaTypeCheck.object(object)).toBeFalsy();
    if (type !== 'promise') expect(languramaTypeCheck.promise(object)).toBeFalsy();
    if (type !== 'string') expect(languramaTypeCheck.string(object)).toBeFalsy();
    if (type !== 'symbol') expect(languramaTypeCheck.symbol(object)).toBeFalsy();
    if (type !== 'undefined') expect(languramaTypeCheck.undefined(object)).toBeFalsy();
}

describe('Type Checking', () => {
    it('should type check an array correctly', () => {
        // Setup.
        const object = [];
        // Assert.
        expect(languramaTypeCheck.array(object)).toBeTruthy();
        check('array', object);
    });
    it('should type check an async function correctly', () => {
        // Setup.
        const object = async function() {};
        // Assert.
        expect(languramaTypeCheck.asyncFunction(object)).toBeTruthy();
        check('asyncFunction', object);
    });
    it('should type check a big int correctly', () => {
        // Setup.
        // eslint-disable-next-line no-undef
        const object = BigInt(666);
        // Assert.
        expect(languramaTypeCheck.bigint(object)).toBeTruthy();
        check('bigint', object);
    });
    it('should type check a boolean correctly', () => {
        // Setup.
        const object = true;
        // Assert.
        expect(languramaTypeCheck.boolean(object)).toBeTruthy();
        check('boolean', object);
    });
    it('should type check a date correctly', () => {
        // Setup.
        const object = new Date();
        // Assert.
        expect(languramaTypeCheck.date(object)).toBeTruthy();
        check('date', object);
    });
    it('should type check an error correctly', () => {
        // Setup.
        const object = new Error();
        // Assert.
        expect(languramaTypeCheck.error(object)).toBeTruthy();
        check('error', object);
    });
    it('should type check a function correctly', () => {
        // Setup.
        const object = function() {};
        // Assert.
        expect(languramaTypeCheck.function(object)).toBeTruthy();
        check('function', object);
    });
    it('should type check a generator function correctly', () => {
        // Setup.
        const object = function*() {};
        // Assert.
        expect(languramaTypeCheck.generatorFunction(object)).toBeTruthy();
        check('generatorFunction', object);
    });
    it('should type check nan correctly', () => {
        // Setup.
        const object = NaN;
        // Assert.
        expect(languramaTypeCheck.nan(object)).toBeTruthy();
        check('nan', object);
    });
    it('should type check null correctly', () => {
        // Setup.
        const object = null;
        // Assert.
        expect(languramaTypeCheck.null(object)).toBeTruthy();
        check('null', object);
    });
    it('should type check a number correctly', () => {
        // Setup.
        const object = 666;
        // Assert.
        expect(languramaTypeCheck.number(object)).toBeTruthy();
        check('number', object);
    });
    it('should type check a literal object correctly', () => {
        // Setup.
        const object = {};
        // Assert.
        expect(languramaTypeCheck.object(object)).toBeTruthy();
        check('object', object);
    });
    it('should type check a class object correctly', () => {
        // Setup.
        class Test {}
        const object = new Test();
        // Assert.
        expect(languramaTypeCheck.object(object)).toBeTruthy();
        check('object', object);
    });
    it('should type check a proxy object correctly', () => {
        // Setup.
        const object = new Proxy({}, {});
        // Assert.
        expect(languramaTypeCheck.object(object)).toBeTruthy();
        check('object', object);
    });
    it('should type check a promise correctly', () => {
        // Setup.
        const object = new Promise(() => {});
        // Assert.
        expect(languramaTypeCheck.promise(object)).toBeTruthy();
        check('promise', object);
    });
    it('should type check a string correctly', () => {
        // Setup.
        const object = 'hell';
        // Assert.
        expect(languramaTypeCheck.string(object)).toBeTruthy();
        check('string', object);
    });
    it('should type check a symbol correctly', () => {
        // Setup.
        const object = Symbol();
        // Assert.
        expect(languramaTypeCheck.symbol(object)).toBeTruthy();
        check('symbol', object);
    });
    it('should type check undefined correctly', () => {
        // Setup.
        const object = undefined;
        // Assert.
        expect(languramaTypeCheck.undefined(object)).toBeTruthy();
        check('undefined', object);
    });
});
