function alwaysSync(arg, cb) {
	if(arg) { // WE already have data
		//setup call for next tick
		process.nextTick(function () {
			cb('cached data');
		});
	} else { // We need to load data
		// simulate a db load
		setTimeout(function () {
			cb('loaded data');
		}, 500);
	}
}

alwaysSync(true, function (data) {
	foo();
});
bar();

function foo() { console.log('foo'); }
function bar() { console.log('bar'); }

