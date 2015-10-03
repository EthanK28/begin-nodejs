var Q = require('q');
function sleepAsync(ms) {
	var deferred = Q.defer();
	setTimeout(function () {
		deferred.resolve();
	}, ms);
	
	console.time('sleep');
	sleepAsync(1000).then(function () {
		console.timeEnd('sleep');
	});
}