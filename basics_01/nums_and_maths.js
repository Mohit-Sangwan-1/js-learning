const score ='200ss'
// console.log(score); // we get just value not datatype also get other character except than numbers

const balance = new Number(100) // assign data type with new keyword help us to get exact result with numbers
// const balance = new Number(100ss) //it will not alowed any other character that number
// console.log(balance); // here we get data type 
// console.log(balance.toString().length); //to get length of we have to convert it to string than we can get length
// console.log(balance.toFixed('2')); // while we do calculation in ecommerce website or in gst price we have to do maths for that we need to make values in same format for exact result method like toFixed helps to do so

// const anotherNumber = 23.8943 //in console we get precised values in three digits which is 23.9
// const anotherNumber = 123.9856 // in console we get precised value in three digits which is 124
const anotherNumber = 1123.8943  // in console we get precised value in three digits which is 1.12e+3 here 1.12 are three digits other value is stored in exponential
//console.log(anotherNumber.toPrecision(3));

const hundreds = 10000000 
// console.log(hundreds.toLocaleString()) // it converts the value in US number formats like this 10,000,000
//console.log(hundreds.toLocaleString('en-IN')) // it converts the value in Indian number formats like this 10,000,000

// ======================== MATHS ==========================================================
// maths library comes with javascript by default

// console.log(Math); // it returns like 'Object [Math] {}' which defines it is a object and have a lot of properties
// console.log(Math.abs(-4)); // returs value 4 abs converts negative value to positive
// console.log(Math.round(4.6)); // round it function to round of the value of integer
// console.log(Math.ceil(4.2)); // ceil is function which return highest the value  if it finds the integer a bigger that value before decimal
// console.log(Math.ceil(4.2)); // ceil is function which return the smillest value stored before the decimal point

// most important conceptin math is random which we use mostin javascript

console.log(Math.random());
// while consoling it we find values different everytimes as we can see below
/*
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.5076989804201768
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.060884390822425694
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.06586344511436426
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.5244704210166815
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.39467425006366685
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.13467280885037858
*/

// while making games like dice to get values in 0-6 or ther games where we need values between 0-10 we do some methods as we can see below

//console.log(Math.random() * 10);
//as we can see it return value by shifting the digits
/*
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.8854113068615783
7.479132312139926
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.6156029150524593
8.771558291132218
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.6474077656362554
7.889154384582815
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.2986244443120454
3.354854962603373
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.2822611159256849
8.66400081573413
*/

// but our values can be zero so we can add +1 

// console.log(Math.random() * 10 +1);
//it returns the value like this        
/*
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.952056945679987
5.480485860525391
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.32391831495199863
10.19275479432159
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.14537805935143222
8.953208403356186
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.49925510306016996
5.165063193617535
*/

console.log(Math.random() * 10 +1);
console.log((Math.random() * 10) +1); // to follow math properties BODMAS wrap it in proper format
console.log(Math.floor(Math.random() * 10) +1);

// below are the result 

/*
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.20193885086116015
7.966634172428039
6.268927845335851
10
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.9981741661180035
1.3321520139311773
3.7433606292838353
6
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.7098002731866027
9.235822824135838
2.637397178162292
1
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.02277732883489625
4.113505250584671
4.958214741228141
10
*/

//min and max values concept
const min =10
const max =20
console.log(Math.floor(Math.random()*(max-min + 1)) +min);
// result are below 
/*
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.6033303793506557
4.932994894656103
8.21838626120299
2
13
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.6268486845918069
10.304567071756578
6.99618535394145
10
19
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.9212236943080319
8.381309338990318
3.7168858921185812
6
17
@Mohit-Sangwan-1 ➜ /workspaces/js-learning (main) $ node basics_01/nums_and_maths.js 
0.0632150360951742
2.2770561569012373
7.422945954600403
10
19
*/


//============ IMPORTANT NOTES ==================
/*
math.random always gives values between 0-1 which can be 0.1 , 0.2,0.3
while multiplying values with it can give result in 0.something 
to avoid these things we can add +1 which will result in 1 or can be much after decimal
*/

