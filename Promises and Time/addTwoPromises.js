// A Promise in javascript is an object that represents the eventual
// completion or failure of an asynchronous operation.

// The async keyword makes a function always return a Promise,
// even if it appears to return a normal value.

// JavaScript is single-threaded and synchronous by default,
// but it supports asynchronous operations using callbacks, promises, and async/await.

// await pauses only the execution of the async function
// until the promise resolves, and then returns its resolved value.

// function for adding two promises... kinda hard-coded for two inputs
var addTwoPromises = async function (promise1, promise2) {
  // These lines would also work but they will run sequentially
  // let pro1 = await promise1;
  // let pro2 = await promise2;

  //------------------------------------ OR ------------------------------------

  // Promise.all runs multiple promises in parallel and waits until all of them resolve.
  // It returns an array of resolved values in the same order.
  let [pro1, pro2] = await Promise.all([promise1, promise2]);

  // Returning a value from an async function automatically wraps it inside a Promise
  return pro1 + pro2; // something like this -> Promise.resolve(pro1 + pro2);
};

// Function for adding multiple promises
// This is a more general or dynamic function using rest parameters
// var addMultiplePromises = async function (...args) {
//   const arr = await Promise.all(args);

//   // reduce is used to sum them
//   return arr.reduce((sum, val) => sum + val, 0);
// };

// Promises that resolve after some delay
var promise1 = new Promise((resolve) => setTimeout(() => resolve(5), 20));
var promise2 = new Promise((resolve) => setTimeout(() => resolve(7), 60));
// var promise3 = new Promise((resolve) => setTimeout(() => resolve(9), 60));

// Using await instead of .then
var twoPromises = await addTwoPromises(promise1, promise2);
console.log(twoPromises); // 12

// Using .then to handle the returned Promise
// addMultiplePromises(promise1, promise2, promise3).then(console.log); // 21
