var fs = require('fs');


function loadJSONSync(filename) {
	return JSON.parse(fs.readFileSync(filename));
}

// good json file
console.log(loadJSONSync('good.json'));

try {
	console.log(loadJSONSync('bad.json'));
} catch (err) {
	console.log('bad.json error', err.message);
}


