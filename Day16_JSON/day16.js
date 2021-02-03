// JSON
// Java Script Object Notation
// Declares each variable as "name""type""data" recursively
// Very easy to change from Javascript Object to JSON format
/* EXAMPLE
{
    "users":[
            {
                "firstName":"Asabeneh",
                "lastName":"Yetayeh",
                "age":250,
                "email":"asab@asb.com"
            },
            {
                "firstName":"Alex",
                "lastName":"James",
                "age":25,
                "email":"alex@alex.com"
            },
            {
                "firstName":"Lidiya",
                "lastName":"Tekle",
                "age":28,
                "email":"lidiya@lidiya.com"
            }
        ]
}
*/

/* Explained Example
{ -> Start Curly Brackets

    "object1": "string",
    "object2": {
        "boolean_name": bool,
        "number_name": number,
        "array_name": [...],
        "object_name": {}
    },
    "object3": [array_of_data_or_objects],

} -> End Curly Brackets
*/


// JSON.parse(variable, reviver)
// variable -> variable to be parsed (usually a text)
// reviver -> (data,management,...) => {Treat the data} // basically a callback, called reviver because it revives data as expected
{
    const usersText = `{
        "users":[
          {
            "firstName":"Asabeneh",
            "lastName":"Yetayeh",
            "age":250,
            "email":"asab@asb.com"
          },
          {
            "firstName":"Alex",
            "lastName":"James",
            "age":25,
            "email":"alex@alex.com"
          },
          {
          "firstName":"Lidiya",
          "lastName":"Tekle",
          "age":28,
          "email":"lidiya@lidiya.com"
          }
        ]
        }`
        
        const usersObj = JSON.parse(usersText, undefined, 4)
        console.log(usersObj)
}

// Using the reviver (aka callback)
{
    const usersText = `{
        "users":[
          {
            "firstName":"Asabeneh",
            "lastName":"Yetayeh",
            "age":250,
            "email":"asab@asb.com"
          },
          {
            "firstName":"Alex",
            "lastName":"James",
            "age":25,
            "email":"alex@alex.com"
          },
          {
          "firstName":"Lidiya",
          "lastName":"Tekle",
          "age":28,
          "email":"lidiya@lidiya.com"
          }
        ]
        }`
        
        const usersObj = JSON.parse(usersText, (key, value) => {
          let newValue =
            typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
          return newValue
        })
        console.log(usersObj)
}

// JSON.stringify(object, replacer, space)
// object -> object to parse into string/file
// replacer -> (param1, param2,...) => {filter data} || [field1, field2, field3,...] // Filter data that requires serialization or not (can pass Undefined if want spaces and no filtering)
// Replacer can be a function/callback or an array with the field names to filter in
// space -> indentation spaces (0,4,8 are the best practices)

{
    const users = {
        Alex: {
          email: 'alex@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript'],
          age: 20,
          isLoggedIn: false,
          points: 30
        },
        Asab: {
          email: 'asab@asab.com',
          skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'Redux',
            'MongoDB',
            'Express',
            'React',
            'Node'
          ],
          age: 25,
          isLoggedIn: false,
          points: 50
        },
        Brook: {
          email: 'daniel@daniel.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
          age: 30,
          isLoggedIn: true,
          points: 50
        },
        Daniel: {
          email: 'daniel@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        John: {
          email: 'john@john.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
          age: 20,
          isLoggedIn: true,
          points: 50
        },
        Thomas: {
          email: 'thomas@thomas.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        Paul: {
          email: 'paul@paul.com',
          skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'MongoDB',
            'Express',
            'React',
            'Node'
          ],
          age: 20,
          isLoggedIn: false,
          points: 40
        }
      }
      
      const txt = JSON.stringify(users, undefined, 4)
      console.log(txt) // text means JSON- because json is a string form of an object.
}

// Example Filter array
{
    const user = {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        country: 'Finland',
        city: 'Helsinki',
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Pyhton'],
        age: 250,
        isLoggedIn: false,
        points: 30
      }
      
      const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
      console.log(txt)
}