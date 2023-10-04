let input = ['3', '2', '5', '1'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let numbers = Number(gets());
let first = Number(gets());
let result = first;

for (let i = 1; i <= numbers - 1; i++) {
    let current = Number(gets());
    if (first < current) {
        result = result + '<' + current;
        
    } else if (first === current) {
        result = result + '=' + current;
       
    } else if (first > current) {
        result = result + '>' + current;
        
    }
    first = current;
}
print(result);