/*
JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC
*/
let myDate = new Date
console.log(typeof myDate);  // type of date is object which can be interviewer ask sometimes
// console.log(myDate); // it returns the date like this 2025-03-16T23:18:17.701Z 
// console.log(myDate.toString()); // it returs the date like this Sun Mar 16 2025 23:20:33 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //it returns Sun Mar 16 2025
// console.log(myDate.toISOString()); //it returns the value 2025-03-16T23:22:13.125Z
// console.log(myDate.toJSON()); //it returns the same value 2025-03-16T23:22:56.713Z
// console.log(myDate.toLocaleString()); // it returns 3/16/2025, 11:23:56 PM

const myCreatedDate = new Date(2023 , 0 ,23)
console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023 month always starts from 0 in javascript ##########

// const anotherCreatedDate= new Date(2023,0,23,5,3)
// console.log(anotherCreatedDate.toLocaleString()); // it returns the DATE WITH hours and minutes 1/23/2023, 5:03:00 AM

const anotherCreatedDate= new Date("2023-00-23") // date syntax yy-mm-dd which is year month date 
console.log(anotherCreatedDate.toLocaleString()); // it returns the Invalid Date when we count in single digit it return the month but when we count in format month always starts from 01

const createdDateOne= new Date("2023-01-23") // date syntax yy-mm-dd which is year month date 
console.log(createdDateOne.toLocaleString()); // it returns the 1/23/2023, 12:00:00 AM

const createdDateTwo= new Date("01-14-2023") // date syntax mm-dd-year which is month date year
console.log(createdDateTwo.toLocaleString()); // it returns the 1/14/2023, 12:00:00 AM
// ======================= time stamps in javascript ====================================================
// it is used in quizes and polls 

const myTimeStamp = Date.now()
console.log(myTimeStamp); // it returns the value 1742168575457 which is in milisecconds from 1970

// while making any hotel booking design we have to compare two dates so we use this syntax 
 console.log(createdDateTwo.getTime()); // it returns the value 1673654400000

 //now we have to big values in same format now we can easily compare this type of comparison used in big projects
 console.log(Math.floor(Date.now()/1000));  // converted in seconds 
 

 









