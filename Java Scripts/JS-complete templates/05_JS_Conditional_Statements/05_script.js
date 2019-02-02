// If Else condition Example
var time=17;
if (time<=12){
    console.log('Good Morning');
}
else if(time>12&& time<=17){
    console.log('Good Afternoon');
}
else if(time>17 && time<=24){
    console.log('Good Evening');
}
else{
    console.log('Enter Proper Time');
}


// For loop Example to display from 1 - 10 values
var output=" ";
for (var i = 1 ; i <= 10 ; i++){
    if(i<=9) {
        output += i + ",";
    }
    else {
        output += i;
    }
}
console.log(output);
document.querySelector('#display').textContent=output;
// While loop Example to display from 1 - 10 values
output='';
i=1;
while (i <= 10){
    if(i<=9) {
        output += i + "-";
    }
    else {
        output += i;
    }
    i++;
}
console.log(output);
document.querySelector('#display').textContent=output;


// Do while loop Example to display from 1 - 10 values
output='';
i=1;
do{
    if(i<=9) {
        output += i + ",";
    }
    else {
        output += i;
    }
    i++;

}
while (i<=10);
console.log(output);
document.querySelector('#display').textContent=output;


// Switch Statement Example
var today=new Date().getDay();
var str =" ";
switch(today){
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