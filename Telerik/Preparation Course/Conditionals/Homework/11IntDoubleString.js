let input = [
    'real',
    '2.2'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let type = gets();
let value = gets();
// print(type);
// print(value);

let typeOfInput = typeof type;

switch (type) {
    case 'integer':
        value = Number(value);
        value++;
        print(value);
        break;
    case 'real':
        value++;
        value = Number(value);
        print(value.toFixed(2));
        break;
    case 'text':
        print(`${value}*`);
        break;
    default:
        break;
}