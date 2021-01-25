const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

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

// 14
