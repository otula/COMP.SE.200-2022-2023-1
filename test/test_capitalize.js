import { expect } from 'chai';
import capitalize from '../src/capitalize.js';

describe('#capitalize', function(){
    it('should capitalize the first letter', function(){
        const testString = "test1";
        const expected = "Test1";
        expect(capitalize(testString)).to.equal(expected);
    });

    it('should return the same string when string is already capitalized', function(){
        const expected = "Test2";
        expect(capitalize(expected)).to.equal(expected);
    });

    it('should lower all other characters other than the first', function() {
        const testString = "tEST3";
        const expected = "Test3";
        expect(capitalize(testString)).to.equal(expected);
    });
    it('should work with special marks', function() {
        const testString = "/TEST4";
        const expected = "/test4";
        expect(capitalize(testString)).to.equal(expected);
    });
    it('should work with integer values', function() {
        const testString = 12;
        const expected = "12";
        expect(capitalize(testString)).to.equal(expected);
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> f081ad233d7894ed9f319cd6d7083ab859d3d16f
