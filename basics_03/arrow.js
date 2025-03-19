//  ======================== ARROW FUNCTION =============================
const user ={
    username    :"Mohit Sangwan",
    price : 199,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        
    }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

// const chai = function(){
//     let userName = "Hitesh"
//     console.log(this.userName);
    
// } // returns undefined
const chai = ()=>{
    let userName = "Hitesh"
    console.log(this.userName);
    
} //returns undefined
chai() 


//  ================== ARROW FUNCTIONS ==================================
// ()=> {}  //synntax of arrow function

// const addTwo=(num1,num2)=>{
//     return num1 + num2
// }

//  implceted return 
// const addTwo=(num1,num2)=>num1 + num2 // it also works works another syntax
// const addTwo=(num1,num2)=>(num1 + num2 )  // we can wrap them in paranthesis
// return is wrapped in curly braces 
// const addTwo=(num1,num2)=>{userName:"Mohit Sangwan"} // object can't be access using this syntax we have to wrap object in paranthesis
const addTwo=(num1,num2)=>({userName:"Mohit Sangwan"}) // returns "Mohit Sangwan"
console.log(addTwo(3,4)); // returns 7  
