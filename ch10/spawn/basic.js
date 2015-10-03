var Q = require('q');

Q.spawn(function*  () {
	// fulfilled 
	var foo = yield Q.when('foo');
	console.log(foo);
	
	// rejected
	try {
		
	} catch (err) {
		
	}
});