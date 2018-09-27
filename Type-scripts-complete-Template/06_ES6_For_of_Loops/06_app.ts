/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"
*/

// Usage of for...in loop from ES5
let str:string = '';
let technologies:Array<string> = ['HTML','CSS','JavaScript','JQuery','AngularJS'];
for(let index in technologies){
    let element:string = `${technologies[index]} `;
    str += element;
}
console.log(str);

// Usage of for...of loop from ES6
str = '';
for(let element of technologies){
    str += `${element} `;
}
console.log(str);