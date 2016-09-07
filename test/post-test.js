// Start with a webdriver instance:
var sw = require('selenium-webdriver');
var driver = new sw.Builder()
  .withCapabilities(sw.Capabilities.chrome())
  .build()

// And then...
var chai = require('chai');
var chaiWebdriver = require('chai-webdriver');
chai.use(chaiWebdriver(driver));

var expect = chai.expect;

describe('get-index', function() {
    before(function(done) {
      driver.get('http://localhost:22000').then(done);
    });
    
    it("index.html should contain Cool Stuff", function() {
      return expect("#page-header").dom.to.contain.text("Cool Stuff");
    });

    it("index.html should contain Hello World Test", function() {
      return expect("#page-sub-header").dom.to.contain.text("Hello World Test");
    });

    it("index.html title should be 'Hello World!!'", function() {
      return driver.getTitle().then(function(title) {
        return expect(title).to.equal("Hello Again World!!");
      });
    });
});