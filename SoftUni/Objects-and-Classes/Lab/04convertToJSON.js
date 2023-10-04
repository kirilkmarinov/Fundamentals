// Write a function that receives a first name, last name, hair color and sets them to an object.
// Convert the object to JSON string and print it.
// Input is provided as 3 single strings in the order stated above.

// Examples:
// Input	                        Output
// 'George', 'Jones', 'Brown'	    {"name":"George","lastName":"Jones","hairColor":"Brown"}
// 'Peter', 'Smith', 'Blond'	    {"name":"Peter","lastName":"Smith","hairColor":"Blond"}


function convertToJSON(name, lastName, hairColor) {

    let result = {
        name,
        lastName,
        hairColor
    }
    let resultAsString = JSON.stringify(result);
    console.log(resultAsString);
}
convertToJSON('George', 'Jones', 'Brown');