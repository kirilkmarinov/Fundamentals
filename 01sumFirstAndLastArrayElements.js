// function that receives an array of numbers and prints the sum
// of the first and last element in that array.

function sumFirstAndLastArrayElements(array) {

    let firstElement = array[0];
    let lastElement = array[array.length-1];

    console.log(firstElement + lastElement);
}
sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);