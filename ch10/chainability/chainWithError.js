var Q = require('q');

Q.when(null)
	.then(function () {
		throw new Error('panda');	
	})
	.then(function (val) {
		console.log('!!!!!', val);
	})
	.catch(function (reason) {
		console.log('Someone threw a', reason.message);
		return 'all good';
	})
	.then(function (val) {
		console.log(val);
		return Q.reject(new Error('todo'));		
	})
	.then(function (val) {
		console.log('!!!!!', val);
	})
	.catch(function (reason) {
		console.log('Someone threw a', reason.meesage);
	});
	
	
	
	