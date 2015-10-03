function* generator() {
	try {
		yield 'foo';
	} catch(err) {
		console.log(err.message);
	}
}

var iterator = generator();
// Start execution till we get first yield value

var foo = iterator.next();
console.log(foo.value);

// Resume execution throwing an exception 'bar'
var nextThing = iterator.throw(new Error('bar'));
