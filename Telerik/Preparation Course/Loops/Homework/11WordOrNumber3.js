let input = ['6', '1', 'go', '1', '1', 'there', 'IT',];
// 1
// go
// 2
// there-IT

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let elements = Number(gets());
let isText;
inputSign = '';

let result = Number(gets());

for (let i = 1; i < elements; i++) {
    isText = isNaN(result);
    inputSign = gets();
    
    if (isText && !isNaN(inputSign) || !isText && isNaN(inputSign)) {
        console.log(result);
        result = inputSign;
    } else {
        if (isText && isNaN(inputSign)) {
            result += `-${result}`
        } else {
            result = +result + +inputSign;
        }
    }
    if (i === elements - 1) {
        console.log(result);
    }
}

