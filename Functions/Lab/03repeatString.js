// Write a function that receives a string and a repeat count n. The function should return a new string (the old one repeated n times).

// Examples:
// Input	        Output
// "abc", 3	    abcabcabc
// "String", 2	    StringString


function repeatString(string, repeat) {

    let buff = "";

    for (let i = 0; i < repeat; i++) {
        buff = buff + string;

    }
    return buff;
}
console.log(repeatString("abc", 3));