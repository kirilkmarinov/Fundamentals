//let input = ['4', 'pizza', 'macaroni', 'kiufte', 'banica'];
let input = ['1', ''];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let number = Number(gets());
let bestRatio = 1;
let word;
let bestWord;
let letterCounter;
let vowelsLetterCounter;
let bestVowelsLetter;
let bestLetterCount;

for (let i = 0; i < number; i++) {
    word = String(gets());
    letterCounter = word.length;
    vowelsLetterCounter = 0;
    let currentRatio = 0;

    for (let j = 0; j < word.length; j++) {
        let currentLetter = word[j];
        letterCounter++;
        //let ratio = 0;
        //print(currentLetter);
        if (currentLetter === 'a' || currentLetter === 'o' || currentLetter === 'u' || currentLetter === 'e' || currentLetter === 'i') {
            vowelsLetterCounter++;
        }
        // ratio = vowelsLetterCounter / letterCounter;

    }
    currentRatio = vowelsLetterCounter / letterCounter;

    if (currentRatio < bestRatio) {
        bestRatio = currentRatio;
        bestWord = word;
        bestVowelsLetter = vowelsLetterCounter;
        bestLetterCount = letterCounter;
    } else if (currentRatio == bestRatio) {
        if (vowelsLetterCounter > bestVowelsLetter) {
            bestRatio = currentRatio;
            bestWord = word;
            bestVowelsLetter = vowelsLetterCounter;
            bestLetterCount = letterCounter;
        } else if (letterCounter == bestLetterCount) {
            if (letterCounter > bestLetterCount) {
                bestRatio = currentRatio;
                bestWord = word;
                bestVowelsLetter = vowelsLetterCounter;
                bestLetterCount = letterCounter;
            }
        }


    }

}



print(`${bestWord} ${bestVowelsLetter}/${bestLetterCount}`);
//print(bestRatio);