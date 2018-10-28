'use strict';

const chai = require('chai');
const should = chai.should();
const bar = require('../foobar').bar;

describe('Function Bar', () => {
    it('should return product', (done) => {
        bar((result) => {
            result.should.be.a('object');
            const keys = Object.keys(result);
            keys.should.have.lengthOf(2);
            result.value1.should.equal(123);
            result.value2.should.equal('abc');
            done();
        });
    });
});