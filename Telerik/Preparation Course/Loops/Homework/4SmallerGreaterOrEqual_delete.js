let input = ['3', '2', '5', '1'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////


let n = Number(gets());
let firstNumber = Number(gets());
let numberString = firstNumber;
 
for (let i = 1; i <= n - 1; i++) {
  let number = Number(gets());
  if (firstNumber > number) {
    numberString = numberString + ">" + number;
  } else if ((firstNumber == number)) {
    numberString = numberString + "=" + number;
  } else if (firstNumber < number) {
    numberString = numberString + "<" + number;
  }
  firstNumber = number;
}
 
console.log(numberString);