// Write a function that receives a string in JSON format and converts it to an object.
// Loop through all the keys and print them with their values in format: "{key}: {value}"

// Examples:
// Input	                                            Output
// '{"name": "George", "age": 40, "town": "Sofia"}'	    name: George
//                                                      age: 40
//                                                      town: Sofia
// '{"name": "Peter", "age": 35, "town": "Plovdiv"}'	name: Peter
//                                                      age: 35
//                                                      town: Plovdiv


function convertToObject(jsonData) {

    let person = JSON.parse(jsonData);
    for (let [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');