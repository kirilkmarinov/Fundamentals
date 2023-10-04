let input = [
    '3',
    '1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let a = Number(gets());
let b = Number(gets());

let sum = a+b;
print(sum);

let difference = a-b;
print(difference);

let product = a*b;
print(product);

let remainder = a % b;
print(remainder);

let power = Math.pow(a, b);
print(power);
