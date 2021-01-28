// LEVEL 2 Exercises
// 1
console.log(countries, webTechs)

// 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.replace(/\.|\,/gi, '').match(/\w+/gi).length) // Punctuation have to have the \ before them (some specific characters .,$) more will appear for sure

// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(!shoppingCart.includes('Meat')) shoppingCart.unshift('Meat')
if(!shoppingCart.includes('Sugar')) shoppingCart.push('Sugar')
//if(Boolean(prompt('Alergic to honey?'))) shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)

// 4
let id = countries.indexOf('Ethiopia')
if(id > 0) console.log(countries[id].toString().toUpperCase())
else countries.push('Ethiopia')

// 5
id = webTechs.indexOf('Sass')
if(id > 0) console.log('Sass is a CSS preprocess')
else
{
    webTechs.push('Sass')
    console.log(webTechs)
}

// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)

console.log(fullStack)


// LEVEL 3
// 1.1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages[0], ages[ages.length-1])

// 1.2
let v = [ages[Math.floor(ages.length/2)]]
if(!(ages.length%2))
{
    v.push(ages[Math.floor(ages.length/2)-1])
    v =(v[0] + v[1])/2
} 
console.log(v)

// 1.3 // This is not explained...
let avg = ages.reduce(function(curr, prev){return curr+prev}) / ages.length // Reduce function, does a recursive operation based on current iterator and previous one
console.log(avg)

// 1.4
console.log(Math.abs(ages[0] - ages[ages.length-1]))
// 1.5
console.log(Math.abs(avg-ages[0]), Math.abs(avg - ages[ages.length-1]))

// 2.1
let sliced = countries.slice(0,10)
console.log(sliced)

// 2.2
let middle_arr = [countries[Math.floor(countries.length/2)]]
if(!(countries.length%2)) middle_arr.push(countries[Math.floor(countries.length/2)-1])
console.log(middle_arr)

// 2.3
let first = countries.splice(0, Math.floor((countries.length-1)/2)+1)
console.log(first, countries)