// console.log( 2 > 1)
// console.log( 2 >= 1)
// console.log( 2 < 1)
// console.log( 2 <= 1)
// console.log( 2 == 1)
// console.log( 2 != 1)

// result in above condition remains always same as expected

// but therr are some cases where 
// result also remains same in String

// we face problem when we  don't compare same type of dataType
     
console.log("2" > 1); // js automaticlly convert string into number in such cases
console.log("02" > 1);
// but problem is while we do comparison like this our comparison not provide predictable result
//  while comparing values make sure datatypes are same for these valu
// typescript never allows these type of comparison if values are not of same dataTppe

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

// ======== avoid above type of comparison make clean code 


/* 
equality check == 
and 
comparisons > < >= <=
works differently
comparisons convert null to a number,treating it as 0.
*/

console.log("2" ==2 ) // it shows result true
console.log("2" === 2 ) // it shows result false because === also checks datatype should be same as values