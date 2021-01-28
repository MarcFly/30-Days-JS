const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// LEVEL 1
// 1
// foreach iterates over items, allows change through internal methods, returns the same array and does not care about return values
// map iterates over items, allows change through internal methods, returns array constructed of return values per function
// filter iterates over items, compares to a user condition with a boolean return, returns array constructed of truthy returning values
// reduce expects a return value to be declared, to which you operate over and will equal the return value (returns SINGLE VALUE)

// 2
const fEach_cb = function(item, ind, arr) { console.log(item, ind)}
const map_cb = function(item, ind, arr) {console.log(item, ind); return item++}
const filter_cb = (item) => (typeof(item) == String)
const reduce_cb = (acc, item) => (acc+item)

// 3
countries.forEach(fEach_cb)
// 4
names.forEach(fEach_cb)
// 5
numbers.forEach(fEach_cb)
// 6
console.log(countries.map((item) => item.toUpperCase()), countries)
// 7
console.log(countries.map((item)=> item.length), countries)
// 8
console.log(numbers.map((item)=>item**2), numbers)
// 9
console.log(names.map((item) => item.toUpperCase()), names)
// 10
console.log(products.map((item) => `${item.product} costs ${item.price}`), products)

// 11
console.log(countries.filter((item)=>!item.toUpperCase().includes('LAND')), countries)
// 12
console.log(countries.filter((item)=>!(item.length == 6)), countries)
// 13
console.log(countries.filter((item)=>!(item.length >= 6)), countries)
// 14
console.log(countries.filter((item)=>!(item.startsWith('E'))), countries)
console.log(countries.filter((item)=>!(item.match(/^E/))), countries) // Circomflexe is starts with in regex
//15
console.log(products.filter((item) => (
        typeof (item.price) == typeof(0) && 
        item.price != undefined && 
        item.price != null && 
        item.price > 0))
    , products)

// 16
function getStringLists(arr) {
    return arr.filter((item) => typeof(item) == typeof(''))
}

// 17
console.log(numbers.reduce((v, it) => v+it), numbers)

// 18
let sum = 0
console.log(`Estonia, ${countries.reduce((v, it, ind, arr) => {
    if(ind == arr.length-1)
        v+=' and'
    else
        v+=','
    v += (' '+it)
    if(ind == arr.length-1)
        v+= ' are north European countries.'
    return v
})}`)

// 19
// every checks that all items match the condition
// some will return true after just one item matches the condition

// 20
console.log(names.some((it)=>it.length > 7), names)
// 21
console.log(countries.every((it)=>it.match(/land/)), countries)
// 23
// find returns value if found, undefined if not
// findIndex returns index, -1 if not found

// 24
console.log(countries[countries.findIndex((it)=>(it.length == 6))], countries)
// 25
console.log(countries.findIndex((it)=>(it == 'Norway')))
// 26
console.log(countries.findIndex((it)=>(it == 'Russia')))