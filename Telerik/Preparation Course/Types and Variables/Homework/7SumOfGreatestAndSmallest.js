let input = [
    '1',
    '2',
    '3',
    ];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let a = Number(gets())
let b = Number(gets())
let c = Number(gets())
let greatest = Math.max(a,b,c)
let smallest  = Math.min(a,b,c)

print(greatest+smallest)