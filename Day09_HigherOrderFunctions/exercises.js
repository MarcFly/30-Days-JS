const countries_short = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// LEVEL 1
// 1
// foreach iterates over items, allows change through internal methods, returns the same array and does not care about return values
// map iterates over items, allows change through internal methods, returns array constructed of return values per function
// filter iterates over items, compares to a user condition with a boolean return, returns array constructed of truthy returning values
// reduce expects a return value to be declared, to which you operate over and will equal the return value (returns SINGLE VALUE)

// 2
const fEach_cb = function(item, ind, arr) { console.log(item, ind)}
const map_cb = function(item, ind, arr) {console.log(item, ind); return item++}
const filter_cb = (item) => (typeof(item) == String)
const reduce_cb = (acc, item) => (acc+item)

// 3
countries_short.forEach(fEach_cb)
// 4
names.forEach(fEach_cb)
// 5
numbers.forEach(fEach_cb)
// 6
console.log(countries_short.map((item) => item.toUpperCase()), countries_short)
// 7
console.log(countries_short.map((item)=> item.length), countries_short)
// 8
console.log(numbers.map((item)=>item**2), numbers)
// 9
console.log(names.map((item) => item.toUpperCase()), names)
// 10
console.log(products.map((item) => `${item.product} costs ${item.price}`), products)

// 11
console.log(countries_short.filter((item)=>!item.toUpperCase().includes('LAND')), countries_short)
// 12
console.log(countries_short.filter((item)=>!(item.length == 6)), countries_short)
// 13
console.log(countries_short.filter((item)=>!(item.length >= 6)), countries_short)
// 14
console.log(countries_short.filter((item)=>!(item.startsWith('E'))), countries_short)
console.log(countries_short.filter((item)=>!(item.match(/^E/))), countries_short) // Circomflexe is starts with in regex
//15
console.log(products.filter((item) => (
        typeof (item.price) == typeof(0) && 
        item.price != undefined && 
        item.price != null && 
        item.price > 0))
    , products)

// 16
function getStringLists(arr) {
    return arr.filter((item) => typeof(item) == typeof(''))
}

// 17
console.log(numbers.reduce((v, it) => v+it), numbers)

// 18
let sum = 0
console.log(`Estonia, ${countries_short.reduce((v, it, ind, arr) => {
    if(ind == arr.length-1)
        v+=' and'
    else
        v+=','
    v += (' '+it)
    if(ind == arr.length-1)
        v+= ' are north European countries_short.'
    return v
})}`)

// 19
// every checks that all items match the condition
// some will return true after just one item matches the condition

// 20
console.log(names.some((it)=>it.length > 7), names)
// 21
console.log(countries_short.every((it)=>it.match(/land/)), countries_short)
// 23
// find returns value if found, undefined if not
// findIndex returns index, -1 if not found

// 24
console.log(countries_short[countries_short.findIndex((it)=>(it.length == 6))], countries_short)
// 25
console.log(countries_short.findIndex((it)=>(it == 'Norway')))
// 26
console.log(countries_short.findIndex((it)=>(it == 'Russia')))

// LEVEL 2
// 1
console.log(products.filter((item)=>(typeof (item.price) == typeof(0) && item.price != undefined && item.price != null)))
console.log(products.filter((item)=>(typeof (item.price) == typeof(0) && item.price != undefined && item.price != null)).reduce((v,it)=>v+it.price,0))
// Providing the initial item on reduce is pretty crucial seems for it to work as intended, else it will concatenate as string

// 2
console.log(products.reduce((v,item) => (
    v+((typeof (item.price) == typeof(0) && item.price != undefined && item.price != null) ? item.price : 0)
),0)) // Remember the initial value

// 3
function categorizedcountries_short(arr, common) {
    return arr.filter((it)=>it.toUpperCase().includes(common.toUpperCase()))
}
console.log(categorizedcountries_short(countries_short, 'land'))

// 4
function countries_shortStartWith(arr, letter) {
    return arr.filter((it)=>it.toUpperCase().startsWith(letter.toUpperCase()))
}
console.log(countries_shortStartWith(countries_short, 'f'))

// 5 - This and next exercise make no sense, can and should be done with easier syntax than messing with functional programming
function getFirstTenCountries()
{
    return countries.filter((it,ind, arr) => (ind < 10))
}
console.log(getFirstTenCountries())

// 6
function getLastTenCountries()
{
    return countries.filter((it,ind,arr) => (ind > arr.length-11))
}
console.log(getLastTenCountries())

// 7 - I don't get it
function getMostStartLetter()
{
    let max = 0
    let curr = 0
    return countries.reduce((v,it)=>{
        if(v == it.name.charAt(0))
            curr++
        else if(max < curr)
            {
                v = it.name.charAt(0)
                max = curr
                curr = 0
            }
        console.log(max, curr, v, it.name.charAt(0))
        return v
    }, 0)
}
console.log(getMostStartLetter())


// LEVEL 3
// 1
//console.log(countries.sort((a,b) => (a.name > b.name)?1:-1), countries.sort((a,b) => (a.capital > b.capital)?1:-1), countries.sort((a,b) => (a.population - b.population)))

// 2
function mostSpokenLanguages(count)
{
    let arr = new Array()
    countries.forEach((it) => {
        it.languages.forEach((lang) =>{
            let v = arr.findIndex(ind => ind.language == lang)
            if(v == -1)
                arr.push({
                    language: lang,
                    count: 1
                })
            else
                arr[v].count++
        })
    })
    return arr.sort((a,b) => b.count-a.count).slice(0,count)
}
console.log(mostSpokenLanguages(15))

// 3
function mostPopulatedCountries(count)
{
    return countries.map((it) => {
        return {
            name: it.name,
            population: it.population
        }}).sort((a,b)=> b.population - a.population).slice(0,count)
}

console.log(mostPopulatedCountries(10))

// 4
const statistics = {
    arr: new Array(),
    count()
    {
        return this.arr.length
    },
    sum()
    {
        return this.arr.reduce((acc, curr) => acc+curr,0)
    },
    min()
    {
        return this.arr.reduce((acc, curr) => (acc > curr) ? curr : acc)
    },
    max()
    {
        return this.arr.reduce((acc, curr) => (acc < curr) ? curr : acc, 0)
    },
    range()
    {
        return this.max() - this.min()
    },
    mean()
    {
        return this.sum() / this.arr.length
    },
    median()
    {
        let temp = this.arr.sort((a,b)=> a-b)
        let v1 = temp[Math.floor(this.arr.length/2)]
        if(!(this.arr.length %2))
            v1 = (v1+ temp[Math.floor(this.arr.length/2)-1])/2
        return v1
    },
    mode()
    {
        let ret_arr = new Array()
        this.arr.forEach((it) => {
            let ind = ret_arr.findIndex((val) => val.id == it)
            if(ind == -1)
                ret_arr.push({
                    id: it,
                    count: 1
                })
            else
                ret_arr[ind].count++
        })
        return ret_arr.sort((a,b) => b.count - a.count)[0]
    },
    variance()
    {
        let variance = 0
        let mean = this.mean()
        this.arr.forEach((it) =>
        {
            variance += ((it-mean)**2)
        })
        return variance/(this.arr.length-1)

    },
    std()
    {
        return Math.sqrt(this.variance())
    },
    freqDist()
    {
        let distr = new Array()
        this.arr.forEach((it) => {
            let ind = distr.findIndex((x) => x.id == it)
            if(ind == -1)
                distr.push({
                    id: it,
                    count: 1
                })
            else
                distr[ind].count++
        })
        console.log(distr)
        return distr.map((it)=> ({id: it.id, val: 100*it.count/this.arr.length}))
    },
    describe()
    {
        console.log('Count: ',this.count())
        console.log('Sum: ', this.sum())
        console.log('Min: ',this.min())
        console.log('Max: ',this.max())
        console.log('Range: ',this.range())
        console.log('Mean: ',this.mean())
        console.log('Median: ',this.median())
        console.log('Mode: ',this.mode())
        console.log('Variance: ',this.variance())
        console.log('Standard Deviation: ',this.std())
        console.log('Frequency Distribution: ',this.freqDist())
    }
}
statistics.arr = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
statistics.describe()


