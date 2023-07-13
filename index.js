let num = 1 
let numTwo = 2 
num = 3
console.log(num + numTwo)
console.log(num - numTwo)

const myMoney = 250
const myFriendsMoney = 300//primitive data type

console.log(myMoney + myFriendsMoney)
const totalMoney = myMoney + myFriendsMoney + myFriendsMoney

const iHaveMoreMoney = myMoney > myFriendsMoney
console.log(iHaveMoreMoney)

if (iHaveMoreMoney){
    console.log("im rich")
} else if (myMoney > 200){
    console.log("im poor")
} else{
    console.log("im chill")
}

const newNumber = 300

const isEven = (newNumber % 2) === 0 

if(isEven){
    console.log("even")
}else{
    console.log("odd")
}

let myName = 'Aaron\'s computer'//escaping character
let myMiddleName = "Jack's Computer"
let myFriendsName = `Peter`//string interpolation
let friendsFullName =  `${myFriendsName} Rogers `
console.log(friendsFullName)

//indexing 

console.log(myName[4])

//interpolation 
console.log(`${myName} ${myMiddleName}`)

//concatenation

console.log(myName + " " + myMiddleName)

// String Method

console.log(myName.length)


 let paragraph = 'firstParagraph \n second paragraph\t third paragraph'
 
 // convention is to put backticks on its own line as shown below and also you can add html with different
 //values
 let paragraphTwo = `
firstParagraph 
second paragraph
third paragraph
  `

  let myFirstName = "Edgardo"
const myAge = 26 

const myFullName = `${myFirstName} Escamilla`
console.log(myFullName)
const introdution = "My Name is Edgardo and i will be a programmer"

if(myAge > 28){
    console.log("Im older than Aaron")
  }else if (myAge === 28){
    console.log("I am the same age")
  }else{
    console.log("I am younger")
  }

  if(myAge % 2 === 0){
    console.log("my age isEven")
  }else{
    console.log("my age isOdd")
  }
      

    const activeUserCount  = 2 

const sentence = `There is ${activeUserCount} active user`
console.log(sentence)

if(activeUserCount > 1){
  console.log(`There is ${activeUserCount} active users`)
}else {
  console.log(`There is ${activeUserCount} active user`)
}

const nums = [1,2,3]

console.log(nums.length) 

nums.push(4)

console.log(nums)
const last = nums.pop()
console.log(last)

console.log(nums)

nums[0] = 13
console.log(nums)

const nameThree = "aaron"
const age = 26
const hasJob = false

const user = {
    name : "arron",
    age : 26,
    hasJob : true,
    socialMedia: {
        twitter:"",
        instagram:""
    } 
}
//dot syntax
console.log(user.name)
//string literal indexing
console.log(user["hasJob"])
//variable syntax
const newKey = "age"
console.log(user[newKey])

//const does not apply to compound data types
user.age = 40
console.log(user.age)

user.socialMedia.twitter

const numbers =[1,2,3]
//subtract one gives us the last indicies in case you dont know how big the array is 
console.log(numbers[nums.length - 1])

const product = {
    name:"shiny shoes",
    price:100,
    brand:"gucci",
    color:"black",
    soldOut:false
  }
  
  product.sale = true
  product.tags = ["men","luxary"]
  product.soldOut = true
  console.log(product)

    