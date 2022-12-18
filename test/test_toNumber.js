import { expect } from 'chai';
import toNumber from '../src/toNumber.js';

describe('#toNumber', function(){
    it('integer and float should return themselves', function(){
        expect(toNumber(1)).to.equal(1)
        expect(toNumber(1.0001)).to.equal(1.0001)
    });
});