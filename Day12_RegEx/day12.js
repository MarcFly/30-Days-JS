// REGULAR EXPRESSIONS
// Concise language for finding patterns in data
// Can be used dynamically (like a lambda) or by constructing/compiling them declaring a RegExp

// new RegExp(string), normally declared /expression/flag {g,i,m,s,u,y} -> learn them what they do
// g -> global, along all the text
// i -> case insensitive
// m -> multiline
// s
// u
// y

// PATTERN with RegExp Constructor
{
    let pattern = 'love'
    let flag = 'gi'
    let regEx = new RegExp(pattern, flag)
    regEx = new RegExp('love','gi')
}
// PATTERN without RegExp Constructor
{
    let regEx = /love/gi
}

// RegExp Methods
{
    const str = 'I love JavaScript'
    const pattern = /love/

    // TEST -> returns true if the pattern is found
    const result = pattern.test(str)
    console.log(result)

    // match -> string method, returns array containing the matches, null if fail
    console.log(str.match(pattern)) // Returns array of objects (string, index, input, groups)
    console.log(str.match(/love/gi)) // Different flags may affect how the output is generated, gi (array of all the found cases)

    // search -> string method, return index of match instead of string, -1 in fail
    console.log(str.search(pattern))
    console.log(str.search(/love/gi)) // Not different, gi will just provide more matches

    // replace -> string method, replace a substring (or found substrings) with another
    console.log(str.replace(/javascript/i, 'C++')) 
}

// RegExp cheat sheet https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/regex.png
{
    { // [Set of characters]
        const pattern = '[Aa]pple' // this square bracket mean either A or a
        const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
        const matches = txt.match(pattern)

        console.log(matches)  
    }
    { // /something|something_else/ -> use the | (or) operator to search different things
        const pattern = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
        const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
        const matches = txt.match(pattern)

        console.log(matches)  
    }
    { // + -> something 1 or more times
        const pattern = /\d+/g  // d is a special character which means digits
        const txt = 'This regular expression example was made in January 12,  2020.'
        const matches = txt. match(pattern)
        console.log(matches)  // ["12", "2020"], this is not what we want
    }
    { // . -> means any character except new line
        {
            const pattern = /[a]./g  // this square bracket means a and . means any character except new line
            const txt = 'Apple and banana are fruits'
            const matches = txt.match(pattern)

            console.log(matches)  // ["an", "an", "an", "a ", "ar"]
        }
        {
            const pattern = /[a].+/g  // . any character, + any character one or more times 
            const txt = 'Apple and banana are fruits'
            const matches = txt.match(pattern)

            console.log(matches)  // ['and banana are fruits']
        }
    }
    { // * -> zero or more times
        const pattern = /[a].*/g  //. any character, + any character one or more times 
        const txt = 'Apple and banana are fruits'
        const matches = txt.match(pattern)

        console.log(matches)  // ['and banana are fruits']
    }
    { // ? -> zero or one time
        const txt = 'I am not sure if there is a convention how to write the word e-mail.\
        Some people write it email others may write it as Email or E-mail.'
        const pattern = /[Ee]-?mail/g  // ? means optional
        matches = txt.match(pattern)

        console.log(matches)  // ["e-mail", "email", "Email", "E-mail"]
    }
    { // {num} -> expect a specific amount of numbers -> {a,b} = range of numbers between a and b
        const txt = 'This regular expression example was made in December 6,  2019.'
        const pattern = /\d{4}/g  // exactly four times
        const matches = txt.match(pattern)
        console.log(matches)  // ['2019']
    }
    { // ^ -> Depends
        {
            // /^something/ -> patterns starts with 'something'
            const txt = 'This regular expression example was made in December 6,  2019.'
            const pattern = /^This/ // ^ means starts with
            const matches = txt.match(pattern)
            console.log(matches)  // ['This']
        }
        {
            // /[^something]/ -> does not contain something
            const txt = 'This regular expression example was made in December 6,  2019.'
            const pattern = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no coma no period
            const matches = txt.match(pattern)
            console.log(matches)  // ["6", "2019"]
        }

    }
    { // /something$/ -> ends with something
        let pattern = /^[A-Z][a-z]{3,12}$/;
        let name = 'Asabeneh';
        let result = pattern.test(name)

        console.log(result) // true
    }
}