/** @author Tomi Jokkeenhaara */

import { expect, test } from '@jest/globals';
import map from '../map';

test('Return original values', () => {
    function Foo() {
        this.a = 1
        this.b = 2
    };

    const originalValues = [0, 2, 4];

    expect(map(originalValues, (value) => value)).toEqual(originalValues);
});

test('Add 3 to each value', () => {
    const originalValues = [0, 2, 4];
    const expectedValues = [3, 5, 7];

    function addThree(a) {
        return a + 3;
    }
    expect(map(originalValues, addThree)).toEqual(expectedValues);
});

test('Return the index of each value in array', () => {
    const strings = ['hello', 'hi', 'this', 'is', 'a', 'test'];
    const expectedValues = [0, 1, 2, 3, 4, 5];

    const returnedValues = map(strings, (value, index) => {
        return index;
    });

    expect(returnedValues).toEqual(expectedValues);
});
