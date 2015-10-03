var Q = require('q');
var BlueBird = require('bluebird');

new BlueBird(function (resolve) { // A bluebird promise
	resolve('foo');
})
.then(function (val){
	console.log(val);
	return Q.when('bar');	
})
.then(function (val) {
	console.log(val);
});