let input = ['5'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let number = Number(gets());

for (let rows = 1; rows <= number; rows++) {
    let result = '';
    for (let columns = 1; columns <= number; columns++) {
        result = result + (rows + columns - 1)
    }
    console.log(result);
}
