// LEVEL 1
// 1
const dog = {}
// 2
console.log(dog)
// 3
dog.name = 'Lil Bubby'
dog.legs = 4
dog.color = 'white'
dog.age = 3
dog.bark = function(){return 'woof woof'}
console.log(dog)
console.log(dog.bark())

// 4
const dog_values = Object.values(dog)
console.log(dog_values)

// 5
dog.breed = 'Chihuahua'
dog.getDogInfo = function(){return Object.values(this)}
console.log(dog.getDogInfo())

// LEVEL 2
// 1
{   
    const pairs = Object.entries(users_old)
    let most_skilled = Object.assign(pairs[0])
    for(it of pairs)
    {
        if(most_skilled[1].skills.length < it[1].skills.length) most_skilled = Object.assign({}, it)
    }
    console.log(most_skilled)
}

// 2
{   
    const values = Object.values(users_old)
    let count_logged_in = 0
    let count_50_points = 0
    for(it of values)
    {
        if(it.isLoggedIn) count_logged_in++
        if(it.points >= 50) count_50_points++
    }
    console.log(count_logged_in, count_50_points)
}

// 3
{   
    const pairs = Object.entries(users_old)
    let most_skilled = new Array()
    for(it of pairs)
    {
        if(it[1].skills.join(' ').toUpperCase().match(/(?=.*MONGODB)(?=.*EXPRESS)(?=.*REACT)(?=.*NODE)/gi) != null) most_skilled.push(Object.assign({}, it)) // Learned the *AND* operator
    }
    console.log(most_skilled)
}

// 4
{
    const modified = Object.assign({}, users_old)
    modified['Marc'] = Object.assign({},person)
    console.log(modified, users_old)
}

{
    // 5
    const keys = Object.keys(users_old)
    // 6
    const values = Object.values(users_old)
}

// 7
{
    for(it of countries)
        console.log(it.name, it.capital, `${it.population/1000000} mill`, it.languages )
}

// LEVEL 3
// 1
const persAccount = {
    firstName: '',
    lastName: '',
    incomes: [
        {
            amount: 0,
            description: 'Starting Income'
        }
    ],
    expenses: [
        {
            amount: 0,
            description: 'Starting Expense'
        }
    ],

    totalIncome() {},
    totalExpens() {},
    accountInfo() {},
    addIncome(){},
    addExpense(){},
    accountBalance() {}

}

// 2.a
function addUser(user)
{
    const found = users.find(x => x._id === user._id) // This syntax gets what to search/compare to!
    if(found > 0) 
    {
        console.log('User Found...')
        return -1
    }

    users.push(user)
}

//2.b
function signIn(user)
{
    const found = users.find(x => (x.username === user.username || x.email === user.email))
    if(found < 0)
    {
        console.log('User not found...')
        return -1
    }
    if( !(users[found].password == user.password))
    {
        console.log('Incorrect password')
        return -1
    }

    return users[found]
}

// 3.a
function rateProduct(prod_id, user_id, value)
{
    const user_found = users.find(x => x._id === user_id)
    if(user_found < 0 || !users[user_found].isLoggedIn)
    {
        console.log('To rate a product need to Sign In with your account!')
        return -1
    }

    let rating = {
        userId: user_id,
        rate: value
    }

    products[products.find(x => x._id === prod_id)].ratings.push(rating)

    return 0
}

// 3.b
function avgRating(prod_id)
{
    let avg = 0
    const ratings = products[products.find(x => x._id === prod_id)].ratings
    for(rating of ratings)
        avg+=rating.rate
    
    return avg/ratings.length
}

// 4
function likeProduct(prod_id, user_id)
{
    const user_found = users.find(x => x._id === user_id)
    if(user_found < 0 || !users[user_found].isLoggedIn)
    {
        console.log('To rate a product need to Sign In with your account!')
        return -1
    }
    
    const likes = products[products.find(x => x._id === prod_id)].likes
    let ind = likes.indexOf(user_id)
    if(ind > 0)
    {
        likes[ind] = likes[likes.length-1]
        likes.pop()
    }
    else
        likes.push(user_id)
}