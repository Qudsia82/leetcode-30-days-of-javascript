/*filter is for selecting elements, not transforming them. The callback function passed 
to filter is only meant to return a truthy or falsy value that decides whether an 
element should be kept, and the element pushed into the result must always be the 
original array value, not the callback’s return. Returning expressions like element + 1
may work because they’re truthy, but they’re semantically wrong and exist mainly as 
test traps. */

var filter = function (arr, fn) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

let arr = [10, 40, 40];

var greaterThanTen = filter(arr, function (element) {
  return element > 10;
});

var firstIndex = filter(arr, function (element, i) {
  return i == 0;
});

var plusOne = filter(arr, function (element) {
  return element + 1;
});

console.log(greaterThanTen);
console.log(firstIndex);
console.log(plusOne);

//filter decides if an element stays, map decides what an element becomes.
