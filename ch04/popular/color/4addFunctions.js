String.prototype.red = function (str) {

  var redCode = '\x1b[31m';
    // Resets the console foreground
  var clearCode = '\x1b[39m';
  return redCode + this + clearCode;
}

console.log('Hello World'.red());
