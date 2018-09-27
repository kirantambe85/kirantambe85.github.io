/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
// Usage of Destructing to assign each variable of an array to other vars
var array = [1001, 'Kiran', 'TechLead'];
/*
let empNo = array[0];
let empName = array[1];
let empDesg = array[2];
 */
var empNo = array[0], empName = array[1], empDesg = array[2];
console.log("empNo : " + empNo + " empName:" + empName + " empDesg :" + empDesg);
// Usage of Destructing to exchange the values of two vars
var a = 10;
// Usage of Destructing to assign each variable of an Object to other vars
// Best usage is to exchange the value btw a & b
