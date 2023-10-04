let input = ['5'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let number = Number(gets());
let result = '';
let i = 1;
do {
    result = result + ' ' + i.toString();
    i++;
} while (i <= number);
print(result);
