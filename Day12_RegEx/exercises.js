// LEVEL 1
// 1
{ 
    let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
    let arr = text.match(/\d+/gi)
    console.log(arr, (parseInt(arr[0])+parseInt(arr[2]))*12 + parseInt(arr[1]))
}
// 2
{
    let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
    let found0 = false
    let arr = points.join('').match(/\d+-|\d{1}/g).map((v) =>
    {
        let t = v.replace(/-/g,'')
        console.log(v, t)
        t = Number(t)

        if(t == 0) found0 = true
        else if(!found0)
            t *= -1
        return t

    })

    console.log(arr[arr.length-1] - arr[0])
}
// 3
{
    let pattern = /(^\d+)|(.[- ]+.)/
    console.log(pattern.test('varialbe'))
    console.log(pattern.test('vari ale'))
    console.log(pattern.test('var-iale'))
    console.log(pattern.test('1variale'))
    console.log(('varialbe').match(pattern))
    console.log(('vari ale').match(pattern))
    console.log(('var-iale').match(pattern))
    console.log(('1variale').match(pattern))

    // Got the inverse, finds non valids
}

// LEVEL 2
// 1
{
    function tenMostFreqWords(str)
    {
        let words = new Set(str.match(/\w+/g))
        let ret = new Array() 
        words.forEach((it, ind) =>
        {
            let pattern = new RegExp(`${it}[^a-zA-Z0-9]`,'g') // Search the word but does ntoi have any trailing letter/number
            ret.push({word: it, count:str.match(pattern).length})
        })
        console.log(ret)

        ret.sort((a,b) => b.count - a.count)
        return ret.slice(0,10)
    }

    let str = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
    console.log(tenMostFreqWords(str))


// LEVEL 3
// 1

    function cleanText(str)
    {
        let pattern = new RegExp(`[{}/<>?%$#@;:&]`, 'gi')
        return str.replace(pattern, '')
    }

    let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
    console.log(cleanText(sentence))
    console.log(tenMostFreqWords(cleanText(sentence)))
}