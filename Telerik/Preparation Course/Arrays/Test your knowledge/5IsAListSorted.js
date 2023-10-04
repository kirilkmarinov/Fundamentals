let input = ['3', '1,2,3,4,5', '1,2,8,9,9', '1,2,2,3,2'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let number = Number(gets());


for (let i = 0; i < number; i++) {
    let isSorted = true;
    let currentArray = gets().split(',').map(Number);
    //console.log(currentArray);
    if (currentArray.length === 1) {
        isSorted = true;
        //break;
    }
    for (let j = 0; j <= currentArray.length - 2; j++) {
        if (currentArray[j] > currentArray[j+1]) {
            isSorted = false;
        }
    }
    if (isSorted) {
        console.log(`true`);
    } else
        console.log(`false`);
}