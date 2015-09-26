var fs = require('fs');

// Create readable stream
var readableStream = fs.createReadStream('./cool.txt');

// Pipt it to stdout
readableStream.pipe(process.stdout);
