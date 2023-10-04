let input = [
    '3',
    '4',
    '11',
    
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let a = Number(gets());
let b = Number(gets());
let c = Number(gets());
print(a+b+c);