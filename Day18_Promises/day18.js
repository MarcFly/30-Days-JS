// PROMISE
// Do something at a point in time
// 1st Way of handling async methods: a promise keeps a return value as
// - pending: not yet ran
// - fulfilled: operation completed successfully
// - rejected: operation failed

// When fullfilled, the promise operation returns a value, if not rejected with an error value

// CALLBACK based on TimeOut (after some time execute)
{
    //Callback
const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback('It did not go well', skills)
    }, 2000)
  }
  
  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doSomething(callback)
}

// PROMISE -> when you want do this (then) if error (catch) which can be chained
// promise.then(callback).catch(error_callback)
{
    // syntax
    const promise = new Promise((resolve, reject) => {
        resolve('success')
        reject('failure')
    })

    // Promise
    const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))
    // This is fullfilled nad no error is called
}


// FETCH API
// API for obtaining resources through internet (much bettter than XMLHttpRequest -> I tried and failed to use it when doing my site)
{
    const url = 'https://restcountries.eu/rest/v2/all' // countries api
    fetch(url)
    .then(response => response.json()) // accessing the API data as JSON
    .then(data => { // getting the data
        console.log(data)
    })
    .catch(error => console.log(error)) // handling error if something wrong happens
}

// ASYNC and AWAIT
// handling promises better
{
    // declare function as async and it will be a promise
    const square = async function(n){return n*n}
    square(2).then(v => console.log(v))

    // instead of using the direct return value or then we can declar a return of a function as await
    //const value = await p() // THIS IS INCORRECT, AWAIT CAN ONLY BE DECLARED INSIDE AN ASYNC SCOPE
    const url = 'https://restcountries.eu/rest/v2/all'
    const fetchtest = async function(){
        try{
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
        }
        catch(err){console.log(err)} 
    }
    console.log('FetchTest()', fetchtest())
}