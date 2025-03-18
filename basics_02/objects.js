// =========================objects in javascript ==================================
/*
in javascript objects can be declared by two types 
first is by literal 
objects can be declared using object literals, which consist of a list of name-value pairs inside curly braces {}. For example:

const car = {type:"Fiat", model:"500", color:"white"};

########################

seccond one is by constructor 
Alternatively, objects can be declared using constructor functions. First, define a constructor function for the object type that specifies its properties and methods. Then, create an instance of the object with the new keyword. For example:

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car("Eagle", "Talon TSi", 1993);

also known as singleton
// Object.create // this method is called object created using constructor

*/

 // symbols in javascript
 
 const mySym=Symbol("myKey2")
const jsUser = {
    name : "Mohit" ,
    "full name":"Mohit Sangwan",    
    [mySym]: "myKey2",
    age : 24,
    city : "Gurgaon",
    email: "mohitsangwan192@gmail.com",
    isLoggedIn : true,
    lastLoginDays:["Monday","Friday"]
} // we have to define elements in key value pair

// console.log(jsUser.email); // we can access object using this syntax 
// // console.log(jsUser.full name); // using this syntax we can not access the values if they are stored in this format

// console.log(jsUser["name"]);
// console.log(jsUser["full name"]); // using this method values can be access

// console.log(jsUser[mySym]); // returns myKey1
// console.log(typeof jsUser[mySym]); // string // why it is string

jsUser.email ="sangwanmohit192@gmail.com"
// Object.freeze(jsUser) // after freezing object values can not be changed
jsUser.email="sangwanmohit291@gmail.com"
// console.log(jsUser);
jsUser.greeting = function(){
    console.log("Hello Sangwan");
    
}

console.log(jsUser.greeting());

jsUser.greetingTwo=function(){
    console.log(`Hello js user , ${this["full name"]}`);
    
}
console.log(jsUser.greetingTwo());


// objecrt declaration using constructor

// const tinderUser = new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Nain"
tinderUser.isLoggedIn=true

// console.log(tinderUser);

const regularUser={
    email:"mohitsangwan192@gmail.com",
    fullName:{
        firstName:"Mohit",
        lastName:"Sangwan"
    }
}

console.log(regularUser.fullName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3 ={obj1 , obj2} // it returns { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3); //it returns { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// most used syntax is spread 
const obj3={...obj1,...obj2};
console.log(obj3);


const users=[
    {
        id:1,
        email: "msangwan@gmail.com"
    },
    {
        id:2,
        email: "sangwanm@gmail.com"
    },
    {
        id:3,
        email:"msangwan192@gmail.com"
    }
]

console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //it return the key in arrays //[ 'id', 'name', 'isLoggedIn' ]


//object destructoring

const course={
    courseName:"js in hindi",
    coursePrice:"999",
    courseInstructor:"Hitesh"
}
course.courseInstructor















