// Write a function, which changes the value of odd and even numbers in an array of numbers. 
// •	If the number is even - add to its value its index position
// •	If the number is odd - subtract to its value its index position
// Output
// On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified array.
// Examples
// Input	                                        Output
// [5, 15, 23, 56, 35]	[ 5, 14, 21, 59, 31 ]
//                                                 134
//                                                 130
// [-5, 11, 3, 0, 2]	[ -5, 10, 1, 3, 6 ]
//                                                 11
//                                                 15


function addAndSubtract(input) {

    let oldArraySum = 0;
    let newArraySum = 0;
    let inputL = input.length;

    for (let i = 0; i < inputL; i++) {
        //let num = input[i];
        oldArraySum = oldArraySum + input[i];

        if (input[i] % 2 === 0) {
            input[i] = input[i] + i;
        } else {
            input[i] = input[i] - i;
        }
        //console.log(input[i]);   
        newArraySum = newArraySum + input[i];
    }
    console.log(input);
    console.log(oldArraySum);
    console.log(newArraySum);
}
addAndSubtract([5, 15, 23, 56, 35]);
//addAndSubtract([-5, 11, 3, 0, 2]);