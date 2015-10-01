var Q = require('q');

var willFulfillDeferred = Q.defer();
var willFUlfill = willFulfillDeferred.promise;
willFulfillDeferred.resolve('final value');

willFUlfill
		.then(function (val) {
			console.log('success with', val);
		})
		.catch(function (reason) {
			console.log('failsed with', reason);
		});
		
var willRejectDeferred = Q.defer();
var willReject = willRejectDeferred.promise;
willRejectDeferred.reject(new Error('rejection reason')); // Note the use of Error

willReject
	.then(function (val) {
		console.log('success with', val);
	})
	.catch(function (reason) {
		console.log('failed with', reason);
	});