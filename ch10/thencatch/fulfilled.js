var Q = require('q');

Q.when(null).then(function (val){
	console.log(vall == null);
});

var Q = require('q');

Q.when(null).then(function (val) {
	console.log(val == null);
});

Q.when('kung foo').then(function (val) {
	console.log(val);
});

console.log('I will print first because *then* is always async');