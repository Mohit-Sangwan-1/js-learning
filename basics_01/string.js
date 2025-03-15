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
const gameName = new String('Mohit-ss-com')  //we can use another syntax using new keyword by using object of javascript using String and provide values in constructor which is covered in braces and single quote
// it will return same value it also invokes the object in console it provide a good information about our values like length and prototype 
//console.log(gameName);
// console.log(gameName[0]); //it returns the value of key asked 
// console.log(gameName.length); //it returns the length of object
// console.log(gameName.toUpperCase()); //it returns the value in uppercase these are the preefined function of javascript .These function or prototype don't changes the original string 
// console.log(gameName.charAt(3)); // it retures the values of character on position 3 or value asked 
// console.log(gameName.indexOf('t')); // it retures the values of position of character stored 

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-7,4) // it also support negative values
console.log(anotherString);

const newStringOne = "     Sangwan   "
console.log(newStringOne)
console.log(newStringOne.trim()) // some times user add extra spaces whilewe asking email or something else to remove extra spaces and get a clean data we use trim to remove extra space

/*
some times user put black spaces between a url and browser add %20 to replace that white space or blank space we use some methods below are the examples
user url = "https://mohit.com/mohit sangwan" browser convert it to %20
*/

const url ="https://mohit.com/mohit%20sangwan"
console.log(url.replace('%20', '-')); //using this method we can replace any values in our variable
console.log(url.includes('mohit')); // it helps to find if value is stored in our variable it return in true and false 
console.log(url.includes('singh')); // it helps to find if value is stored in our variable it return in true and false 
console.log(gameName.split('-')); // he split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.








