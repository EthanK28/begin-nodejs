var fs = require('fs');
fs.unlink('./text.txt', function (err) {
    if (err) {
      console.log('Error:', err);
    } else {
      console.log('test.txt successfully deleted');
    }
});
