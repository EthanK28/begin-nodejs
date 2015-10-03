var fs = require('fs');

function loadJSON(filename, cb) {
	fs.readFile(filename, function (err, data) {
		if (err) {
			cb (err);
		} else {
			try {
				cb(null, JSON.parse(data));
			} catch (err) {
				cb(err);
			}
		}
	});
}

loadJSON('good.json', function (err, data) {
	console.log('our callback called');
	
	if (err) console.log('Error:', err.message);
	else {
		// Lets simulate an arror by trying to access a property on an undefined variable
		var foo;
		console.log(foo.bar);
	}
});

