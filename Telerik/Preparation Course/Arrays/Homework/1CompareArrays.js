//let input = ['3','1','2','3','1','2','3'];
let input = ['3','2','4','6','6','4','2'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let number = Number(gets());
let firstArray = [];
let secondArray = [];

for (let i = 1; i <= number; i++) {
    let firstPart = gets();
    firstArray.push(firstPart);
}
//console.log(firstArray);

for (let j = 1; j <= number; j++) {
    let secondPart = gets();
    secondArray.push(secondPart);
}
//console.log(secondArray);

let firstArrayAsString = Number(firstArray.join(''));
let secondArrayAsString = Number(secondArray.join(''));

if (firstArrayAsString === secondArrayAsString) {
    console.log(`equal`);
} else console.log(`not equal`);