// Write a function that calculates and print the value of a number raised to a given power:

// Examples:
// Input	Output
// 2,8	    256
// 3,4	    81


function mathPower(number, power) {

    let result = 1;

    while (power >= 1) {
        result = result * number;
        power--;
    }
    console.log(result);
}
mathPower(2, 8);
mathPower(3, 4);