// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

function evenAndOddSubtraction(array) {

    let sumEven = 0;
    let sumOdd = 0;
    let difference = 0;

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (current % 2 === 0) {
            sumEven = sumEven + current;
        } else {
            sumOdd = sumOdd + current;
        }
    }
    difference = sumEven - sumOdd;
    console.log(difference);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);