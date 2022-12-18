import { expect } from 'chai';
import toString from '../src/toString.js';

describe('#toString', function(){
    it('null returns empty string', function(){
        expect(toString(null)).to.equal('')
    });
});