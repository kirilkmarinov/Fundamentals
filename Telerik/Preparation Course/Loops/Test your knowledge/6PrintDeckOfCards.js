let input = ['K'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let cardSign = gets();

for (let i = 2; i <= 14; i++) {
    if (cardSign === 'J') {
        cardSign = 11;
    }
    if (cardSign === 'Q') {
        cardSign = 12;
    }
    if (cardSign === 'K') {
        cardSign = 13;
    }
    if (cardSign === 'A') {
        cardSign = 14;
    }
}
cardSign = Number(cardSign);

if (cardSign <= 10) {
    for (let j = 2; j <= 10; j++) {
        print(`${j} of spades, ${j} of clubs, ${j} of hearts, ${j} of diamonds`)
        if (j === cardSign) {
            break;
        }
    }
} else if (cardSign >= 11) {
    for (let a = 2; a < cardSign; a++) {

        print(`${a} of spades, ${a} of clubs, ${a} of hearts, ${a} of diamonds`);
        
        
    }
    if (cardSign >= 11) {
        print(`J of spades, J of clubs, J of hearts, J of diamonds`);
    }
    if (cardSign >= 12) {
        print(`Q of spades, Q of clubs, Q of hearts, Q of diamonds`);
    }
    if (cardSign >= 13) {
        print(`K of spades, K of clubs, K of hearts, K of diamonds`);
    }
    if (cardSign >= 14) {
        print(`A of spades, A of clubs, A of hearts, A of diamonds`);
    }
}
