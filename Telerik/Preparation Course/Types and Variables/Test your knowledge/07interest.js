let input = [
    '100',

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////


let deposit = Number(gets());
let interest = (5 / 100);

let firstYearSum = deposit + (deposit * interest);
print(firstYearSum.toFixed(2));
let secondYearSum = firstYearSum + (firstYearSum * interest);
print(secondYearSum.toFixed(2));
let thirdYearSum = secondYearSum + (secondYearSum * interest);
print(thirdYearSum.toFixed(2));
//let sum = firstYearSum + secondYearSum + thirdYearSum;

