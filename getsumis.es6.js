'use strict';

let getSumIs,
  unique,
  sort,
  reverse,
  out,
  data;

// pure function
getSumIs = function fn(sum, array) {
  return array
    .reduce((res, el, ix) =>
      el > sum ? res : res.concat(
        el === sum ? el : (
          fn(sum - el, array.slice(++ix))
            .map(inel => [el].concat(inel))
        )
    ), []);
};

// utils function
unique = arr => {
  let o = {},
    hop = {}.hasOwnProperty.bind(o);
  return arr
    .filter(el => hop(el) ? false : o[el] = true);
};
sort = arr => [].concat(arr).sort((a, b) => a - b);
reverse = arr => [].concat(arr).reverse();

// test function
out = arr => {
  console.log();
  console.log('data:', JSON.stringify(arr));
  console.time('time');
  console.log('find:', getSumIs(10, arr).length, 'combs');
  console.timeEnd('time');
};

// run test
data = [5, -4, 3, -2, 1, 0, -1, 2, -3, 4, -5];
data = data.concat(data);

out(data);
out(sort(data));
out(unique(data));
out(sort(unique(data)));
out(reverse(sort(unique(data))));
