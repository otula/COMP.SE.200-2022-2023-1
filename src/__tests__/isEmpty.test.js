/** @author Tomi Jokkeenhaara*/

import { expect, test } from '@jest/globals';
import isEmpty from '../isEmpty';


test('Return true on empty object', () => {
    expect(isEmpty({})).toEqual(true);
});

test('Return true on empty array', () => {
    expect(isEmpty([])).toEqual(true);
});

test('Return true on empty string', () => {
    expect(isEmpty('')).toEqual(true);
});

test('Return true on null', () => {
    expect(isEmpty(null)).toEqual(true);
});

test('Return false on non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toEqual(false);
});

test('Return false on non-empty object', () => {
    expect(isEmpty({ a: 1 })).toEqual(false);
});

test('Return false on non-empty string', () => {
    expect(isEmpty("test")).toEqual(false);
});

test('Return false on a number', () => {
    expect(isEmpty(1)).toEqual(false);
});
