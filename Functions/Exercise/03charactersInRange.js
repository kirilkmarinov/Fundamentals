// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. Keep in mind that the second character code might be before the first one inside the ASCII table.

// Examples:
// Input	    Output
// 'a',
// 'd'	        b c
// '#',
// ':'	        $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
// 'C',
// '#'	        $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B


function charactersInRange(firstCh, lastCh) {

    let firstChar = firstCh.charCodeAt(0);
    let lastChar = lastCh.charCodeAt(0);
    //console.log(firstChar);
    //console.log(lastChar);
    let startChar = Math.min(firstChar, lastChar);
    let endChar = Math.max(firstChar, lastChar);
    //console.log(startChar);
    //console.log(endChar);

    let charsInRangeArray = [];

    for (let i = startChar + 1; i < endChar; i++) {
        //console.log(i);
        charsInRangeArray.push(String.fromCharCode(i));
    }
    console.log(charsInRangeArray.join(" "));
}
charactersInRange('a', 'd');
charactersInRange('#',':');