let input = [
    '2',
    '5',
    '2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let a = +gets();
let b = +gets();
let c = +gets();

if (a > 0 && b > 0 && c > 0) {
    print(`+`);
} else if (a > 0 && b > 0 && c < 0) {
    print(`-`);
} else if (a > 0 && b < 0 && c > 0) {
    print(`-`);
}else if (a < 0 && b > 0 && c > 0) {
    print(`-`);
}
if (a === 0 || b === 0 || c===0) {
    print(`0`);
}