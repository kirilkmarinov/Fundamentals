let input = [
    '4',
    '1',
    '1',
    '2',
    '2'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let numberOfTheValues = Number(gets());
let inputnumber;
let sum = 0;
let avrg = 0;

for (let i = 0; i < numberOfTheValues; i++) {
    inputnumber = Number(gets());
    sum = sum + inputnumber;
}
avrg = sum / (numberOfTheValues)
print(avrg.toFixed(2));