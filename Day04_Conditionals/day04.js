// Conditionals
// If/else if/else statements..., same as C/C++
let isRaining = true//Boolean(prompt('Is it Raining...'))
if(isRaining)
{
    console.log("Just take an umbrella if necessary...")
}
else if(!isRaining)
{
    console.log("Whata  boring day, no sound of rain hitting windows...")
}
else
{
    console.log("How did you get here...")
}
// switch... same as C/C++
let value = 3//Number(prompt('Enter a number from 1-5'))
switch(value)
{
    case 1:
        console.log(value)
        break
    case 2:
        console.log(value)
        break
    case 3:
        console.log(value)
        break
    case 4:
        console.log(value)
        break
    case 5:
        console.log(value)
}
// Break is to get out of the switch, if there is no break, it will continue executing the cases
// As learned previously, specifically IF/ELSE statements can be written with ternary operator syntax
isRaining ? console.log("Umbrella") : console.log("Rain not on windows Sadge")