let input = [
    '12',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////


let humanYears = Number(gets());
let dogYears = 0;
let humanYearsOverTwo = 0;

if (humanYears > 2) {
   
    humanYearsOverTwo = humanYears - 2; //10
    humanYears = humanYears - 2;
    dogYears = (2 * 10) + (humanYearsOverTwo * 4);
} else {
    dogYears = humanYears * 10;
}

print(dogYears);