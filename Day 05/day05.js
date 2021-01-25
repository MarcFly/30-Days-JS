// Arrays
const arr = new Array() // Baisic initialization of an array
let var_arr = new Array() // any difference besides const?
var_arr = [] // Other initializer -> recommended for empty lists

var_arr = [1,2,3,4,5]
console.log(var_arr)
var_arr = ['pene', 'polla', 'nabo', 'miembro', 'viril']
console.log(var_arr)
var_arr = [1,'23',5.43,"arriba"]
console.log(var_arr)

// Remember objects, constructed by class or base {} constructor (we'll see about objects later properly)
let obj = {country:'Finland', city:'Helsinky'}
var_arr = [1,"sipaohgd", 4.234, obj]
console.log(var_arr)

// Arrays have propert .length
// Can be created through the split/match method of strings
var_arr = "JavaScript".split('')
console.log(var_arr)

var_arr = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'.match(/\w+/g) // \w+ searchs for matching words, does not work for split
console.log(var_arr)

// Arrays can be accessed by index (same as C/C++ arr[index])
console.log(var_arr[3])
var_arr[3] = 'kys'
console.log(var_arr[3])

// Constructors
const arr2 = Array(20)
console.log(arr2)
// Fil;
const arr3 = Array(20).fill(0)
console.log(arr3)

// Can be concatenated
const arr4 = arr2.concat(arr3)
console.log(arr4)

// Find index of value (returns -1 if not found) (first instance of)
console.log(arr4.indexOf(-3), arr4.indexOf(0))

arr4.lastIndexOf(0) // last index of

arr4.includes(0) // returns true or false in trying to find a value

console.log(Array.isArray(arr4), Array.isArray("a0iuoiayh"), Array.isArray(113))

console.log(arr4.toString()) // Turns into string including a comma value to separate the items

console.log(arr4.join(' joins with '), arr4) // Turns into string with the value passed as joined (default comma)

console.log(arr4.slice(1,5), arr4) // Copies from position a to position b-1 (same as with the string method)

console.log(arr4.splice(0,5,1,2,3,4,5), arr4) // removes from position a to position b-1 and then puts there the elements put there

console.log(arr4.push('new item'), arr4) // push_back basically

console.log(arr4.pop(), arr4) // removes item from the end

console.log(arr4.shift(), arr4) // pop_front, remove item at beginning

console.log(arr4.unshift('a'), arr4) // push_front, add item at the beginning

console.log(arr4.reverse(), arr4) // reverses order of the array

console.log(arr4.sort(), arr4) // Orders in ascebding (Numbers > Strings (alphabetically) > Empty) NaN? Booleans?

var_arr = [arr2,arr3,arr4] // Array of arrays, non specific multidimensional array (3*(20,20,40)) in this case...
console.log(var_arr)