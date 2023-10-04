let input = ['3', '2', '5', '1'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let numbers = Number(gets());

//let first = Number(gets());

let min = 10000;
let max = -10000;
let sum = 0;
let avrg = 0;

for (let i = 1; i <= numbers; i++) {
    let current = Number(gets());
    sum = sum + current;

    if (min >= current) {
        min = current;
    }
    if (max <= current) {
        max = current;
    }
}
avrg = sum / numbers;

console.log(`min=${min.toFixed(2)}`);
console.log(`max=${max.toFixed(2)}`);
console.log(`sum=${sum.toFixed(2)}`);
console.log(`avg=${avrg.toFixed(2)}`);