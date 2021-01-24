let challenge = "30 Days of Javascript"
console.log(challenge)

console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substr(0, 2))
console.log(challenge.substring(2,0))

console.log(challenge.slice(3))

console.log(challenge.includes("Script"))

let arr = challenge.split("")
console.log(arr)

console.log(challenge.split(" "))

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
let c_arr = companies.split(",")

console.log(c_arr)
console.log(challenge.replace("Javascript", "Python"))

console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(challenge.search('J')))
console.log(challenge.charCodeAt(11))

console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

let because = "You cannot end a sentence with because because because is a conjunction."
console.log(because.indexOf("because"))
console.log(because.lastIndexOf("because"))

console.log(because.search("because"))

console.log("  space_phrase  ".trim())

console.log(challenge.startsWith(challenge.substr(0,1)))
console.log(challenge.endsWith(challenge.substr(5)))

console.log(challenge.match(/a/gi))

console.log("30 Days of".concat(" ", "Javascript"))

console.log(challenge.repeat(2))

// Level 2

console.log("The quote \'There is no exercise better for the hearth than reaching down and lifting people up.\' by Jhon Holmes teaches us to help one another.")

console.log("\"Love is not patronizing and charity isn't about pity, it is aout love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")

console.log(typeof '10' == typeof 10, typeof Number('10') == typeof 10)

console.log(parseFloat('9.8') == 10, Math.round(parseFloat('9.8')) == 10)
console.log(parseFloat('9.8') == 10, Math.ceil(parseFloat('9.8')) == 10)

console.log("python".search("on"), "jargon".search("on"))
console.log("I hope this course is not full of jargon".includes("jargon"))

console.log(Math.floor(Math.random()*101))

console.log(Math.floor(50+Math.random()*51))

console.log(Math.floor(Math.random()*256))

console.log(challenge.charAt(Math.floor(Math.random()*challenge.length)))

let n = 1
let m = 0
console.log(`${n} ${Math.pow(n,m)} ${Math.pow(n,m)} ${Math.pow(n,m)} ${Math.pow(n,m+3)} \n
${n+1} ${Math.pow(n+1,m)} ${Math.pow(n+1,m+1)} ${Math.pow(n+1,m+2)} ${Math.pow(n+1,m+3)} \n
${n+2} ${Math.pow(n+2,m)} ${Math.pow(n+2,m+1)} ${Math.pow(n+2,m+2)} ${Math.pow(n+2,m+3)} \n
${n+3} ${Math.pow(n+3,m)} ${Math.pow(n+3,m+1)} ${Math.pow(n+3,m+2)} ${Math.pow(n+3,m+3)} \n
${n+4} ${Math.pow(n+4,m)} ${Math.pow(n+4,m+1)} ${Math.pow(n+4,m+2)} ${Math.pow(n+4,m+3)} `)

console.log(because.substr(because.indexOf("because"),because.lastIndexOf("because") - because.indexOf("because") + "because".length))

// Level 3

let love_str_ex = "'Love is the best thing in the world. Some found their love and some are still looking for their love.'"
console.log(love_str_ex.match(/love/gi).length)

console.log(because.match(/because/gi).length)

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/%/gi, "").replace(/&/gi, "").replace(/@/gi, '').replace(/#/gi,'').replace(/\$/gi,'').replace(/;/gi,''))
console.log(sentence.replace(/%|&|@|#|\$|;/gi, '')) // I love this
// most repeated word
console.log(sentence.replace(/%|&|@|#|\$|;/gi, '').match(/\w+/g))
// I don't see solution without loops


let money = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let money_arr = money.match(/\d+/g)
console.log(parseInt(money_arr[0])*12 + parseInt(money_arr[money_arr.length-2]) + parseInt(money_arr[money_arr.length-1])*12)
// This is hardcoded positions, not good really