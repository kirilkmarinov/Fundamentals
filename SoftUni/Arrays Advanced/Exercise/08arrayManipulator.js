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


function manipulator(arrayOfIntegers, arrayOfCommands) {

    for (let i = 0; i < arrayOfCommands.length; i++) {
        let commandLine = arrayOfCommands[i].split(' ');
        //console.log(commandLine);
        let command = commandLine.shift();
        //console.log(command);
        commandLine = commandLine.map(Number);
        //console.log(commandLine);
        let sumOfPairs = 0;
        let sumOfPairsArray = [];

        switch (command) {
            case 'add':
                arrayOfIntegers.splice(commandLine[0], 0, commandLine[1]);
                break;
            case 'addMany':
                let addManyIndex = commandLine.shift();
                arrayOfIntegers.splice(addManyIndex, 0, ...commandLine);
                break;
            case 'contains':
                console.log(arrayOfIntegers.indexOf(commandLine[0]));
                break;
            case 'remove':
                arrayOfIntegers.splice(commandLine[0], 1);
                break;
            case 'shift':
                for (let k = 0; k < commandLine[0]; k++) {
                    arrayOfIntegers.push(arrayOfIntegers.shift());
                }
                break;
            case 'sumPairs':
                if (arrayOfIntegers.length % 2 !== 0) {
                    arrayOfIntegers.push(0);
                }
                for (let x = 0; x < arrayOfIntegers.length; x += 2) {
                    sumOfPairs = arrayOfIntegers[x] + arrayOfIntegers[x + 1];
                    sumOfPairsArray.push(sumOfPairs);
                }
                arrayOfIntegers = [...sumOfPairsArray];
                break;
            case 'print':
                console.log(`[ ${arrayOfIntegers.join(', ')} ]`);
                break;
        }
    }
    //console.log(arrayOfIntegers);
}
manipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
);