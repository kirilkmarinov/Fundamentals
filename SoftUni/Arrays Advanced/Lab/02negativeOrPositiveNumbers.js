// Write a function that processes the elements in an array one by one and produces a new array. Prepend each negative element at the front of the array (as the first element) and append each positive (or 0) element at the end of the array.
// The input comes as an array of string elements holding numbers.
// The output is printed on the console, each element on a new line.
// Examples
// Input	                    Output
// ['7', '-2', '8', '9']	    -2
//                             7
//                             8
//                             9
// ['3', '-2', '0', '-1']	    -1
//                             -2
//                             3
//                             0


function negativeOrPositiveNumbers(array) {

let newArray = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        newArray.unshift(array[i]);
    }else{
        newArray.push(array[i]);
    }
}
console.log(newArray.join('\n'));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);