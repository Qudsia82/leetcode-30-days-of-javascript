function createHelloWorld(){
    return function(...args){
        return "Hello World";
    }
}

const fn = createHelloWorld();

console.log(fn());
//or
// console.log(fn("Qudsia",[],null))