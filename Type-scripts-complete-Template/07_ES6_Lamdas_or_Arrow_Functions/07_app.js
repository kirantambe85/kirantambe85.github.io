/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/
// Normal No-args function , same Arrow Function
var greetNormal = function () {
    return "Good Morning";
};
console.log("Normal : " + greetNormal());
var greetArrow = function () { return "Good Morning"; };
console.log("Arrow : " + greetArrow());
// Normal function with Args and Arrow Function
var greetArgsNormal = function (name) {
    return "Good Morning " + name;
};
console.log("Normal : " + greetArgsNormal('john'));
var greetArgsArrow = function (name) { return "Good Morning " + name; };
console.log("Arrow : " + greetArgsArrow('williams'));
// Normal function to find the sum of two numbers with Arrow Function
var sumNormal = function (a, b) {
    return a + b;
};
console.log("Normal : " + sumNormal(10, 20));
var sumArrow = function (a, b) { return a + b; };
console.log("Arrow : " + sumArrow(10, 20));
// Normal function to find the length of an array with Arrow Function
var array = [10, 20, 30, 40, 50];
var lengthNormal = function () {
    return array.length;
};
console.log("Normal: " + lengthNormal(array));
var lengthArrow = function (array) { return array.length; };
console.log("Arrow : " + lengthArrow(array));
// Create an array with the length of each element of an array
var movies = ['Baahubali', 'Dangal', 'Drushyam'];
var movieLength = movies.map(function (movie) {
    return movie.length;
});
console.log(movieLength);
// Arrow Function for the above example
var movieLengthArrow = movies.map(function (movie) { return movie.length; });
console.log(movieLengthArrow);
