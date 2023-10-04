let input = ['4'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let cardSign = gets();
let card = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let index = 0;
do {
    print(`${card[index]} of spades, ${card[index]} of clubs, ${card[index]} of hearts, ${card[index]} of diamonds`);
    index++;
} while (card[index] !== cardSign);
print(`${card[index]} of spades, ${card[index]} of clubs, ${card[index]} of hearts, ${card[index]} of diamonds`);