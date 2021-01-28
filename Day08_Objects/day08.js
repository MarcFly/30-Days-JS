// SCOPE
// Window
// When talking about a page/window on web pages, that is the scope
// Code that is included both globally and locally are at the window scope

// Global
// Relative to the file or to the block of scripts that make use of it
// As long as it is declared out of a function or any {}

// Local
// Inside a scope {}, 

// var vs let/const -> In modern syntax, let and const automatically create a new var in scope, so you can redefine variables in scope of a global one but you lose usage of the global one
// basically don't even use var again


// OBJECTS
// Javascript has the JavaScriptObjectNotation (JSON) format for generating classes
// basically a var initialized to {}
const object = {/*whatever you want*/}
const person = {
    firstName: 'Marc',
    lastName: 'Torres',
    age: '23',
    tech: [
        'C++',
        'GLSL',
        'JavaScript',
        'HTML',
        'CSS'
    ] //...
}

// After that you can access any part of the object as described initially
// If the field is not available?
console.log(person.age)
console.log(person.city) // Not Available = undefined
console.log(person['firstName']) // please don't even use that unless really practical for unknown fields retrieved somehow, or vars with spaces... why, follow the same guidelines for var creation

// Methods
// Objects can have own functions -> methods
const rectangle = {
    width: 2,
    length: 2,
    getArea: function() {
        return width*length
    },
    getPerimeter() {
        return  2*(width+length)
    }
}

// Objects can be modified afterwards, it is just the first to declare the structure

// DEFAULT OBJECT METHODS -> Called through Object global
// Assign -> Copies without modifying original
const copyPers = Object.assign({}, person)
Object.assign(copyPers, person) // Just use the syntax preferred
console.log(copyPers)

// Keys -> Get the fields available in an array of strings
const keys = Object.keys(person)
console.log(keys) // Very practical for using the object['key'] syntax

// Value -> get the array of values instead of the keys
const values = Object.values(person)
console.log(values)

// Entries -> gets both, an array of key:value pairs
const pairs = Object.entries(person)
console.log(pairs)

// hasOwnProperty -> check that an object has a key
console.log(person.hasOwnProperty('age'))
console.log(person.hasOwnProperty('bibidibabu'))