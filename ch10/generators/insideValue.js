function* generator() {
	var bar = yield 'foo';
	console.log(bar);
}

var iterator = generator();

// Start Execution till we get first yield value

var foo = iterator.next();
console.log(foo.value);

// Resume execution injecting bar
var nextThing = iterator.next('bar');
