const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries_bad = ['Finland', 'Sweden', 'Norway']

// LEVEL 1
// 1
{
    const empty_set = new Set()
}
// 2
{
    let set = new Set()
    for(let i = 0; i < 11; ++i)
        set.add(i)
    console.log(set)
    // 3
    set.delete(3)
    //4
    set.clear()
}
// 5
{
    const strings = ['asd','asda','qte2','qyra','fqwefwqtwt']
    let set = new Set(strings.slice(0,5)) // make sure only 5 items
    console.log(set)
}
// 6
{
    let map = new Map()
    for(let i = 0; i < countries_bad.length; ++i)
        map.set(countries_bad[i], countries_bad[i].length)
    console.log(map)
}


// LEVEL 2
// 1
{
    let C = new Set([...a, ...b])
    console.log(C)
}
// 2
{
    let B = new Set(b)
    let union = a.filter((it) => B.has(it))
    console.log(union)
}
// 3 // what do you mean A with B, a + b, a != b, a == b,...
{
    let B = new Set(b)
    let union = a.filter((it) => !B.has(it))
    console.log(union)
}

// LEVEL 3
// 1
{
    let langs = new Set()
    for(country of countries)
        for(language of country.languages)
            langs.add(language)
    console.log(langs, langs.size)
}
// 2
{
    let langs = new Map()
    for(country of countries)
        for(language of country.languages)
        {
            if(langs.has(language)) langs.set(language, langs.get(language)+1)
            else langs.set(language, 1)
        }
    let arr = new Array()
    for(it of langs)
        arr.push(it)
    arr.sort((a,b) => b[1] - a[1])
    console.log(arr.slice(0,10))
}