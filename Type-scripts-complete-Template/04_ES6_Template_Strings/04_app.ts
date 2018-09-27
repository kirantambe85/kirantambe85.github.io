/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/




/*
Create en Employee Object and prepares a Template String using
String Concatenation and Template String.
 */

// Using string Concatenation
let emp = {
    name:'John',
    age:40,
    desg:'Manager'
};
let stringConcat:string="<h2>" + emp.name + "</h2>"+
                        "<h2>" + emp.age + "</h2>"+
                        "<h2>" + emp.desg + "</h2>";

let containerElement = document.querySelector('#container');
containerElement.innerHTML=stringConcat;

//Template String
let laptop = {
    company :'Apple',
    RAM:'16GB',
    disk : '1 TB'
};
let templateString:string=`<h2>Laptop : ${laptop.company}</h2>
                           <h2>Ram : ${laptop.RAM}</h2>
                            <h2>Disk : ${laptop.disk}</h2>`;
containerElement.innerHTML=templateString;


