setTimeout(function () {
	try {
		console.log('About to throw an error');
		throw new Error('Error thrown');
	}
	catch (e) {
		console.log('Erorr caught');
	}
}, 1000);

