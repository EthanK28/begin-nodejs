var Q = require('q');

Q.when(null)
	.then(function () {
		return 'kung foo';
	})
	.then(function (val) {
		console.log(val);
		return Q.when('panda');
	})
	.then(function (val) {
		console.log(val);
	
	})
	.then(function (val){
		console.log(val == undefined);	
	});