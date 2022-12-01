/** @author Tomi Jokkeenhaara */

import { expect, test } from '@jest/globals';
import words from '../words';

test('Return array of two words', () => {

    const originalString = 'hello world';
    const expectedWords = ['hello', 'world'];

    const returnedWords = words(originalString);

    expect(returnedWords).toEqual(expectedWords);
});

test('Return array of one word', () => {

    const originalString = 'hello';
    const expectedWords = ['hello'];

    const returnedWords = words(originalString);

    expect(returnedWords).toEqual(expectedWords);
});

test('Return empty string', () => {

    const originalString = '';
    const expectedWords = [];

    const returnedWords = words(originalString);

    expect(returnedWords).toEqual(expectedWords);
});

test('Count separate ascii characters as words', () => {

    const originalString = 'a & b';
    const expectedWords = ['a', '&', 'b'];

    const returnedWords = words(originalString);

    expect(returnedWords).toEqual(expectedWords);
});

test('Handle a word with an exclamation point', () => {

    const originalString = 'hi there!';
    const expectedWords = ['hi', 'there'];

    const returnedWords = words(originalString);

    expect(returnedWords).toEqual(expectedWords);
});

test('Handle a comma at the end of a word', () => {

    const originalString = 'hi, hello';
    const expectedWords = ['hi', 'hello'];

    const returnedWords = words(originalString);

    expect(returnedWords).toEqual(expectedWords);
});
