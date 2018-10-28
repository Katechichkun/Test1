'use strcit';

const chai = require('chai');
const should = chai.should();
const foo = require('../foobar').foo;

describe('Function Foo', () => {
    describe('with two number params', () => {
        it('should return product', () => {
            const result = foo(3, 4);
            result.should.be.a('number');
            result.should.equal(12);
        });
    });

    describe('with non-number params', () => {
        it('should return false', () => {
            const result = foo(3, null);
            result.should.be.false;     
        });
    });
});