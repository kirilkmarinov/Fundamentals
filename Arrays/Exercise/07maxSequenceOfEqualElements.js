// Write a function that finds the longest sequence of equal elements in an array of numbers. 
// If several longest sequences exist, print the leftmost one.
// Examples:
// Input	                            Output
// [2, 1, 1, 2, 3, 3, 2, 2, 2, 1]	    2 2 2
// [1, 1, 1, 2, 3, 1, 3, 3]	        1 1 1
// [4, 4, 4, 4]	                    4 4 4 4
// [0, 1, 1, 5, 2, 2, 6, 3, 3]	        1 1


function maxSequenceOfEqualElements(array) {

    let maxSequence = [];

    for (let i = 0; i < array.length; i++) {
        let currentSequence = [];
        for (let j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                currentSequence.push(array[i]);
            } else {
                break;
            }
        }
        if (currentSequence.length > maxSequence.length) {
            maxSequence = currentSequence;
        }
    }
    console.log(maxSequence.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);