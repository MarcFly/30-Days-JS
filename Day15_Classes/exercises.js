// LEVEL 1
// 1
class Animal{
    constructor(name, age, color, legs)
    {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    set setName(name)
    {
        this.name = name
    }
    get getInfo()
    {
        console.log(this.name, this.age, this.color, this.legs)
    }
    makeSound(){}
}

// 2 + LEVEL 2 // 1
class Dog extends Animal{
    makeSound(){console.log('woof')}
}
class Cat extends Animal{
    makeSound(){console.log('meow')}
}

// LEVEL 3
// 1
class Statistics{
    constructor(data_arr = []){
        this.data = data_arr
    }
    count()
    {
        return this.data.length
    }
    sum()
    {
        return this.data.reduce((acc, curr) => acc+curr,0)
    }
    min()
    {
        return this.data.reduce((acc, curr) => (acc > curr) ? curr : acc)
    }
    max()
    {
        return this.data.reduce((acc, curr) => (acc < curr) ? curr : acc, 0)
    }
    range()
    {
        return this.max() - this.min()
    }
    mean()
    {
        return this.sum() / this.data.length
    }
    median()
    {
        let temp = this.data.sort((a,b)=> a-b)
        let v1 = temp[Math.floor(this.data.length/2)]
        if(!(this.data.length %2))
            v1 = (v1+ temp[Math.floor(this.data.length/2)-1])/2
        return v1
    }
    mode()
    {
        let ret_arr = new Array()
        this.data.forEach((it) => {
            let ind = ret_arr.findIndex((val) => val.id == it)
            if(ind == -1)
                ret_arr.push({
                    id: it,
                    count: 1
                })
            else
                ret_arr[ind].count++
        })
        return ret_arr.sort((a,b) => b.count - a.count)[0]
    }
    variance()
    {
        let variance = 0
        let mean = this.mean()
        this.data.forEach((it) =>
        {
            variance += ((it-mean)**2)
        })
        return variance/(this.data.length-1)

    }
    std()
    {
        return Math.sqrt(this.variance())
    }
    freqDist()
    {
        let distr = new Array()
        this.data.forEach((it) => {
            let ind = distr.findIndex((x) => x.id == it)
            if(ind == -1)
                distr.push({
                    id: it,
                    count: 1
                })
            else
                distr[ind].count++
        })
        console.log(distr)
        return distr.map((it)=> ({id: it.id, val: 100*it.count/this.data.length}))
    }
    describe()
    {
        console.log('Count: ',this.count())
        console.log('Sum: ', this.sum())
        console.log('Min: ',this.min())
        console.log('Max: ',this.max())
        console.log('Range: ',this.range())
        console.log('Mean: ',this.mean())
        console.log('Median: ',this.median())
        console.log('Mode: ',this.mode())
        console.log('Variance: ',this.variance())
        console.log('Standard Deviation: ',this.std())
        console.log('Frequency Distribution: ',this.freqDist())
    }
}

{
    let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
    let stats = new Statistics(ages)
    console.log(stats)
    stats.describe()
}


// 2
class PersonAccount{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = []
        this.expenses = []
    }
    get totalIncome(){
        return this.incomes.reduce((acc, v) => acc+v)
    }
    get totalExpenses(){
        return this.expenses.reduce((acc, v) => acc+v)
    }
    get accountInfo(){
        return {firstName: this.firstName, lastName: this.lastName, }
    }
    set addIncome(income){
        this.incomes.add(income)
    }
    set addExpense(expense){
        this.expenses.add(expense)
    }
    get accountBalance(){
        return this.totalIncome() - this.totalExpenses()
    }
}