/** @author Tomi Jokkeenhaara */

import { expect, test } from '@jest/globals';
import keys from '../keys';

test('Return keys of an object', () => {
    const o = { a: 1, b: 2 };
    const expectedKeys = ['a', 'b'];
    expect(keys(o)).toEqual(expectedKeys);
});

test('Do not return keys only added to prototype', () => {
    function Foo() {
        this.a = 1
        this.b = 2
    };

    Foo.prototype.c = 3;
    const expectedKeys = ['a', 'b'];
    const unexpectedKeys = ['c'];
    const o = new Foo;

    expect(keys(o)).toEqual(expect.arrayContaining(expectedKeys));
    expect(keys(o)).not.toEqual(expect.arrayContaining(unexpectedKeys));
});

test('return indice of string', () => {
    const s = 'hello';
    const expectedKeys = ['0', '1', '2', '3', '4'];

    expect(keys(s)).toEqual(expectedKeys);
});
