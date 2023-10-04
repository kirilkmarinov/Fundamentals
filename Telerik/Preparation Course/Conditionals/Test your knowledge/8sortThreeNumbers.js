let input = [
    '1',
    '2',
    '20',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let a = Number(gets());
let b = Number(gets());
let c = Number(gets());

let one;
let two;
let tree;


if (a >= b && a >= c) {
    one = a;
} else if (b >= a && b >= c) {
    one = b;
} else if (c >= a && c >= b) {
    one = c;
}

if (a <= b && a <= c) {
    tree = a;
} else if (b <= a && b <= c) {
    tree = b;
} else if (c <= a && c <= b) {
    tree = c;
}

if ((a >= b && b >= c) || (a <= b && b <= c)) {
    two = b;
} else if ((b >= a && a >= c) || (b <= a && a <= c)) {
    two = a;
} else if ((a >= c && c >= b) || (a <= c && c <= b)) {
    two = c;
}
print(one, two, tree);
//print(a, b, c);