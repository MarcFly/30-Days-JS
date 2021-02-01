// LEVEL 1
// 1
// 2
// 3
//{
//    console.table(countries)
//    let group = 1
//    let prev = countries[0].name.charAt(0)
//    console.group(prev)
//    let i = 0
//    for(it of countries)
//    {
//        if(i > 50) break
//        let start = it.name.charAt(0)
//        if(prev != start)
//        {
//            console.groupEnd(prev)
//            prev = start
//            console.group(prev)
//        }
//        console.table(it)
//        ++i
//    }
//    console.groupEnd(prev)
//}

// LEVEL 2
{
    // 1
    console.assert(10 > 2*10, 'You dumbfuck')
    // 2
    console.warn('This is an warning')
    // 3
    console.error('This is an error')
}

// LEVEL 3
{
    // 1
    let arr = new Array(100).fill(0)
    {
        
        console.time('test While')
        let i = 0
        while(i < 100)
            arr[i] = i++
        console.timeEnd('test While')
    }
    {
        console.time('test for')
        for(let i = 0; i < 100; ++i)
            arr[i] = i
        console.timeEnd('test for')
    }
    {
        console.time('test for of')
        let i = 0
        for(it of arr)
        {
            arr[i] = i
            i++
        }
        console.timeEnd('test for of')
    }
    {
        console.time('test for each')
        let i = 0
        arr.forEach((it,ind)=>
        {
            arr[ind] = ind
        })
    
        console.timeEnd('test for each')
    }

    // Test depend a lot on the data contained, the amount of iterations, and the calls inside
    // on small calls, the regular for is the best by far, and forof and foreach fall behind substantially
    // on more heavy code calls, forof / foreach are better
    
}