// Create a Student Interface , and printStudent function
// Create a Student Interface , and printStudent function
interface Student{
    name : string,
    age : number,
    courseCompleted : boolean,
    address : {
        city : string,
        state : string,
        country : string
    }
}

let student1:Student = {
    name : 'John',
    age : 30,
    courseCompleted : true,
    address : {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};

function printStudent(student:Student):void{
    console.log(JSON.stringify(student));
}

printStudent(student1);
