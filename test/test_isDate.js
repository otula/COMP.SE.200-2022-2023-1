import { expect } from 'chai';
import isDate from '../src/isDate.js';

describe('#capitalize', function(){
    it('should capitalize the first letter', function(){
        const testString = "test1";
        const expected = "Test1";
        expect(capitalize(testString)).to.equal(expected);
    });
});