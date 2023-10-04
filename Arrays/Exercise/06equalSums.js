// Write a function that determines if there exists an element in the array of numbers such that
// the sum of the elements on its left is equal to the sum of the elements on its right. 
// If there are NO elements to the left/right, their sum is 0. 
// Print the index that satisfies the required condition or "no" if there is no such index.

// Examples
// Input	                                    Output	            Comments
// [1, 2, 3, 3]	                                2	                At a[2] -> left sum = 3, right sum = 3
//                                                                  a[0] + a[1] = a[3]
// [1, 2]	                                    no	                At a[0] -> left sum = 0, right sum = 2
//                                                                  At a[1] -> left sum = 1, right sum = 0
//                                                                  No such index exists
// [1]	                                        0	                At a[0] -> left sum = 0, right sum = 0
// [1, 2, 3]	                                no	                No such index exists
// [10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]	        3	                At a[3] -> left sum = 20, right sum = 20
//                                                                  a[0] + a[1] + a[2] = a[4] + a[5] + a[6] + a[7] + a[8] + a[9] + a[10]


function equalSums(array) {

    let foundIndex = 'no';
    let arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {

        let leftSum = 0;
        let rightSum = 0;

        for (let l = 0; l < i; l++) {
            leftSum = leftSum + array[l];
        }
        for (let r = i + 1; r < arrayL; r++) {
            rightSum = rightSum + array[r];
        }
        if (leftSum === rightSum) {
            foundIndex = i;
        }
    }
    console.log(foundIndex);
}
equalSums([1, 2, 3, 3]);