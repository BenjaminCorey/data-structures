module.exports = {
  compress: function (string) {
    var buffer = [],
        charArray = string.split(''),
        lastChar = charArray.shift(),
        counter = 1;
    // for(var i = 0; i < charArray.length; i++) {
    //   var currentChar = charArray[i];
    //   if ( currentChar === lastChar ) {
    //     counter++;
    //   } else {
    //     buffer.push(lastChar + counter);
    //     lastChar = currentChar;
    //     counter = 1;
    //   }
    // }
    charArray.forEach(function (char) {
      if (char === lastChar) {
        counter++;
      } else {
        buffer.push(lastChar + counter);
        lastChar = char;
        counter = 1;
      }
    });
    buffer.push(lastChar + counter);
    return buffer.join('');
  },
  fib: function(n) {
    var buffer = [ 0, 1 ];
    if ( n < 2 ) {
      return n;
    }
    for (var i = 2; i <= n; i++) {
      buffer[i] = buffer[i-1] + buffer[i-2];
    }
    return buffer[n];
  },
  fibR: function(n) {
    if ( n < 2) {
      return n;
    }
    return fibR(n-1) + fibR(n-2);
  }
};
