var date = new Date(Date.UTC(2007, 0, 1));

console.log('Original', date);

// To Json
var jsonString = date.toJSON();
console.log(jsonString);

// From JSON
console.log('Round Tripped', new Date(jsonString));
