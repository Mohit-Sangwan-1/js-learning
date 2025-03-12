// ======================   DataTypes ========================================= 
/* 
// DataTypes are devided in two types
1. Primitive Data Type 
2. Non-Primitive Data Type 
 having difference of call by value or call by reference 
 on basis of data stored and can access

 #  ===============================      Primitive Data Types 
 these data types are call by values when we copies these data types they don't provide reference of memory that data is a copied data of memory 
 Changes we do in primitive occurs in copy  
 these are devided in 7 categories
  1. String 
  2. Number
  3. Boolean
  4. Null
  5. Undefined
  6. Symbol // it will be used in react or advanced javascript while we are using same component many times and want to make button unique we wrap that button in a symbol  
  7. BigInt // mostly values covered in Number but for some scientific values or bigger values not handled in number  we store in bigInt  

*/

// ==================================== reference (non-primitive)
/* 
reference are allocated directly in memory
1.Arrays 
2.Object
3.Function

###### if you want to master javascript then master object and arrays 

*/

// Type of javascript :Dynamically typed language or static type language
// Ans. Javascript is Dynamically typed language


const score =100
const scoreValue=69.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // result will be false id's never same returned value never same 

const bigNumber = 3456321456n

const hero = ["oggy" , "tom" , "jerry"]  // arrays defined in braces
//  objects always defined in curly braces
let myObj={
  name : "Mohit Sangwan",
  age : 24,
}

// function    we can treat function as a variable
const myFunction=function(){
  console.log("Mohit Sangwan");
  
}

console.log("Mohit Sangwan");
console.log("Mohit Sangwan");




