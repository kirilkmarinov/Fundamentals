let input = [
    '3',
    '2',
    '5',
    '1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let numberOfTheValues = Number(gets());
let inputnumber;
let min = 0;
let max = 0;
let sum = 0;
let avrg = 0;
let array = [];

for (let i = 0; i < numberOfTheValues; i++) {
    inputnumber = Number(gets());
    array.push(inputnumber);
    sum = sum + inputnumber;
}
avrg = sum / (numberOfTheValues);
min = Math.min(...array);
max = Math.max(...array);
//print(array);

print(`min=${min.toFixed(2)}`);
print(`max=${max.toFixed(2)}`);
print(`sum=${sum.toFixed(2)}`);
print(`avg=${avrg.toFixed(2)}`);