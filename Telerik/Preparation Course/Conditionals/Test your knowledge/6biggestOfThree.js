let input = [
    '-1',
    '-10',
    '0',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let a = Number(gets());
let b = Number(gets());
let c = Number(gets());
print(Math.max(a, b, c));