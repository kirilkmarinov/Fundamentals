// Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive or negative. Try to do this WITHOUT multiplying the 3 numbers.
// Input
// The input comes as parameters named numOne, numTwo, numThree.
// Output
// •	If the result is positive, print on the console -> "Positive"
// •	Otherwise, print -> "Negative"

// Example:
// Input	    Output
//  5,
//  12,
// -15	        Negative

// -6,
// -12,
//  14	        Positive

// -1,
// -2,
// -3	        Negative

// -5,
//  1,
//  1	        Negative


function signCheck(numOne, numTwo, numThree) {
    let result = '';

    if (numOne > 0 && numTwo > 0 && numThree > 0) {
        console.log(`Positive`);
    }
    if (numOne < 0 && numTwo < 0 && numThree > 0) {
        console.log(`Positive`);
    }
    if (numOne > 0 && numTwo > 0 && numThree < 0) {
        console.log(`Negative`);
    }

    if (numOne < 0 && numTwo < 0 && numThree < 0) {
        console.log(`Negative`);
    }
    if (numOne < 0 && numTwo > 0 && numThree > 0) {
        console.log(`Negative`);
    }




}
signCheck(5, 12, -15);