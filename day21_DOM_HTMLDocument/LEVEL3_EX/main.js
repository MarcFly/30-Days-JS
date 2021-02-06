function randomHex()
{
    let ret = '#'
    for(let i = 0; i < 6; ++i)
    {   
        let v1 =Math.floor(Math.random()*15)
        ret += `${(v1 < 10) ? v1 : String.fromCharCode(v1-10+97)}`
    }
    return ret
}

// Change Color of year every second
{
    const header1 = document.querySelector('h1')
    {
        let year_text = header1.textContent.match(/\d+/gi)[0]
        console.log(year_text)
        header1.innerHTML = header1.innerHTML.replace(/\d+/gi, `<span class='h1randColorTitle'>${year_text}</span>`)
        console.log(header1.innerHTML)
    }

    setInterval(()=>{
        document.querySelector('.h1randColorTitle').setAttribute('style',`color:${randomHex()}`)
    }, 1000)
}
// Add and change color of Time value (after h2 before ul)

{
    const date = new Date()
    const header2 = document.querySelector('h2')
    let timeH = document.createElement('h2') // create HTML element
    timeH.id = 'dateTime'
    timeH.textContent = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    timeH.style.backgroundColor = randomHex()
    header2.insertAdjacentElement("afterend", timeH) // Insert element somewhere around the element you are inserting from
    
    setInterval(()=>{
        timeH.textContent = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
        timeH.style.backgroundColor = randomHex()
    }, 1000)
}
// Colors for the challenges -> green = finished, orange = wip, red = not started
const liItems = document.querySelectorAll('li')
for(let i = 0; i < liItems.length;++i)
{
    if(liItems[i].textContent.match(/done/i))
        liItems[i].style.backgroundColor = 'green'
    if(liItems[i].textContent.match(/ongoing/i))
        liItems[i].style.backgroundColor = 'orange'
    if(liItems[i].textContent.match(/coming/i))
        liItems[i].style.backgroundColor = 'red'
}

// WHAT IS MISSING IS CSS AND SHIT TRICKERY...