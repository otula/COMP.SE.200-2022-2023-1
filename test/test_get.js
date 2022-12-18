import { expect } from 'chai';
import get from '../src/get.js';

describe('#get', function(){
<<<<<<< HEAD
    it('should return the value at the end of the path', function(){
        const testObj = { 'a': [{ 'b': { 'c': 3 } }] };
        const expected = 3;
        expect(get(testObj, 'a[0].b.c')).to.equal(expected);
    });
    it('should defaultvalue when path does not exist', function(){
        const testObj = { 'a': [{ 'b': { 'c': 3 } }] };
        const expected = false;
        expect(get(testObj, 'a.b.c', false)).to.equal(expected);
=======
    it('should capitalize the first letter', function(){
>>>>>>> 43bb61859d49a194b62307326460e1dc64e1c81d
    });
});