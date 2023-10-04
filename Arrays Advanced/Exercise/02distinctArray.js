// You will be given an array of integer numbers on the first line of the input.
// Remove all repeating elements from the array. 
// Print the result elements separated by a single space.
// Examples
// Input	                            Output	                Comments
// [1, 2, 3, 4]	                    1 2 3 4	                No repeating elements
// [7, 8, 9, 7, 2, 3, 4, 1, 2]	        7 8 9 2 3 4 1	        7 and 2 are already present in the array remove them
// [20, 8, 12, 13, 4, 4, 8, 5]	        20 8 12 13 4 5	        4 and 8 are already present in the array remove them


function distinctArray(array) {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!newArray.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray.join(' '));

}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);