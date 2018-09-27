// Create a simple function to add two numbers
function addNumbers(a:number,b:number):number{
    let sum:number = 0;
    sum = a + b;
    return sum;
}
console.log(`The Sum of a, b is : ${addNumbers(10,20)}`);

// Create the same add function with first number as 'any' type
function addAnyNumber(a:any,b:number):number{
    let sum:number = 0;
    if(typeof a === 'number'){
        sum = a + b;
    }
    else if(typeof a === 'string'){
        if(isNaN(parseFloat(a))){
            sum = b;
        }
        else{
            sum = parseFloat(a) + b;
        }
    }
    else{
        sum = b;
    }
    return sum;
}
console.log(`Addition : 10 , 20 is : ${addAnyNumber(10,20)} `);
console.log(`Addition : '10' , 20 is : ${addAnyNumber('10',20)} `);
console.log(`Addition : 'abc , 20 is : ${addAnyNumber('abc',20)} `);
console.log(`Addition : true , 20 is : ${addAnyNumber(true,20)} `);
console.log(`Addition : {} , 20 is : ${addAnyNumber({},20)} `);

// Function Overloading in TypeScript , findMax of 1 , 2 , 3 numbers
function findMax(a:number):number;
function findMax(a:number,b:number):number;
function findMax(a:number,b:number,c:number):number;
function findMax(a:number,b?:number,c?:number):number{
    // a
    if(b === undefined && c === undefined){
        return a;
    }
    // a , b
    else if(c === undefined){
        return Math.max(a , b);
    }
    // a , b , c
    else{
        return Math.max(a,b,c);
    }
}
// console.log(`Max : ${findMax()}`); // invalid
console.log(`Max : ${findMax(10)}`);
console.log(`Max : ${findMax(10,20)}`);
console.log(`Max : ${findMax(10,20,30)}`);
// console.log(`Max : ${findMax(10,20,30,40)}`); // invalid
