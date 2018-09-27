var student1 = {
    name: 'John',
    age: 30,
    courseCompleted: true,
    address: {
        city: 'Hyderabad',
        state: 'TS',
        country: 'India'
    }
};
function printStudent(student) {
    console.log(JSON.stringify(student));
}
printStudent(student1);
