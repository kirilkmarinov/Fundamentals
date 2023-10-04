let input = ['28', '3', 'coffee', 'tea', 'pineapple'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let targetNumber = gets();
let numberOfWords = gets();

let difference = 0;
let averageDistance = 0;
let sumDistance = 0;

for (let i = 1; i <= numberOfWords; i++) {
    let currentWord = gets();
    let sumChars = 0;
    //console.log(currentWord);
    for (let j = 0; j < currentWord.length; j++) {
        let currentChar = currentWord[j];
        //console.log(currentChar);
        let currentCharNumber = currentChar.charCodeAt() - 96;
        //console.log(currentCharNumber);
        sumChars = sumChars + currentCharNumber;
        difference = Math.abs(targetNumber - sumChars);
    }
    sumDistance = sumDistance + difference;
    console.log(`${currentWord} ${difference}`);
}
averageDistance = (sumDistance / numberOfWords).toFixed(2);
console.log(averageDistance);