// Write a function to find all the top integers in an array. A top integer is an integer, which is bigger than all the elements to its right. 
// Output
// Print all top integers on the console, separated by a single space.
// Examples
// Input	                        Output
// [1, 4, 3, 2]	                4 3 2
// [14, 24, 3, 19, 15, 17]	        24 19 17
// [41, 41, 34, 20]	            41 34 20
// [27, 19, 42, 2, 13, 45, 48]	    48


function maxNumber(array) {

    let newArray = [];
    let arrayL = array.length;

    for (let index = 0; index < array.length; index++) {
        let number1 = array[index];
        let isBiggest = true;

        for (let j = index + 1; j < arrayL; j++) {
            let number2 = array[j];
            if (number1 <= number2) {
                isBiggest = false;
            }
        }
        if (isBiggest) {
            newArray.push(number1);
        }
    }
    console.log(newArray.join(' '));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);