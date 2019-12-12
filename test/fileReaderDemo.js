console.log("*********************test run************")

var fileReaderDemo = require('../fileReaderDemo');
var singleA = require('../SingleA.txt');
// var hooverInput = require('../HooverInput.txt');
var expect = require('chai').expect;

describe('#fileReaderDemo()', function() {

  // it('should return contents of text file', function() {
  //   expect(fileReaderDemo('HooverInput.txt')).to.equal("B")
  // })

  it('should return contents of text file', function() {
    expect(fileReaderDemo('SingleA.txt')).to.equal("A")
  })

})
