let input = ['10'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let number = Number(gets());

let result = '';

for (let i = 1; i <= number; i++) {
    result = result + ` ${i.toString()}`;
}

for (let j = number-1; j >= 1; j--) {
    result = result + ` ${j.toString()}`;
}

print(result);