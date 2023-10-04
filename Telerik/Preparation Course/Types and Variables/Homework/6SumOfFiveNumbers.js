let input = [
    '1',
    '2',
    '3',
    '4',
    '5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let a = Number(gets())
let b = Number(gets())
let c = Number(gets())
let d = Number(gets())
let e = Number(gets())
print(a+b+c+d+e)