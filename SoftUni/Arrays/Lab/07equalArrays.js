// Write a program, which receives two string arrays containing number representations, and prints on the console whether they are identical.
// Arrays are identical if their elements at same indexes are equal. If they are identical, find the sum of the first array and print the following message: 
// `Arrays are identical. Sum: {sum}`
//  If the arrays are NOT identical, find the first index where the arrays differ and print the following message:
//  `Arrays are not identical. Found difference at {index} index`

// Examples:
// ['10','20','30'], ['10','20','30']	Arrays are identical. Sum: 60
// ['1','2','3','4','5'], ['1','2','4','4','5']	Arrays are not identical. Found difference at 2 index
// ['1'], ['10']	Arrays are not identical. Found difference at 0 index


function equalArrays(array1, array2) {

    let sumArray1 = 0;

    for (let i = 0; i < array1.length; i++) {
        array1[i] = Number(array1[i]);
    }

    for (let i = 0; i < array2.length; i++) {
        array2[i] = Number(array2[i]);
    }
    let areEqual = true;

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        } else {
            
            sumArray1 = sumArray1 + array1[i];

        }
    }
    if (areEqual === true) {
        console.log(`Arrays are identical. Sum: ${sumArray1}`);
    }

}
equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);