// Write a function that manipulates an array of numbers. 
// •	Add {number}: add a number to the end of the array
// •	Remove {number}: remove all occurrences of a particular number from the array
// •	RemoveAt {index}: removes number at a given index
// •	Insert {number} {index}: inserts a number at a given index
// Note: All the indices will be valid!
// The input comes as an array of strings. The first element will be a string containing the array to manipulate. Every other command you receive will also be a string.
// The output is the manipulated array printed on the console on a single line, separated by space.
// Example
// Input	                    Output
// ['4 19 2 53 6 43',
// 'Add 3',
// 'Remove 2',
// 'RemoveAt 1',
// 'Insert 8 3']	            4 53 6 8 43 3

// ['6 12 2 65 6 42',
// 'Add 8',
// 'Remove 12',
// 'RemoveAt 3',
// 'Insert 6 2']	            6 2 6 65 42 8


function arrayManipulations(input) {

    let array = input.shift().split(' ').map(Number);
    console.log(array);

    for (let i = 0; i < input.length; i++) {
        let [command, first, second] = input[i].split(' ');
        //console.log(command, first, second);
        first = Number(first);
        second = Number(second);

        switch (command) {
            case 'Add': add(first, second);
                break;
            case 'Remove': remove(first, second);
                break;
            case 'RemoveAt': removeAt(first, second);
                break;
            case 'Insert': insert(second, first)
                break;
        }
    }
    console.log(array.join(' '));


    function add(element) {
        array.push(element);
    }
    function remove(num) {
        array = array.filter(element => element !== num);
    }
    function removeAt(index) {
        array.splice(index, 1);
    }
    function insert(index, num) {
        array.splice(index, 0, num);
    }
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);