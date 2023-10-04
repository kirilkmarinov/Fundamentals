let input = ['100', '200', '12'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let startNumber = Number(gets());
let endNumber = Number(gets());
let targetNumber = Number(gets());

for (let i = 0; i <= endNumber - startNumber; i++) {
    let currentNumber = startNumber + i;
    currentNumber = currentNumber.toString();
    //console.log(currentNumber);
    let first = Number(currentNumber[0]);
    let second = Number(currentNumber[1]);
    let third = Number(currentNumber[2]);
    let sum = first+second+third;
    if (sum === targetNumber) {
        console.log(currentNumber);
    }
}