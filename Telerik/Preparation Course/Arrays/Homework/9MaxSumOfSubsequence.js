let input = ['10', '2', '3', '-6', '-1', '2', '-1', '6', '4', '-8', '8'];


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let n = Number(gets());
let sum = 0;
let maxSum = 0;
for (let i = 1; i <= n; i++) {
    let current = Number(gets());
    sum = sum + current;
    if (sum >= maxSum) {
        maxSum = sum;
    } 
    if (sum <= 0) {
        sum = 0;
    }
}
console.log(maxSum);