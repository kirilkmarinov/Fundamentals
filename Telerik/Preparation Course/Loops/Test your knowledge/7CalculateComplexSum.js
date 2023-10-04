let input = ['3', '2'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

//sum S = 1 + 1!/x + 2!/x2 + … + N!/xN
//1 + 1*1/2^1 + 1*2/2^2 + 2*3/2^3 = 2.75000
let n = Number(gets());
let x = Number(gets());
let sum = 1;
let factorial = 1;
let result = 0;

for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
    let left = factorial;
    let rigth = Math.pow(x, i);
    result = left/rigth;
    sum = sum + result;
}
console.log(sum.toFixed(5));