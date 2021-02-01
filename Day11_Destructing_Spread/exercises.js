const constants = [2.72, 3.14, 9.81, 37, 100]
const countries_bad = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// LEVEL 1
{
    // 1
    let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
    console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

    // 2
    let [fin, est, sw, den, nor] = countries_bad
    console.log(fin, est, sw, den, nor)

    // 3
    let {width:w, height:h, area:a, perimeter:p} = rectangle
    console.log(w,h,a,p)
}

// LEVEL 2
{
    // 1
    for(it of users)
    {
        let usr = {...it}
        console.log(usr)
    }

    // 2 - Is it supposed to be done with only rest operators?
    let arr = users.filter((it) => it.skills.length < 2)
    console.log(arr)
    
    let skills2less = new Array()
    for(it of users)
    {
        let usr = {...it}
        if(usr.skills.length < 2)
            skills2less.push(usr)
    }
    console.log(skills2less)

}

// LEVEL 3
{
    // 1
    for(it of countries)
    {
        let {name, capital, population, languages} = it
        console.log(name,capital, population, languages)
    }

    // 2
    {
        const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
        let [name, skills, jsScore, reactScore] = student
        console.log(name, skills, jsScore, reactScore)
    }

    // 3
    {
        const students = [
            ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
            ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
        ]

        function convertArrayToObject(students)
        {
            let arr = new Array()
            for([n, sk, sc] of students)
            {
                arr.push({name:n, skills:sk, scores:sc})
            }
            return arr
        }
        console.log(convertArrayToObject(students))
    }

    // 4
    {
        const student = {
            name: 'David',
            age: 25,
            skills: {
                frontEnd: [
                { skill: 'HTML', level: 10 },
                { skill: 'CSS', level: 8 },
                { skill: 'JS', level: 8 },
                { skill: 'React', level: 9 }
                ],
                backEnd: [
                { skill: 'Node',level: 7 },
                { skill: 'GraphQL', level: 8 },
                ],
                dataBase:[
                { skill: 'MongoDB', level: 7.5 },
                ],
                dataScience:['Python', 'R', 'D3.js']
            }
        }

        let newStudent = {...student, 
            skills:{
                frontEnd: 
                    [...student.skills.frontEnd, {skill:'Bootstrap', level: 8}],
                backEnd:
                    [...student.skills.backEnd, {skill:'Express', level:9}],
                dataBase:
                    [...student.skills.dataBase, {skill:'SQL', level: 8}],
                dataScience:
                    [...student.skills.dataScience, 'SQL']}}

        console.log(newStudent)


    }

}

