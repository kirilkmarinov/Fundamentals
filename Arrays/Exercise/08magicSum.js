// Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number. 
// Examples
// Input	                                Output
// [1, 7, 6, 2, 19, 23],8	                1 7
// 6 2
// [14, 20, 60, 13, 7, 19, 8],27	        14 13
//                                         20 7
//                                         19 8
// [1, 2, 3, 4, 5, 6],6	                1 5
//                                         2 4


function magicSum(array, num) {

    let arrayPair = [];
    let validPair = '';

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === num) {
                validPair = `${array[i]} ${array[j]}`;
                arrayPair.push(validPair);
            }
        }
    }
    console.log(arrayPair.join('\n'));
}
magicSum([1, 7, 6, 2, 19, 23], 8);