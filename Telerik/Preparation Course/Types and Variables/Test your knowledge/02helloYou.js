let input = [
    'John',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////


let name = gets();


print(`Hello, `+ name + `!`);