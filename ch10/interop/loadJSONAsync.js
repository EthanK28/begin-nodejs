var Q = require('q');
var fs = require('fs');
var readFileSync = Q.nbind(fs.readFile);

function loadJSONAsync(filename){
	return readFileAsync(filename)
				.then(function (res) {
					return JSON.parse(res);
				});
}

// good json file
loadJSONAsync('good.json')
	.then(function (val) { console.log(val); })
	.catch(function (err) {
		
	})
	.then(function () {
		
	})
	.then()
	.catch()
	.then
	.then(function () {
		
	})
	.catch(function (err) {
		console.log('bad.json errorr', err.message);
	});