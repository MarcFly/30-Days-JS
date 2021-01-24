// LEVEL 1

let firstName = "Marc"
let lastName = "Torres"
let country = "Spain"
let age = 23
let isMarried = false
let year = 2021
//1
console.log(typeof firstName, typeof lastName, typeof country, typeof age, typeof isMarried, typeof year)
//2
console.log(typeof '10' === 10)
//3
console.log(parseInt('9.8') == 10)

// 4
console.log(year > age, typeof firstName == typeof lastName, !isMarried)
console.log(year == firstName, isMarried, typeof age == typeof '10')

// 5 - if the log is false, assumption was wrong
console.log((4 > 3) == true) // number 4 is bigger than 3
console.log((4 >= 3) == true) // nnumber 4 is bigger or equal than 3
console.log((4 < 3) == false) // number 4 is bigger than 3, not smaller
console.log((4 <= 3) == false) // number 4 is bigger than 3, not small or equal
console.log((4 == 4) == true) //  number 4 is equal value than number 4
console.log((4===4) == true) // number 4 is equal value and container than number 4
console.log((4 != 4) == false) // number 4 is equel value than type 4, not different
console.log((4!==4) == false) // number 4 is equal in value and container than number 4, not different
console.log((4!='4') == false)//  number 4 value is equal to string '4' value, not different
console.log((4!=='4') == true) // number 4 container/type is different than string '4'
console.log((4 == '4') == true) // number 4 is same value than string '4'
console.log((4 === '4') == false) // number 4 is different container/type than '4'
console.log("python".length < "jargon".length) //got the length easy, they are the same, then any size comparator not equal will do for falsy statement

// 6 - 

console.log((4 > 3 && 10 < 12) == true)
console.log((4 > 3 && 10 > 12) == false)
console.log((4 > 3 || 10 < 12) == true)
console.log((4 > 3 || 10 > 12) == true)
console.log(!(4 > 3) == false)
console.log(!(4 < 3) == true)
console.log(!(false) == true)
console.log(!(4 > 3 && 10 < 12) == false)
console.log(!(4 > 3 && 10 > 12) == true)
console.log(!(4 === '4') == true)
console.log(("dragon".includes('on') && "python".includes('on')) == true) // it has on

// 7 - Can't use Date directly, only for Date.now (returns time in milliseconds of Unix Time (1 January 1970))
let now = new Date()
console.log(now.getFullYear(), now.getMonth()+1, now.getDate(), now.getDay(), now.getHours(), now.getMinutes(), Date.now()*1000)
console.log(Date.getFullYear, Date.getMont+1, Date.getDate, Date.getDay, Date.getHours, Date.getMinutes, Date.now()*1000) // Why it does not work

// LEVEL 2
// 1
//let base = Number(prompt("Enter Base of Triangle", "0"))
//let height = Number(prompt("Enter Height of Triangle", "0"))
//console.log(`Area of triangle is ${base*height/2}`)
//
//// 2
//let a = Number(prompt("Enter Side A", "0"))
//let b = Number(prompt("Enter Side B", "0"))
//let c = Number(prompt("Enter Side C", "0"))
//console.log(`Perimeter of triangle = ${a+b+c}`)
//
//// 3
//let w = Number(prompt("Enter Width", '0'))
//let h = Number(prompt("Enter Height", '0'))
//console.log(`Area of Rectangle = ${w*h}, Perimeter = ${w*2+h*2}`)
//
//// 4
//let r = prompt("Enter Radius", "0")
//console.log(`Are of Circle = ${Math.PI * r**2}, Circumference = ${2*Math.PI*r}`)

// 5 : y = 2x-2 - slope is 2, (0,-2) (1,0)
// 6 : m = ((y2-y1)/(x2-x1)). (2,2) (6,10)
let m = (10-2)/(6-2)
// 7
console.log(m == 2, m)

// 8 : y = x**2 + 6x + 9
console.log(((-6+Math.sqrt(6**2-4*1*9))/2))
console.log(((-6-Math.sqrt(6**2-4*1*9))/2))

// 9
//let hours = Number(prompt("Enter Hours per week"))
//let rate = Number(prompt("Price per Hour"))
//console.log(`Your weekly earnings = ${hours*rate}`)

// 10
let val = (firstName.length > 7) 
val ? // Ternary operators outside of function or initialization can only work with a value!
    console.log("My name is long") : 
    console.log("My name is short")
console.log(`My name is ${(firstName.length > 7) ? 'long' : 'short'}`) // Ternary operators can have an Inline comparation (not value) if used inside a function

// 11
console.log(`My name '${firstName}' is ${(firstName.length > lastName.length) ? 'longer' : 'shorter'} than my lastname '${lastName}'`)

// 12
let myAge = 23
let yourAge = 25
let myAgeBigger = (myAge >= yourAge)
myAgeBigger ?
    console.log(`I am ${myAge - yourAge} older`) :
    console.log(`You are ${yourAge - myAge} older`)

// 13
//let birth = Number(prompt("Birth Year"))
//let tern = now.getFullYear() - birth
//console.log(`You are ${tern}. You ${(tern >= 18) ? 'are old enough to drive' : `Will be allowed to drive after ${18 - `${tern}200`} years`}.`)
// This is impossible to actually read, but I like the possibilities in Javascript already

// 14
let years = Number(prompt("Years"))
console.log(`You have lived ${years*365*24*60*60}`)

// 15
let date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`
console.log(date)
date = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
console.log(date)
date = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
console.log(date)

// LEVEL 3

// 1
let minutes = (now.getMinutes() > 10) ? `${now.getMinutes()}` : `${'0'+now.getMinutes()}`
let hours = (now.getHours() > 10) ? `${now.getHours()}` : `${'0'+now.getHours()}`
date = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${hours}:${minutes}`
console.log(date)