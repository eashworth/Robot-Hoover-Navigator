function fileReader(file) {

var fs = require('fs');

  function hexToUtf8(str) {
    const buf = new Buffer.from(str, 'hex');
    return buf.toString('utf8');
  }

  fs.readFile(file, function(err, data) {
    console.log(hexToUtf8(data));
    return hexToUtf8(data);
  });

}

// var inputString = fileReader('input.txt')
// inputString();
console.log(fileReader('input.txt'));

// function readFirstLine(inputString) {
//   inputString.split("\n");
// }
