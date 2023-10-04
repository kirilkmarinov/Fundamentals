let input = [
    '10',
    
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////


let price = Number(gets());
let tip = price * (10/100);
let sum = price + tip;


print(sum);