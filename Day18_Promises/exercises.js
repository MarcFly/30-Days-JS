const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

function level1(){
    // LEVEL 1
    // 1
    const fetchCountries = async function(){
        try{
            const response = await fetch(countriesAPI)
            console.log(response)
            const countries = Object.values(await response.json())
            console.log(countries)
            countries.forEach((c)=>
            {
                console.log(c.name)
                console.log(c.capital)
                console.log(c.languages)
                console.log(c.population)
                console.log(c.area)
            })
        }
        catch(err){console.log(err)}

        fetch(countriesAPI).then(v=>{
            let data = Object.values(v.json())
            console.log(data)
        })
    }

    fetchCountries()
}
//level1()

function level2(){
    // LEVEL 2
    // 1
    const fetchCats = async function(){
        try{
            const response = await fetch(catsAPI)
            const cats = Object.values(await response.json())
            cats.forEach(v=>console.log(v.name))
            return cats
        }
        catch(err){console.log(err)}
    }

    fetchCats()
}
// level2()

// LEVEL 3
function level3()
{
    const fetchCats = async function(){
        try{
            const response = await fetch(catsAPI)
            const cats = Object.values(await response.json())
            return cats
        }
        catch(err){console.log(err)}
    }
    const fetchCountries = async function(){
        try{
            const response = await fetch(countriesAPI)
            const countries = Object.values(await response.json())
            return countries
        }
        catch(err){console.log(err)}
    }

    // 1
    let cats;
    fetchCats().then(cats => {
        console.log(cats)
        console.log(cats.reduce((acc, v)=> {
            let weight = (v.weight.metric.match(/\d+/gi).reduce((acc2, v2)=>Number(acc2)+Number(v2))/2)
            return acc+weight
        },0)/cats.length) // REMEMBER ON REDUCE TO HAVE AN INITIAL VALUE
    })

    // 2
    let countries
    fetchCountries().then(countries =>{
        console.log(countries)
        let arr = countries.map((v)=>{
            return {name:v.name, population: v.population}
        })
        arr.sort((a,b) => b.population-a.population)
        console.log(arr.slice(0,10))
    })

    // 3
    fetchCountries().then(countries => {
        console.log(countries)
        let langs = new Set()
        countries.forEach((v)=>{
            v.languages.forEach(lang=>langs.add(lang.name))
        })
        console.log(langs)
    })

}

level3()