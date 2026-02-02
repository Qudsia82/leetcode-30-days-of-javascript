var once = function (fn) {
  // isCalled variable is remembered between calls because of closure.
  let isCalled = false;
  return function (...args) {
    if (isCalled) return undefined;
    isCalled = true;
    return fn(...args);
  };
};

const fn = (a, b, c) => a + b + c; 

const call = once(fn);
console.log(call(1, 2, 3)); // 6
console.log(call(1, 2, 3)); // undefined
