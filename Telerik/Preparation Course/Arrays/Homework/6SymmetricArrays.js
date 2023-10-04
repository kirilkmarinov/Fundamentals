let input = ['4', '1 2 3 2 1', '2 1', '1 2 2 1', '4'];
//let input = ['1', '1 2 3 2 1'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let numberOfArrays = Number(gets());
let result;

for (let i = 0; i < numberOfArrays; i++) {
    let currentArray = gets().split(' ').map(Number);
    //console.log(currentArray);
    for (element of currentArray) {
        //console.log(element);
        let currentNumberindex = currentArray.indexOf(element);
        if (element === currentArray[currentArray.length - 1 - currentNumberindex]) {
            result = `Yes`;
        } else result = `No`;
    }
    console.log(result);
}