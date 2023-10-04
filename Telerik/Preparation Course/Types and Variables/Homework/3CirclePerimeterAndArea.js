let input = [
    '2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let radius = Number(gets());
let perimeter = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;
print(perimeter.toFixed(2))
print(area.toFixed(2))