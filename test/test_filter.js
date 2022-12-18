import { expect } from 'chai';
import filter from '../src/filter.js';

describe('#filter', function(){
<<<<<<< HEAD
    it('should filter results that do not fulfill the predicate', function(){
        const testList = [{'name':'test1','pass': true}, {'name':'test2', 'pass': false}];
        const expected = [{'name':'test1','pass': true}];
        
        expect(filter(testList, ({pass}) => pass)).to.equal(expected);
=======
    it('should capitalize the first letter', function(){
>>>>>>> 43bb61859d49a194b62307326460e1dc64e1c81d
    });
});