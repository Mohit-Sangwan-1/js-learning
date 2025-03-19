//  IMMEDIATELY INVOKED FUNCTION EXPRESSION     (IIFE)
/*
TO START OR LOAD OUR DATA FROM DATABASE 
TO AVOID FROM GLOBAL SCOPE POLLUTE
we face problems from global scope pollution to remove that pollution we use iife
*/

// function chai(){
//     console.log("DB connected");
    
// }
// chai()  // it will work fine return DB connected 

// using iife 
(function chai(){ // this is called named iife
    console.log("DB connected");
    
}) () ; // as you can see our function chai get executed ............. syntax for this is we have to wrap our statement in paranthesis and one more more paranthesis after function to execute it

// there is also a problem in iife it invoked immediately but it don't know where to stop it in this situation we have to end that line 
//to end that function we have to add a semicolon in last of every function 
(function aurCode(){
    console.log("DB connected two");
    
}) (); // it shows an error 
// after adding semicolon to function it works fine 
(()=> {
    console.log("DB connected three");
    
}) ();
((name)=> {
    console.log(`DB connected ${name}`);
    
}) ("Mohit");