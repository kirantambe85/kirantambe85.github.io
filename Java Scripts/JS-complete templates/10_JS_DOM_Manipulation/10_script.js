//BOM Operations

// width of the browser
var width=window.innerWidth;
console.log('width:'+width+ 'px');

// Height of browser
var height=window.innerHeight;
console.log('height:'+height+ 'px');


// Open a new Tab with google tab
window.open(('http://www.google.co.in'))
// print method
function printDoc() {
    window.print();
}
// DOM Properties to get body , title , URL
var body = document.body;
console.log(body);

var title =document.title;
console.log(title);

var URL =document.URL;
console.log(URL);
//DOM Methods
//document.getElementById();
//document.getElementsByClassName();
//document.getElementsByTagName();
//document.querySelector();
//document.querySelectorAll();

// Access and Change the Elements

// DOM Events
var h1Element =document.querySelector('#display');
h1Element.textContent='Good Morning';
h1Element.style.color='white';

var h2Element = document.querySelector('h2');
h2Element.style.backgroundColor='forestgreen';
h2Element.style.boxShadow='0 0 15px black';

// javascript Event Handling
var inputElement = document.querySelector('#user');
var userErrorElement=document.querySelector('#user-error');

function getUser(){
    console.log('Button clicked');
    var username = inputElement.value;
    if(username === 'kiran'){
        inputElement.style.borderColor='green';
        inputElement.style.backgroundColor='lightgreen';
        userErrorElement.textContent='Valid UserName';
        userErrorElement.style.color='green';
    }
    else{
        inputElement.style.borderColor='red';
        inputElement.style.backgroundColor='lightsalmon';
        userErrorElement.textContent='Invalid UserName';
        userErrorElement.style.color='red';
    }
}

// JavaScripts Event Listeners

// Get the Element
var ButtonElement=document.querySelector('#button');

// Hookup an event Listener
  ButtonElement.addEventListener('click',function () {
    var username = inputElement.value;
    if(username === 'kiran'){
        inputElement.style.borderColor='green';
        inputElement.style.backgroundColor='lightgreen';
        userErrorElement.textContent='Valid UserName';
        userErrorElement.style.color='green';
    }
    else{
        inputElement.style.borderColor='red';
        inputElement.style.backgroundColor='lightsalmon';
        userErrorElement.textContent='Invalid UserName';
        userErrorElement.style.color='red';
    }

});

// Event Listener for TextBox Element

//get the TextBox Element
var textBoxElement=document.querySelector('#user');

// hookup an event Listener
textBoxElement.addEventListener('keyup',function () {
    var username = inputElement.value;
    if(username === 'kiran'){
        inputElement.style.borderColor='green';
        inputElement.style.backgroundColor='lightgreen';
        userErrorElement.textContent='Valid UserName';
        userErrorElement.style.color='green';
    }
    else{
        inputElement.style.borderColor='red';
        inputElement.style.backgroundColor='lightsalmon';
        userErrorElement.textContent='Invalid UserName';
        userErrorElement.style.color='red';
    }

});