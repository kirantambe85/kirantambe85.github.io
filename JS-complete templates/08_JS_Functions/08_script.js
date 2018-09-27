//creation of a simple function with no args and execute a function
function greet() {            //fun.declaration
    console.log('Good Morning');
}
greet();     //fun. calling

//creation of a simple function with args
function carEngine(fuel){
    console.log('I am from carEngine & i got the fuel ' +fuel);
}
carEngine('Diesel')
// executing a function with less number of params
function giveMeLessGifts(chocolates,biscuits) {
    console.log('Chocolates: '+ chocolates+'Biscuits: ' +biscuits);
}
giveMeLessGifts(40,20);

//executing a function with more number of params
function giveMeMoreGifts(chocolates,biscuits) {
    console.log('Chocolates: '+ chocolates+'Biscuits: ' +biscuits);
}
giveMeMoreGifts(40,20,'Gifts');

// functions with return values

function iceCreamBox(Money) {
    var iceCream='Ice Cream Rs:' +Money;
    return iceCream;
}
var cone = iceCreamBox(50);
console.log(cone);

//function with empty return /no return

function iceCreamBox2(Money) {
    var iceCream='Ice Cream Rs:' +Money;
    return iceCream;
}
var cone2 = iceCreamBox2(60);
console.log(cone2);

// function Expressions with name and execution

var greetFn=function () {
                     console.log('Iam From Greenfn Function Expression');
};
greetFn();

// Functions as arguments without args
function greet1() {
    console.log('Iam ')
}

// Functions as arguments with args args


// Functions in Objects and Execution
var student={
    firstName:"Arjun",
    lastName:'Reddy',
    fullname:function () {
        console.log(this.firstName+" "+this.lastName);
    }
};

// this keyword for accessing objects props in function


// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */
var employee ={
    name:'John',
    age:40,
    desg:'manager',
    Address:{
        city:'Hyderabad',
        state:'Telangana',
        Country:'India'
    },
    isFromState:function (state) {
        return employee.address.state===state;
    },
    isFromCity:function (city) {
        return employee.address.city===city;
    },
    isFromCountry:function (Country) {
        return employee.address.Country===Country;
    }
};
console.log('is From Telengana?'+employee.isFromstate('Telangana'));
console.log('is From Hyderabad?'+employee.isFromcity('Hyderabad'));
console.log('is From India?'+employee.isFromCountry('India'));
// Default Function Arguments (arguments)

function defaultArgs() {
    console.log(arguments);
}
defaultArgs('john',40,Manager);


