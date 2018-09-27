// creation of arrays
var array=[10,20,30,40,50,60];
console.log(array);


// Accessing an array and its properties
console.log(array[0]);//10
console.log(array[3]);//40

// Access not existed property from an array
console.log(array[95]);//undefine

// adding properties to an array
array[6]=70;
console.log(array);

// Accessing length of an Array
console.log('no. of Elements: ')

// reverse the array using reverse()


// Remove the first value of the array: shift()


// Add value to front of the array:unshift()


// Remove the last value of the array: pop()


// Add value the end of the array: push()


// Remove an element from an Array , Arguments: colors.splice(pos,n):


// Create a copy of an array. Typically assigned to a new variable:slice();
var array1=[10,20,30,40,50];
var array2=array1.slice();
array1.shift();
console.log(array2);

// indexOf()
array=[10,20,30,40,50];
var number=20;
if(array.indexOf(number)===-1){
    console.log('element is not exists');
}
else{
    console.log('the element Exists @Index ' +array.indexOf(number));
}

// Join()
array=[10,20,30,40,50];
var strArray=array.join("-");
console.log(strArray);

// Prove an array is an Object


// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
