//let input = ['1', '6'];
//let input = ['4', '1', '3', '3', '7'];
let input = ['5', '1', '2', '3', '1', '2'];


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let n = Number(gets());
let arr = [];
let counter = 1;
let maxCounter = 1;


for (let i = 0; i < n; i++) {
  arr.push(Number(gets()));
}

arr.sort((a, b) => a - b);
//console.log(arr)
let mostRepeatedNumber = arr[0];
for (let i = 0; i < arr.length - 2; i++) {
  if (arr[i] === arr[i + 1]) {
    counter = counter + 1;
    if (counter > maxCounter) {
      maxCounter = counter;
      mostRepeatedNumber = arr[i];
    }
  } else {
    counter = 1;
  }
}
console.log(mostRepeatedNumber);