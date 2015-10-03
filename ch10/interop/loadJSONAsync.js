var Q = require('q');
var fs = require('fs');
var readFileAsync = Q.nbind(fs.readFile);

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
		console.log('good.json error', err.message);
	})
	.then(function () {
		return loadJSONAsync('abesent.json');
	})
	.then(function (val) { console.log(val); })
	.catch(function (err) {
		console.log('abent.json error', err.message);
	})
	.then(function () {
		return loadJSONAsync('bad.json');
	})
	.then(function (val) {
		console.log(val);
	})
	.catch(function (err) {
		console.log('bad.json errorr', err.message);
	});