// Write a function that receives three parameters – two numbers and an operator (string) – and calculates the result depending on the operator. Operator can be 'multiply', 'divide', 'add' or 'subtract'. Try to solve this task using arrow functions.
// Bonus
// Solve this task without using any conditional statements (no if or switch statements or ternary operators).
// Input
// The input comes as parameters named numOne, numTwo, operator.

// Examples:
// Input	        Output
// 5,
// 5,
// 'multiply'	    25

// 40,
// 8,
// 'divide'	    5

// 12,
// 19,
// 'add'	        31

// 50,
// 13,
// 'subtract'	    37


function simpleCalculator(numOne, numTwo, operator) {

    let result = 0;

    switch (operator) {
        case 'multiply':
            result = (numOne, numTwo) => numOne * numTwo;
            break;
        case 'divide':
            result = (numOne, numTwo) => numOne / numTwo;
            break;
        case 'add':
            result = (numOne, numTwo) => numOne + numTwo;
            break;
        case 'subtract':
            result = (numOne, numTwo) => numOne - numTwo;
            break;
    }
    console.log(result(numOne, numTwo));
}
simpleCalculator(5, 5, 'multiply');