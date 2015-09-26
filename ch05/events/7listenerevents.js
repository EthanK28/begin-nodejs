var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('removeListener', function (eventName, listnerFunction) {
	console.log(eventName, 'listener removed', listnerFunction.name);
});

emitter.on('newListener', function (eventName, listnerFunction) {
		console.log(eventName, 'listener added', listnerFunction.name);
});

function a() { }
function b() { }

emitter.on('foo', a);
emitter.on('foo', b);

emitter.removeListener('foo', a);
emitter.removeListener('foo', b);
