let input = ['pizza', 'macaroni', 'kiufte', 'banica', 'END'];
//let input = ['pizza', 'END'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let maxDigits = 0;
let currentDigits = 0;
let result;
let currentWord = gets();

while (currentWord !== 'END') {
    currentDigits = currentWord.length;

    if (maxDigits <= currentDigits) {
        maxDigits = currentDigits;
        result = currentWord;
    }
    currentWord = gets();
}
console.log(result);
