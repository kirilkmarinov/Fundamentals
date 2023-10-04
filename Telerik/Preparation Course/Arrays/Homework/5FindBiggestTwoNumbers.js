let input = ['8 2 1 3 5 8 9 11 2 5'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let array = gets().split(' ').map(Number);
let result;
let resultArray = [];

let sortedArray = array.sort((a, b) => b - a);
//console.log(sortedArray);

for (let i = 0; i < 2; i++) {
    result = sortedArray.shift(i).toString();
    resultArray.push(result);
}
console.log(resultArray.join(' '));