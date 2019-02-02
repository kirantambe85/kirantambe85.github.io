//creation of objects , adding properties ,  retrieval
var fridge = {};
fridge.eggs = 40;
fridge.fruits = 20;
fridge.milk = 5;
console.log(fridge);

//to access individual properties of an objects
console.log('Eggs : ' + fridge.eggs);
console.log("Fruits : " + fridge.fruits);

// Object Literal
var mobile ={
    color : 'black',
    company : "Lenovo",
    RAM : "2GB",
    Capacity :'16GB'
};
console.log(mobile);
console.log('company name : ' + mobile.company);

//Accessing not Existing Property
console.log('mobile screen size : ' +mobile.screen);

// dot Notation .[] Notation
console.log('capacity : ' + mobile.capacity);
console.log('capacityv : ' + mobile['capacity']);

// Accessing Dyanamic properties using [] notation
var prop ='color';
console.log('mobile prop : ' + mobile[prop]);

prop = 'Capacity';
console.log('mobile prop : ' + mobile [prop]);

//Nested object creation and Retrival
var car ={
    model : 'Benz',
    color: 'white',
    year : 2018
    Features :{
        airbags:true,
        foglamp:true,
        fuel:'diesel',
        mileage:'8kmpl'
    }
};
// Accessing outside object
console.log(car);
// accessing the Nested object
console.log(car.features);

// Delete the property from an object
delete car.features.mileage;
console.log(car.features);