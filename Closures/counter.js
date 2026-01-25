// Version 1

var createCounter = (n) => () => n++;

const counter = createCounter(-2);
console.log(counter());
console.log(counter());
console.log(counter());

// Or
// Version 2

// const counter = createCounter(10);
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function createCounter (n){
//     return function(){
//         return n++;

//     }

// }


/*The difference is that the function declaration version is fully hoisted,
while the arrow function stored in a variable is NOT. */

