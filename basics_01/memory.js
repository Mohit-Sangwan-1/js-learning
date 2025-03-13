// #######################       Memory              ###############################################


/*

  1. Stack(Primitive)         2. Heap (Non Primitive)

*/


let myYoutubeName = "Mohit Sangwan"
let anotherName = myYoutubeName
anotherName="Sangwan Mohit"

console.log(myYoutubeName)
console.log(anotherName)

// in stack memory changes made will occur to copy not to original our original values remains same always

let userOne={
    email : "mohitsangwan@gmail.com",
    upi : "mohitsangwan192@oksbi"
}

let userTwo = userOne

userTwo.email = "sangwanmohit@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)

// in heap memory it always provide reference values when we do changes it directly changes to original values