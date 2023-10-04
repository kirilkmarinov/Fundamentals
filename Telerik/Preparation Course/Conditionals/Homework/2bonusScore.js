let input = [
    '12',

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let score = Number(gets());

if (score >= 1 && score <= 3) {
    print(score * 10);
} else if (score >= 4 && score <= 6) {
    print(score * 100);
} else if (score >= 7 && score <= 9) {
    print(score * 1000);
} else if (score <= 0 || score >=9) {
    print(`invalid score`)
} 

