let input = [
    '2',
    '50',
    '40',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let numberOfTheItems = Number(gets());
let itemPrice;
let discount;
let finalPrice;


for (let i = 0; i < numberOfTheItems; i++) {
    itemPrice = Number(gets());
    discount = 0.65 * itemPrice;
    finalPrice = itemPrice - discount;

    //print(itemPrice);
    print(finalPrice.toFixed(2));
}
