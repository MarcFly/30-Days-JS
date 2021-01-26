// Loops // Same as c/c++ loop basically, adapting the conditions and such
// for loop
for(let i = 0; i < 5;++i)
    console.log(i)

for(let i = 0; i < 5; i++)
{
    console.log(i)
    console.log(i**2)
}

// while loop
let j = 0
while(j < 5)
{
    console.log(i)
    j++
}

// do while
do {
    console.log(i)
    j++
} while(j <=5)

// for of loop -> foreach?
// Basically the same of foerach, name the var iterator and instead of 'in' use 'of'
let arr = new Array(10).fill(0)
for(let element of arr)
{
    console.log(element)
}

// break -> go out the conaining loop
for(let i = 0; i < 5; ++i)
{
    if(i == 3) break
    console.log(i)
}

// continue -> skips the remaining part of the loop and go to next iteration
for(let i = 0; i < 5; ++i)
{
    if(i == 3) continue
    console.log(i)
}

