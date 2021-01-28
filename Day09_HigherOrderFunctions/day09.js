// Higher order functions
// AKA - functions that take functions as parameters or return functions as value
//  function passed as parameters is called a callback (because function will call back to that)

// Callback
const square_callback = (n) => {return n**2}
function cube(sqr_callback, n) { return sqr_callback(n)*n}
console.log(cube(square_callback, 2))

// Returning function
const higher_order = (n) => {
    const dosmth = (m) => {
        return 2*n*3*m
    }
    return dosmth
}

console.log(higher_order(2)(3))
// higher order -> takes a parameter and returns a function
// dosmth ->takes a parameter and uses higher parameter to return an operation value
// To call higher order you have to pass higher_order(parameter)(dosmth_parameter)
// This can be nested even more

// ForEach in arrays
{
    let arr = new Array(20).fill(0)
    let add = 1
    arr.forEach(function(n,i){n+=add; add++; arr[i]+=add})
    console.log(arr,add)
}
// ForEach -> requires a callback to which it passes (item, index, array_var, this)
// only item is a necessary parameter for the callback function but is a pass by copy

// SETTING TIME

// setInterval(callback, time_ms) -> call a function every x ms
{
    setInterval(function(){console.log(Date.now())}, 10000)
}
// setTimeout(callback, time_ms) -> after some time, call a function once
{
    setTimeout(function(){console.log('You suck at cooking yeah you totally suck')}, 5000)
}

// FUNCTIONAL PROGRAMMING
// Modern Javascript has a lot of new builtin methods, callback based
// callback_function syntax is mostly independent as long as the effect is understood
// and ticks what each function requires (function(){}, ()=>(), ()=>{return}, ...)

// forEach(callback(item, *index, *array_var, *this)) -> iterate over array elements
// * are optional, but item is pass by copy value, can't be modified externally (only internal methods)
// forEach returns the original array without externa modifications even if you ask to return specific values
{
    let arr = new Array(20).fill(0)
    let add = 1
    let arr2 = arr.forEach(function(n,i){
        n+=add; 
        add++; 
        arr[i]+=add;
        return n}) // n is not actually returned, the original value even if its changed
    console.log(arr,add, arr2)
}

// map(callback(item, *index, *array_var, *this)) -> iterates and passes item by copy but return modified if so
// original arrays is not directly modified, only by own methods
{
    let arr = new Array(20).fill(0)
    let add = 1
    let arr2 = arr.map(function(n,i){
        return n+=add; // Here n is actually returne modified, but arr is not
        })
    console.log(arr,add, arr2)
}

// filter((item, *index, *array_var, *this) => (condition check))
// The callback must return or have a condition statement that will be used to check things with
// It returns a new array with the non-filtered values
{
    let arr = [1,2,3,4,5,6]
    let arr2 = arr.filter((n) => ((n%2) > 0))
    console.log(arr,arr2)
    arr2 = arr.filter(function(n){ return (n%2) > 0}) // Works because has return value
    console.log(arr,arr2)
}



// reduce((accummulator, current,) => {operations; return value}, *initial_value)
// Accumulator = return value / current is the item, initial is index for the initial
// basically accumulator = return value, at each step
{
    let arr = [1,2,3,4,5,6]
    let ret  = arr.reduce((n, cur) => n+cur)
    console.log(arr, ret)
    ret = arr.reduce(function(n,cur) { return n+cur})
    console.log(ret)
}

// every((item) => (comparison)) -> check that every item is similar to user-specified condition
// MUST have a boolean return and returns boolean
{
    const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
    const areAllStr = names.every((name) => typeof name === 'string')

    console.log(areAllStr)
}

// find((n) => (condition)) -> returns the first value that satisfies the condition
// if not find, returns undefined
{
    const ages = [24, 22, 25, 32, 35, 18]
    const age = ages.find((age) => age < 20)

    console.log(age)
}

// findIndex((n) => (condition)) -> returns index of first value that satisfies condition
// if not found, returns -1
{
    const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
    const ages = [24, 22, 25, 32, 35, 18]

    const result = names.findIndex((name) => name.length > 7)
    console.log(result) // 0

    const age = ages.findIndex((age) => age < 20)
    console.log(age) // 5
}

// some((n) => (condition)) -> similar to every, instead if at least one satisfies condition it returns true
{
    const bools = [true, false, true, true]

    const areSomeTrue = bools.some((b) => {
    return b === false
    })

    console.log(areSomeTrue) //true
}

// sort() -> sorts the values as strings by default in ascending order
{
    const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
    console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
}

// other sorts
// you can pass functions to sort((curr, next) => (operation))
// Example, to order numbers small to big the function returns a value depending on the size
{
    const numbers = [9.81, 3.14, 100, 37]
    // Using sort method to sort number items provide a wrong result. see below
    console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
    numbers.sort(function (a, b) {
        return a - b
    })
    console.log(numbers) // [3.14, 9.81, 37, 100]

    numbers.sort(function (a, b) {
        return b - a
    })
    console.log(numbers) //[100, 37, 9.81, 3.14]

    // Will have to do lots of learnign on this sorts...
}

// object arrays is done by comparing keys usually
// What is importan on sorting functions is that bigger returns >0 and smaller <0