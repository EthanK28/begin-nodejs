function maybeSync(arg, cb) {
	if (arg) {
		cb('cached data');
	} 
	else {
		setTimeout(function () {
			cb('loaded data')
		}, 500);
	}
}

maybeSync(true, function (data){
	foo();
});
bar();

function foo() { console.log('foo'); }
function bar() { console.log('bar'); }
