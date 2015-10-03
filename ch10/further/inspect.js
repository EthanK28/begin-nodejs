var Q = require('q');

var p1 = Q.defer().promise;
var p2 = Q.when('fulfill');
var p3 = Q.reject(new Error('reject'));

process.nextTick(function () {
	console.log(p1.isPending());
	console.log(p2.isFulfilled());
	console.log(p3.isRejected());
	
	console.log(p1.inspect());
	console.log(p2.inspect());
	console.log(p3.inspect());
});