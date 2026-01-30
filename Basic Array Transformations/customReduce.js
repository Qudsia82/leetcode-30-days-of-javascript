/* Implemented a custom reduce function and learned how the accumulator
updates on each iteration using the previous result, not the initial value. */

var reduce = function (arr, fn, init) {
  let sum = init;
  if (arr.length == 0) return init;
  for (i = 0; i < arr.length; i++) {
    sum = fn(sum, arr[i]);
  }
  return sum;
};

let arr = [1, 2, 3, 4];

var sum1 = reduce(
  arr,
  function (accum, curr) {
    return accum + curr;
  },
  0
);

var sum2 = reduce(
  arr,
  function (accum, curr) {
    return accum + curr * curr;
  },
  100
);

var sum3 = reduce(
  [],
  function () {
    return 0;
  },
  25
);

console.log(sum1);
console.log(sum2);
console.log(sum3);
