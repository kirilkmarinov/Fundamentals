let input = [
    '2346',
    
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

//let mpg = Number(gets());
let number = gets();
let a = Number(number[0]);
let b = Number(number[1]);
let c = Number(number[2]);
let d = Number(number[3]);

let result = a+b+c+d;

print(result)