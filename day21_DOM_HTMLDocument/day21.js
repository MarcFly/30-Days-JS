// HTML Document Object Model
// you can access the html/css document and properties from JS
// Can create, append, modify elements at runtime
// Basically the object 'document' is always ready

// To select, you need tag,id, class or some attribute

// GETTING ELEMENT

// document.getElementsByTagName('name') -> return HTMLCollection = array of HTML elements
// has .length for the size, does not support array methods, regular for!
{
    const allTitles = document.getElementsByTagName('h1')
    console.log(allTitles, allTitles.length)
    for(let i = 0; i < allTitles.length; ++i)
        console.log(allTitles[i])

}

// document.getElementsByClassName('name') -> returns HTMLCollection
{
    const allTitles = document.getElementsByClassName('title')
    console.log(allTitles, allTitles.length)
    for(let i = 0; i < allTitles.length; ++i)
        console.log(allTitles[i])

}

// document.getElementsById('name') -> returns 1 elements, name is id without #
{
    const allTitles = document.getElementById('first-title')
    console.log(allTitles)
}

// document.querySelector('name') -> select by any name, returns the FIRST FOUND
// tage -> 'name'
// class -> '.name'
// id -> '#id'
// document.querySelectorAll('name') -> selects all found instances with 'name'
{
    const oneTitle = document.querySelector('.title')
    const allTitle = document.querySelectorAll('.title')
    console.log(oneTitle)
    console.log(allTitle)
}

// ADDING ATTRIBUTES
// id, class, src, style, href, disabled, title, alt,...
// some tag/elements have different attributes, will learn step by step
// You can brute fors element.attribute = value -> not the best option
// value can be anything (string, number, array, object,...)

// element.setAttribute('attr_name', value)
{
    const titles = document.querySelectorAll('h1')
    titles[3].setAttribute('class', 'title')
    titles[3].setAttribute('id', 'fourth-title')

    // wihtout setAttribute you can brute force it
    // the element js object has the member class, id,...
    //titles[3].className = 'class2'//... there are a lot of fields
}

// element.classList
// In html can have multiclass elements separated by spaces
{
    const titles = document.querySelectorAll('h1')

    // element.classList.add('class_name', 'another_class')
    titles[3].classList.add('title', 'header-title')
    
    // element.classList.remove('class_list_name', 'class_to_remove')
    titles[3].classList.remove('title', 'header-title')
}

// ADDING TEXT
{
    const titles = document.querySelectorAll('h1')
    // element.textContent -> Only Text inside an html bracket
    titles[3].textContent = 'fourthTitle'

    // element.innerHTML -> property that holds all HTML content inside an html tag bracket
    // you can clean/modify entirely
    titles[3].innerHTML = 'fourthTitleNew'
    titles[3].innerHTML = ''
}


// CHANGING STYLE -> Modifying CSS from JS
// Most CSS properties are really self explanatory
// The CSS trickery comes when doing specific opartions and size styling (30 days of CSS?)
// element.style.fontSize
{// element.style.color 
    const titles = document.querySelectorAll('h1')
    titles.forEach((title, i) => {
        title.style.fontSize = '24px' // all titles will have 24px font size
        if (i % 2 === 0) {
            title.style.color = 'green'
        } else {
            title.style.color = 'red'
        }
    })
}

{// element.style.backgroundColor
    const titles = document.querySelectorAll('h1')
    titles.forEach((title, i) => {
        title.style.fontSize = '24px' // all titles will have 24px font size
        if (i % 2 === 1) {
            title.style.backgroundColor = 'green'
        } else {
            title.style.backgroundColor = 'red'
        }
    })
}