let input = ['4'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let cardSign = gets();
let card = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

for (let element of card) {
    print(`${element} of spades, ${element} of clubs, ${element} of hearts, ${element} of diamonds`);
    if (element === cardSign) {
        break;
    }
}