// LEVEL 1
// 1
let arr = []

// 2
arr = Array(6)

// 3
console.log(arr.length)

// 4
arr = [1,2,3,4,5]
console.log(arr[0], arr[Math.floor(arr.length/2)], arr[arr.length-1])

// 5
let mixDataTypes = [1,'2', 3.0, {val:5}]
console.log(mixDataTypes)

// 6
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7
console.log(itCompanies)

// 8
console.log(itCompanies.length)

// 9
console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length/2)], itCompanies[itCompanies.length-1])

// 10
console.log(itCompanies)

// 11
//itCompanies = itCompanies.toString().toUpperCase().slice(',') // slice returns a string
itCompanies = itCompanies.toString().toUpperCase().split(',') 
console.log(itCompanies)

// 12
console.log(`${itCompanies.splice(0,itCompanies.length-2)} and ${itCompanies[itCompanies.length-1]} are big IT companies.`)
itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// Splice does break the array, so it gets fuckywucky
// Try another way

// 13 
let test_company = "FACEBOOK"
let ind = itCompanies.indexOf('IBM')
console.log(`${(ind >= 0) ? itCompanies[ind] : 'not found'}`)

// 14 ?? I can't without loops...
let tests = itCompanies.toString().match(/\w+o+\w+/gi)
console.log(tests)
console.log(itCompanies)

// 15
console.log(itCompanies.sort())

// 16
console.log(itCompanies.reverse())

// 17
console.log(itCompanies.slice(0,3))

// 18
itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies.slice(itCompanies.length-4, itCompanies.length-1))

// 19 
itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//itCompanies.splice(Math.floor(itCompanies.length/2), itCompanies.length%2)
console.log(itCompanies.slice(Math.floor(itCompanies.length/2), ((itCompanies.length%2) ? Math.floor(itCompanies.length/2)+1 : Math.floor(itCompanies.length/2)+2)))
console.log(itCompanies)

// 20
itCompanies.shift()

// 21
console.log(itCompanies.splice(Math.floor(itCompanies.length/2), (itCompanies.length%2)?1:2))
console.log(itCompanies)

// 22
console.log(itCompanies.pop())

// 23
itCompanies.splice(0, itCompanies.length)
// itCompanies.splice('') // itCompanies.splice(/\w+/gi) // ... multiple ways to delete all easily
console.log(itCompanies)