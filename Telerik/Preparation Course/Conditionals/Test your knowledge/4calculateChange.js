let input = [
    '0.76',
    '1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let priceInLeva = Number(gets());
let paidInLeva = Number(gets());

let change = paidInLeva * 100 - priceInLeva * 100;
//print(change);
//  print(change - (change % 100));

let xLev;
let x50stotinki;
let x20stotinki;
let x10stotinki;
let x5stotinki;
let x2stotinki;
let xstotinka;

if (change === 0) {
    print(`0 stotinki`);
}
if (change === 1) {
    print(`1 stotinka`);
}

if (change >= 100) {
    xLev = (change - (change % 100)) / 100;
    print(`${xLev} x 1 lev`);
    change = change - (xLev * 100);
}


if (change >= 50) {
    x50stotinki = (change - (change % 50)) / 50;
    print(`${x50stotinki} x 50 stotinki`);
    change = change - (x50stotinki * 50);
}

if (change >= 20) {
    x20stotinki = (change - (change % 20)) / 20;
    print(`${x20stotinki} x 20 stotinki`);
    change = change - (x20stotinki * 20);
}

if (change >= 10) {
    x10stotinki = (change - (change % 10)) / 10;
    print(`${x10stotinki} x 10 stotinki`);
    change = change - (x10stotinki * 10);
}

if (change >= 5) {
    x5stotinki = (change - (change % 5)) / 5;
    print(`${x5stotinki} x 5 stotinki`);
    change = change - (x5stotinki * 5);
}

if (change >= 2) {
    x2stotinki = (change - (change % 2)) / 2;
    print(`${x2stotinki} x 2 stotinki`);
    change = change - (x2stotinki * 2);
}

if (change === 1) {
    //xstotinka = (change - (change % 10)) / 10;
    print(`1 x 1 stotinka`);
    
}