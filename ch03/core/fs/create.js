var fs = require('fs');

// write
fs.writeFileSync('text.txt', 'Hello fs!');


// read
console.log(fs.readFileSync('text.txt').toString());
