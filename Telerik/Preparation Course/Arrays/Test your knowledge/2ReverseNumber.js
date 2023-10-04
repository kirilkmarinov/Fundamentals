let input = ['123.45'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let numberArray = gets().split('').reverse();
let newArray = [];
for (let i = 0; i < numberArray.length; i++) {
if (numberArray[i] === '.') {
    newArray.push('.');
}
    newArray.push(Number(numberArray[i]));
    
}
console.log(numberArray.join(''));