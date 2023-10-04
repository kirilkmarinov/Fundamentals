let input = ['5', '1', 'go', '1', 'there', '5',];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let elements = Number(gets());
let result = '';
let sum = 0;
let numbersCount = 0;
let wordsCount = 0;

for (let i = 1; i <= elements; i++) {
    let inputValue = gets();
    //console.log(inputValue);
    if (!isNaN(Number(inputValue))) {
        numbersCount++;
        sum = sum + Number(inputValue);
    } else if (isNaN(Number(inputValue))) {
        wordsCount++;
        result = result + inputValue + '-';
    }
}
if (wordsCount > 0) {
    result = result.slice(0, result.length - 1);
    console.log(result);
} else console.log(`no words`);

if (numbersCount > 0) {
    console.log(sum);
} else console.log(`0`);
