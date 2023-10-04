let input = [
    '4',
    '3',
    '11',
    '40',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

//let mpg = Number(gets());
let d = 24 * 60 * 60 * Number(gets());
let h = 60 * 60 * Number(gets());
let m = 60 * Number(gets());
let s = 1* Number(gets());

let result = d+h+m+s;

print(result)