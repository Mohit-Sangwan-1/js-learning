// ==================== String  ===========================================

/*
string can be denoted by single quote ('') and double quote ("")
*/

const name = "Mohit Sangwan"
const repoCount = 50

// console.log(name + repoCount + " repo published")  // this is a outdated syntax don't use this 

// modern way is using backtics benifts of using backtics is string interpolation because we make placeholder so we can directly inject values   
// console.log(`My name is ${name} and my repo count is ${repoCount}`);
// benifts of using modern syntax we can apply methods on the go 
//console.log(`My name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

// Another method to declare string
const gameName = new String('MohitSC')  //we can use another syntax using new keyword by using object of javascript using String and provide values in constructor which is covered in braces and single quote
// it will return same value it also invokes the object in console it provide a good information about our values like length and prototype 
console.log(gameName);
console.log(gameName[0]); //it returns the value of key asked 
console.log(gameName.length); //it returns the length of object
console.log(gameName.toUpperCase()); //it returns the value in uppercase these are the preefined function of javascript .These function or prototype don't changes the original string 
console.log(gameName.charAt(3)); // it retures the values of character on position 3 or value asked 
console.log(gameName.indexOf('t')); // it retures the values of position of character stored 




