// this program demonstrates how to repeatedly execute a function
// at fixed intervals and cancel the execution after a certain time.

var cancellable = function (fn, args, t) {
  // calling the function immediately once before starting the interval
  fn(...args);

  // setInterval schedules fn(...args) to run repeatedly
  // every t milliseconds and returns an interval ID
  const intervalId = setInterval(() => fn(...args), t);

  // this return statement executes immediately as it is synchronous code
  // It returns a cancel function that can stop the interval later
  return function cancel() {

    // here the concept of closure is used as intervalId is not defined in this
    // function but it is defined in the parent function and it is accessible here
    clearInterval(intervalId);
  };
};

// this is the array for storing our final result
const result = [];

// this is function which will be passed as an argument in cancellable function
const fn = (x) => x * 5;

const args = [2],
  t = 15,
  cancelTimeMs = 190;

// storing the current time to measure how long it takes for the function to execute later
const start = performance.now();

//this is the arrow function which will be passed as an argument in cancellable function
const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

// this is the function which will be returned from cancellable and
// it will be stored in cancel variable
const cancel = cancellable(log, args, t);

// this is the setTimeout which will call the cancel function after
// cancelTimeMs milliseconds
setTimeout(cancel, cancelTimeMs);

// this is the setTimeout which will print the result after cancelTimeMs + t + 15 milliseconds
// if we console.log immediately, the result array would be empty
setTimeout(
  () => {
    console.log(result);
  },
  cancelTimeMs + t + 15,
);
