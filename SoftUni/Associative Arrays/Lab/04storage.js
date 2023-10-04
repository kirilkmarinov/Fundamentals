// Write a function that takes a certain number of items and their quantity. If the same item appears more than once, add the new amount to the existing one. In the end, print all the items and their amount without sorting them. The input comes as an array of strings. Try using a Map().

// Example:
// Input	                Output
// ['tomatoes 10',
// 'coffee 5',
// 'olives 100',
// 'coffee 40']	           tomatoes -> 10
//                         coffee -> 45
//                         olives -> 100
// ['apple 50',
// 'apple 61',
// 'coffee 115',
// 'coffee 40']	           apple -> 111
//                         coffee -> 155


function storage(input) {

    let map = new Map();

    for (el of input) {
        let [product, quantity] = el.split(' ');
        if (map.has(product)) {
            let currQuantity = map.get(product);
            map.set(product, currQuantity + Number(quantity));
        } else {
            map.set(product, Number(quantity));
        }
    }
    for (let [key, value] of map.entries()) {
        console.log(key, "->", value);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);