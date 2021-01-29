// Destructuring
// way to unpack arrays -> assing array into different variables
// Destructuring can only be done as a constructor
{
    const numbers = [1,2,3]
    {
        let [one,two,three] = numbers
        console.log(one,two,three)
    }

    const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
    ]
    const [frontEnd, backEnd] = fullStack
    
    console.log(frontEnd)
    console.log(backEnd)

      // You can skip values by comma
    {
        let [one,,three] = numbers
        console.log(one,three)
    }

    // We can define a default value just in case
    {
        const names = [undefined, 'Brook', 'David']
        let [
            firstPerson = 'Asabeneh',
            secondPerson,
            thirdPerson,
            fourthPerson = 'John'
        ] = names

        console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)  
    }

    // It is impractical to do that for all the values of an array
    // thus we use the spread operator to end it if you need all the values
    {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        let [num1, , num3, ...rest] = nums
        let [test1, , test3] = nums

        console.log(num1, num3)
        console.log(test1, test3)
        console.log(rest)
    }

    // You can destructure iteratively
    // You can use the 'map' syntax on arrays during iteration
    // That way it will pack the array data in a way it is expected
    {
        const countries_bad = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

        for (const [country, city] of countries_bad)
            console.log(country, city)
        
        for(const [country, city, test] of countries_bad)
            console.log(country, city, test) 
        // It will access data in a way it is setup, if data is not part of the structure, undefined will be (see test)
    }

    // Can do the same with objects
    {
        const rectangle = {
            width: 20,
            height: 10,
            area: 200
        }
        let {width, height, area, perimeter} = rectangle
        console.log(width, height, area, perimeter) // perimeter is not part of rectangle, thus it will be undefined
        // If you use {} it is key dependent
        // You can't get it through [] -> rectrangle is not an iterable liek an array or like that
        //let [height2, width2, perimeter2, area2] = rectangle
        //console.log(width2, height2, area2, perimeter2)
        
        // If you want different naming key:var_name
        let {width:w, height:h, area:a, perimeter:p} = rectangle
        console.log(w,h,a,p) // perimeter is not part of rectangle, thus it will be undefined

        // You can give default values also
        let {width:w2, height:h2, area:a2, 
            perimeter:p2 = 60} = rectangle
        console.log(w2,h2,a2,p2) // perimeter is not part of rectangle, thus it will be undefined
    }
    // Pass Object Parameters in functions
    {
        // Without destructuring -> you have to access the variables
        {
            const rect = {
                width: 20,
                height: 10
            }
            // Pass the whole object and inside use the variables
            const calculatePerimeter = rectangle => {
                return 2 * (rectangle.width + rectangle.height)
            }
            
            console.log(calculatePerimeter(rect)) // 60
        }

        // With destructuring
        {
            const rect = {
                width: 20,
                height: 10
            }
            // Pass the whole object but the function parameters are defined to what parts of the objects are expected
            const calculatePerimeter = ({width, height}) => {
                return 2 * (width + height)
            }
            
            console.log(calculatePerimeter(rect)) // 60
        }
    }
}

// SPREAD or REST operator (...var)
{
    // Like previously, it allows to get the rest of elements in an array when destructuring
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let [num1, num2, num3, ...rest] = nums
    //​
    console.log(num1, num2, num3)
    console.log(rest)
    //// Also that way you can get the full array
    let arr = [...nums]
    console.log(nums)
//
    arr = [...nums, ...nums] // concatenate various arrays,...
    console.log(nums)
}

{
    // CaN be used also for objects
    const user = {
        name:'Asabeneh',
        title:'Programmer',
        country:'Finland',
        city:'Helsinki'
    }
    
    const copiedUser = {...user}
    console.log(copiedUser)

    let usr = [{...user}, {...user}]
    console.log(usr)

    // After the rest operator on object, you can change the data
    usr = {...user, title:'Artist'}
    console.log(usr)
}

{
    // Using the Arrow function
    // basically, rest operator on a function will gather all passed arguments, you can iterate on them as an array
    const sumAllNums = (...args) =>
    {
        console.log(args)
        for(const nu of args)
            console.log(nu)
    }
    sumAllNums(1,2,3,4,5,65,6,7,7,35,24,2)


}