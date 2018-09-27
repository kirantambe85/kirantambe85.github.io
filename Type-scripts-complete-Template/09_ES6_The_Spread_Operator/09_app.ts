/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/

// using spread operator an array can be expanded and pass it as an arguments
let numbers:Array<number>=[10,50,4,25,8412,2,525];
let min : number =math.min(...numbers);
console.log(`The Min value is : ${min}`);

// Use spread operator to add an array in the middle of another array
let array1:Array<number>=[30,40,50];
let array2:array<number>=[10,20,...array1,60,70,80];
console.log(`Array2: ${array2}`);

// use spread operator to create a new copy of an array
let  tech1:Array<string>=['HTML','CSS','JavaScript',