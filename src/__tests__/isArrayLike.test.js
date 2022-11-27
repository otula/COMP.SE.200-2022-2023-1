/** @author Joonas Salojärvi */

import {expect, test} from '@jest/globals';
import isArrayLike from '../isArrayLike';

test('Array should be array like', () => {
    const resolved = isArrayLike([1,2,3]);
    expect(resolved).toEqual(true);
})

test('Object should not be array like', () => {
    const resolved = isArrayLike({a: 1, b: 2});
    expect(resolved).toEqual(false);
})

test('String should be array like', () => {
    const resolved = isArrayLike('TEST STRING');
    expect(resolved).toEqual(true);
})

test('Function should not be array like', () => {
    const resolved = isArrayLike(isArrayLike);
    expect(resolved).toEqual(false);
})

test('Anonymous function should not be array like', () => {
    const resolved = isArrayLike(() => true);
    expect(resolved).toEqual(false);
})
