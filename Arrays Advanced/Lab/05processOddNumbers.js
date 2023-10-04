// You are given an array of numbers. Write a function that prints the elements at odd positions from the array, doubled and in reverse order.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.
// Examples
// Input	                Output
// [10, 15, 20, 25]	    50 30		
// [3, 0, 10, 4, 7, 3]	    6 8 0

// Hints:
// •	Counting in arrays starts from 0
// •	For example –we receive 10, 15, 20, 25
// •	The elements at odd positions are 15 (index 1) and 25 (index 3)
// •	We need to take these two elements and multiply them * 2
// •	Finally, we print them on the console in reversed order


function processOddNumbers(array) {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            newArray.push(array[i] * 2);
        }

    }
    console.log(newArray.reverse().join(' '));

}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);