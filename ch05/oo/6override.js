// util funciton

var inherits = require('util').inherits;

// Base
function Base () { this.message = "message"; }
Base.prototype.foo = function ()  { return this.message + " base foo " };

// Child
function Child() { Base.call(this); }
inherits(Child, Base);

Child.prototype.foo = function () {

  return Base.prototype.foo.call(this) + " child foo";
}

var child = new Child();
console.log(child.foo());
