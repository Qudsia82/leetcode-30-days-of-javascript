/*this map function takes an array and a callback function as input, then loops through
 each element of the array one by one. For every element, it calls the callback
 function and passes the current element and its index to it. Whatever value the 
 callback returns is collected into a new array. After all elements have been processed,
 the function returns this new array, which contains the transformed results without
 modifying the original array. */

var map = function (arr, fn) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }
  return newArr;
};

const arr = [1, 2, 3];
const plusOne = map(arr, function (element) {
  return element + 1;
});

const plusI = map(arr, function (element, i) {
  return element + i;
});

const constant = map(arr, function () {
  return 55;
});

console.log(plusOne);
console.log(plusI);
console.log(constant);
