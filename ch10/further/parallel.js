var Q = require('q');

var loadItem = Q.nbind(function (id, cb) {
	setTimeout(function () {
		 cb(null, { id: id });
	}, 500);
});

Q.all([loadItem(1), loadItem(2)])
	.then(function (i) {
		console.log('Items:', i); // Items: [ { id : 1 } , { id : 2 }]
	})
	.catch(function (reason) { console.log(reason) });