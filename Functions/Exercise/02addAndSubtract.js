// You will receive three integer numbers. 
// Write a function sum() to calculate the sum of the first two integers and a function subtract(), which subtracts the result of the function the sum() and the third integer.

// Examples:
// Input	Output
// 23,
// 6,
// 10	    19

// 1,
// 17,
// 30	    -12

// 42,
// 58,
// 100	    0


function addAndSubtract(firstNumber, secondNumber, thirdNumber) {

    let sumFirstAndSecond = sum(firstNumber, secondNumber);
    
    //console.log(sumFirstAndSecond);
    let subSumFirstAndSecondMinusThird = subtract(sumFirstAndSecond, thirdNumber);

    console.log(subSumFirstAndSecondMinusThird);


    //function sum(firstNumber, secondNumber) {
    //    return firstNumber + secondNumber;
    //}
    //function subtract(sumFirstAndSecond, thirdNumber) {
    //    return sumFirstAndSecond - thirdNumber;
    //}

    function sum(a, b) {
        return a + b;
    }
    function subtract(x, y) {
        return x - y;
    }
}
addAndSubtract(23, 6, 10);