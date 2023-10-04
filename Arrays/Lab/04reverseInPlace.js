// Write a program, which receives an array of strings.
// Your task is to reverse the array without creating a new array.
// Print the resulting elements on a single line, space-separated. 

function reverseInPlace(array) {

    let k = array.length - 1;
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[i];
        array[i] = array[k];
        array[k] = temp;
        k--;
    }
    console.log(array.join(" "));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);