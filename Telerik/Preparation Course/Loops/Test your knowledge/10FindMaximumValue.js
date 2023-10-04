let input = ['3', '1', '2', '3'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let numberOfLines = Number(gets());
let currentNumber;
let nextNumber;
let maxNumber;
let array = [];

for (let i = 0; i < numberOfLines; i++) {
    currentNumber = Number(gets());
    array.push(currentNumber);
    //nextNumber = Number(gets());

    // print(currentNumber);
    // if (currentNumber >= nextNumber) {
    //     maxNumber = currentNumber;
    // } else maxNumber = nextNumber;
}
//print(maxNumber);
print(Math.max(...array));