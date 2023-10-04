let input = ['-1'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let inpSign = gets();
let result = '';

if (!isNaN(Number(inpSign))) {
    inpSign++;
    console.log(inpSign);
} else

    for (let i = 0; i < inpSign.length; i++) {
        //console.log(inpSign[i]);
        result = result + inpSign[i]
    }

//console.log(result);
console.log(result.split("").reverse().join(""));


