/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
var piValue=Math.PI;
console.log('PiValue:'+piValue);
// Math sqrt
var sqrt=Math.sqrt(144);
console.log('Sqrt of 144:'+sqrt);
// find the min of 4 numbers
var min=Math.min(10,45,671,21,3894,541,46);
console.log('Min value:'+min);
// find the Max of 4 numbers
var max=Math.max(10,45,671,21,3894,541,46);
console.log('Max value:'+max);
// find the 'x' to the power of 'y' value, ex: 2^4
var pow=Math.pow(2,4);
console.log('2^4 is :'+pow);
// generate the random numbers from 0 to 100
var random=(Math.round(Math.random()*100000)).toString();
console.log(random);
document.querySelector('#display').textContent=random;

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
var today = new Date();
console.log(today);
// Get proper date

function leadingZero(time) {
    if(time<=9){
        return'0'+time;
    }
    else {
        return time;
    }
}
var date = today.getDate() + '-' + (today.getMonth()+1) +'-' + today.getFullYear();
console.log(date);
// get full day of the week using switch statement
var day=new Date().getDay();
var str =" ";
switch(day){
    case 0:
        str='sunday';
        break;
    case 1:
        str='Monday';
        break;
    case 2:
        str='Tuesday';
        break;
    case 3:
        str='wednesday';
        break;
    case 4:
        str='Thursday';
        break;
    case 5:
        str='Friday';
        break;
    case 6:
        str='saturday';
        break;
    default:
        str =" ";
        break;
}
console.log("Today is : " + str);
// Display a Digital Clock on the web page
function indianClock() {
    var today = new Date();
    var options = {timeZone:'Asia/Kolkata'};
    var time =today.toLocaleTimeString('en-US',options);
    document.querySelector('#clock').textContent=time;
}
setInterval(indianClock,1000);


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
var num1=123;
console.log('value: ' + num1 + 'type: ' + typeof num1);

// convert to string
var strNum = num1.toString();
console.log('value : ' + strNum + 'type:' +typeof strNum);

// convert string to number
var num2 =parseInt(strNum);
console.log('value : ' + num2 + 'type:' +typeof num2);

//display currency value
var num3=5000;
var currency = num3.toFixed(2);
console.log('Currency $ :' +currency);


/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */

var greet = "Good Morning";

// to lowercase
console.log(greet.toLowerCase());

// to Uppercase
console.log(greet.toUpperCase());

// count the number of '0'
var str = "Good Morning";
function countZero(str) {
   var temp=0;
   for (var i=0; i<str.length; i++){
       var ch = str.charAt(i);
       if (ch ==="o"){
           temp++
       }
   }
   return temp;
}
var zeros = countZero(str);
console.log('count :'+ zeros);

// To reverse string
str ='Good Morning';
function reverseStr(str) {
    var temp ='';
    for(var i= str.length-1; i>=0; i--){
        temp+=str.charAt(i);
    }
    return temp;
}
var revStr = reverseStr(str);
console.log('revStr ; '+ revStr);
// codingbat.com ---->for practice


// get string format of numbers

var someNumber='123';
function getStrNumber(number) {
    var temp='';
    var strNumber = str.toString();
    for ( var i=0; i<strNumber.length; i++){
        var ch =parseInt(strNumber.charAt(i));
        switch(ch){
            case 0:
                temp+='ZERO';
                break;
            case 1:
                temp+='ONE';
                break;
            case 2:
                temp+='TWO';
                break;
            case 3:
                temp+='THREE';
                break;
            case 4:
                temp+='FOUR';
                break;
            case 5:
                temp+='FIVE';
                break;
            case 6:
                temp+='SIX';
                break;
            case 7:
                temp+='SEVEN';
                break;
            case 8:
                temp+='EIGHT';
                break;
            case 9:
                temp+='NINE';
                break;
            default:
                temp+=" ";
                break
        }
    }
    return temp;
}
var strNumber =getStrNumber(someNumber);
console.log(strNumber);

// get string representation of Number

var myNumber ='123';
function displayStrNumber(str) {
    var tempStr='';
    var array=['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
    for (var i=0; i<str.length; i++){
        var index = parseInt(str.charAt(i));
        tempStr += array[index]+" ";
    }
    return tempStr;
}
strNumber=displayStrNumber(myNumber);
console.log(strNumber);

// Palindrome Program
var firstStr ='ABCBA';
function isPalindrome(firstStr) {
    var revStr='';
    for(var i=firstStr.length-1; i>=0; i--){
        revStr+= firstStr.charAt(i);
    }
    if (firstStr === revStr){
        return'It is a Palindrome String';
    }
    else {
        return'it is NOT a Palindeome'
    }
}
var output = isPalindrome(firstStr);
console.log(output);