// This program demonstrates how to schedule a function to run after a delay and 
// optionally cancel it before execution.


var cancellable = function (fn, args, t) {
  // setTimeout schedules fn(...args) to run after t milliseconds
  // and immediately returns a timer ID which is stored in timeoutId
  const timerId = setTimeout(() => fn(...args), t);

  // This return statement runs immediately as it is synchronous code
  // It does not wait for setTimeout to finish
  return function cancel() {
    // here the concept of closure is used as timeoutId is not defined in this 
    // function but it is defined in the parent function and it is accessible here
    clearTimeout(timerId);
  };
};

// this is the array for storing our final result
const result = [];

// this is function which will be passed as an argument in cancellable function
const fn = (x) => x * 5;

const args = [2],
  t = 20,
  cancelTimeMs = 50;

// Store the current time to measure how long it takes for the function to execute later
const start = performance.now();

//this is the arrow function which will be passed as an argument in cancellable function
const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

// this is the function which will be returned from cancellable and
// it will be stored in cancel variable
const cancel = cancellable(log, args, t);

// We use the maximum time so we print the result
// only after all scheduled timers have finished
const maxT = Math.max(t, cancelTimeMs);

// this is the setTimeout which will call the cancel function after
// cancelTimeMs milliseconds
setTimeout(cancel, cancelTimeMs);

// this is the setTimeout which will print the result after maxT + 15 milliseconds
// if we console.log immediately, the result array would be empty
setTimeout(() => {
  console.log(result);
}, maxT + 15);
