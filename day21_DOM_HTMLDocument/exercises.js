// LEVEL 1
{
    // 1
    const firstP = document.querySelector('p')
    // 2
    let arr = []
    for(let i = 1; i < 5; ++i)
        arr.push(document.querySelector(`p${i}`))
    
    // 3
    arr = document.querySelectorAll('p')
    console.log(arr)
    arr = []
    arr = document.getElementsByTagName('p')
    console.log(arr)

    // 4
    console.log(arr)
    for(let i = 0; i < 4;++i)
        console.log(arr[i].textContent)
    // 5
    arr[3].textContent = 'Fourt Paragraph'

    // 6
    arr[0].className = 'paragraph'
    arr[0].id = 'par1'

    arr[1].setAttribute('class', 'paragraph')
    arr[1].setAttribute('id', 'par2')

    arr[2].classList.add('p', 'paragraph')
    arr[2].classList.remove('p', 'p')
}

// LEVEL 2
{
    // 1
    let arr = document.querySelectorAll('p')
    console.log(arr)
    arr[0].style.border = 'green 2em'
    arr[0].style.color = 'cyan'
    arr[0].style.backgroundColor = 'black'
    arr[0].style.fontFamily = 'Sans-Serif'
    // others...

    // 2
    for(let i = 0; i < 4; ++i)
    {
        if(i %2 === 0)
            arr[i].style.color = 'green'
        else    
            arr[i].style.color = 'red'
    }

    // 3
    for(let i = 0; i < 4; ++i)
    {
        arr[i].textContent = 'LoremIpsum'
        arr[i].classList.add('p', 'paragraph')
        arr[i].classList.remove('p')
        arr[i].setAttribute('id', `p${i}`)
    }
}