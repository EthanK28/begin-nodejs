var fs = require('fs');
try {
  fs.unlinkSync('./text.txt');
  console.log('text.txt successfully delted');
}
catch (err) {
  console.log('Error: ', err);
}
