// Booleans - true or false, easy
// "Truthy" Values
//      - Numbers > 0, Strings, true
// "Falsy"
//      - 0, 0n, null, undefined, NaN, false, "", '', ``(empty strings)
// Undefined = Variable not initialized
// NULL = null (no value but initialized)

// Operators:
// a = b : initializer
// a += b : a = a+b
// a -= b : a = a - b
// a *= b : a = a*b
// a /= b : a = a / b
// a %= b : a = a % b -> Module, aka, Residue of division
// a **= b : a = a ** b -> Exponential (in C/C++ is a^b)

let num1 = 4, num2 = 3
console.log(num1+num2, num1-num2, num1*num2, num1/num2, num1%num2, num1**num2)

const PI = Math.PI, gravity = 9.81, boilingPoint = 100
let radius = 100, mass = 72, temp = 37
console.log(PI*(radius**2), gravity*mass, `The boiling point of water is ${boilingPoint}oC.\nHuman body temperature is ${temp}.\nThe gravity of earth is ${gravity} m / (s^2)`)

// Comparison Operators
// a == b : Equivalent (Equal Value)
// a === b : Equal (Equal Value and Equal data type)
// a != b : Not Equal
// a > b : Greater than
// a < b : Smaller than
// a >= b : Greater OR Equal than
// a <= b : Smaller OR Equal than

console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

// For more comparisons go to: https://dorey.github.io/JavaScript-Equality-Table/

// Logical Operators
// a && b : a AND b
// a || b : a OR b

// Sometimes you can use | (single vert line to do or, like in regex)
// Ex: Exercise 3 lvl 3 Day 02
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/%|&|@|#|\$|;/gi, '')) // This works
console.log(sentence.replace(/%||&||@||#||\$||;/gi, '')) // This does not work
// That means that the implementation of an operator in general is || for javascript syntax, but some functions or libraries may use other differently!

// Ternary Operators aka single line ifs
// Commonly used in initialization or single action if/else statements
let isRaining = true
isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.')
isRaining = false

isRaining  ? console.log('You need a rain coat.')  : console.log('No need for a rain coat.')

// Operation Precedence - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// In general operation precedence is as expected
// parenthesis > logicals > exponential > mults = division > sum=substraction
// In such case (which makes no sense but to understand) : b * (a && (b**(2+3)))
// if(a == true) -> (2+3) -> b ** (2+3) -> if(a && (b**(2+3))) ? b* result : b * 0 (false)

// Window Methods

// alert(message)
// fast popup that displays a message
alert("Test Message!")
// They are bad, only if REALLY NECESSARY or for testing

// prompt("required text", "optional text")
// A text promp enter, function returns the value entered
let number = prompt("Enter NUMBER", "number goes here")
console.log(Number(number)) // A strin parsed to number returns NaN
console.log(number)

let string = prompt("Enter whatever", "enter here")
console.log(string)

// configm("required text")
// returns a bool if clicked ok or cancel
const val = confirm("Are you sure you don't want to die?")


// Date Object
// To get current date and things you require a date object
// There are lot of useful functions for GETting info about date...
const now = new Date() // You can call Date directly for all functions (is it better or not?)
console.log(now)
console.log(now.getFullYear())
console.log(now.getMonth()) // January = 0, December = 11
console.log(now.getDate())
console.log(now.getDay()) // Day of the week USA style (sunday 0 - saturday 6)
console.log(now.getHours()) // 0 - 23h (full day clock)
console.log(now.getMinutes()) // 0 - 59
console.log(now.getSeconds())
console.log(now.getTime(), Date.now()) // Unix Time, milliseconds since January 1, 1970


