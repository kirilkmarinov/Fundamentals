let input = ['0,0,0,5,0,3,2,3'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let initialArray = gets().split(',').map(Number);
let resultArray = [];
let nonZeroArray = [];
let zeroArray = [];
for (let i = 0; i < initialArray.length; i++) {
    resultArray.push(initialArray[i]);
}

for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i] !== 0) {
        nonZeroArray.push(initialArray[i]);
    } else zeroArray.push(initialArray[i]);
}
nonZeroArray.push(...zeroArray);

console.log(nonZeroArray.join(','));