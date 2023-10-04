let input = ['K'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let number = gets();
let sign = '012345678910JQKA';

if (number === 'J') {
    number = 11;
}
if (number === 'Q') {
    number = 12;
}
if (number === 'K') {
    number = 13;
}
if (number === 'A') {
    number = 14;
}
//console.log(number);
number = Number(number);

for (let i = 2; i <= 14; i++) {
    if (i <= 10) {
        console.log(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
    } else if (i === 11) {
        console.log(`J of spades, J of clubs, J of hearts, J of diamonds`);
    } else if (i === 12) {
        console.log(`Q of spades, Q of clubs, Q of hearts, Q of diamonds`);
    } else if (i === 13) {
        console.log(`K of spades, K of clubs, K of hearts, K of diamonds`);
    } else if (i === 14) {
        console.log(`A of spades, A of clubs, A of hearts, A of diamonds`);
    }

    if (i === number) {
        break;
    }

}