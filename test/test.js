var expect = require("chai").expect;
var foo = require("../server");

describe('doMath', function() {
    it('should add two numbers where the first is smaller than the second', function() {
        expect(foo).to.be.a('function');
        var result = foo(5, 6);
        expect(result).to.be.a('number');
        expect(result).to.equal(11);
    });
    it('should multiply two numbers when they are equal', function() {
        expect(foo).to.be.a('function');
        var result = foo(5, 5);
        expect(result).to.be.a('number');
        expect(result).to.equal(25);
    });
    it('should subtract two numbers when the first is larger than the second', function() {
        expect(foo).to.be.a('function');
        var result = foo(6, 5);
        expect(result).to.be.a('number');
        expect(result).to.equal(1);
    });
});