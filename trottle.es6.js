'use strict';

let trottle,
  obj,
  el;

// pure function
trottle = (func, count) => {
  let wait = false,
    fn = function() {
      if (!wait) {
        wait = true;
        setTimeout(() => wait = false, 1000 / count);
        func.apply(this, arguments);
      }
    };
  return fn;
};

// run test
obj = {context: 'obj'};
obj.testFunc = trottle(function(count) {
  console.log('Message:', obj.context, count);
}, 5);

el = 0;
setInterval(() => obj.testFunc(el++), 10);
