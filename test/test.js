var assert = require("chai").assert;
var foo = require("../server");

describe('doMath', function() {
    it('should add two numbers where the first is smaller than the second', function() {
        assert.equal(foo(5, 6), 11);
    });
    it('should multiply two numbers when they are equal', function() {
        assert.equal(foo(5, 5), 25);
    });
    it('should subtract two numbers when the first is larger than the second', function() {
        assert.equal(foo(6, 5), 1);
    });
});