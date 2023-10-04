// Write a program, which receives an array of numbers, and condenses them by summing adjacent couples of elements until a single number is obtained. 
// For example, if we have 3 elements [2, 10, 3], we sum the first two and the second two elements and obtain {2+10, 10+3} = {12, 13}, then we sum again all adjacent elements and obtain {12+13} = {25}.
function condenseArrayToNumber(array) {

    let newArray = [];

    for (element of array) {
        newArray.push(element);
    }
    //console.log(newArray);

    while (newArray.length > 1) {
        let tempArray = [];
        for (let i = 0; i < newArray.length - 1; i++) {
            tempArray[i] = newArray[i] + newArray[i + 1];
        }
        newArray = tempArray;
    }
    console.log(newArray.join());
}
condenseArrayToNumber([5, 0, 4, 1, 2]);