// Error Handling
// As Javascript is a dynamic/interpreted language, errors must be handled at runtime

// try {code to test}
// catch (error_parameters){ do whatever on error}
// finally {code to be executed always}
{
    try {
        let lastName = 'Yetayeh'
        let fullName = fistName + ' ' + lastName
      } catch (err) {
        console.log(err)
      }
      finally {
          console.log('Executed anyways')
      }
}

// err is an object that contains error values, keys,...

// throw 'Message'/object/variable/... -> custom error to throw, canpass anything mostly
{
    let message
    let x = 23
    try {
      if (x == '') throw 'empty'
      if (isNaN(x)) throw 'not a number'
      x = Number(x)
      if (x < 5) throw 'too low'
      if (x > 10) throw 'too high'
    } catch (err) {
      console.log(err)
    }
  }

// ERROR Types
{
    // Reference -> something is undefined, undeclared or similar
    try{
        let firstName = 'Asabeneh'
        let fullName = firstName + ' ' + lastName
        console.log(fullName)
    } catch(err){console.log(err)}
    finally{}
    // Syntax -> something is not properly written, can't be try/caught really, it stops execution anyway
    try{
        // let square = 2 x 2
        console.log(square)
    } catch(err){console.log(err)}
    finally{console.log('Hello, world')}

    // TypeError -> variable type does nto concord with the usage (using a function not there for example)
    try{
    let num = 10
    console.log(num.toLowerCase())
    }
    catch(err) {console.log(err)}
    finally{}
}