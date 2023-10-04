let input = ['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1'];
//let input = ['2', '3', '3'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let n = Number(gets());
let maxCount = 0;
let array = [];
let newArray = [];
let count = 1;
let sum = 0;
let max = 0;

for (let a = 1; a <= n; a++) {
    let current = Number(gets());
    array.push(current);
    sum = sum + current;
}

array = array.map(Number);
// console.log(array);
// console.log(array[0]);
// console.log(typeof array[0]);
if (sum / n === array[0]) {
    console.log(n);
} else
    if (n === 1) {
        console.log(`1`);
    } else
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] !== array[i]) {
                newArray.push(count);
                count = 1;
            } else count++;
        }

        if (max >= 0) {
            max = Math.max(...newArray);
            console.log(max);
        }