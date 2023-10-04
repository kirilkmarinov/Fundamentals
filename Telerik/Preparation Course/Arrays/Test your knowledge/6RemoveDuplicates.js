let input = ['1,2,2,2,2,18,3,12'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let initialArray = gets().split(',');
let resultArray = [];

for (let i = 0; i < initialArray.length; i++) {
    if (!resultArray.includes(initialArray[i])) {
        resultArray.push(initialArray[i]);
    }
}
console.log(resultArray.join(','));