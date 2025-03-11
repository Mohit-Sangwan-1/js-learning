// To store user data or information we need a memory space
// variables and constant are part of our memory space
// Variables data can be changed in further declaration
// variables can be defined as var and let both works same . Now we don't use var because there is a problem in javascript it doesn't know about scope . in programming currely braces are known as scope " {} " in initial days javascript don't works on scope. it don't have control on block scope
/*
 prefer not to use var 
because of issue in block scope and functional scope
 */
// constant data can't be changed it remains fixed after declaration

const accountId = 12345666
let accountEmail="mohitsangwan@gmail.com"
var accountPassword="abcd1234"
accountCity="Charkhi Dadri"

// accountId=2 // not allowed it's already defined
accountEmail="sangwanmohit@gmail.com"
accountPassword="2112"
accountCity="Gurgaon"
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity])