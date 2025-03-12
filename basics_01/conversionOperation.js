// let score = 33; 
// let score = "33"; show result same  
let score = "33abc"; // shows result NaN(Not a Number)
// let score = true // result will be 1
// let score = false // result will be 0

// console.log(typeof score);
// console.log(typeof(score));  // we can write it as a method in paranthesis

// output will be same always
let valueInNumber = Number(score);
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

let isLoggedIn = 1;
// let isLoggedIn = ""; // value will be false
// let isLoggedIn = "Mohit"; // value will be true
let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)


let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


//  =============== OPERATIONS ===============================

let value = 3 
let negValue = -value
// console.log(negValue);

let str1 = "Hello"
let str2 = " Sangwan"
let str3 = str1+str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

let gameCounter=100
// ++gameCounter; //prefix operator
gameCounter++; // postFix operator
console.log(gameCounter)

// for detailed about prfix and postfix documentry available on mdn




