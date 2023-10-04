let input = ['6', '1 2 3 4 3 6 5 8 3 9'];


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let targetSum = Number(gets());
let arrayOfNumbers = gets().split(' ').map(Number);
//console.log(arrayOfNumbers);
let pairs = 0;

for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
    let currentNumber = arrayOfNumbers[i];
    for (let j = i + 1; j < arrayOfNumbers.length; j++) {
        let nextNumber = arrayOfNumbers[j];
        if (currentNumber + nextNumber === targetSum) {
            console.log(`${currentNumber},${nextNumber}`);
            pairs++;
        }
    }
}
if (pairs === 0) {
    console.log(`no pairs`);
}