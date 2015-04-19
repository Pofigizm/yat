'use strict';

var getSumIs,
  unique,
  sort,
  reverse,
  out,
  data;

// pure function
getSumIs = function(sum, array) {
  return array
    .reduce(function(pe, ce, ix) {
      if (ce > sum) return pe;
      if (ce === sum) return pe.concat(ce);
      return pe.concat(
        getSumIs(sum - ce, array.slice(++ix))
          .map(function(el) {
            return [ce].concat(el);
          })
      );
    }, []);
};

// utils function
unique = function(array) {
  var check = {},
    hasp = {}.hasOwnProperty.bind(check);
  return array
    .filter(function(el) {
      if (hasp(el)) return false;
      check[el] = 0;
      return true;
    });
};
sort = function(array) {
  return []
    .concat(array)
    .sort(function(a, b) {
      return a - b;
    });
};
reverse = function(array) {
  return []
    .concat(array)
    .reverse();
};
out = function(array) {
  console.log();
  console.log('data:', JSON.stringify(array));
  console.time('time');
  console.log('find:', getSumIs(10, array).length, 'combs');
  console.timeEnd('time');
};

// test
data = [5, -4, 3, -2, 1, 0, -1, 2, -3, 4, -5];
data = data.concat(data);

out(data);
out(sort(data));
out(unique(data));
out(sort(unique(data)));
out(reverse(sort(unique(data))));
