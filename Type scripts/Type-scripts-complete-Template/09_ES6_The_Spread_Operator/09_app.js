/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
// using spread operator an array can be expanded and pass it as an arguments
var numbers = [10, 50, 4, 25, 8412, 2, 525];
var min = math.min.apply(math, numbers);
console.log("The Min value is : " + min);
// Use spread operator to add an array in the middle of another array
var array1 = [30, 40, 50];
var array2 = [10, 20].concat(array1, [60, 70, 80]);
console.log("Array2: " + array2);
// use spread operator to create a new copy of an array
var tech1 = ['HTML', 'CSS', 'JavaScript',];
