let input = ['5,3,2,1','2'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let array = gets().split(',').map(Number);
let rotations = Number(gets());

for (let i = 0; i < rotations; i++) {
    let removed = array.shift(array[i]);
    array.push(removed);
}
console.log(array.join(','));