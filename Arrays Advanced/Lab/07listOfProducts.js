// You will receive an array of products. Print a numbered array of all the products ordered by name.
// Example
// Input	                                            Output
// ['Potatoes', 'Tomatoes', 'Onions', 'Apples']	    1.Apples
//                                                     2.Onions
//                                                     3.Potatoes
//                                                     4.Tomatoes

// ['Watermelon', 'Banana', 'Apples']	                1.Apples
//                                                     2.Banana
//                                                     3.Watermelon


function listOfProducts(input) {

let sortedInput = input.sort();
console.log(sortedInput);
for (let index = 0; index < sortedInput.length; index++) {
    console.log(`${index + 1}.${sortedInput[index]}`);
}

}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);