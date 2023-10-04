let input = [
    '3',
    '2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////


let bottles05 = Number(gets());
let bottles10 = Number(gets());
let sum = (bottles05*0.1) + (bottles10*0.25);


print(sum.toFixed(2));