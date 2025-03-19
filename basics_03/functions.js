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

console.log(loginUserMessage());

