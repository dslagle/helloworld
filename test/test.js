// And then...
var chai = require("chai");
var expect = chai.expect;
var math = require("../math");

describe("doMath", function() {
    it("should add two numbers where the first is smaller than the second", function() {
        expect(math.doMath).to.be.a("function");
        var result = math.doMath(5, 6);
        expect(result).to.be.a("number");
        expect(result).to.equal(11);
    });
    it("should multiply two numbers when they are equal", function() {
        expect(math.doMath).to.be.a("function");
        var result = math.doMath(5, 5);
        expect(result).to.be.a("number");
        expect(result).to.equal(25);
    });
    it("should subtract two numbers when the first is larger than the second", function() {
        expect(math.doMath).to.be.a("function");
        var result = math.doMath(6, 5);
        expect(result).to.be.a("number");
        expect(result).to.equal(1);
    });
});

describe("fib", function() {
    it("should return [1, 1, 2, 3, 5, 8, 13, 21] when passing in 8", function() {
        expect(math.fib).to.be.a("function");
        var result = math.fib(8);
        var expected = [1, 1, 2, 3, 5, 8, 13, 21];
        expect(result).to.have.length(8);
        expect(result).to.deep.equal(expected);
    });

    it("should throw when passing in a negative number", function() {
        expect(math.fib).to.be.a("function");
        expect(() => math.fib(-1)).to.throw();
    });

    it("should return an empty array when passing in 0", function() {
        expect(math.fib).to.be.a("function");
        var result = math.fib(0);
        expect(result).to.be.a("array");
        expect(result).to.have.length(0);
    });

    it("should return [1] when passing in 1", function() {
        expect(math.fib).to.be.a("function");
        var result = math.fib(1);
        expect(result).to.be.a("array");
        expect(result).to.have.length(1);
        expect(result[0]).to.equal(1);
    });

    it("should return [1, 1] when passing in 2", function() {
        expect(math.fib).to.be.a("function");
        var result = math.fib(2);
        expect(result).to.be.a("array");
        expect(result).to.have.length(2);
        expect(result[0]).to.equal(1);
        expect(result[1]).to.equal(1);
    });
});