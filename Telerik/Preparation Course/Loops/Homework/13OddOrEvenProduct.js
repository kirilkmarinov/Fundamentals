let input = ['5',
    '4 3 2 5 2'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let numbers = Number(gets());
let string = gets().split(' ').map(Number);
//console.log(string);
//console.log(typeof string[1]);
let oddProduct = 1;
let evenProduct = 1;

for (let i = 0; i <= numbers - 1; i++) {
    let current = Number(string[i]);
    if (i % 2 !== 0) {
        oddProduct = oddProduct * current;
    } else evenProduct = evenProduct * current;

}

// console.log(evenProduct);
// console.log(oddProduct);

if (evenProduct === oddProduct) {
    console.log(`yes ${evenProduct}`);
} else console.log(`no ${evenProduct} ${oddProduct}`);