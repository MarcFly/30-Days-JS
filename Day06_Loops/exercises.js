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

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// LEVEL 1
// 1
for(let i = 1; i < 11; ++i)
    console.log(i)
{
    let i = 1
    while(i  < 11)
    {
        console.log(i)
        ++i
    }
}
{
    let i = 0
    do
    {
        ++i
        console.log(i)
    } while(i < 10)
}

// 2
for(let i = 10; i > 0; --i)
    console.log(i)
{
    let i = 10
    while(i > 0)
    {
        console.log(i)
        --i
    }
}
{
    let i = 10
    do
    {
        console.log(i)
        --i        
    } while(i > 0)
}

// 3
//let n = Number(prompt('Put number to iterate to:'))
//n = (n != NaN || n != undefined) ? n : 0
//for(let i = 0; i <= n; ++i)
//    console.log(i)

// 4
for(let i = 1; i <= 7; ++i)
    console.log(Array(i).fill('#').join(''))

// 5
for(let i = 0; i <= 10; ++i)
    console.log(`${i} x ${i} = ${i**2}`)

// 6
console.log("i i^2 i^3")
for(let i = 0;i <=10;++i)
    console.log(`${i} ${i**2} ${i**3}`)

// 79

for(let i = 0; i <= 100; ++i)
    if(!(i%2)) console.log(i)

// 8 
for(let i = 0; i <= 100; ++i)
    if((i%2)) console.log(i)

// 9 Bad
for(let i = 0; i <= 100; ++i)
{
    let n_prime = false
    for(let j = i-1; j > 1;--j)
        if(n_prime = !(i%j)) break
    if(!n_prime) console.log(i)
}
// for prime checking algorithms: https://www.quora.com/Whats-the-best-algorithm-to-check-if-a-number-is-prime

// 10
let sum = 0
for(let i = 0; i < 100; ++i, sum+=i) {}
{}
console.log(sum)
sum = 0
for(let i = 0; i <= 100; ++i) {sum+=i}
console.log(sum)

// 11
let sum_even = 0
let sum_odds = 0
for(let i = 0; i <= 100;++i)
{
    if(i%2) sum_odds+=i
    else sum_even+=i
}
console.log(sum_odds, sum_even)

// 12
// do the same
console.log([sum_odds,sum_even])

// 13
let ex_arr = Array(5).fill(Math.random()) // fill method does not work, computes 1 time and fills with same value instead of computing each fill
console.log(ex_arr)

ex_arr = Array(5)
for(let i = 0; i < ex_arr.length; ++i)
    ex_arr[i] = Math.random()
console.log(ex_arr)

// 14
ex_arr = Array(5)
for(let i = 0; i < ex_arr.length; ++i)
{
    let v = Math.random
    while(ex_arr.includes(v)){ v = Math.random()}
    ex_arr[i] = v
}
console.log(ex_arr)

// 15
ex_arr = Array(6)
for(let i = 0; i < ex_arr.length; ++i)
    ex_arr[i] = String.fromCharCode(parseInt(Math.random()*(122-33) +33))
console.log(ex_arr.join(''))

// LEVEL 2
// 1
//ex_arr = Array(Number(prompt('Number of characters')))
//for(let i = 0; i < ex_arr.length; ++i)
//    ex_arr[i] = String.fromCharCode(parseInt(Math.random()*(122-33) +33))
//console.log(ex_arr.join(''))

// 2
ex_arr = Array(6)
for(let i = 0; i < ex_arr.length; ++i)
{
    let v = Math.ceil(Math.random()*14)
    ex_arr[i] = (v < 10) ? v : String.fromCharCode(97+(v-10))
}
console.log(`#${ex_arr.join('')}`)

// 3
console.log(`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`)

// 4
let cap_arr = countries.join().toUpperCase().split(',')
console.log(cap_arr)

// 5
let l_arr = new Array()
for(let i = 0; i < cap_arr.length; ++i)
    l_arr.push(cap_arr[i].length)
console.log(l_arr)

// 6
let arr_arr = new Array()
for(let i = 0; i < cap_arr.length; ++i)
{
    let push_arr = new Array()
    push_arr.push(cap_arr[i])
    push_arr.push(cap_arr[i].slice(0, 3))
    push_arr.push(cap_arr[i].length)
    arr_arr.push(push_arr)
}
console.log(arr_arr)

// 7
// splice destroys original array (bad) but
let land = countries.toString().match(/\w+land/gi)
console.log(land)

// 8
let ia = countries.toString().match(/\w+ia/gi) // This does not check properly the end...
console.log(ia)
// with a for, you could check word per word and push it

// 9
let longest = ''
for(let i = 0;i < ia.length; ++i)
{
    longest = (longest.length < ia[i].length) ? ia[i] : longest
}
console.log(longest)

// 10
console.log(countries.join(',').match(/([A-Z]|[a-z]){5}$/gi)) // I should try a bit more with regex, seem good
let long_count = new Array()
for(let i = 0; i < countries.length; ++i)
    if(countries[i].length == 5) long_count.push(countries[i])
console.log(long_count)

// 11
longest = ''
for(let i = 0;i < webTechs.length; ++i)
{
    longest = (longest.length < webTechs[i].length) ? webTechs[i] : longest
}
console.log(longest)

// 12
let web_l = new Array()
for(let i = 0;i < webTechs.length; ++i)
{
    let push = new Array()
    push.push(webTechs[i])
    push.push(webTechs[i].length)
    web_l.push(push)
}
console.log(web_l)

// 13
let mern = new Array()
for(let i = 0; i < mernStack.length; ++i)
    mern.push(mernStack[i].slice(0,1))
console.log(mern.join(''))

// 14
for(const it of webTechs)
    console.log(it)

// 15
let fruits = ['banana', 'orange', 'mango', 'lemon']
for(let i = 0; i < Math.ceil(fruits.length/2); ++i)
{
    let int = fruits[i]
    fruits[i] = fruits[fruits.length-1-i]
    fruits[fruits.length-1-i] = int
}
console.log(fruits)

// 16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

for(const it of fullStack)
  for(const it2 of it)
    console.log(it2)


// LEVEL 3
// 1
let copy_countries = countries.slice(0)
console.log(copy_countries)

// 2
copy_countries.reverse()
console.log(copy_countries, countries)

// 3
webTechs.sort()
mernStack.sort()

// 4
let land = countries.toString().match(/\w+land/gi)
console.log(land)