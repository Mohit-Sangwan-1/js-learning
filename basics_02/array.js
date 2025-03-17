// array :- collection of multiple items in single variable which can be resizable and a mix of different data types
const myArr =[1,2,3,4,5]
// console.log(myArr);

const myArrTwo = new Array(5,4,3,2,1) // modern way to declare arrays
// console.log(myArrTwo);

// // arrays methods
// myArr.push(8,7,6) // push method is used to push or add element to existing array list
// console.log(myArr);
// myArr.pop() // pop metod is used to remove the last value of arraya
// console.log(myArr);
// myArr.unshift(22)
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

const newArr = myArr.join() // join method converts the array into a string
// console.log(newArr);
// console.log(typeof newArr);

// console.log("A " , myArr);
const myNewArrOne = myArr.slice(1,3) // slice method doesn't change the original array 
// console.log(myNewArrOne); 

// console.log("B " , myArr);

const myNewArrTwo = myArr.splice(1,3) // splice method change the original array by adding or removing the original element 
// console.log("C " , myArr);
// console.log(myNewArrTwo);



const marvelHeros=["thor","ironman","spiderman"]
const dcHeros=["superman","flash","batman"]

// marvelHeros.push(dcHeros) // push method directly push the array considering an object into the array
// push works or modify existing array  ####### MOST IMPORTANT POINT IT CHANGES THE ORIGINAL ARRAY
// console.log(marvelHeros); // it returns [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvelHeros[3][1]); //while returing any value we have to consider the pushed array as an object array and later we have to provide that index which is not a good syntax

const allHeros=marvelHeros.concat(dcHeros)
// console.log(allHeros); // it dosen't change the original array and returns [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// using concat we can only merge two arrays 

// to merge multiple arrays we can use spread method 
const allNewHeros=[...marvelHeros,...dcHeros] // using spread we can merge multiple arrays
// console.log(allNewHeros); // it returns [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const anotherArray=[1,2,3,[4,5,6],7,[9,8,[7,6],22],45]
// console.log(anotherArray);
const modifiedArray=anotherArray.flat(Infinity) // it helps to arrange array by seprating each element from arrays
//A new array with the sub-array elements concatenated into it.
// console.log(modifiedArray);

console.log(Array.isArray("Mohit Sangwan"));
console.log(Array.from("Mohit Sangwan"));
console.log(Array.from({name:"Mohit Sangwan"})); //it returns as an object

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));  //istead of array.from we can use array.of returns a new array from a set of elements

