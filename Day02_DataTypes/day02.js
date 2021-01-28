let word = "Javascript"
console.log(word)
// Go into value 0 of string word
word[0] = 'Y'
console.log(word)
// Strings are strings, not array of characters

// Comparison of Primitive Data Types
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false

// Arrays
let nums = [1,2,3]
console.log(typeof nums, nums, nums[0], nums[1], nums[2], nums[3])
nums[0] = 10
console.log(nums)

let nums2 = [10,2,3]
console.log(nums == nums2) // They have the same values

// OBJECTS
let userOne = {
    name:'Asabeneh',
    role:'teaching',
    country:'Finland'
}
    
let userTwo = {
    name:'Asabeneh',
    role:'teaching',
    country:'Finland'
}
    
console.log(userOne == userTwo) // false

nums2 = nums
userTwo = userOne
console.log(userOne == userTwo, nums == nums2)
// Now the 2nd arrays are referencing/pointing to first, they are the same
// because they reference/point to a same data structure