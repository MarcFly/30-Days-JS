let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

// I really don't like back ticks
// Single Quote can be used to create string in quotes inside string

let stringInString = "String'string'" +' '+ 'String"string"'
console.log(stringInString)
// Depends on what is needed, also strings can be concatenated with +

console.log(quote+job)

// For multiline Strings:
const loremIpsum = "Lorem Ipsum \
                    However it is supposed to continue \
                    I really don't know it by heart"
console.log(loremIpsum)
// The backslash is used to define newline
// There are special case characters
// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

// Strings can be templated with variables/expressions
// IT IS 100% necessary to declare the string with `stinrg` (backticks)
let a = 2
let b = 4
let templated = `Sum of ${a} and ${b} is ${a+b}`
console.log(templated)

// Strings have handy methods
// length, color, char at...

// String characters can be read with array notation, but not changed
let firstLetter = js[0]

console.log(firstLetter)           // J

let secondLetter = js[1]       // a
let thirdLetter = js[2]
let lastLetter = js[9]

console.log(lastLetter)            // t

let lastIndex = js.length - 1

console.log(lastIndex)  // 9
console.log(js[lastIndex])    // t

// toUpperCase (UPPERCASE the string)
console.log(js.toUpperCase())     // JAVASCRIPT

console.log(firstName.toUpperCase())  // ASABENEH

console.log(country.toUpperCase())    // FINLAND

// toLowerCase (lowercase the string)
console.log(js.toLowerCase())     // javascript

console.log(firstName.toLowerCase())  // asabeneh

console.log(country.toLowerCase())   // finland

// Substr - Returns a string that starts at x, and has y more characters
console.log(js.substr(4,6))    // Script
console.log(js)
console.log(country.substr(3, 4))   // land
console.log(country)

// Substring gets a string that starts at x and goes until y value
// if y not specified, until the end
// Can go backwards, but string is as expected, not written backwards
console.log(js.substring(0,4))     // Java
console.log(js.substring(4,10))    // Script
console.log(js.substring(4))       // Script
console.log(js.substring(4,0))

console.log(country.substring(0, 3))   // Fin
console.log(country.substring(3, 7))   // land
console.log(country.substring(3))      // land

// Split, splits the string at specific character described
string = "30,Days of, Javascript"
console.log(string.split()) // returns array of chars
console.log(string.split(' ')) // array of strings every ' '
console.log(string.split('')) // Array of char (per character)
console.log(string.split(',')) // Array at every comma

// Trim removes the spaces at the end and start
string = "   30 Days of javascript   "
console.log(string.trim())

// Includes searches if a substring is found, case SENSITIVE
console.log(string.includes("Days"))
console.log(string.includes("days"))

// Replace, searches for a substring and replaces it with the provided
console.log(string.replace("script", " sucks"))

// charAt is equal to array notation
string = "30 Days of javascript"
console.log(string.charAt(0), string[0])

// charCodeAt returns ascii number of a character at number
console.log(string.charCodeAt(0))

// index of finds a substring and returns the first found position, 
// -1 if not found, Case Sensitive
console.log(string.indexOf("Days"))
console.log(string.indexOf("days"))

// lastIndexOf is similar to indexOf, but if the string is found multiple times
// returns the last occurrence
let loveStr = 'love JavaScript world. If you do not love JavaScript what else can you love. in the world'
console.log(loveStr)
console.log("IndexOf", loveStr.indexOf("love"))
console.log("lastIndexOf", loveStr.lastIndexOf('love'))

// StartsWith checks if a string starts with ...
console.log(loveStr.startsWith('Love'))   // false
console.log(loveStr.startsWith('love'))   // true
console.log(loveStr.startsWith('world'))  // false

// EndsWith checks if a string ends with...
console.log(loveStr.endsWith('world'))         // true
console.log(loveStr.endsWith('love'))          // false
console.log(loveStr.endsWith('in the world')) // true

// search takes a substring as argument and returns index of first match
// can search regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7
// g = search in the text provided in the regular expression
// i = means is case insensitive
// Does this mean that everyfunction has specific regular expression patters?

// match  takes substring or regex, and returns array of matches
// If specified some regex, it will do different things
string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))
let pattern = /love/gi
console.log(string.match(pattern))   // ["love", "love", "love"]

// Regexp example with numbers
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/
// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.
console.log(txt.match(regEx))  // Returns only first value found (not array of chars!)
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

// repeat the string a number of times...
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove