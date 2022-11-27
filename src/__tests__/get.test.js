/** @author Joonas Salojärvi */

import {expect, test} from '@jest/globals';
import get from '../get';

// dno = deeply nested object :)
const dno = {
    a: 1,
    b: {
        c: 4,
    },
    d: [
        ['a'],
        { 
            e: 'f',
        }
    ]
}

test('Get nested object value with string', () => {
    const resolved = get(dno, 'b.c');
    expect(resolved).toEqual(4);
});

test('Get default value if value cant be resolved', () => {
    const resolved = get(dno, 'b.d', 'default');
    expect(resolved).toEqual('default');
});

test('Get nested array value with string', () => {
    const resolved = get(dno, 'd[0][0]', 'default');
    expect(resolved).toEqual('a');
});

test('Get nested object value with array of keys', () => {
    const resolved = get(dno, ['b', 'c']);
    expect(resolved).toEqual(4);
});

test('Get default value if value cant be resolved', () => {
    const resolved = get(dno, ['b', 'd'], 'default');
    expect(resolved).toEqual('default');
});

test('Get nested array value with array of keys', () => {
    const resolved = get(dno, ['d', '0', '0'], 'default');
    expect(resolved).toEqual('a');
});

test('Get nested array value with array of keys including null', () => {
    const resolved = get(dno, ['d', null, '0'], 'default');
    expect(resolved).toEqual('default');
});

test('Getting value of null should return default', () => {
    const resolved = get(null, ['d', '0'], 'default');
    expect(resolved).toEqual('default');
});