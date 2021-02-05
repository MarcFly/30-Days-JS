// LEVEL 1
// 1
{
    localStorage.setItem('firstName', 'Marc')
    localStorage.setItem('lastName', 'Torres')
    localStorage.setItem('age', 23)
    localStorage.setItem('country', 'Catalunya')
    localStorage.setItem('city', 'StQgat')
}

// LEVEL 2
{
    let student = {
        firstName: '',
        lastName: '',
        age: '',
        skills: [],
        country: '',
        enrolled_keys: [
            {
                key: 0,
                value: ''
            }
        ]
    }

    localStorage.setItem('student', JSON.stringify(student))
}

// LEVEL 3
{
    let personAccount = {
        firstName: '',
        lastName: '',
        incomes: [],
        expenses: [],

        totalIncome(){},
        totalExpense(){},
        accountInfo(){},
        addIncome(){},
        addExpense(){},
        accountBalance(){}
    }

    localStorage.setItem('person', JSON.stringify(personAccount)) // It automatically does not add methods!
}

{
    console.log(localStorage)
    localStorage.clear()
}