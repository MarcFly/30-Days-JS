// Closures -> Functions can be declared and used inside a function
function doA (){
    function doB(){
        return false
    }

    doB()
    doB()
    //...
}

// Yeah that's it for this 


// Exercices
// LEVEL 1
// 1
function closure1()
{
    function do1()
    {
        return false
    }

    return do1()
}
console.log(closure1())

// LEVEL 2
// 1
function closure3()
{
    function do1(){ return false }
    function do2(){ return true }
    function do3(){ return false }

    return do1() || do2() || do3()
}
console.log(closure3())

// LEVEL 3
// 1

function personAccount(){
    let firstName = 'Marc'
    let lastName = 'Torres'
    let incomes = [1,2,4,5,6]
    let expenses = [1,1,1,1]

    function totalIncome()
    {
        return incomes.reduce((acc,v)=>acc+v, 0)
    }
    function totalExpense()
    {
        return expenses.reduce((acc,v)=>acc+v, 0)
    }
    function accountInfo()
    {
        return {
            firstName: firstName,
            lastName: lastName,
            incomes: incomes,
            expenses: expenses
        }
    }
    function addIncome(v)
    {
        incomes.push(v)
    }
    function addExpense(v)
    {
        expenses.push(v)
    }
    function accountBalance()
    {
        return totalIncome()-totalExpense()
    }

    addIncome(35)
    addExpense(200)
    console.log(totalIncome())
    console.log(totalExpense())
    console.log(accountInfo())
    console.log(accountBalance())
}

personAccount()