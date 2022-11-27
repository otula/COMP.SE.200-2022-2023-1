/** @author Joonas Salojärvi*/

import {expect, test} from '@jest/globals';
import defaultTo from '../defaultTo';


test('Return default value on null', () => expect(
    defaultTo(null, 1)
    ).toBe(1));

test('Return default value on undefined', () => expect(
    defaultTo(undefined, 1)
    ).toBe(1));

test('Return value when it exists', () => expect(
    defaultTo(10, 1)
    ).toBe(10));

test("Don't return default value when actual value exists", () => expect(
    defaultTo(10, 1))
    .not.toBe(1));