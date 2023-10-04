// Write a function that receives three integers and prints the smallest number. Use an appropriate name for the function.

// Examples:
// Input	Output
// 2,
// 5,
// 3	    2
// 600,
// 342,
// 123	    123
// 25,
// 21,
// 4	    4
// 2,
// 2,
// 2	    2


function smallestThreeNumbers(firstNumber, secondNumber, thirdNumber) {

    let smallest = Math.min(firstNumber, secondNumber, thirdNumber);
    //console.log(smallest);
    return smallest;

}
console.log(smallestThreeNumbers(2, 5, 3));