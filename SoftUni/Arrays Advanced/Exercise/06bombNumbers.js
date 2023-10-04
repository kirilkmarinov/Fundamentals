// Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power. 
// Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. Detonations are performed from left to right and all detonated numbers disappear. 
// The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and its power.
// The output is the sum of the remaining elements in the sequence.
// Examples
// Input	                                Output	Comments
// [1, 2, 2, 4, 2, 2, 2, 9],
// [4, 2]	                                12	    The special number is 4 with power 2. After detonation, we are left with the sequence [1, 2, 9] with sum 12.

// [1, 4, 4, 2, 8, 9, 1],
// [9, 3]	                                5	    The special number is 9 with power 3. After detonation, we are left with the sequence [1, 4] with sum 5. Since the 9 has only 1 neighbor to the right we remove just it (one number instead of 3).

// [1, 7, 7, 1, 2, 3],
// [7, 1]	                                6	    Detonations are performed from left to right. We could not detonate the second occurrence of 7 because its already destroyed by the first occurrence. The numbers [1, 2, 3] survive. Their sum is 6.

// [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
// [2, 1]	                                4	    The red and yellow numbers disappear in two sequential detonations. The result is the sequence [1, 1, 1, 1]. Sum = 4.


function bombNumbers(sequenceOfNumbers, bomb) {

    let bombNumber = bomb[0];
    //console.log(bombNumber);
    let bombPower = bomb[1];
    //console.log(bombPower);

    let indexFound = sequenceOfNumbers.indexOf(bombNumber);
    //console.log(indexFound);
    sequenceOfNumbers.splice(indexFound - bombPower, indexFound + bombPower)

    //console.log(sequenceOfNumbers);

    let sum = 0;
    for (let i = 0; i < sequenceOfNumbers.length; i++) {
        sum = sum + sequenceOfNumbers[i];
    }
    console.log(sum);
}
// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
//     [4, 2]);
// console.log(`--------------`);
// bombNumbers([1, 4, 4, 2, 8, 9, 1],
//     [9, 3]);
// console.log(`--------------`);
// bombNumbers([1, 7, 7, 1, 2, 3],
//     [7, 1]    );
// console.log(`--------------`);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]    );
