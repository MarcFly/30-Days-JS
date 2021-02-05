// HTML 5 - WEB STORAGE
// Alternative to cookies -> Bigger save size, better performance and usable between pages of the same domain
// Stored and accessed through Javascript -> sessionStorage & localStorage
// Data is specific to the protocol of the page
// Keys & Values are always strings -> other types will be converted into strings
// Can't be accessed between different browsers, all specific to each one

// SESSION STORAGE
// Data expires -> cleared when session ends / page is closed
// Only Available withing browser tab / window -> Data for single page

// LOCAL STORAGE
// Data does not expire
// Will be the focus but temporal data should be part of session storage

/* USE CASES
 - Data Store Temporally
 - SAving products for a shopping cart
 - Data available among multiple tabs of same domain
 - Data used offline
 - Static data initialization and request -> better performance (even images)
 - Can be used for authentication methods
 */

 // WEB STORAGE OBJECTS
 // localStorage -> localStorage object access
 // localStorage.clear() -> remove everything in localStorage
 // localStorage.setItem(key, value) -> add data to local storage
 // localStorage.getItem(key) -> get the value of some data
 // localStorage.removeItem(key) -> remove an item from a localStorage
 // localStorage.key() -> displays data of a stored variable in localStorage -> instead of key you pass index????


 // SETTING ITEMS
 {
    // String
    localStorage.setItem('string', 'value')
    console.log(localStorage.getItem('string'))
    // Number
    localStorage.setItem('number', 200)
    console.log(localStorage.getItem('number'))
    // Array
    let arr = [1,2,3,4,5,6,7,8]
    localStorage.setItem('arr', JSON.stringify(arr, undefined, 4)) // have to convert to string somehow
    console.log(localStorage.getItem('arr'))
    // Object
    const object = {
        v1: 'v1',
        v2: 250,
        v3: [1,2,3,4,5]
    }
    localStorage.setItem('object', JSON.stringify(object,undefined,4))

    console.log(localStorage.getItem('object'))
    
 } // As seen a simple get will only get the string not the object properly

 // GETTING ITEMS
 {
    // We use JSON.parse to convert into object and use it
    let get_local = JSON.parse(localStorage.getItem('arr'))
    console.log(get_local)
 }

 // CLEARING
 {
    console.log(localStorage)
     localStorage.clear()
     console.log(localStorage)
 }