// More Containers

// SETS
// Collection of elements but can only be unique (C/C++ map but without keys, I guess there is the set in c++)
{
    const companies = new Set()
    console.log(companies)

    // Can be created from an array
    const languages = [
        'English',
        'Finnish',
        'English',
        'French',
        'Spanish',
        'English',
        'French',
    ]
    
    const setOfLanguages = new Set(languages)
    console.log(setOfLanguages) // Observe that repeated items are not in the set!

    // Can be iterated
    setOfLanguages.forEach((it) => console.log(it))
    //for(let i = 0; i < setOfLanguages.size; ++i) You can't iterate by [ind]
        //console.log(setOfLangauges[i]) // does not work
    for(it of setOfLanguages)
    console.log(it)
        
    // To add you just .add(element)
    setOfLanguages.add('Catalan')
    setOfLanguages.add('English')
    console.log(setOfLanguages)

    // To delete, you have to delete the key specifically
    setOfLanguages.delete('Spanish')

    // Can check if a key is by 'has'
    console.log(setOfLanguages.has('Spanish'))
    console.log(setOfLanguages.has('Catalan'))

    // To empty it out .clear
    setOfLanguages.clear()
    console.log(setOfLanguages)


    // JOINING SETS
    let a = [1, 2, 3, 4, 5]
    let b = [3, 4, 5, 6]
    let c = [...a, ...b] // This is spread operator, will get all data in array form?

    let A = new Set(a)
    let B = new Set(b)
    let C = new Set(c)

    console.log(C)

    // Checking that a set contains another
    console.log(a.filter((num) =>B.has(num))) // The nums that a ARRAY has that B SET has

    // Difference of sets, same with filtering the array acoording to a set
    console.log(a.filter((num) =>!B.has(num)))
}

// MAPS -> C/C++ map, first key then value
let map = new Map()
console.log(map)

countries_bad = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
map = new Map(countries_bad)
console.log(map)
console.log(map.size)

// Add values -> instead of add you .set
map.set('Catalunya', 'Barcelona')
console.log(map)

// To get a value you search for the key .get
console.log(map.get('Catalunya'), map.get('Espanyita')) // returns undefined on not found

// Check key with .has
console.log(map.has('Catalunya'), map.has('Espanyita'))

// When using loops like foreach or for of, you have to pass an arr of 2 values
for(const [country, city] of map)
    console.log(country, city)
map.forEach((val, key) => console.log(key, val)) // for of and foreach have order inverse for key value

