// this compose function will take an array of functions and will return a new function

var compose = function (functions) {
  return function (x) {
    // for(i=functions.length-1; i>=0; i--){
    //     x= functions[i](x)
    // }
    // return x;
    //---------------------------------or-----------------------------------
    
    /*reduceRight takes an initial value x and applies each function in the functions 
    array from right to left, passing the result of one function into the next, 
    and finally returns the computed value. */
    return functions.reduceRight((val, fn) => fn(val), x);
  };
};

const fn1 = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);

const fn2 = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);

const fn3 = compose([]);

console.log(fn1(4));

console.log(fn2(1));

console.log(fn3(42));
