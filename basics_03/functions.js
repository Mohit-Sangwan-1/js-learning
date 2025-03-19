// ===========================   FUNCTIONS  ========================================

/*
 a function is a block of reusable code designed to perform a specific task. Functions can be defined using the function keyword followed by a name and parentheses, which may include parameter names separated by commas.
*/

function sayMyName(){
    console.log("M");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("t");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
    
// }
// addTwoNumbers(3,4) // it returns 7
// if we store it in variable 
// const result = addTwoNumbers(3,4) // it returns 7
// console.log(result); // it returns undefined
// returns and console works differently

function addTwoNumbers(number1,number2){
    let result = number1+number2
    return result
    console.log("Mohit Sangwan"); //after return js never return any value written after return keyword
    
}
// const result = addTwoNumbers(3,7)
// console.log("result :" ,result);

// function loginUserMessage(userName){
//     return `${userName} just logged in`
// }

// console.log(loginUserMessage("Sangwan"));


function loginUserMessage(userName){
    // if(userName === undefined){
    //     console.log("Please enter a userName");
    //     return
    // }
    if(!userName){
        console.log("Please enter a userName");
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage());

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2)); // return 2
// but if there are multiple items in our cart 
// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,500)); // it returns just first value 
// to fix this we will do some operations using rest operator
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500)); // it returns all values in an array [200,400,500]

// function with object

const course ={
    courseName : "JS in Hindi",
    price: 199
}
function objectHandle(anyObject){
    console.log(`Course name is ${anyObject.courseName} and price is ${anyObject.price}`);
    
}
objectHandle(course) // it works fine and return value Course name is JS in Hindi and price is 199

// but we will face problem when data types and name of key changed 

const   myNewArr=[200,400,100,3000]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArr)); // it reutns 400 which isindexed at1




