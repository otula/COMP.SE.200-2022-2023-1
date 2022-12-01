/** @author Tomi Jokkeenhaara */

import { expect, test } from '@jest/globals';
import reduce from '../reduce';

test('Reduce array to sum', () => {

    const originalValues = [0, 2, 4];

    const reducedValue = reduce(originalValues, (sum, n) => sum + n, 0);

    expect(reducedValue).toEqual(6);
});

test('Return sum of values', () => {
    const originalValues = { 'a': 1, 'b': 2, 'c': 3 };

    const sum = reduce(originalValues, (result, value, key) => {
        return result + value;
    }, 0)

    expect(sum).toEqual(6);
});

test('Return an array of keys', () => {
    const originalValues = { 'a': 1, 'b': 2, 'c': 3 };
    const expectedResult = ['a', 'b', 'c'];

    const returnedResult = reduce(originalValues, (result, value, key) => {
        result.push(key);
        return result;
    }, [])

    expect(returnedResult).toEqual(expectedResult);
});
