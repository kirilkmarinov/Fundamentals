let input = [
    '-2',
    '-10',
    '0',
    '-1',
    '-3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let a = Number(gets());
let b = Number(gets());
let c = Number(gets());
let d = Number(gets());
let e = Number(gets());

if (a >= b && a >= c && a >= d && a >= e) {
    print(a);
} else
    if (b >= a && b >= c && b >= d && b >= e) {
        print(b);
    } else
        if (c >= a && c >= b && c >= d && c >= e) {
            print(c);
        } else
            if (d >= b && d >= c && d >= a && d >= e) {
                print(d);
            } else
                if (e >= b && e >= c && e >= d && e >= a) {
                    print(e);
                }