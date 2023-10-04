let input = [
    '1',
    '-10',
    '0',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let a = +gets();
let b = +gets();
let c = +gets();

if (a >= b && a >= c) {
    print(a);
} else if (b >= b && b >= c) {
    print(b);
} else if (c >= b && c >= a) {
    print(c);
}