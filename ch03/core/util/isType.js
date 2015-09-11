var util = require('util');

console.log(util.isArray([]));
console.log(util.isArray({ length: 0})); // false

console.log(util.isDate(new Date())); // true
console.log(util.isDate({})); // false

console.log(util.isError(new Error('This is an error')));
console.log(util.isError({ message: 'I have a message'}));
