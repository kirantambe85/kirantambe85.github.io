/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/

// Usage of let vs Var inside for loop created variables
for (var i=0;i<=10;i++){

}
console.log(i)//11
for (let j=0;j<=10;j++){

}
//console.log(j);// Error : Cannot find the name 'j' becoz it's'let'
// Usage of let vs var inside if block
let course:string ='Engineering';
if(course=== 'Engineering'){
    var job:string ='Software';
    let salary:number = 50000;
}
console.log(job);// software
//console.log(salary)// Error : cannot find the name "salary" becoz its 'let'

// Usage Const variable creation
const APP_NAME = 'TS App';
//APP_NAME = "JS App";// Cannot re-Assign

