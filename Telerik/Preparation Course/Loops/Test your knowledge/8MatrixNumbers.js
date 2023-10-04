let input = ['3'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let number = Number(gets());


for (let rows = 1; rows <= number; rows++) {
    let result = '';
    for (let column = 1; column <= number; column++) {
        result = result + (rows + column - 1);
    }
    print(result)
}