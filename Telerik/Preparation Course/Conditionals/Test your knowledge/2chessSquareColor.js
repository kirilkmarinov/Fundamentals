let input = [
    'f',
    '3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let label = gets();
let rank = Number(gets());

let evenRank = false;
let oddRank = false;

if (rank % 2 === 0) {
    evenRank = true;
    oddRank = false;
} else {
    evenRank = false;
    oddRank = true;
}

// print(evenRank);
// print(oddRank);

switch (label) {
    case 'a':
        if (oddRank) {
            print(`dark`);
        } else {
            print(`light`);
        }
        break;
    case 'c':
        if (oddRank) {
            print(`dark`);
        } else {
            print(`light`);
        }
        break;
    case 'e':
        if (oddRank) {
            print(`dark`);
        } else {
            print(`light`);
        }
        break;
    case 'g':
        if (oddRank) {
            print(`dark`);
        } else {
            print(`light`);
        }
        break;
    case 'b':
        if (oddRank) {
            print(`light`);
        } else {
            print(`dark`);
        }
        break;
    case 'd':
        if (oddRank) {
            print(`light`);
        } else {
            print(`dark`);
        }
        break;
    case 'f':
        if (oddRank) {
            print(`light`);
        } else {
            print(`dark`);
        }
        break;
    case 'h':
        if (oddRank) {
            print(`light`);
        } else {
            print(`dark`);
        }
        break;
    default:
        break;
}