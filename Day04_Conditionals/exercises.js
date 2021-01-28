// LEVEL 1
// 1
//let age = Number(prompt('Enter Age'))
//if(age >= 18)
//    console.log("You are old enough to drive")
//else
//    console.log(`You are left with ${18-age} years to drive`)
//
//// 2
//let myAge = 23
//let yourAge = age
//if(myAge > yourAge)
//    console.log(`I am ${myAge-yourAge} years older than you`)
//else if(myAge < yourAge)
//    console.log(`You are ${yourAge-myAge} years older than me`)
//else
//    console.log("We are the same age")

// 3
let a = 4, b = 3
if(a > b) console.log("A is greater than B")
else if(a < b) console.log("A is less than B")
else console.log("A and B are equal")

// Statement/Non Initializing conditions, will not prompt as a valid if/else statement, and not be processed or throw error
let check = (a > b) ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`)

// 4
let c = 2
console.log(`${c} is an ${(c%2 == 0) ? 'even' : 'odd'} number`)

// LEVEL 2
// 1
let grade = Math.floor(Math.random()*101)
if(grade > 79) console.log('A')
else if(grade > 69) console.log('B')
else if(grade > 59) console.log('C')
else if(grade > 49) console.log('D')
else console.log('F')

// 2
let date = new Date()
switch(date.getMonth()+1)
{
    case 1:
    case 2:
        console.log("Winter")
        break
    case 3:
    case 4:
    case 5:
        console.log("Spring")
        break
    case 6:
    case 7:
    case 8:
        console.log("Summer")
        break
    case 9:
    case 10:
    case 11:
        console.log("Autumn")
        break
    case 12:
        console.log("Winter")
}

// 3
switch(date.getDay())
{
    case 0:
        console.log('Is weekend')
        break
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Is workday')
        break
    case 6:
        console.log('Is weekend')

}

//switch(prompt('Put day here').toUpperCase())
//{
//    case 'MONDAY':
//    case 'TUESDAY':
//    case 'WEDNESDAY':
//    case 'THURSDAY':
//    case 'FRIDAY':
//        console.log('Its workday')
//        break
//    case 'SATURDAY':
//    case 'SUNDAY':
//        console.log('Its weekend')
//}

// LEVEL 3
// 1
let month = prompt('Enter Month').toUpperCase()
if(month == 'FEBRUARY')
    console.log(`${month[0].toUpperCase()+month.substr(1).toLowerCase()} has 28 days`)
else if(month == 'JANUARY' || month == 'MARCH' || month == 'MAY' || month == 'AUGUST' || month == 'OCTOBER' || month == 'DECEMBER')
    console.log(`${month[0].toUpperCase()+month.substr(1).toLowerCase()} has 31 days`)
else
    console.log(`${month[0].toUpperCase()+month.substr(1).toLowerCase()} has 30 days`)
// 1.2
let year = Number(prompt('Enter year'))
if(month == 'FEBRUARY')
    console.log(`${month[0].toUpperCase()+month.substr(1).toLowerCase()} has ${(year%4 == 0) ? 29 : 28} days`)
else if(month == 'JANUARY' || month == 'MARCH' || month == 'MAY' || month == 'AUGUST' || month == 'OCTOBER' || month == 'DECEMBER')
    console.log(`${month[0].toUpperCase()+month.substr(1).toLowerCase()} has 31 days`)
else
    console.log(`${month[0].toUpperCase()+month.substr(1).toLowerCase()} has 30 days`)