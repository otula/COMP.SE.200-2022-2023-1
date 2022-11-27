/** @author Joonas Salojärvi */

import {expect, test} from '@jest/globals';
import isBoolean from '../isBoolean';

test('New Boolean() should be boolean', () => {
    const resolved = isBoolean(new Boolean());
    expect(resolved).toEqual(true);
})

test('New Boolean(false) should be boolean', () => {
    const resolved = isBoolean(new Boolean(false));
    expect(resolved).toEqual(true);
})

test('true should be boolean', () => {
    const resolved = isBoolean(true);
    expect(resolved).toEqual(true);
})

test('false should be boolean', () => {
    const resolved = isBoolean(false);
    expect(resolved).toEqual(true);
})

test('Object should not be boolean', () => {
    const obj = { asd: 'asd' }
    const resolved = isBoolean(obj);
    expect(resolved).toEqual(false);
})

test('Number should not be boolean', () => {
    const resolved = isBoolean(new Number(10));
    expect(resolved).toEqual(false);
})

test('Null should not be boolean', () => {
    const resolved = isBoolean(null);
    expect(resolved).toEqual(false);
})

test('Undefined should not be boolean', () => {
    const resolved = isBoolean(undefined);
    expect(resolved).toEqual(false);
})