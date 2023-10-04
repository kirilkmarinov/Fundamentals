// Write a function that receives 3 parameters, sets them to an object, and returns that object.
// The input comes as 3 separate strings in the following order: firstName, lastName, age.

// Examples:
// Input	        Object Properties
// "Peter", 
// "Pan",
// "20"	        firstName: Peter
//                 lastName: Pan
//                 age: 20

// "George", 
// "Smith",
// "18"	        firstName: George
//                 lastName: Smith
//                 age: 18


function personInfo(firstName, lastName, age) {

    let personObject = {};
    personObject.firstName = firstName;
    personObject.lastName = lastName;
    personObject.age = age;

    return personObject;
}
console.log(personInfo("Peter", "Pan", "20"));