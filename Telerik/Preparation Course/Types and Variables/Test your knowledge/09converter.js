let input = [
    '20',
    ];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

//let mpg = Number(gets());
let miles = Number(gets());
let gallon = 1;
let kilometer = miles * 1.6;
let liters = 4.54/ gallon;
let result = liters

print(`${result} litres per 100 km`)