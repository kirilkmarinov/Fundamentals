let input = ['5'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let number = Number(gets());

let result = '';

for (let i = 1; i <= number; i++) {
    result = result + ' ' + i.toString();
}
print(result);