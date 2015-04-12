'use strict';

// pure function 
var trottle = function(fn, count){
  var wait = false;
  return function(){
    if (wait) return;
    wait = true;
    setTimeout(function(){
      wait = false;
    }, 1000 / count);
    fn.apply(this, arguments);
  };
};

// test
var obj = { context: 'obj' }; 
obj.testFunc = trottle( function(count){
  console.log( 'Message:', this.context, count );
}, 5);

var el = 0;
setInterval( function(){
  obj.testFunc(el++);
}, 10);
