/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"
*/
// Usage of for...in loop from ES5
var str = '';
var technologies = ['HTML', 'CSS', 'JavaScript', 'JQuery', 'AngularJS'];
for (var index in technologies) {
    var element = technologies[index] + " ";
    str += element;
}
console.log(str);
// Usage of for...of loop from ES6
str = '';
for (var _i = 0, technologies_1 = technologies; _i < technologies_1.length; _i++) {
    var element = technologies_1[_i];
    str += element + " ";
}
console.log(str);
