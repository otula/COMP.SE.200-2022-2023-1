import eq from '../src/eq.js';
import { expect } from 'chai';

describe('#eq', function(){
    it('compare two equal integers', function(){
        expect(eq(1, 1)).to.equal(true)
    });

    it('compare two non-equal positive integers', function(){
        expect(eq(1, 2)).to.equal(false)
    });

    it('compare two equal floats', function(){
        expect(eq(0.001, 0.001)).to.equal(true)
    });
    it('compare two non-equal positive floats', function(){
        expect(eq(0.001, 0.002)).to.equal(false)
    });

    it('compare two large integers', function(){
        expect(eq(2147483647, 2147483647)).to.equal(true)
    });

});