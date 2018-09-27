// Block scoping for FOR loop
for(var i=1; i<=10;i++){
    console.log(i);
}

//Block scoping for if Block
var course ='CSE';
if (course==='CSE'){
    var job ='Software Engg';
}
console.log('Course : ' + course);
console.log('Job : ' + job);
// Function Scoping
function allocateJob() {
    if (course==='CSE'){
        var salary = 50000;
    }
    console.log('Salary : ' +salary);
}
allocateJob();
//console.log(salary);
// Cannot access 'salary' beacuse its a child scope data

// IIFE example  ( Immediately Invoked Function Expression )
// We can execute thr function as soon as its declared
var person='rich';
function getACar() {
    if(person==='rich'){
        var car='Range Rover';
}
console.log('Car : ' +car);
}
getACar();

// Read and Write Operations for variables


// Implications of Read and Write Operations

