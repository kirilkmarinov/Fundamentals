let input = ['7 2 -2 1 -5 4 5 -3 1'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let array = gets().split(' ').map(Number);
//console.log(array);
let sortedArray = [];
let negativeArray = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] <= 0) {
        negativeArray.push(array[i]);
        //sortedArray.unshift(array[i]);
    } else if (array[i] >= 0) {
        sortedArray.push(array[i]);
    }
}
sortedArray.unshift(...negativeArray);
//console.log(negativeArray);
console.log(sortedArray.join(' '));