// Write a function that receives a single integer number n and prints nxn matrix with that number.

// Examples:
// Input	    Output
// 3	        3 3 3
//             3 3 3
//             3 3 3

// 7	        7 7 7 7 7 7 7
//             7 7 7 7 7 7 7
//             7 7 7 7 7 7 7
//             7 7 7 7 7 7 7
//             7 7 7 7 7 7 7
//             7 7 7 7 7 7 7
//             7 7 7 7 7 7 7

// 2	        2 2
//             2 2


function matrixx(input) {

let matrix = [];

for (let i = 0; i < input; i++) { // redove
    let row = [];
    for (let j = 0; j < input; j++) { // koloni
        row.push(input);
        //console.log(row);
    }
    matrix.push(row.join(' '))
}

console.log(matrix.join('\n'));
}
matrixx(3);