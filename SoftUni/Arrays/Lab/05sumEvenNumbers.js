// Write a program, which receives an array of strings, parse them into numbers, and sum only the even numbers.

function sumEvenNumbers(array) {

    let sumEven = 0;
    for (let i = 0; i < array.length; i++) {
        let current = Number(array[i]);
        if (current % 2 === 0)
            sumEven = sumEven + current;
    }
    console.log(sumEven);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3','5','7','9']);
sumEvenNumbers(['2','4','6','8','10']);