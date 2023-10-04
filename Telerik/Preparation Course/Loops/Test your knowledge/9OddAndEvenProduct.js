let input = ['5', '4', '3', '2', '5', '2'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let numberOfLines = Number(gets());
let productOfTheOddLines = 1;
let productOfTheEvenLines = 1;
let currentNumber;

for (let i = 1; i <= numberOfLines; i++) {
    currentNumber = Number(gets());
    if (i % 2 === 0) {
        productOfTheEvenLines *= currentNumber;
    } else productOfTheOddLines *= currentNumber;
}

if (productOfTheEvenLines === productOfTheOddLines) {
    print(`yes ${productOfTheEvenLines}`);
} else print(`no ${productOfTheOddLines} ${productOfTheEvenLines}`);