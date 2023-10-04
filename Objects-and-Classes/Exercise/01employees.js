// You're tasked to create a list of employees and their personal numbers.
// You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included). 
// Try to use an object.
// At the end print all the list employees in the following format:
//  "Name: {employeeName} -- Personal Number: {personalNum}" 

//  Examples:
// Input	                Output
// [
// 'Silas Butler',
// 'Adnaan Buckley',
// 'Juan Peterson',
// 'Brendan Villarreal'
// ]	                   Name: Silas Butler -- Personal Number: 12
//                         Name: Adnaan Buckley -- Personal Number: 14
//                         Name: Juan Peterson -- Personal Number: 13
//                         Name: Brendan Villarreal -- Personal Number: 18
// [
// 'Samuel Jackson',
// 'Will Smith',
// 'Bruce Willis',
// 'Tom Holland'
// ]	                   Name: Samuel Jackson -- Personal Number: 14
//                         Name: Will Smith -- Personal Number: 10
//                         Name: Bruce Willis -- Personal Number: 12
//                         Name: Tom Holland -- Personal Number: 11


function employees(input) {

let objEmployee = {};

for (el of input) {
    //console.log(el);
    objEmployee.name = el;
    objEmployee.personalNumber = el.length;
    //console.log(objEmployee.personalNumber);
    console.log(`Name: ${objEmployee.name} -- Personal Number: ${objEmployee.personalNumber}`);
}

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);