let input = ['6', '9', '11', '3', '2', '1', '8'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let numberOfLines = Number(gets());
let current;
let largest = -500;
let second_largest = -500;
let third_largest = -500;
//{largest}, {second_largest} and {third_largest}

for (let i = 0; i < numberOfLines; i++) {
    let current = Number(gets());
    if (current > largest) {
        third_largest = second_largest;
        second_largest = largest;
        largest = current;
    } else if (current > second_largest) {
        third_largest = second_largest;
        second_largest = current;
    } else if (current > third_largest) {
        third_largest = current;
    }
}
print(`${largest}, ${second_largest} and ${third_largest}`);




