let input = [
    'a',

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let sign = gets();

if (sign === '2' || sign === '3' || sign === '4' || sign === '5' || sign === '6' || sign === '7' || sign === '8' || sign === '9' || sign === '10' || sign === 'J' || sign === 'Q' || sign === 'K' || sign === 'A') {
    print(`yes`);
} else print(`no`);
