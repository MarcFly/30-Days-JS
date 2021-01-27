// LEVEL 1
// 1
function fullName(firstName, lastName){console.log(`${firstName} ${lastName}`)}
fullName('Marc', ' Torres')

// 2
function fullName2(firstName, lastName){return `${firstName} - ${lastName}`}
console.log(fullName2('Marc', ' Torres'))

// 3
function sum(a,b) { return Number(a+b)}
console.log(sum(2,3))

// 4
function areaOfRectangle(w, h) {return w*h}
console.log(areaOfRectangle(5,5))

// 5
function perimeterOfRectangle(w,h) { return 2*(w+h)}
console.log(perimeterOfRectangle(5,5))

// 6
function volumeOfPrism(w,h,d) {return w*h*d}
console.log(volumeOfPrism(5,5,2))

// 7
function areaOfCircle(r) { return Math.PI*(r**2)}
console.log(areaOfCircle(3))

// 8
function circumferenceOfCircle(r) {return Math.PI*2*r}
console.log(circumferenceOfCircle(3))

// 9
function density(m, v) {return m/v}
console.log(density(100,3))

// 10
function speed(x, t) {return x/t}
console.log(speed(50/2))

// 11
function weight(m, g = 9.82) {return m*g}
console.log(weight(100))

// 12
function cToF(c){return c * (9/5) + 32}
console.log(cToF(30))

// 13
function BMI(m,h)
{
    let bmi = m / h**2
    if(bmi < 18.5) console.log('Underweight')
    else if(bmi < 24.9) console.log('Normal weight')
    else if(bmi < 29.9) console.log('Overweight')
    else console.log('Obese')
}
BMI(67.5, 1.81)

// 14
function checkSeason(month)
{
    if(month < 3 || month == 12) return 'Winter'
    else if(month < 6) return 'Spring'
    else if(month < 9) return 'Summer'
    else if(month < 12) return 'Autumn'
    return 'Error'
}
console.log(checkSeason(13))
console.log(checkSeason(12))

// 15
function findMax(a,b,c)
{
    let i = 0
    let v = new Array()
    for(let i = 0; i < 3 && i < arguments.length; ++i)
        v.push(arguments[i])
    return v.sort().reverse()[0]    
}
console.log(findMax(0,3,4,5,6))

// LEVEL 2
// 1
function solveLinEq(a,b,c)
{
    let sol = Array(2)
    sol[0] = -c / a
    sol[1] = -c / b
    return sol
}
console.log(solveLinEq(1,2,3))

// 2
function solveQuadEq(a,b,c)
{
    let sol = Array(2)
    sol[0] = (-b + Math.sqrt(b**2 - 4*a*c))/2*a
    sol[1] = (-b - Math.sqrt(b**2 - 4*a*c))/2*a
    return sol
}
console.log(solveQuadEq(1, 4, 4)) // {-2}
console.log(solveQuadEq(1, -1, -2)) // {2, -1}
console.log(solveQuadEq(1, 7, 12)) // {-3, -4}
console.log(solveQuadEq(1, 0, -4)) //{2, -2}
console.log(solveQuadEq(1, -1, 0)) //{1, 0}

// 3
function printArray(arr)
{
    for(it of arr)
        console.log(it)
}
printArray([3,2,1,0])

// 4
function showDateTime()
{
    let date = new Date()
    console.log(`${(date.getDate()<10) ? '0'+date.getDate() : date.getDate()}/${(date.getMonth()<9) ? '0'+(date.getMonth()+1) : date.getMonth()+1}/${date.getFullYear()} ${(date.getHours()<10) ? '0'+date.getHours() : date.getHours()}:${(date.getMinutes()<10) ? '0'+date.getMinutes() : date.getMinutes()}`)
} // this is an abomination, never write something this long in production code, EVER
showDateTime()

// 5
function swapValues(x,y) 
{
    let int = x
    x = y
    y = int
    console.log(x,y)
}
swapValues(4,5)

// 6
function reverseArray(arr)
{
    for(let i = 0; i < (arr.length/2); ++i)
    {
        let int = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = int
    }
    console.log(arr)
}
reverseArray([1,2,3,4,5])

// 7
function capitalizeArray(arr)
{
    for(let i = 0; i < arr.length; ++i)
        arr[i] = String(arr[i]).charAt(0).toUpperCase() + String(arr[i]).slice(1)

    return arr
}
console.log(capitalizeArray(['caca', 'culo', 'pedo', 'pis']))

// 8
function addItem(item)
{
    let arr = new Array()
    arr.push(item)
    return arr
}
console.log(addItem('asdad'))

// 9
function removeItemFast(index)
{
    let arr = new Array(20).fill(0)
    if(index >= arr.length) return arr
    arr[index] = arr[arr.length-1]
    arr.pop()
    return arr
}

function removeItemOrdered(index)
{
    let arr = new Array(20).fill(0)
    if(index >= arr.length) return arr
    for(let i = index; i < arr.length-2;++i)
        arr[i] = arr[i+1]
    arr.pop()
    return arr
}

// 10
function sumOfNumbers(num)
{
    let ret = 0
    for(let i = 1; i <= num; ++i)
        ret += i
    return ret
}
console.log(sumOfNumbers(15))

// 11
function sumOfOdds(num)
{
    let ret = 0
    for(let i = 1; i <= num; ++i)
        if(i%2)ret += i
    return ret
}
console.log(sumOfOdds(15))

// 12
function sumOfEven(num)
{
    let ret = 0
    for(let i = 1; i <= num; ++i)
        if(!(i%2))ret += i
    return ret
}
console.log(sumOfEven(15))

// 13
function EvenOdds(num)
{
    let odds = 0, even = 0
    for(let i = 0; i <= num; ++i)
        (i%2) ? odds+=1 : even+=1
    console.log(`There are ${odds} odds`)
    console.log(`There are ${even} even`)
}
EvenOdds(100)

// 14
function sum() // IN KEYWORD MAKES THE FOR 'OF' INVALID, IT BECOMES AN int i =0 to ... arg_length
{
    let ret = 0
    for(it in arguments) // good to know that a for IN, it is the index iterator, not the value...
    {
        console.log(it) 
        ret += parseFloat(arguments[it])
    }
    return ret
}
console.log(sum(1,2,3,4,5))

// 15
function RandomIp()
{
    return `192.168.1.${Math.ceil(Math.random()*256)} || ${Math.ceil(Math.random()*256)}.${Math.ceil(Math.random()*256)}.${Math.ceil(Math.random()*256)}.${Math.ceil(Math.random()*256)}`
}
console.log(RandomIp())

// 16
function randomMAC()
{
    let ret = ''
    for(let i = 0; i < 6; ++i)
    {   
        let v1 =Math.floor(Math.random()*15)
        let v2 = Math.floor(Math.random()*15)
        ret += `${(v1 < 10) ? v1 : String.fromCharCode(v1-10+97)}${(v2 < 10) ? v2 : String.fromCharCode(v2-10+97)}`
        if(i < 6-1) ret += ':'
    }
    return ret
}
console.log(randomMAC())

// 17
function randomHex()
{
    let ret = '#'
    for(let i = 0; i < 6; ++i)
    {   
        let v1 =Math.floor(Math.random()*15)
        ret += `${(v1 < 10) ? v1 : String.fromCharCode(v1-10+97)}`
    }
    return ret
}
console.log(randomHex())

// 18
function randomID()
{
    let ret = ''
    for(let i = 0; i < 7; ++i)
    {
        let v1 = Math.ceil(Math.random()*35)
        ret += `${(v1 < 10) ? v1 : ((Math.random()*2 <= 1) ? String.fromCharCode(v1-10+97) : String.fromCharCode(v1-10+97).toUpperCase())}`
    }
    return ret
}
console.log(randomID())

// LEVEL 3
// 1

function randomIDs()
{
    
    let num_chars = Number(prompt('Enter number of chars:'))
    let num_ids = Number(prompt('Enter amount IDs:'))
    let ret = new Array()
    for(let j = 0; j < num_ids; ++j)
    {
        let push = ''
        for(let i = 0; i < num_chars; ++i)
        {
            let v1 = Math.ceil(Math.random()*35)
            push += `${(v1 < 10) ? v1 : ((Math.random()*2 <= 1) ? String.fromCharCode(v1-10+97) : String.fromCharCode(v1-10+97).toUpperCase())}`
        }
        ret.push(push)
    }
    return ret
}
//console.log(randomIDs())

// 2
function randomRGB()
{
    return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
}
console.log(randomRGB())

// 3
function arrHexa(num)
{
    let arr = new Array(Number(num))
    for(let i = 0; i < Number(num); ++i)
        arr.push(randomHex())

    return arr
}
console.log(arrHexa(23))

// 4
function arrRGB(num)
{
    let arr = new Array(Number(num))
    for(let i = 0; i < Number(num); ++i)
        arr.push(randomRGB())

    return arr
}
console.log(arrRGB(23))

// 5
function HexaToRGB(hex)
{
    console.log(hex)
    let arr = hex.match(/[a-z0-9]/gi)

    let r = 16*((Number(arr[0]) < 10) ? parseInt(arr[0]) : (arr[0].charCodeAt()-97+10))
    r +=  (Number(arr[1]) < 10) ? parseInt(arr[1]) : (arr[1].charCodeAt()-97+10)

    let g = 16*((Number(arr[2]) < 10) ? parseInt(arr[2]) : (arr[2].charCodeAt()-97+10))
    g +=  (Number(arr[3]) < 10) ? parseInt(arr[3]) : (arr[3].charCodeAt()-97+10)

    let b = 16*((Number(arr[4]) < 10) ? parseInt(arr[4]) : (arr[4].charCodeAt()-97+10))
    b +=  (Number(arr[5]) < 10) ? parseInt(arr[5]) : (arr[5].charCodeAt()-97+10)
    return `rgb(${r},${g},${b})`
}
console.log(HexaToRGB(randomHex()))

// 6
function RGBtoHexa(rgb)
{
    let arr = rgb.match(/[0-9]+/gi)
    let ret = '#'
    let r1 = Math.floor(arr[0]/16)
    let r2 = arr[0]%16
    ret += (r1 > 9) ? String.fromCharCode(r1-10+97): r1
    ret += (r2 > 9) ? String.fromCharCode(r2-10+97): r2

    let g1 = Math.floor(arr[1]/16)
    let g2 = arr[1]%16
    ret += (g1 > 9) ? String.fromCharCode(g1-10+97): g1
    ret += (g2 > 9) ? String.fromCharCode(g2-10+97): g2

    let b1 = Math.floor(arr[2]/16)
    let b2 = arr[2]%16
    ret += (b1 > 9) ? String.fromCharCode(b1-10+97): b1
    ret += (b2 > 9) ? String.fromCharCode(b2-10+97): b2

    console.log(arr)

    return ret
}
console.log(RGBtoHexa(randomRGB()))

// 7
function genColors(hexa_or_rgb, num)
{
    let b = (hexa_or_rgb.toUpperCase() == 'HEXA')
    if(!b && hexa_or_rgb.toUpperCase() != 'RGB') return false
    let arr = new Array(Number(num))
    for(let i =0; i < Number(num); ++i)
        arr[i] = b ? randomHex() : randomRGB()
    
    return arr
}
console.log(genColors('hexa', 20))
console.log(genColors('rgb', 20))
console.log(genColors('errror', 2000))

// 8
function shuffleArray(arr)
{
    for(let i = 0; i < arr.length; ++i)
    {
        let i1 = Math.floor(Math.random()*arr.length)
        let i2 = Math.floor(Math.random()*arr.length)

        let int = arr[i1]
        arr[i1] = arr[i2]
        arr[i2] = int
    }

    return arr
}
console.log(shuffleArray([1,2,2,3,3,4,5,56,6,1,1,51,25124,124,124]))

// 9
function factorial(num)
{
    let ret = num
    for(let i = 1; i < num; ++i)
        ret*=i
    return ret
}
console.log(factorial(4))

// 10
function isEmpty(val)
{
    return (val == undefined)||(val == '')||(val == null)
}
let empty_var
console.log(isEmpty(empty_var))

// 11
function sum()
{
    let ret = 0
    for(it of arguments)
        ret += Number(it)
    return ret
}
console.log(sum(1,2,3,4,5,6,3,54,6,7,34,23,452,2))

// 12
function sumArray(arr)
{
    let ret = 0
    for(it of arr)
    {
        if(Number(it) != undefined && !isNaN(parseInt(it))) ret += Number(it)
        else return "dude, don't send invalid data"
    }
    return ret
}
console.log(sumArray([1,2,2,3,3,3,52,2,432,3,14,1]))
console.log(sumArray([1,2,2,3,3,'fuck you']))

// 13
function avg(arr)
{
    let ret = 0
    for(it of arr)
    {
        if(Number(it) != undefined && !isNaN(parseInt(it))) ret += Number(it)
        else return "dude, don't send invalid data"
    }
    return ret/arr.length
}
console.log(avg([1,2,2,3,3,3,52,2,432,3,14,1]))
console.log(avg([1,2,2,3,3,'fuck you']))

// 14
function modify5th(arr)
{
    if(arr.lenght <5) return 'not found'
    arr[4] = arr[4].toUpperCase()
    return arr
}
console.log(modify5th(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))

// 15
function isPrime(num)
{
    let n_prime = false
    for(let i = 0; i <= num; ++i)
    {
        
        for(let j = i-1; j > 1;--j)
            if(n_prime = !(i%j)) break
        if(!n_prime) console.log(i)
    }
    return !n_prime
// for prime checking algorithms: https://www.quora.com/Whats-the-best-algorithm-to-check-if-a-number-is-prime
}
console.log(isPrime(24))

// 16
function arrayEqual(arr)
{
    let b = true
    for(let i = 1; i < arr.length && b; ++i)
        b = (arr[i] == arr[i-1])
    return b
}
console.log(arrayEqual([1,1,1,1,1,1,1,1,1,1,1]))
console.log(arrayEqual([1,1,1,1,1,1,1,1,1,2,1,1,1,1]))

// 17
function arraSameType(arr)
{
    let b = true
    for(let i = 1; i < arr.length && b; ++i)
        b = (typeof(arr[i]) == typeog(arr[i-1]))
    return b
}
console.log(arrayEqual([1,1,1,1,1,1,1,1,1,1,1]))
console.log(arrayEqual([1,1,1,1,1,1,1,1,1,'caca',1,1,1,1]))

// 18
function isValid(str)
{
    return (str.match(/\$|_/gi) == null)
}
console.log(isValid('_variable$'), isValid('variab_le'), isValid('_vari_able$'), isValid('variable'), isValid('var$iable'))

// 19
function randomUnique(num)
{
    let arr = new Array(Math.floor(Math.random()*num))
    for(let i = 0; i < num; ++i)
    {
        let v = Math.floor(Math.random()*10)
        while(arr.includes(v))
        { v = Math.floor(Math.random()*10)}
        arr[i] = v
    }
    return arr
}
console.log(randomUnique(10))

// 20
function reverseArray(arr)
{
    let copy = arr
    copy.reverse()
    return copy
}
console.log(reverseArray([1,2,3,4,46,6,2,62]))