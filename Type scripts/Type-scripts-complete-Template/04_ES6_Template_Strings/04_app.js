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
var emp = {
    name: 'John',
    age: 40,
    desg: 'Manager'
};
var stringConcat = "<h2>" + emp.name + "</h2>" +
    "<h2>" + emp.age + "</h2>" +
    "<h2>" + emp.desg + "</h2>";
var containerElement = document.querySelector('#container');
containerElement.innerHTML = stringConcat;
//Template String
var laptop = {
    company: 'Apple',
    RAM: '16GB',
    disk: '1 TB'
};
var templateString = "<h2>Laptop : " + laptop.company + "</h2>\n                           <h2>Ram : " + laptop.RAM + "</h2>\n                            <h2>Disk : " + laptop.disk + "</h2>";
containerElement.innerHTML = templateString;
