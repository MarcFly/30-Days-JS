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