// CLASSES
// basically like an object but a proper templated declaration
// An Object Constructor -> the same as having a temp Object that you copy around, but cleaner
{
    class Person{

    }

    let person = new Person()
    console.log(person) // Logs -> ClassName {object fields}

}

// Constructor
{
    class Person{
        constructor(firstName, lastName){
            console.log(this)
            this.firstName = firstName
            this.lastName = lastName
        }
    }
    let person = new Person() // Empty constructor
    console.log(person)
    person = new Person('Marc', 'Torres')
    console.log(person)
    // Constructor is always called as defined, generating the fields and passing the data (if not passed, as undefined)

    let p2 = new Person('Isabel', "Delgado")
    let p3 = new Person('Sara', 'Evangelista')
    console.log(p2,p3)
}

// Default Constructor -> the same as default values for function parameters
{
    class Person{
        constructor(firstName = 'default', lastName = 'default2'){
            console.log(this)
            this.firstName = firstName
            this.lastName = lastName
        }
    }
    let p = new Person()
    console.log(p)
}

// Class Methods -> same as objects, declare and define the function
// Getters & Setters -> Methods to get and set info, they are just methods, but they are used to clarify data usage
// The special about setters / getters -> you put get / set before and will restrict how info is treated
// Set -> accepts only one parameter and no return
// Get -> accepts no parameters and has a return
{
    class Person{
        constructor(firstName = 'default', lastName = 'default2'){
            console.log(this)
            this.firstName = firstName
            this.lastName = lastName
        }
        getFullName(){
            return this.firstName+' '+this.lastName
        }
    }
    let p = new Person()
    console.log(p.getFullName())
}

// Properties with Initial Value -> instead of adding them to the constructor parameters, don't and put them aside with an itialized value
{
    class Person{
        constructor(firstName = 'default', lastName = 'default2'){
            console.log(this)
            this.firstName = firstName
            this.lastName = lastName
            this.score = 0 // Can't pass value to initialize, it is set directly to 0
        }
    }
    let p = new Person()
    console.log(p.score)
}

// Static Methods -> not used on the container but the class itself -> Example String.methods, console.Methods, ....
// They should not access internal data or it will treat with UNDEFINED values because no constructor is called
// They do things that do not require a container
{
    class Person{
        constructor(firstName = 'default', lastName = 'default2'){
            console.log(this)
            this.firstName = firstName
            this.lastName = lastName
            this.score = 0 // Can't pass value to initialize, it is set directly to 0
        }
        static showDateTime()
        {
            let now = new Date()
            return String(now.getFullYear()) + this.firstName
        }
    }
    let p = new Person()
    console.log(Person.showDateTime())
}

// INHERITANCE -> class extends parent_class{}
// Basically inherits all the functionality and data as its own but adds functionality
{
    class Person{
        constructor(firstName = 'default', lastName = 'default2'){
            console.log(this)
            this.firstName = firstName
            this.lastName = lastName
            this.score = 0 // Can't pass value to initialize, it is set directly to 0
        }
        static showDateTime()
        {
            let now = new Date()
            return String(now.getFullYear()) + this.firstName
        }
    }
    class Student extends Person{
        saySomething() {
            console.log('I am a child of the person class')
          }
    }
    let s = new Student()
    console.log(s)
    s.saySomething()
}

// As part of inheriting you can change parent methods
// no keyword required, SHould ha vea way of saying where the overriden methods are
{
    class Person{
        constructor(firstName = 'default', lastName = 'default2'){
            console.log(this)
            this.firstName = firstName
            this.lastName = lastName
            this.score = 0 // Can't pass value to initialize, it is set directly to 0
        }
        static showDateTime()
        {
            let now = new Date()
            return String(now.getFullYear()) + this.firstName
        }
        // Override Methods
        getInfo()
        {
            console.log(this.firstName, this.lastName, this.score)
        }
    }
    class Student extends Person{
        saySomething() {
            console.log('I am a child of the person class')
          }
        getInfo(){ // Redefine a parent function with own
            console.log(this.firstName, this.lastName, this.score)
            this.saySomething()
        }
        
    }
    let s = new Student()
    s.getInfo()
}