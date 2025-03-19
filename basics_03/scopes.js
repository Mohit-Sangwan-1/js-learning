//  scopes in javascript 
// let a = 10
// const b = 20
// var c= 30

// console.log(a); 
// console.log(b);
// console.log(c);

// abovr things works fine but when we call it in function or in scope "{}" curly braces are known as scope 
let a =300
if (true){
    let a = 10
    const b = 20
    var c= 30
    console.log("inner : ", a); // it returns value 10 which is a block scope value
    
}

// console.log(a); // it will not return any value passes an reference error saying a is not defined 
// console.log(b);  // again show referrance error
console.log(c); // returns the value of variable 
// thats why we don't use var in javascript     
console.log(a); // it returns value 300 which is a global scope


//  ==============  SCOPE LEVELIN JAVASCRIPT ====================================
function one(){
    const userName="Mohit Sangwan"
    function two(){
        const website="youtube"
        console.log(userName); // our internal function can access outer variables
        
    }
    // console.log(website); // it will pass referance error 
    two()
}
one()

if (true){
    const userName="Mohit Sangwan"
        if (userName==="Mohit Sangwan"){
            const website=" youtube"
            console.log(userName+website);
            
        }
        // console.log(website); //referance error
        
}
// console.log(userName); // referance error
// returns Mohit Sangwan youtube

//  ================    INTERESTING =====================================
console.log(addOne(5));
  // returns 6 our function 
function addOne(num){
    return num+1
}
console.log(addOne(5));

// console.log(addTwo(5)); //showing error ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5)); // works fine return value 7



 
