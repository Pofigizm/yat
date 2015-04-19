'use strict';

var trottle,
  obj,
  el;

// pure function
trottle = function(fn, count) {
  var wait = false;
  return function() {
    if (wait) return;
    wait = true;
    setTimeout(function() {
      wait = false;
    }, 1000 / count);
    fn.apply(this, arguments);
  };
};

// test
obj = {context: 'obj'};
obj.testFunc = trottle(function(count) {
  console.log('Message:', this.context, count);
}, 5);

el = 0;
setInterval(function() {
  obj.testFunc(el++);
}, 10);
