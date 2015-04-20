var Stack = require('./stack');

function divideBy2(n) {
  var remainders = new Stack(),
      remainder,
      buffer = [];

  while (n > 0) {
    remainder = Math.floor(n % 2);
    remainders.push(remainder);
    n = Math.floor(n / 2);
  }

  while (!remainders.isEmpty()) {
    buffer.push( remainders.pop().toString() );
  }

  return buffer.join('');
}

console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(33));

function baseConverter(number, base) {
  if (!base) {
    return number;
  }
  var remainders = new Stack(),
      remainder,
      buffer = [],
      digits = '0123456789ABCDEF';
  
  while ( number > 0 ) {
    remainder = Math.floor( number % base );
    remainders.push(remainder);
    number = Math.floor( number / base );
  }

  while ( !remainders.isEmpty() ) {
    buffer.push( digits[remainders.pop()] );
  }

  return buffer.join('');
}

console.log(baseConverter(1233521, 16));
console.log(baseConverter(521, 16));
console.log(baseConverter(32, 16));

module.exports = baseConverter;
