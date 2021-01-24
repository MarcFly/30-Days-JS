// Math. functionality in JS

const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log("round(PI) = ", Math.round(PI))                // 3 to round values to the nearest number

console.log("round(9.81) = ", Math.round(9.81))              // 10

console.log("floor(PI) = ", Math.floor(PI))                // 3 rounding down

console.log("ceil(PI) = ", Math.ceil(PI))                 // 4 rounding up

console.log("min(-5, 3, 20, 4, 5, 10) = ", Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log("random() = ", randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log("random * 11 = ", num)

//Absolute value
console.log("abs(-10) = ", Math.abs(-10))      // 10

//Square root
console.log("sqrt(100) = ", Math.sqrt(100))     // 10

console.log("sqrt(2) = ", Math.sqrt(2))       // 1.4142135623730951

// Power
console.log("pow(3,2) = ", Math.pow(3, 2))     // 9

console.log("Math Constant E = ", Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log("Log(2) = ", Math.log(2))        // 0.6931471805599453
console.log("Log(10) = ", Math.log(10))       // 2.302585092994046

// Trigonometry
console.log("sin(60) =", Math.sin(60))
console.log("cos(60) =", Math.cos(60))

// More Math. JS functionality
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math