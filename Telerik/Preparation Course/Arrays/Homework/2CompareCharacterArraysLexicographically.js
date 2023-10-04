let input = ['', 'k'];


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let firstArray = gets().split('');
let secondArray = gets().split('');
//console.log(secondArray);
let sum_firstArray = 0;
let sum_secondArray = 0;

for (let i = 0; i < firstArray.length; i++) {
    let currentFrom_firstArray = firstArray[i];
    let currentCharNumber_firstArray = currentFrom_firstArray.charCodeAt(0);
    sum_firstArray = sum_firstArray + currentCharNumber_firstArray;
}
for (let j = 0; j < secondArray.length; j++) {
    let currentFrom_secondArray = secondArray[j];
    let currentCharNumber_secondArray = currentFrom_secondArray.charCodeAt(0);
    sum_secondArray = sum_secondArray + currentCharNumber_secondArray;
}

if (sum_firstArray < sum_secondArray) {
    console.log('first');
} else if (sum_secondArray < sum_firstArray) {
    console.log('second');
} else if (sum_firstArray === sum_secondArray) {
    console.log('equal');
}