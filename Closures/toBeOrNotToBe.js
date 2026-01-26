var expect = function (val) {
  function toBe(input) {
    if (val === input) return true;
    /*JavaScript has a built-in constructor called Error.This creates an Error 
    object with special properties: such as error message, the type/name (Error), 
    and a stack trace showing where the error occurred, which helps with debugging. */ 
    else
      throw new Error("Not Equal");
  }
  function notToBe(input) {
    if (val !== input) return true;
    else throw new Error("Equal");
  }
  return { toBe, notToBe }; //we are returning functions as objects
};

try {
  console.log(expect(5).toBe(5));
  console.log(expect(5).notToBe(5));
} catch (e) {
  console.error({ Error: e.message });
}

/* return ends a function normally and sends a value back, while throw ends a function
abnormally by raising an error that stops execution and must be caught. That’s why
assertion (a check that assumes something must be true, if it isn’t, the program throws 
an error and stops, signaling a bug or failed expectation) uses throw, not return.*/
