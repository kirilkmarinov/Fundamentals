// Write a function that receives an array of integers and an array of string commands and executes them over the array. The commands are as follows:
// •	add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
// •	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
// •	contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
// •	remove <index> – removes the element at the specified index.
// •	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
// o	For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
// •	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
// o	For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
// •	print – stop receiving more commands and print the last state of the array in the following format:
//          `[ {element1}, {element2}, …elementN} ]`
//   Note: The elements in the array must be joined by comma and space (, ).

//   Examples:
// Input	Output
// [1, 2, 4, 5, 6, 7],
// ['add 1 8', 'contains 1', 'contains 3', 'print']	                        0
//                                                                             -1
//                                                                             [ 1, 8, 2, 4, 5, 6, 7 ]
// [1, 2, 3, 4, 5],
// ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']	    -1
//                                                                             [ 2, 3, 5, 9, 8, 7, 6, 5, 1 ]


function arrayManipulator(nums, commands) {

    for (let i = 0; i < commands.length; i++) {
        let currentValues = commands[i].split(' ');
        //console.log(currentValues);
        let currentCommand = currentValues.shift();
        //console.log(currentCommand);
        currentValues = currentValues.map(Number);
        //console.log(currentValues);
        let sumPairs = 0;
        let pairsOfSumNums = [];

        switch (currentCommand) {
            case 'add':
                //nums.splice(currentValues[0], 0, currentValues[1]);
                let indexToAdd = currentValues[0];
                let elementToAdd = currentValues[1];
                nums.splice(indexToAdd, 0, elementToAdd);
                break;
            case 'addMany':
                let indexToAddMany = currentValues.shift();
                nums.splice(indexToAddMany, 0, ...currentValues);
                break;
            case 'contains':
                console.log(nums.indexOf(currentValues[0]));
                break;
            case 'remove':
                let indexToRemove = currentValues[0];
                nums.splice(indexToRemove, 1);
                break;
            case 'shift':
                for (let i = 0; i < currentValues[0]; i++) {
                    nums.push(nums.shift());
                }
                break;
            case 'sumPairs':
                if (nums.length % 2 !== 0) {
                    nums.push(0);
                }
                for (let j = 0; j < nums.length; j += 2) {                    
                    sumPairs = nums[j] + nums[j + 1];
                    pairsOfSumNums.push(sumPairs);
                    
                }
                //nums = pairsOfSumNums;
                nums = [...pairsOfSumNums];
                break;
            case 'print':
                console.log(`[ ${nums.join(', ')} ]`);
                break;
        }
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
);
// arrayManipulator([1, 2, 4, 5, 6, 7],
// ['add 1 8', 'contains 1', 'contains 3', 'print']
// );