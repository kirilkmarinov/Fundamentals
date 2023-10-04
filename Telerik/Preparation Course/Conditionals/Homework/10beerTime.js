let input = [
    '12:00 ',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let time = gets();
let hour;
let minute;
let designator;

if (time.length !== 8 && time.length !== 7) {
    print(`invalid time`);
}
else if (time.length === 8) {
    hour = Number(time.substring(0, 2));
    minute = Number(time.substring(3, 5));
    designator = time.substring(6, 8);
} else if (time.length === 7) {
    hour = Number(time.substring(0, 1));
    minute = Number(time.substring(2, 4));
    designator = time.substring(5);
}


if (designator === 'PM') {
    if ((hour === 12) && (minute >= 0 && minute <= 59)) {
        print(`non-beer time`);
    } else if ((hour >= 1) && (minute >= 0 && minute <= 59)) {
        print(`beer time`);
    } else print(`invalid time`);
}

if (designator === 'AM') {
    if ((hour === 12) && (minute >= 0 && minute <= 59)) {
        print(`beer time`);

    } else if ((hour >= 3) && (minute >= 0 && minute <= 59)) {
        print(`non-beer time`);
    } else if ((hour >= 2) && (minute >= 0 && minute <= 59)) {
        print(`beer time`);

    } else print(`invalid time`);
}

