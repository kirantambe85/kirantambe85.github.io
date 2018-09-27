// Assignment operator =
var fileName = 'operator';
console.log('fileName :' + fileName);

// Arithmetic operators + - * /
var a=10;
var b=20;
var sum=a+b;
console.log("the sum of a,b is:" +sum);


// Short hand math += , -= , *= , /=
var p=10;
var q=20;
var add=0;
add=add+(p+q);//0+10+20 =30
add+=(p+q); //30+10+20=60
console.log(add);//60


// Conditional operators < , > , <= , >= , !=
var age=15;
if (age<18){
    console.log("you are Minor");
}
else{
    console.log("you are Major");
}

// Unary Operator ++ , -- (pre , post)
 a=10;
a=a+1;
a+=1;
a++;
console.log('the value of a:'+a);


// Logical operators AND , OR
var inRelation=true;
var parentsAgreed=false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else {
    console.log('wait until the parents Agreed');
}

// String Concatenation Operator
var str=10+20+"20"+40+20;
console.log(str);

// Ternary operator (? :)
age=25;
(age<18)?console.log('You are Minor'):console.log('You are Major');

// Type of operator
var abc;
console.log('value :'+ abc + 'data type: ' + typeof abc);
abc=10;
console.log('value :'+ abc + 'data type: ' + typeof abc);
abc='test';
console.log('value :'+ abc + 'data type: ' + typeof abc);
abc=true;
console.log('value :'+ abc + 'data type: ' + typeof abc);
abc=null;
console.log('value :'+ abc + 'data type: ' + typeof abc);


// == operator
a=10;
b='10';
if (a==b){
    console.log('Both are Equal');
}
else {
    console.log('Both are Not Equal');
}



// === operator
a=10;
b='10';
if (a===b){
    console.log('Both are Equal');
}
else {
    console.log('Both are Not Equal');
}