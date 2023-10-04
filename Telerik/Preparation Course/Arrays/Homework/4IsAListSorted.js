let input = ['3', '1,2,3,4,5', '1,2,8,9,9', '1,2,2,3,2'];
//let input = ['1', '1,2,8,4,5'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let arraysCount = Number(gets());
let result = '';

for (let i = 1; i <= arraysCount; i++) {
    let currentArray = gets().split(',').map(Number);
    //console.log(currentArray);

    for (let x = 1; x < currentArray.length; x++) {
        if (currentArray[x] - currentArray[x - 1] >= 0) {
            result = true;
        } else if (currentArray[x] - currentArray[x - 1] <= 0) {
            result = false;
            break;
        }
    }
    if (result) {
        console.log(`true`);
    } else console.log(`false`);
}
