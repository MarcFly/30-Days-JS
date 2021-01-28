// FUNCTIONS
function functionName(/*arguments go here*/)
{
    // Code goes here
}

functionName() // Call the function and execute
// Basically a variable that stores a part odf code to be executed according to some parameters
// Can return value

function returnSmth()
{
    return 'something'
}

console.log(returnSmth())

// Parameter passing

function sum(a, b)
{
    return Number(a)+Number(b)
}

console.log(sum(2,3))
console.log(sum()) // If no parameters passed, they are undefined, thus will be giving errors, but don't have to say = undefined/null... like in c, can check undefined directly

// Parameters are infinite, declare as many as needed, can't pass more i think
console.log(sum(2,3,4)) // false, you can pass more but nothing happens

// Not known number of arguments
function args()
{
    console.log(arguments)
}

args(1,2,3,4,5,6,7,8,9,0)
// arguments -> keyword that becomes an array of all arguments passed


// Arrow functions : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// Normally arrow functions are local, not scope bound and have no arguments (among other things)
// can have arguments in arrow function if:
const summAllNums = (...args) => {console.log(args)}
// Arrow functions are basically lambdas (line defined functions that can be stored in a variable)
// All functions can be stored in variables (callback)

// ANONYMOUS functions == callbacks
let fun = function(){console.log('This is a javascript callback')}
fun()

// Expression == ANONYMOUS functions basically, just a fancier way of calling an anonyous function that does something useful
let square = function(n){return n**2} 
console.log(square(2))

// Usually, anonymous functions and expression or anonymous functions, are declared as const, that makes then be constant throughout the whole code
// Better, unless you actually want to have changing callbacks (like input for example...)

// Self Invoking functions
let val = (function(n){return n*n})(2)

// This syntax allows a declaration of a 'lambda' but after you declare the arguments to be used in the defined function
// The function sinstead of beign saved and it will be called, having the result stored in the initialized variable if there is

// Arrow functions
// Another way of writing functions with teh following limitations:
// don't use keyword function, can't use yield, cannot be used as constructors, should not be used with call,apply and bind,
// should not be methods of an object/class because they can't access this/super (what is super) -> basically a pointer to a parent object but only functions
// syntax : (arguments) => {code}

const printFullName = (firstName, lastName) =>`${firstName} ${lastName}`
console.log(printFullName('Marc', 'Torres'))

// Functions can have default parameters (same as C/C++), (arg = default, arg2 = default2,...)
// it makes almost no sense to have default on first values and not last (you send args in same order...) -> (arg1 = 2, arg2)...
function test(arg = 2, arg2 = 3)
{
    console.log(arg+arg2)
}

test()
const fName = (arg1 = 2, arg2 = 3) => {console.log(arg1+arg2)}
console.log(fName()) // returns first a log where it was defined (duh, its a function), then undefined because it does not have return value

// REMEMBER, LOGS INSIDE FUNCTIONS RETURN THE LINE WHERE THE FUNCTION IS DEFINED, NOT CALLED!!!