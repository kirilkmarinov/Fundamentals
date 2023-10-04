let input = ['4,3,2,7,8,2,3,1'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let initialArray = gets().split(',').map(Number);
let sortedArray = initialArray.sort((a,b) => a-b);
let resultArray = [];
let finalArray = [];
//console.log(sortedArray);

for (let i = 1; i <= sortedArray.length; i++) {
    resultArray.push(i);
}
//console.log(resultArray);

for (let j = 0; j < sortedArray.length; j++) {
    if (!sortedArray.includes(resultArray[j])) {
        finalArray.push(resultArray[j]);
    }
}
console.log(finalArray.join(','));