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

all non primitive data types have typeof function 
but we get result as object in console while checking through console
###### if you want to master javascript then master object and arrays 


/*

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

/*

JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
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

console.log(typeof myFunction); // it returns datatype as function but it is called objectFunction
// console.log("Mohit Sangwan");




