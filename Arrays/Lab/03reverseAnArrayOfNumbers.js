// Write a program, which receives a number n and an array of elements.
// Your task is to create a new array with n numbers from the original array,
// reverse it and print its elements on a single line, space-separated.

function reverseAnArrayOfNumbers(n, array) {

    let newArray = [];
 
    for (let j = n - 1; j >= 0; j--) {
        newArray.push(array[j]);
    }
    console.log(newArray.join(' '));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);