// The Event Loop acts like a traffic controller for JavaScript.
// It constantly checks two things:
// 1) The Call Stack: what JavaScript is executing right now
// 2) The Task Queues: async work waiting to run (Microtasks & Macrotasks)
// Because JavaScript is single-threaded (one task at a time),
// the Event Loop enables non-blocking async behavior without freezing the program.

async function sleep(millis){

    // setTimeout is handed off to the Node.js APIs, not executed by JavaScript itself.
    // JavaScript does not wait for the timer to finish.
    await new Promise((res, rej) => {
        setTimeout(() => res("Done"), millis)
    })

    // await pauses only this async function.
    // The main thread and rest of the program continue running.
}

let t = Date.now();

// Calling sleep(1) immediately starts execution.
// The function runs until it reaches await, then:
// pauses its own execution
// returns a pending Promise to the main script
sleep(1).then(() => {
    // This .then() callback is scheduled as a Microtask.
    // It runs after the Promise resolves
    // and once the Call Stack becomes empty.
    console.log(Date.now() - t)
})

// Since sleep() is non-blocking, JavaScript does not wait.
// The Call Stack is free, so this line executes immediately.
console.log("first")

// While "first" is logged, the timer counts down in the background.
// Once the timer finishes:
// - the Promise resolves
// - the .then() callback enters the Microtask Queue
// - the Event Loop executes it when the Call Stack is empty.
