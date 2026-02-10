//this progrsm demonstrates how to make a function fail automatically
//if it takes too long to finish.

var timeLimit = function (fn, t) {
  // returning a new async function that wraps the original function
  return async function (...args) {
    // creating a promise that represents a timeout
    // this promise will reject after t milliseconds
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    //Promise.race runs multiple promises at the same time and gives the
    // result of the first one that finishes.
    return Promise.race([fn(...args), timeoutPromise]);
  };
};

const limited = timeLimit(
  (ms) => new Promise((res) => setTimeout(res, ms)),
  100,
);

// this call takes 150ms, which is longer than the 100ms limit
//the timeout promise wins, so it will throw an error
limited(150).catch(console.log); // "Time Limit Exceeded"

//this call takes only 50ms, which is within the time limit
// so the original function finishes first
limited(50).then(() => console.log("Finished")); // Finished
