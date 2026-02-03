/* Memoization is an optimization technique that can be used to reduce time-consuming 
calculations by saving previous input to something called cache and returning the 
result from it. */

var memoize = function (fn) {
  let cache = {};
  return function (...args) {
    // Converting the function arguments into a string so it can be used as a cache key
    let n = JSON.stringify(args); //example: "[2,3]"

    if (n in cache) {
      // console.log("from cache");
      return cache[n];
    } else {
      // console.log("first call");

      // Calling the original function with the given arguments and geting the result to store in cache
      const result = fn.apply(this, args);
      cache[n] = result;
      return result;
    }
  };
};

function add(a, b) {
  return a + b;
}

var memoFactorial = memoize(function factorial(n) {
  if (n <= 1) return 1;
  return n * memoFactorial(n - 1);
});

var memoFib = memoize(function fib(n) {
  if (n <= 1) return 1;
  return memoFib(n - 1) + memoFib(n - 2);
});

var memoAdd = memoize(add);

console.time("add-1");
console.log(memoAdd(2, 3)); // first call
console.timeEnd("add-1");

console.time("add-2");
console.log(memoAdd(2, 3)); // from cache
console.timeEnd("add-2");

console.time("fact-1");
console.log(memoFactorial(6)); // first call
console.timeEnd("fact-1");

console.time("fact-2");
console.log(memoFactorial(6)); // from cache
console.timeEnd("fact-2");

console.time("fib-1");
console.log(memoFib(6)); // first call
console.timeEnd("fib-1");

console.time("fib-2");
console.log(memoFib(6)); // from cache
console.timeEnd("fib-2");
