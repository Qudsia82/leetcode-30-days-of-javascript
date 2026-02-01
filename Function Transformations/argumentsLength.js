var argumentsLength = function (...args) {
  //The ...args is the rest parameter.
  //It collects all arguments passed to the function into a single array called args.
  //args.length counts how many top-level arguments were passed, not what’s inside them.
  // If we pass an array as a single argument, it counts as 1
  // To count each element inside an array, we need to spread it as function(...myArray)

  return args.length;
};

console.log(argumentsLength(1, {}, null)); //3 (three top-level arguments)
console.log(argumentsLength([1, 2, 3])) ; //1 (array counted as one argument)
console.log(argumentsLength(...[1, 2, 3])) ; // 3 (spread counts each element separately)
