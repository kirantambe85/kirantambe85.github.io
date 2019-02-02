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
let greetNormal = function() {
    return "Good Morning";
};
console.log(`Normal : ${greetNormal()}`);

let greetArrow = () => "Good Morning";
console.log(`Arrow : ${greetArrow()}`);

// Normal function with Args and Arrow Function
let greetArgsNormal = function (name) {
    return `Good Morning ${name}`;
};
console.log(`Normal : ${ greetArgsNormal('john')}`);

let greetArgsArrow= (name) => `Good Morning ${name}`;
console.log(`Arrow : ${greetArgsArrow('williams')}`)

// Normal function to find the sum of two numbers with Arrow Function
let sumNormal = function(a,b) {
    return a + b;
};
console.log(`Normal : ${sumNormal(10,20)}`);

let sumArrow = (a , b) => a + b;
console.log(`Arrow : ${sumArrow(10,20)}`);



// Normal function to find the length of an array with Arrow Function
let array:Array<number>=[10,20,30,40,50];

let lengthNormal = function () {
         return array.length;
};
console.log(`Normal: ${lengthNormal(array)}`);

let lengthArrow =(array) => array.length;
console.log(`Arrow : ${lengthArrow(array)}`);

// Create an array with the length of each element of an array

let movies = ['Baahubali' , 'Dangal' , 'Drushyam'];

let movieLength = movies.map(function (movie) {
        return movie.length;
    }
);
console.log(movieLength);
// Arrow Function for the above example
let movieLengthArrow = movies.map(movie => movie.length);
console.log(movieLengthArrow);

