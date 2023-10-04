let input = ['2,3,1','5,2,3'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let firstArray = gets().split(',').map(Number);
let secondArray = gets().split(',').map(Number);
let resultArray = [];

for (let i = 0; i < firstArray.length; i++) {
    resultArray.push(firstArray[i]);
    resultArray.push(secondArray[i]);
}
console.log(resultArray.join(','));