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