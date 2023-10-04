// You are given two integers n and k. Write a function that generates and prints the following sequence:
// •	The first element is 1.
// •	Every following element equals the sum of the previous k elements.
// •	The length of the sequence is n elements.
	
// The input comes as two number arguments. The first element represents the number n, and the second – the number k.
// The output is printed on the console on a single line, separated by space.
// Examples
// Input	        Output
// 6, 3	        1 1 2 4 7 13		
// 8, 2	        1 1 2 3 5 8 13 21


// Hints:
// The 2nd element (1) is the sum of the 3 elements before it, but there is only 1, so we take that.
// The third element is the sum of the first 2 (1 and 1), and the 4th – the sum of 1, 1, and 2.
// The 5th element is the sum of the 2nd, 3rd, and 4th (1, 2, and 4) and so on.



function lastKnumbersSequence(n, k) {
    // let array = [1];
    // for (let index = 1; index < n; index++) {
    //     let sum = 0;
    //     let sequenceK = array.slice(-k);
    //     for (element of sequenceK) {
    //         sum = sum + element;
    //     }
    //     array.push(sum);
    // }
    // console.log(array.join(' '));

    let array = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let lastK = array.slice(-k);
        //console.log(lastK);
        for (element of lastK) {
            sum = sum + element;
        }
        array.push(sum);
        
    }
    console.log(array.join(' '));
}
lastKnumbersSequence(6, 3);
lastKnumbersSequence(8, 2);