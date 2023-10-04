//let input = ['2 1 2 1 2 1 2'];
//let input = ['7 3 5 2 8 4'];
let input = ['22 34 12 523 122 4444 123'];
//let input = ['1 1'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let array = gets().split(' ').map(Number);
//console.log(array);
let result;

for (let i = 1; i < array.length - 1; i++) {
    let previous = array[i - 1];
    let current = array[i];
    let next = array[i+1];

    if ((current <= previous && current >= next) || (current >= previous && current <= next)) {
        result = 'no';
        break;
    } else result = 'yes';
}
console.log(result);