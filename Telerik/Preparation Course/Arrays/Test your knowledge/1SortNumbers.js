let input = ['2, 3, 1, 5, 6'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let numbersArray = gets().split(', ').map(Number);
let result = numbersArray.sort((a,b) => b - a);

console.log(result.join(', '));