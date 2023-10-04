// You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number. 

// Examples:
// Input	                Output
//  1000435	            Odd sum = 9, Even sum = 4
//  3495892137259234	    Odd sum = 54, Even sum = 22


function oddAndEvenSum(input) {

    let oddSum = 0;
    let evenSum = 0;
    let numberAsString = input.toString();

    for (el of numberAsString) {
        //console.log(el);
        let current = Number(el);
        if (el % 2 === 0) {
            evenSum += current;
        } else {
            oddSum += current;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);