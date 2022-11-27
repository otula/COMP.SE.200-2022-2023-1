/** @author Joonas Salojärvi */

import {expect, test} from '@jest/globals';
import filter from '../filter';

const numArr = [
    2, 5, 10, 15, 7, 3, 3
];

const objArr = [
    { a: 1, b: 1 },
    { a: 2, b: 1 },
    { a: 1 },
];

test('Returns new array', () => {
    expect(filter(numArr, () => true)).not.toBe(numArr);
});

test('New array contains all elements', () => {
    const newArr = filter(numArr, () => true);

    for(let idx = 0; idx < newArr.length; idx++) {
        expect(newArr[idx]).toEqual(numArr[idx]);
    }
});

const filterOverFive = (num) => num <= 5;

const expectedNumArr = [
    2, 5, 3, 3
];

test('Filtered array contains expected elements', () => {
    const newArr = filter(numArr, filterOverFive);

    for(let idx = 0; idx < newArr.length; idx++) {
        expect(newArr[idx]).toEqual(expectedNumArr[idx]);
    }

    expect(newArr.length).toEqual(expectedNumArr.length);
});

test('Filter objects with predicate b <= 1', () => {
    const newArr = filter(objArr, (obj) => obj.b <= 1);

    expect(newArr.length).toEqual(2);
    expect(newArr[2]).toEqual(undefined);
})

test('Filter objects with predicate b == undefined', () => {
    const newArr = filter(objArr, (obj) => obj.b == undefined);

    expect(newArr.length).toEqual(1);
    expect(newArr[0].a).toEqual(1);
    expect(newArr[0].b).toEqual(undefined);
})