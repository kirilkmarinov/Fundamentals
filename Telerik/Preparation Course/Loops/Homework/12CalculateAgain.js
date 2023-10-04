let input = ['8', '3'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let n = Number(gets());
let k = Number(gets());

let factorialN = 1;
let factorialK = 1;
let result = 0;

for (let i = 1; i <= n; i++) {
    factorialN = factorialN * i;
}
for (let j = 1; j <= k; j++) {
    factorialK = factorialK * j;
}

result = factorialN/factorialK;
console.log(result);