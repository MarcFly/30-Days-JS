// Console Object Methods
// Methods that use the Console Object -> debugging on available browser basically, not for production code
{
    // console.log(arguments, variables, 'strings', arrays[],...) -> print what you sent, file and code line
    console.log('30DaysOfJS')
    // Has substitution of variables like printf! console.log('string %d %s %...', var1, var2, var3)
    console.log('%d %s of Javascript', 30, 'Days')
    // Can also apply CSS to the output, to change colors and whatever, tehre are lots of options just go and learn them when needed but will be learnt with CSS
    console.log('%c30Days of JS', 'color:green')
    console.log(
        '%c30 Days%c %cOf%c %cJavaScript%c',
        'color:green',
        '',
        'color:red',
        '',
        'color:yellow'
    ) // log output green red and yellow text
    // Good for separating part of the code, but I don't like having too many colors


    // console.warn('message') -> it gives warnign on console / browser but will not affect user
    console.warn('This is a warning')
    console.warn('You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!')
    console.warn('Warning is different from error')

    // console.error('message') -> error that something is going tremendously wrong btu does not affect user
    console.error('This is an error message')
    console.error('We all make mistakes')

    // console.table(data, args, variables,...) -> displays the passed arguments in tables, requires only one argument which must be array, object and parameter for columns (not needed)
    const names = ['Asabeneh', 'Brook', 'David', 'John']
    console.table(names)
    const user = {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    }
    console.table(user)
    const users = [
        {
            name: 'Asabeneh',
            title: 'Programmer',
            country: 'Finland',
            city: 'Helsinki',
            age: 250
        },
        {
            name: 'Eyob',
            title: 'Teacher',
            country: 'Sweden',
            city: 'London',
            age: 25
        },
        {
            name: 'Asab',
            title: 'Instructor',
            country: 'Norway',
            city: 'Oslo',
            age: 22
        },
        {
            name: 'Matias',
            title: 'Developer',
            country: 'Denmark',
            city: 'Copenhagen',
            age: 28
        }
    ]
    console.table(users)

    // console.time('timer name') -> starts timer
    // console.timeEnd('timer name') -> ends and reports time

    const countries = [
        ['Finland', 'Helsinki'],
        ['Sweden', 'Stockholm'],
        ['Norway', 'Oslo']
      ]
      
      console.time('Regular for loop')
      for (let i = 0; i < countries.length; i++) {
        console.log(countries[i][0], countries[i][1])
      }
      console.timeEnd('Regular for loop')
      
      console.time('for of loop')
      for (const [name, city] of countries) {
        console.log(name, city)
      }
      console.timeEnd('for of loop')
      
      console.time('forEach loop')
      countries.forEach(([name, city]) => {
        console.log(name, city)
      })
      console.timeEnd('forEach loop')


      // console.info('string') -> display piece of information // basically the same as a log?
    console.info('30 Days Of JavaScript challenge is trending on Github')
    console.info('30 Days Of fullStack challenge might be released')
    console.info('30 Days Of HTML and CSS challenge might be released')

    // console.assert((condition), 'message') -> write an error message if the condition is false
    console.assert(4 > 3, '4 is greater than 3') // no result
    console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

    // console.group() -> creates a collapsible for the console outputs inside the group (great for ordering log and code in console)
    console.group('Names')
    console.log(names)
    console.groupEnd()

    console.group('Countries')
    console.log(countries)
    console.groupEnd()

    console.group('Users')
    console.log(user)
    console.log(users)
    console.groupEnd()


    // console.count() -> a counter, prints the amount of times console.count() has been called, with a previous string parameter
    // example, counting times a function has been called

    // console.clea() -> clears the console, erases every output generated previously
}