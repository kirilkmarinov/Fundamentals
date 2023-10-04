let input = [
    '5',

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let number = Number(gets());
let output = 1;

for (let i = 2; i <= number; i++) {
    output = output + ' ' + i.toString();
}
print(output);