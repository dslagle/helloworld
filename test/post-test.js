var chaiPost = require("chai");
var chaiHttp = require("chai-http");
var expect = chaiPost.expect;

chaiPost.use(chaiHttp);

describe("http test", function() {
    var server = require("../server");

    it("post request to index should return 200 OK", function(done) {
        chaiPost.request(server)
            .post("/")
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
    
    it("get request to index should return 200 OK with HTML", function(done) {
        chaiPost.request(server)
            .get("/")
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.html;
                done();
            });
    });

    it("get /fib/x should return an array of numbers representing the fibinacci sequence with x elements", function(done) {
        chaiPost.request(server)
            .get("/fib/10")
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body.result).to.have.length(10);
                done();
            });

        chaiPost.request(server)
            .get("/fib/0")
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body.result).to.have.length(0);
                done();
            });
    });

    // it("index.html should contain Cool Stuff", function() {
    //   return expect("#page-header").dom.to.contain.text("Cool Stuff");
    // });

    // it("index.html should contain Hello World Test", function() {
    //   return expect("#page-sub-header").dom.to.contain.text("Hello World Test");
    // });

    // it("index.html title should be "Hello World!!"", function() {
    //   return driver.getTitle().then(function(title) {
    //     return expect(title).to.equal("Hello Again World!!");
    //   });
    // });
});