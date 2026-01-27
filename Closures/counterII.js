// This program uses a closure to create a private counter.
// The variable `count` is not accessible directly and can only be modified
// using increment, decrement, and reset functions.
// Pre-increment (++count) and pre-decrement (--count) are used so the
// updated value is returned immediately, ensuring predictable counter behavior.

function createCounter(init){
    let count = init;
    function increment(){
        return ++count;
    }
    function reset(){
        return count = init;
    }
    function decrement(){
        return --count;
    }
    return {increment,reset,decrement}
}

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement())

//Output: 6 5 4